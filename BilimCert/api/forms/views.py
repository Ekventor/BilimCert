from ninja import Router
from django.http import HttpRequest
from django.core.mail import EmailMessage
from django.conf import settings
from django.utils import timezone
from django.db.models import Q
from http import HTTPStatus
import httpx
import json
from typing import List, Optional

from api.models import ContactForm, Question, Application, Partnership, QuestionVote
from .schemas import (
    ContactFormSchema, QuestionFormSchema, ApplicationFormSchema, 
    PartnershipFormSchema, QuestionVoteSchema, FormResponseSchema,
    QuestionListSchema, QuestionStatsSchema, PaginatedQuestionsSchema,
    AdminSubmissionSchema, AdminSubmissionsListSchema
)

router = Router(tags=["Forms"])

# Helper function to verify reCAPTCHA
async def verify_recaptcha(token: str) -> bool:
    """Verify reCAPTCHA token"""
    async with httpx.AsyncClient() as client:
        response = await client.post(
            "https://www.google.com/recaptcha/api/siteverify",
            data={
                "secret": settings.RECAPTCHA_PRIVATE_KEY,
                "response": token
            }
        )
    result = response.json()
    return result.get("success", False)


# Helper function to send email notification
def send_email_notification(subject: str, message: str, recipient_email: str = None):
    """Send email notification"""
    try:
        to_email = recipient_email or settings.EMAIL_HOST_USER
        email = EmailMessage(
            subject=f"[BilimCert] {subject}",
            body=message,
            from_email=settings.EMAIL_HOST_USER,
            to=[to_email]
        )
        email.send()
        return True
    except Exception as e:
        print(f"Email sending failed: {e}")
        return False


# Contact Form Endpoint
@router.post("/contact", response=FormResponseSchema, auth=None)
async def submit_contact_form(request: HttpRequest, data: ContactFormSchema):
    """Submit contact form"""
    
    # Verify reCAPTCHA
    if not await verify_recaptcha(data.recaptcha_token):
        return FormResponseSchema(
            success=False,
            message="reCAPTCHA verification failed"
        )
    
    try:
        # Save to database
        contact = ContactForm.objects.create(
            name=data.name,
            email=data.email,
            phone=data.phone,
            subject=data.subject,
            message=data.message,
            department=data.department
        )
        
        # Send email notification
        email_message = f"""
New contact form submission:

Name: {data.name}
Email: {data.email}
Phone: {data.phone or 'Not provided'}
Department: {data.department or 'General'}
Subject: {data.subject}

Message:
{data.message}

Submission ID: {contact.id}
Submitted at: {contact.created_at}
        """
        
        send_email_notification(
            subject=f"Contact Form: {data.subject}",
            message=email_message
        )
        
        return FormResponseSchema(
            success=True,
            message="Your message has been sent successfully!",
            id=contact.id
        )
        
    except Exception as e:
        return FormResponseSchema(
            success=False,
            message="Failed to submit contact form. Please try again."
        )


# Question Form Endpoint
@router.post("/questions", response=FormResponseSchema, auth=None)
async def submit_question_form(request: HttpRequest, data: QuestionFormSchema):
    """Submit question form"""
    
    # Verify reCAPTCHA
    if not await verify_recaptcha(data.recaptcha_token):
        return FormResponseSchema(
            success=False,
            message="reCAPTCHA verification failed"
        )
    
    try:
        # Save to database
        question = Question.objects.create(
            name=data.name,
            email=data.email,
            subject=data.subject,
            question=data.question,
            category=data.category
        )
        
        # Send email notification
        email_message = f"""
New question submitted:

Name: {data.name}
Email: {data.email}
Category: {data.category}
Subject: {data.subject}

Question:
{data.question}

Question ID: {question.id}
Submitted at: {question.created_at}
        """
        
        send_email_notification(
            subject=f"New Question: {data.subject}",
            message=email_message
        )
        
        return FormResponseSchema(
            success=True,
            message="Your question has been submitted successfully!",
            id=question.id
        )
        
    except Exception as e:
        return FormResponseSchema(
            success=False,
            message="Failed to submit question. Please try again."
        )


