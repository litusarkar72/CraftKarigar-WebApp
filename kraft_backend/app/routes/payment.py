import razorpay
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.cart import Cart
from app.models.order import Order
from app.models.order_item import OrderItem
from app.models.product import Product
from app.utils.auth import get_current_user
import os

router = APIRouter(prefix="/payment", tags=["Payment"])

client = razorpay.Client(auth=(
    os.getenv("RAZORPAY_KEY"),
    os.getenv("RAZORPAY_SECRET")
))

@router.post("/verify")
def verify_payment(
    razorpay_payment_id: str,
    razorpay_order_id: str,
    razorpay_signature: str,
    user=Depends(get_current_user),
    db: Session = Depends(get_db)
):
    try:
        client.utility.verify_payment_signature({
            "razorpay_payment_id": razorpay_payment_id,
            "razorpay_order_id": razorpay_order_id,
            "razorpay_signature": razorpay_signature
        })
    except:
        raise HTTPException(status_code=400, detail="Payment verification failed")

    cart_items = db.query(Cart).filter(Cart.user_id == user["user_id"]).all()

    total = 0
    for item in cart_items:
        product = db.query(Product).filter(Product.id == item.product_id).first()
        total += product.price * item.quantity

    order = Order(
        user_id=user["user_id"],
        total_amount=total,
        payment_status="PAID"
    )
    db.add(order)
    db.commit()
    db.refresh(order)

    for item in cart_items:
        product = db.query(Product).filter(Product.id == item.product_id).first()

        order_item = OrderItem(
            order_id=order.id,
            product_id=item.product_id,
            quantity=item.quantity,
            price=product.price
        )

        product.stock -= item.quantity
        db.add(order_item)
        db.delete(item)

    db.commit()

    return {"message": "Order placed successfully", "order_id": order.id}
