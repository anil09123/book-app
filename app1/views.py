from django.shortcuts import render
from rest_framework import generics, viewsets, permissions
from .models import Book
from .serializers import BookSerializer, RegisterSerializer
from rest_framework.response import Response
from django.contrib.auth.models import User

def index(request):
    return render(request, 'index.html')

    
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Book.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class BookListCreateAPIView(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class BookDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [permissions.IsAuthenticated]

   