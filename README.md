# JWT Authentication Project

**JWT-based authentication** in a React and Django application.
It includes functionality for **user registration**, **login**, and **logout**,
using JSON Web Tokens (JWT) with HTTP-only cookie for the refresh token for
secure communication between the frontend and backend.

## Features

- **User Registration**
- **User Login**
- **JWT Authentication**
- **Refresh Tokens**
- **Logout**

## Technologies Used

- **Frontend**: 
  - React
  - Axios for API requests
  - React Router for navigation
  - Tailwind CSS for styling
  - `react-router-dom` for routing

- **Backend**: 
  - Django
  - Django REST Framework
  - Simple JWT for token-based authentication

## Setup

### 1. Backend Setup (Django)

1. Clone the repository for the backend (if it's separate) or navigate to your Django project.
2. Install the required dependencies:

cd backend:
```bash
pip install -r requirements.txt
```
```bash
python manage.py runserver 8001
cd frontend:
```
```bash
npm install
```
```bash
npm run dev
```
