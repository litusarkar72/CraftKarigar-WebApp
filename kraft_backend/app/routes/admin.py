from fastapi import APIRouter, Depends, UploadFile, File, Form, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from typing import List
from app.models.product import Product
from app.models.video import Video
from app.utils.auth import get_current_user
from app.utils.upload import upload_images
from app.utils.video_upload import upload_videos



router = APIRouter(prefix="/admin", tags=["Admin"])

@router.post("/product")
def add_product(
    name: str = Form(...),
    description: str = Form(...),
    price: float = Form(...),
    category: str = Form(...),
    stock: int = Form(...),
    images: List[UploadFile] = File(...),
    user=Depends(get_current_user),
    db: Session = Depends(get_db)
):
    if user["role"] != "admin":
        raise HTTPException(status_code=403, detail="Admin only")

    if len(images) > 5:
        raise HTTPException(status_code=400, detail="Max 5 images allowed")

    image_urls = upload_images(images)

    product = Product(
        name=name,
        description=description,
        price=price,
        category=category,
        stock=stock,
        image_urls=image_urls
    )

    db.add(product)
    db.commit()

    return {
        "message": "Product created successfully",
        "images": image_urls
    }

@router.post("/videos")
def upload_videos_api(
    title: str = Form(...),
    videos: List[UploadFile] = File(...),
    user=Depends(get_current_user),
    db: Session = Depends(get_db)
):
    if user["role"] != "admin":
        raise HTTPException(status_code=403, detail="Admin only")

    if len(videos) > 3:
        raise HTTPException(status_code=400, detail="Max 3 videos allowed")

    video_urls = upload_videos(videos)

    video_entry = Video(
        title=title,
        video_urls=video_urls
    )

    db.add(video_entry)
    db.commit()

    return {
        "message": "Videos uploaded successfully",
        "videos": video_urls
    }
