import cloudinary.uploader

def upload_images(files):
    image_urls = []

    for file in files:
        result = cloudinary.uploader.upload(
            file.file,
            folder="handicraft/products"
        )
        image_urls.append(result["secure_url"])

    return image_urls
