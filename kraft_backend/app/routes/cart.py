from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.cart import Cart

router = APIRouter(prefix="/cart", tags=["Cart"])

@router.post("/add")
def add_to_cart(user_id: str, product_id: str, qty: int, db: Session = Depends(get_db)):
    cart = Cart(user_id=user_id, product_id=product_id, quantity=qty)
    db.add(cart)
    db.commit()
    return {"message": "Added to cart"}

@router.get("/")
def view_cart(user_id: str, db: Session = Depends(get_db)):
    return db.query(Cart).filter(Cart.user_id == user_id).all()
