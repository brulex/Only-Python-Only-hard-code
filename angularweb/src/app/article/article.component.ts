import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../services/course.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css', '../app.component.css']
})
export class ArticleComponent implements OnInit {

  title: string;
  lessonPage: string;
  course_id: string;
  content_id: string;
  comment_id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService) {
  }

  ngOnInit() {
    this.course_id = this.activatedRoute.snapshot.paramMap.get('course_id');
    this.content_id = this.activatedRoute.snapshot.paramMap.get('content_id');
    this.courseService.getCourseLessonContent(this.course_id, this.content_id).subscribe(value => {
      console.log(this.lessonPage = value[0].content);
      this.title = value[0].title;
      this.lessonPage = value[0].content;
      this.comment_id = '/' + value[0].comment_id;
      console.log(this.lessonPage, this.comment_id);
    }, error => {
      alert(JSON.parse(error));
    });
  }

}
