from django.contrib import admin
from .models import Book

# Register your models here.

class BookAdmin(admin.ModelAdmin):
    list_display = ['user','title', 'author', 'publication_date', 'genre','description']

admin.site.register(Book, BookAdmin)