from django.urls import path
from .views import ListOfAllLessonsView, ListOfAllCoursesView, ListOfCourseArticles, SingleArticleViewById

urlpatterns = [
    path('lessons/', ListOfAllLessonsView.as_view(), name="lessons-all"),
    path('lessons/<int:article_id>/', SingleArticleViewById.as_view(), name="single-article-of-lessons"),

    path('courses/', ListOfAllCoursesView.as_view(), name="courses-all"),
    path('courses/<int:course_id>/', ListOfCourseArticles.as_view(), name="list-of-course-articles"),
    path('courses/<int:course_id>/<int:article_id>', SingleArticleViewById.as_view(), name="single-article-of-course")
]
