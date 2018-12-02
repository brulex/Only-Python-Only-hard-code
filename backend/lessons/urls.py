from django.urls import path
from .views import ListLessonsView


urlpatterns = [
    path('', ListLessonsView.as_view(), name="lessons-all")
]

