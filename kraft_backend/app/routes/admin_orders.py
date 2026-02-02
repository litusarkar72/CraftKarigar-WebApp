from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.order import Order
from app.utils.auth import get_current_user

router = APIRouter(prefix="/admin/orders", tags=["Admin Orders"])

@router.get("/")
def all_orders(
    user=Depends(get_current_user),
    db: Session = Depends(get_db)
):
    if user["role"] != "admin":
        raise HTTPException(status_code=403, detail="Admin only")

    return db.query(Order).all()
