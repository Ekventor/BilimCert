from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from datetime import datetime, date


# Contact Form Schemas
class ContactFormSchema(BaseModel):
    name: str = Field(..., min_length=2, max_length=255)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=20)
    subject: str = Field(..., min_length=5, max_length=500)
    message: str = Field(..., min_length=20)
    department: Optional[str] = Field(None, max_length=100)
    recaptcha_token: str = Field(..., alias="recaptchaToken")


# Question Form Schemas
class QuestionFormSchema(BaseModel):
    name: str = Field(..., min_length=2, max_length=255)
    email: EmailStr
    subject: str = Field(..., min_length=5, max_length=500)
    question: str = Field(..., min_length=20)
    category: str = Field(default="general", max_length=50)
    recaptcha_token: str = Field(..., alias="recaptchaToken")


class QuestionVoteSchema(BaseModel):
    helpful: bool


# Application Form Schemas
class ApplicationFormSchema(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=255, alias="fullName")
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=20)
    date_of_birth: Optional[date] = Field(None, alias="dateOfBirth")
    application_type: str = Field(..., max_length=50, alias="applicationType")
    institution: Optional[str] = Field(None, max_length=500)
    position: Optional[str] = Field(None, max_length=255)
    experience: Optional[str] = None
    motivation: Optional[str] = None
    goals: Optional[str] = None
    additional_info: Optional[str] = Field(None, alias="additionalInfo")
    recaptcha_token: str = Field(..., alias="recaptchaToken")


# Partnership Form Schemas - Simplified for frontend compatibility
class PartnershipFormSchema(BaseModel):
    # Organization Info (flattened structure)
    organization_name: str = Field(..., min_length=2, max_length=500)
    organization_type: str = Field(..., max_length=100)
    website: Optional[str] = None
    description: str = Field(..., min_length=10)
    established_year: Optional[str] = Field(None, max_length=4)
    employee_count: Optional[str] = Field(None, max_length=50)
    annual_revenue: Optional[str] = Field(None, max_length=100)

    # Contact Info
    contact_person: str = Field(..., min_length=2, max_length=255)
    contact_position: str = Field(..., max_length=255)
    contact_email: EmailStr
    contact_phone: str = Field(..., max_length=20)
    address: str = Field(..., min_length=10)

    # Partnership Details
    partnership_type: str = Field(..., max_length=50)
    interests: List[str] = Field(default=[])
    partnership_experience: str = Field(..., min_length=10)
    proposal: str = Field(..., min_length=20)

    recaptcha_token: str = Field(..., alias="recaptchaToken")


# Response Schemas
class FormResponseSchema(BaseModel):
    success: bool
    message: str
    id: Optional[int] = None


class QuestionListSchema(BaseModel):
    id: int
    name: str
    subject: str
    question: str
    answer: Optional[str]
    category: str
    status: str
    helpful_votes: int
    not_helpful_votes: int
    created_at: datetime
    answered_at: Optional[datetime]


class QuestionStatsSchema(BaseModel):
    total_questions: int
    answered_questions: int
    pending_questions: int
    answer_rate: float
    categories: dict


class PaginatedQuestionsSchema(BaseModel):
    questions: List[QuestionListSchema]
    total: int
    page: int
    limit: int
    total_pages: int
    success: bool = True


# Admin Schemas
class AdminSubmissionSchema(BaseModel):
    id: int
    type: str
    name: str
    email: str
    subject: Optional[str]
    status: str
    created_at: datetime
    processed_at: Optional[datetime]
    processed_by: Optional[str]


class AdminSubmissionsListSchema(BaseModel):
    submissions: List[AdminSubmissionSchema]
    total: int
    page: int
    limit: int
    total_pages: int
    success: bool = True
