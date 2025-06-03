from django.contrib import admin
from .models import User, ContactForm, Question, Application, Partnership, QuestionVote


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'is_staff', 'is_active')
    list_filter = ('is_staff', 'is_active')
    search_fields = ('username', 'email')


@admin.register(ContactForm)
class ContactFormAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'status', 'created_at')
    list_filter = ('status', 'department', 'created_at')
    search_fields = ('name', 'email', 'subject')
    readonly_fields = ('created_at',)
    date_hierarchy = 'created_at'


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('name', 'subject', 'category', 'status', 'is_public', 'helpful_votes', 'not_helpful_votes', 'created_at')
    list_filter = ('status', 'category', 'is_public', 'created_at')
    search_fields = ('name', 'email', 'subject', 'question')
    readonly_fields = ('created_at', 'helpful_votes', 'not_helpful_votes')
    date_hierarchy = 'created_at'

    fieldsets = (
        ('Question Info', {
            'fields': ('name', 'email', 'subject', 'question', 'category')
        }),
        ('Answer', {
            'fields': ('answer', 'status', 'is_public', 'answered_by', 'answered_at')
        }),
        ('Voting', {
            'fields': ('helpful_votes', 'not_helpful_votes'),
            'classes': ('collapse',)
        }),
        ('Timestamps', {
            'fields': ('created_at',),
            'classes': ('collapse',)
        })
    )


@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'application_type', 'status', 'created_at')
    list_filter = ('application_type', 'status', 'created_at')
    search_fields = ('full_name', 'email', 'institution')
    readonly_fields = ('created_at',)
    date_hierarchy = 'created_at'


@admin.register(Partnership)
class PartnershipAdmin(admin.ModelAdmin):
    list_display = ('organization_name', 'contact_person', 'partnership_type', 'status', 'created_at')
    list_filter = ('partnership_type', 'status', 'organization_type', 'created_at')
    search_fields = ('organization_name', 'contact_person', 'email')
    readonly_fields = ('created_at',)
    date_hierarchy = 'created_at'


@admin.register(QuestionVote)
class QuestionVoteAdmin(admin.ModelAdmin):
    list_display = ('question', 'helpful', 'ip_address', 'created_at')
    list_filter = ('helpful', 'created_at')
    readonly_fields = ('created_at',)
    date_hierarchy = 'created_at'
