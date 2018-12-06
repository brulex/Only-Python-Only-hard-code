from rest_framework import generics
from .models import Articles, Courses
from .serializers import ArticleTitleSerializer, ArticleContentSerializer, CourseTitleSerializer


# View of Lessons


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
