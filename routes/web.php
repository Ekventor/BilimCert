<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/HomePage');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About/AboutPage');
})->name('about');

Route::get('/about/center', function () {
    return Inertia::render('About/AboutCenterPage');
})->name('about.center');

Route::get('/accreditation', function () {
    return Inertia::render('Accreditation/AccreditationPage');
})->name('accreditation');

Route::get('/bologna-process', function () {
    return Inertia::render('BolognaProcess/BolognaProcessPage');
})->name('bologna-process');

Route::get('/contacts', function () {
    return Inertia::render('Contacts/ContactsPage');
})->name('contacts');

Route::get('/news', function () {
    return Inertia::render('News/NewsPage');
})->name('news');

Route::get('/news/{slug}', function (string $slug) {
    return Inertia::render('News/NewsArticlePage', [
        'slug' => $slug
    ]);
})->name('news.article');

Route::get('/recognition', function () {
    return Inertia::render('Recognition/RecognitionPage');
})->name('recognition');

Route::get('/students', function () {
    return Inertia::render('Students/StudentsPage');
})->name('students');

Route::get('/students/career', function () {
    return Inertia::render('Students/CareerPage');
})->name('students.career');

Route::get('/students/internships', function () {
    return Inertia::render('Students/InternshipsPage');
})->name('students.internships');

Route::get('/students/skills', function () {
    return Inertia::render('Students/SkillsPage');
})->name('students.skills');

Route::get('/universities', function () {
    return Inertia::render('Universities/UniversitiesPage');
})->name('universities');

Route::get('/universities/research', function () {
    return Inertia::render('Universities/ResearchPage');
})->name('universities.research');

Route::get('/universities/curriculum', function () {
    return Inertia::render('Universities/CurriculumPage');
})->name('universities.curriculum');

Route::get('/universities/partnerships', function () {
    return Inertia::render('Universities/PartnershipsPage');
})->name('universities.partnerships');

Route::get('/universities/finder', function () {
    return Inertia::render('Universities/UniversityFinderPage');
})->name('universities.finder');

Route::get('/employers', function () {
    return Inertia::render('Employers/EmployersPage');
})->name('employers');

Route::get('/employers/recruitment', function () {
    return Inertia::render('Employers/RecruitmentPage');
})->name('employers.recruitment');

Route::get('/employers/development', function () {
    return Inertia::render('Employers/DevelopmentPage');
})->name('employers.development');

Route::get('/employers/partnerships', function () {
    return Inertia::render('Employers/PartnershipsPage');
})->name('employers.partnerships');

Route::get('/application', function () {
    return Inertia::render('Application/ApplicationPage');
})->name('application');

Route::get('/faq', function () {
    return Inertia::render('FAQ/FAQPage');
})->name('faq');

Route::get('/application-status', function () {
    return Inertia::render('ApplicationStatus/ApplicationStatusPage');
})->name('application-status');

Route::get('/partnership/application', function () {
    return Inertia::render('Partnership/PartnershipApplicationPage');
})->name('partnership.application');

Route::get('/privacy-policy', function () {
    return Inertia::render('Legal/PrivacyPolicyPage');
})->name('privacy-policy');

Route::get('/terms', function () {
    return Inertia::render('Legal/TermsPage');
})->name('terms');

Route::get('/accessibility-settings', function () {
    return Inertia::render('Accessibility/AccessibilitySettingsPage');
})->name('accessibility-settings');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
