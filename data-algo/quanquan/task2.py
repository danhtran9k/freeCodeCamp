from google import genai
from google.genai.types import HttpOptions, ModelContent, Part, UserContent

def analyze_bouquet_image(image_path: str):
    PROJECT_ID = str(os.environ.get("GOOGLE_CLOUD_PROJECT"))
    LOCATION = os.environ.get("GOOGLE_CLOUD_REGION", "global")

    # client = genai.Client(http_options=genai.HttpOptions(api_version="v1"))
    client = genai.Client(
        vertexai=True,
        project=PROJECT_ID,
        location=LOCATION,
        http_options=HttpOptions(api_version="v1")
    )

    chat = client.chats.create(model="gemini-2.0-flash-001")

    # Mở file ảnh và đọc binary
    with open(image_path, "rb") as f:
        image_bytes = f.read()

    # Tạo content: prompt text + image
    user_message = [
        Part.from_bytes(
            data=image_bytes,
            mime_type="image/jpeg",
        ),
        "generate birthday wishes based on the image",
    ]

    for chunk in chat.send_message_stream(user_message):
        if chunk.text:  # tránh in None
            print(chunk.text, end="", flush=True)

img_path="./image.jpeg"
analyze_bouquet_image(img_path)