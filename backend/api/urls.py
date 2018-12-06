from django.urls import path
from .views import ListLessonsView, ListCoursesView, SingleLessonViewByLessonId, ListOfCourseArticles

urlpatterns = [
    path('lessons/<int:lesson_id>/', SingleLessonViewByLessonId.as_view(), name="lessons-single"),
    path('courses/<int:course_id>/', ListOfCourseArticles.as_view(), name="list-of-course-articles"),

    path('lessons/', ListLessonsView.as_view(), name="lessons-all"),
    path('courses/', ListCoursesView.as_view(), name="courses-all")
]
