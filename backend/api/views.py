from django.contrib.auth.models import User
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .serializer import UserSerializer


class UserCreateAPIView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)


class CustomTokenObtainPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        res = super().post(request, *args, **kwargs)
        refresh_token = res.data["refresh"]
        res.set_cookie(
            key="refresh",
            value=refresh_token,
            httponly=True,
            secure=False,
            samesite="Lax",
            max_age=3600 * 24,
        )
        res.data.pop("refresh")
        return res


class CustomTokenRefreshView(TokenRefreshView):
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        refresh_token = request.COOKIES.get("refresh")
        request._full_data = {"refresh": refresh_token}
        return super().post(request, *args, **kwargs)