# Get Public Questions
@router.get("/questions/public", response=PaginatedQuestionsSchema, auth=None)
def get_public_questions(
    request: HttpRequest,
    page: int = 1,
    limit: int = 10,
    category: str = None,
    status: str = None,
    search: str = None
):
    """Get public questions with answers"""

    # Build query
    queryset = Question.objects.filter(is_public=True, status='answered')

    if category and category != 'all':
        queryset = queryset.filter(category=category)

    if status and status != 'all':
        queryset = queryset.filter(status=status)

    if search:
        queryset = queryset.filter(
            Q(subject__icontains=search) |
            Q(question__icontains=search) |
            Q(answer__icontains=search)
        )

    # Pagination
    total = queryset.count()
    offset = (page - 1) * limit
    questions = queryset[offset:offset + limit]

    # Convert to schema
    question_list = [
        QuestionListSchema(
            id=q.id,
            name=q.name,
            subject=q.subject,
            question=q.question,
            answer=q.answer,
            category=q.category,
            status=q.status,
            helpful_votes=q.helpful_votes,
            not_helpful_votes=q.not_helpful_votes,
            created_at=q.created_at,
            answered_at=q.answered_at
        ) for q in questions
    ]

    return PaginatedQuestionsSchema(
        questions=question_list,
        total=total,
        page=page,
        limit=limit,
        total_pages=(total + limit - 1) // limit
    )


# Vote on Question
@router.post("/questions/{question_id}/vote", response=FormResponseSchema, auth=None)
def vote_on_question(request: HttpRequest, question_id: int, data: QuestionVoteSchema):
    """Vote on a question (helpful/not helpful)"""

    try:
        question = Question.objects.get(id=question_id, is_public=True, status='answered')

        # Get client IP
        ip_address = request.META.get('HTTP_X_FORWARDED_FOR', request.META.get('REMOTE_ADDR', ''))
        if ip_address:
            ip_address = ip_address.split(',')[0].strip()

        # Check if already voted
        existing_vote = QuestionVote.objects.filter(
            question=question,
            ip_address=ip_address
        ).first()

        if existing_vote:
            return FormResponseSchema(
                success=False,
                message="You have already voted on this question"
            )

        # Create vote
        QuestionVote.objects.create(
            question=question,
            ip_address=ip_address,
            helpful=data.helpful
        )

        # Update question vote counts
        if data.helpful:
            question.helpful_votes += 1
        else:
            question.not_helpful_votes += 1
        question.save()

        return FormResponseSchema(
            success=True,
            message="Thank you for your feedback!",
            id=question.id
        )

    except Question.DoesNotExist:
        return FormResponseSchema(
            success=False,
            message="Question not found"
        )
    except Exception as e:
        return FormResponseSchema(
            success=False,
            message="Failed to submit vote"
        )


# Application Form Endpoint
@router.post("/applications", response=FormResponseSchema, auth=None)
async def submit_application_form(request: HttpRequest, data: ApplicationFormSchema):
    """Submit application form"""

    # Verify reCAPTCHA
    if not await verify_recaptcha(data.recaptcha_token):
        return FormResponseSchema(
            success=False,
            message="reCAPTCHA verification failed"
        )

    try:
        # Save to database
        application = Application.objects.create(
            full_name=data.full_name,
            email=data.email,
            phone=data.phone,
            date_of_birth=data.date_of_birth,
            application_type=data.application_type,
            institution=data.institution,
            position=data.position,
            experience=data.experience,
            motivation=data.motivation,
            goals=data.goals,
            additional_info=data.additional_info
        )

        # Send email notification
        email_message = f"""
New application submitted:

Name: {data.full_name}
Email: {data.email}
Phone: {data.phone or 'Not provided'}
Date of Birth: {data.date_of_birth or 'Not provided'}
Application Type: {data.application_type}
Institution: {data.institution or 'Not provided'}
Position: {data.position or 'Not provided'}

Experience:
{data.experience or 'Not provided'}

Motivation:
{data.motivation or 'Not provided'}

Goals:
{data.goals or 'Not provided'}

Additional Information:
{data.additional_info or 'Not provided'}

Application ID: {application.id}
Submitted at: {application.created_at}
        """

        send_email_notification(
            subject=f"New Application: {data.application_type}",
            message=email_message
        )

        return FormResponseSchema(
            success=True,
            message="Your application has been submitted successfully!",
            id=application.id
        )

    except Exception as e:
        return FormResponseSchema(
            success=False,
            message="Failed to submit application. Please try again."
        )


