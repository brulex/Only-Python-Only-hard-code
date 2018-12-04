from django.contrib import admin
from .models import Lessons, Courses

# Register your models here.
admin.site.register(Courses)
admin.site.register(Lessons)
