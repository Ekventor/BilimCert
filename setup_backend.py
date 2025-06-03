#!/usr/bin/env python3
"""
Setup script for BilimCert Django Backend
This script installs dependencies and sets up the database
"""

import os
import sys
import subprocess
import django
from pathlib import Path

# Add the project directory to Python path
project_dir = Path(__file__).parent / 'BilimCert'
sys.path.insert(0, str(project_dir))

# Set Django settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'BilimCert.settings')

def run_command(command, cwd=None):
    """Run a shell command"""
    try:
        result = subprocess.run(command, shell=True, cwd=cwd, check=True, 
                              capture_output=True, text=True)
        print(f"✅ {command}")
        if result.stdout:
            print(result.stdout)
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ {command}")
        print(f"Error: {e.stderr}")
        return False

def main():
    print("🚀 Setting up BilimCert Django Backend...")
    
    # Change to backend directory
    backend_dir = Path(__file__).parent
    os.chdir(backend_dir)
    
    # Install dependencies
    print("\n📦 Installing Python dependencies...")
    if not run_command("pip install -r requirements.txt"):
        print("Failed to install dependencies")
        return False
    
    # Change to Django project directory
    django_dir = backend_dir / 'BilimCert'
    os.chdir(django_dir)
    
    # Setup Django
    django.setup()
    
    # Make migrations
    print("\n🔄 Creating database migrations...")
    if not run_command("python manage.py makemigrations"):
        print("Failed to create migrations")
        return False
    
    # Apply migrations
    print("\n🗄️ Applying database migrations...")
    if not run_command("python manage.py migrate"):
        print("Failed to apply migrations")
        return False
    
    # Create superuser (optional)
    print("\n👤 Creating superuser...")
    print("You can skip this step by pressing Ctrl+C")
    try:
        run_command("python manage.py createsuperuser")
    except KeyboardInterrupt:
        print("\nSkipped superuser creation")
    
    print("\n✅ Backend setup completed!")
    print("\n🚀 To start the development server, run:")
    print("cd backend/BilimCert")
    print("python manage.py runserver 8000")
    
    return True

if __name__ == "__main__":
    main()
