from django.urls import path

from . import views

urlpatterns = [
    path("register/", views.UserCreateAPIView.as_view()),
    path("token-obtain/", views.CustomTokenObtainPairView.as_view()),
    path("token-refresh/", views.CustomTokenRefreshView.as_view()),
    path("get-user/", views.get_user),
]
