from rest_framework import serializers

from .models import Articles, Courses, Question, Answer


# Serializer of Lessons

class ArticleTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articles
        fields = ("id", "title", "order_in_course")


class ArticleContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articles
        fields = ("title", "content", "pub_date", "comment_id", "order_in_course")


# Serializer of Courses


class CourseTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = ("id", "name")


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ("id", "answer")


class QuestionsSerializer(serializers.ModelSerializer):
    answers_list = AnswerSerializer(read_only=True, many=True)

    class Meta:
        model = Question
        fields = ("id", "question", "answers_list", "true_answer", "course_id")
