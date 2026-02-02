import cloudinary.uploader

def upload_videos(files):
    video_urls = []

    for file in files:
        result = cloudinary.uploader.upload(
            file.file,
            resource_type="video",      # 🔥 VERY IMPORTANT
            folder="handicraft/videos"
        )
        video_urls.append(result["secure_url"])

    return video_urls
