from sqlalchemy import Column, String, Integer, Float, ForeignKey
from app.database import Base
import uuid

class OrderItem(Base):
    __tablename__ = "order_items"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    order_id = Column(String, ForeignKey("orders.id"))
    product_id = Column(String)
    quantity = Column(Integer)
    price = Column(Float)
