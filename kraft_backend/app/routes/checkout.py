from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.cart import Cart
from app.models.product import Product
from app.utils.auth import get_current_user

router = APIRouter(prefix="/checkout", tags=["Checkout"])

@router.post("/")
def checkout(
    user=Depends(get_current_user),
    db: Session = Depends(get_db)
):
    cart_items = db.query(Cart).filter(Cart.user_id == user["user_id"]).all()

    if not cart_items:
        raise HTTPException(status_code=400, detail="Cart is empty")

    total = 0
    for item in cart_items:
        product = db.query(Product).filter(Product.id == item.product_id).first()

        if not product or product.stock < item.quantity:
            raise HTTPException(status_code=400, detail="Product out of stock")

        total += product.price * item.quantity

    return {
        "total_amount": total,
        "message": "Proceed to payment"
    }
