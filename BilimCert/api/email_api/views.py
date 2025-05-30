from django.core.mail import EmailMessage
from ninja import Router, Form, File
from ninja.files import UploadedFile
from http import HTTPStatus
from django.conf import settings

router = Router(tags=["Email"])

@router.post("/send", auth=None)
def send_email(
    request,
    subject: str = Form(...),
    message: str = Form(...),
    to: str = Form(...),
    isFiles: bool = Form(False),
    file: UploadedFile = File(None),
):
    is_files = request.POST.get("isFiles", "").lower() == "true"
    to_list = [email.strip() for email in to.split(",") if email.strip()]
    print(request.FILES)
    email = EmailMessage(
        subject=subject,
        body=message,
        from_email=settings.EMAIL_HOST_USER,
        to=to_list
    )

    if is_files and file:
        email.attach(file.name, file.read(), file.content_type)

    try:
        email.send()
        return {"status": HTTPStatus.OK, "message": "Письмо отправлено"}
    except Exception as e:
        return {"status": HTTPStatus.INTERNAL_SERVER_ERROR, "message": str(e)}