# Partnership Form Endpoint
@router.post("/partnerships", response=FormResponseSchema, auth=None)
async def submit_partnership_form(request: HttpRequest, data: PartnershipFormSchema):
    """Submit partnership form"""

    # Verify reCAPTCHA
    if not await verify_recaptcha(data.recaptcha_token):
        return FormResponseSchema(
            success=False,
            message="reCAPTCHA verification failed"
        )

    try:
        # Save to database
        partnership = Partnership.objects.create(
            organization_name=data.organization_name,
            organization_type=data.organization_type,
            website=data.website,
            description=data.description,
            established_year=data.established_year,
            employee_count=data.employee_count,
            annual_revenue=data.annual_revenue,
            contact_person=data.contact_person,
            position=data.contact_position,
            email=data.contact_email,
            phone=data.contact_phone,
            address=data.address,
            partnership_type=data.partnership_type,
            interests=data.interests,
            experience=data.partnership_experience,
            proposal=data.proposal
        )

        # Send email notification
        email_message = f"""
New partnership application submitted:

Organization: {data.organization_name}
Type: {data.organization_type}
Website: {data.website or 'Not provided'}
Established: {data.established_year or 'Not provided'}
Employees: {data.employee_count or 'Not provided'}

Contact Person: {data.contact_person}
Position: {data.contact_position}
Email: {data.contact_email}
Phone: {data.contact_phone}

Partnership Type: {data.partnership_type}
Interests: {', '.join(data.interests) if data.interests else 'Not specified'}

Description:
{data.description}

Experience:
{data.partnership_experience}

Proposal:
{data.proposal}

Partnership ID: {partnership.id}
Submitted at: {partnership.created_at}
        """

        send_email_notification(
            subject=f"New Partnership Application: {data.organization_name}",
            message=email_message
        )

        return FormResponseSchema(
            success=True,
            message="Your partnership application has been submitted successfully!",
            id=partnership.id
        )

    except Exception as e:
        return FormResponseSchema(
            success=False,
            message="Failed to submit partnership application. Please try again."
        )


# Question Statistics
@router.get("/questions/stats", response=QuestionStatsSchema, auth=None)
def get_question_stats(request: HttpRequest):
    """Get question statistics"""

    total_questions = Question.objects.count()
    answered_questions = Question.objects.filter(status='answered').count()
    pending_questions = Question.objects.filter(status='pending').count()

    answer_rate = (answered_questions / total_questions * 100) if total_questions > 0 else 0

    # Category statistics
    categories = {}
    for category_code, category_name in Question.CATEGORY_CHOICES:
        count = Question.objects.filter(category=category_code).count()
        categories[category_code] = {
            'name': category_name,
            'count': count
        }

    return QuestionStatsSchema(
        total_questions=total_questions,
        answered_questions=answered_questions,
        pending_questions=pending_questions,
        answer_rate=round(answer_rate, 2),
        categories=categories
    )


# Question Categories
@router.get("/questions/categories", auth=None)
def get_question_categories(request: HttpRequest):
    """Get available question categories"""

    categories = [
        {'value': code, 'label': name}
        for code, name in Question.CATEGORY_CHOICES
    ]

    return {
        'success': True,
        'categories': categories
    }


# Application Status Check
@router.get("/applications/{application_id}/status", response=FormResponseSchema, auth=None)
def check_application_status(request: HttpRequest, application_id: int):
    """Check application status"""

    try:
        application = Application.objects.get(id=application_id)

        return {
            'success': True,
            'status': application.status,
            'created_at': application.created_at.isoformat(),
            'processed_at': application.processed_at.isoformat() if application.processed_at else None,
            'message': f"Application status: {application.get_status_display()}"
        }

    except Application.DoesNotExist:
        return FormResponseSchema(
            success=False,
            message="Application not found"
        )
