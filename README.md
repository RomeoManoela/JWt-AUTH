# JWT Authentication Project

This project demonstrates how to implement **JWT-based authentication** in a React and Django application. It includes functionality for **user registration**, **login**, and **logout**, using JSON Web Tokens (JWT) for secure communication between the frontend and backend.

## Features

- **User Registration**: Users can create an account with their username and password.
- **User Login**: Users can log in to the application using their credentials.
- **JWT Authentication**: Uses JWT tokens for authentication and authorization.
- **Refresh Tokens**: Support for refreshing access tokens without requiring the user to log in again.
- **Logout**: Users can log out and invalidate their session.

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

```bash
pip install -r requirements.txt
