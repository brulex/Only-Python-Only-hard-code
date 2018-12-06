from django.urls import path
from .views import ListLessonsView, ListCoursesView, SingleLessonViewByLessonId, SingleLessonViewByCourseId

urlpatterns = [
    path('lessons/<int:lesson_id>/', SingleLessonViewByLessonId.as_view(), name="lessons-single"),
    path('courses/<int:course_id>/', SingleLessonViewByCourseId.as_view(), name="lessons-assigned-to-content"),
    path('lessons/', ListLessonsView.as_view(), name="lessons-all"),
    path('courses/', ListCoursesView.as_view(), name="courses-all")
]
