from sqlalchemy import Column, String, Integer, Float, DateTime
from sqlalchemy.dialects.postgresql import ARRAY
from app.database import Base
import uuid
from datetime import datetime

class Product(Base):
    __tablename__ = "products"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column(String)
    description = Column(String)
    price = Column(Float)
    category = Column(String)
    stock = Column(Integer)
    image_urls = Column(ARRAY(String))
    created_at = Column(DateTime, default=datetime.utcnow)
