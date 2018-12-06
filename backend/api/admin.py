from django.contrib import admin
from .models import Articles, Courses

# Register your models here.
admin.site.register(Courses)
admin.site.register(Articles)
