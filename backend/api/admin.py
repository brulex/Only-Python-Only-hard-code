from django.contrib import admin
from .models import Articles, Courses, Question, Answer
from django.db import models
from django.forms import CheckboxSelectMultiple


class QuestionAdmin(admin.ModelAdmin):
    filter_horizontal = ('answers_list', )

# Register your models here.
admin.site.register(Courses)
admin.site.register(Articles)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Answer)

