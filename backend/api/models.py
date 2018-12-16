from django.db import models
import uuid


def generate_comment_id():
    return str(uuid.uuid4()).replace('-', '')


class Courses(models.Model):

    name = models.CharField(
        max_length=255,
        null=False
    )

    def __str__(self):
        return self.name


class Articles(models.Model):

    title = models.CharField(
        max_length=255,
        null=False
    )

    content = models.TextField(
        null=False
    )

    pub_date = models.DateField(
        verbose_name="publication date",
        null=False
    )

    comment_id = models.CharField(
        max_length=60,
        null=False,
        default=generate_comment_id(),
        editable=False
    )

    order_in_course = models.IntegerField(
        null=True,
        blank=True
    )

    course_id = models.ForeignKey(
        to=Courses,
        on_delete=models.PROTECT,
        null=True,
        blank=True
    )

    def __str__(self):
        return self.title


class Answer(models.Model):

    answer = models.CharField(
        max_length=255,
        null=False
    )

    def __str__(self):
        return self.answer


class Question(models.Model):

    question = models.TextField(
        max_length=1000,
        null=False
    )

    answers_list = models.ManyToManyField(Answer)

    true_answer = models.ForeignKey(
        to=Answer,
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="true_answer"
    )

    course_id = models.ForeignKey(
        to=Courses,
        on_delete=models.PROTECT,
        null=False,
        blank=False
    )

    def __str__(self):
        return self.question
