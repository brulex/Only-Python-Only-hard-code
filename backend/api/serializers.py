from rest_framework import serializers
from .models import Articles, Courses


# Serializer of Lessons

class ArticleTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articles
        fields = ("id", "title")


class ArticleContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articles
        fields = ("title", "content", "pub_date", "comment_id", "order_in_course")


# Serializer of Courses


class CourseTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = ("id", "name")
