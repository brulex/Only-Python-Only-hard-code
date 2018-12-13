from django.urls import path
from .views import ListOfAllLessonsView, ListOfAllCoursesView, ListOfCourseArticles, SingleArticleViewById, ListOfAllQuestions, CheckAnswer

urlpatterns = [
    path('lessons/', ListOfAllLessonsView.as_view(), name="lessons-all"),
    path('lessons/<int:article_id>/', SingleArticleViewById.as_view(), name="single-article-of-lessons"),
    path('courses/', ListOfAllCoursesView.as_view(), name="courses-all"),
    path('courses/<int:course_id>/', ListOfCourseArticles.as_view(), name="list-of-course-articles"),
    path('courses/<int:course_id>/<int:article_id>', SingleArticleViewById.as_view(), name="single-article-of-course"),
    path('questions/<int:course_id>/', ListOfAllQuestions.as_view(), name="questions-all"),
    path('questions/check/<int:question_id>/<int:answer_id>/', CheckAnswer.as_view(), name="question-check")
]
