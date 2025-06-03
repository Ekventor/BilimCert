from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils import timezone


class UserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError("Поле email обязательно")
        if not username:
            raise ValueError("Поле username обязательно")

        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_active", True)
        extra_fields.setdefault("is_superuser", True)

        return self.create_user(email, username, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    user_id = models.BigAutoField(primary_key=True)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=64, unique=True)
    password = models.CharField(max_length=256)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = UserManager()

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email"]

    def __str__(self):
        return self.username


# Form Models for BilimCert

class ContactForm(models.Model):
    """Contact form submissions"""
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
        ('rejected', 'Rejected'),
    ]

    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    subject = models.CharField(max_length=500)
    message = models.TextField()
    department = models.CharField(max_length=100, blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(default=timezone.now)
    processed_at = models.DateTimeField(blank=True, null=True)
    processed_by = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Contact Form'
        verbose_name_plural = 'Contact Forms'

    def __str__(self):
        return f"{self.name} - {self.subject[:50]}"


class Question(models.Model):
    """User questions with public answers"""
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('answered', 'Answered'),
        ('rejected', 'Rejected'),
    ]

    CATEGORY_CHOICES = [
        ('general', 'General'),
        ('accreditation', 'Accreditation'),
        ('recognition', 'Recognition'),
        ('bologna', 'Bologna Process'),
        ('technical', 'Technical'),
        ('other', 'Other'),
    ]

    name = models.CharField(max_length=255)
    email = models.EmailField()
    subject = models.CharField(max_length=500)
    question = models.TextField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='general')
    answer = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    is_public = models.BooleanField(default=True)
    helpful_votes = models.PositiveIntegerField(default=0)
    not_helpful_votes = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(default=timezone.now)
    answered_at = models.DateTimeField(blank=True, null=True)
    answered_by = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Question'
        verbose_name_plural = 'Questions'

    def __str__(self):
        return f"{self.name} - {self.subject[:50]}"


class Application(models.Model):
    """General application submissions"""
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
        ('rejected', 'Rejected'),
    ]

    APPLICATION_TYPE_CHOICES = [
        ('accreditation', 'Accreditation'),
        ('recognition', 'Recognition'),
        ('partnership', 'Partnership'),
        ('other', 'Other'),
    ]

    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    application_type = models.CharField(max_length=50, choices=APPLICATION_TYPE_CHOICES)
    institution = models.CharField(max_length=500, blank=True, null=True)
    position = models.CharField(max_length=255, blank=True, null=True)
    experience = models.TextField(blank=True, null=True)
    motivation = models.TextField(blank=True, null=True)
    goals = models.TextField(blank=True, null=True)
    additional_info = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(default=timezone.now)
    processed_at = models.DateTimeField(blank=True, null=True)
    processed_by = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Application'
        verbose_name_plural = 'Applications'

    def __str__(self):
        return f"{self.full_name} - {self.application_type}"


class Partnership(models.Model):
    """Partnership application submissions"""
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
        ('rejected', 'Rejected'),
    ]

    PARTNERSHIP_TYPE_CHOICES = [
        ('academic', 'Academic Partnership'),
        ('research', 'Research Collaboration'),
        ('accreditation', 'Accreditation Partnership'),
        ('technical', 'Technical Cooperation'),
        ('other', 'Other'),
    ]

    # Organization Info
    organization_name = models.CharField(max_length=500)
    organization_type = models.CharField(max_length=100)
    website = models.URLField(blank=True, null=True)
    description = models.TextField()
    established_year = models.CharField(max_length=4, blank=True, null=True)
    employee_count = models.CharField(max_length=50, blank=True, null=True)
    annual_revenue = models.CharField(max_length=100, blank=True, null=True)

    # Contact Info
    contact_person = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.TextField()

    # Partnership Details
    partnership_type = models.CharField(max_length=50, choices=PARTNERSHIP_TYPE_CHOICES)
    interests = models.JSONField(default=list, blank=True)  # Store as JSON array
    experience = models.TextField()
    proposal = models.TextField()

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(default=timezone.now)
    processed_at = models.DateTimeField(blank=True, null=True)
    processed_by = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Partnership'
        verbose_name_plural = 'Partnerships'

    def __str__(self):
        return f"{self.organization_name} - {self.partnership_type}"


class QuestionVote(models.Model):
    """Track votes on questions"""
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='votes')
    ip_address = models.GenericIPAddressField()
    helpful = models.BooleanField()  # True for helpful, False for not helpful
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        unique_together = ['question', 'ip_address']  # One vote per IP per question
        verbose_name = 'Question Vote'
        verbose_name_plural = 'Question Votes'

    def __str__(self):
        vote_type = "Helpful" if self.helpful else "Not Helpful"
        return f"{self.question.subject[:30]} - {vote_type}"
