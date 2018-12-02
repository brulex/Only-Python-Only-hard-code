from django.urls import path
from .views import ListLessonsView, SingleLessonView

urlpatterns = [
    path('<int:id>/', SingleLessonView.as_view(), name="lessons-single"),
    path('', ListLessonsView.as_view(), name="lessons-all")
]

