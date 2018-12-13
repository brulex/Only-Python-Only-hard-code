from django.http import HttpResponse
from django.views import View
from rest_framework import generics

from .models import Articles, Courses, Question
from .serializers import ArticleTitleSerializer, ArticleContentSerializer, CourseTitleSerializer, QuestionsSerializer
import json

# View of Lessons


class CheckAnswer(View):

    def get(self, request, *args, **kwargs):
        question_id = kwargs.get('question_id')
        answer_id = kwargs.get('answer_id')
        question_object = list(Question.objects.filter(id=question_id).values())[0]
        verified = 0
        if question_object['true_answer_id'] == answer_id:
            verified = 1
        response = {
            "verified": verified
        }
        return HttpResponse(json.dumps(response), content_type="application/json")


class ListOfAllLessonsView(generics.ListAPIView):
    """
    Provides a get method handler.
    """
    serializer_class = ArticleTitleSerializer
    queryset = Articles.objects.filter(course_id__isnull=True)


class SingleArticleViewById(generics.ListAPIView):
    """
    This view is using to display single article both courses and lessons.
    """
    serializer_class = ArticleContentSerializer

    def get_queryset(self):
        id = self.kwargs.get('article_id')

        if self.kwargs.get('course_id'):
            return Articles.objects.filter(id=id, course_id__isnull=False)
        else:
            return Articles.objects.filter(id=id, course_id__isnull=True)


# View of Courses


class ListOfAllCoursesView(generics.ListAPIView):
    serializer_class = CourseTitleSerializer
    queryset = Courses.objects.all()


class ListOfCourseArticles(generics.ListAPIView):
    serializer_class = ArticleTitleSerializer

    def get_queryset(self):
        course_id = self.kwargs.get('course_id')
        return Articles.objects.filter(course_id=course_id)


class ListOfAllQuestions(generics.ListAPIView):
    serializer_class = QuestionsSerializer

    def get_queryset(self):
        course_id = self.kwargs.get('course_id')
        return Question.objects.filter(course_id=course_id)
