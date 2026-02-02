from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.product import Product

router = APIRouter(prefix="/products", tags=["Products"])

@router.get("/")
def get_products(
    search: str = "",
    category: str = "",
    min_price: float = 0,
    max_price: float = 100000,
    db: Session = Depends(get_db)
):
    query = db.query(Product)

    if search:
        query = query.filter(Product.name.ilike(f"%{search}%"))
    if category:
        query = query.filter(Product.category == category)

    query = query.filter(Product.price.between(min_price, max_price))

    return query.all()
