import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../services/course.service";
import {ArticleOrderIds, LessonContent} from "../models/models";
import {SiteNavigator} from "../site.navigator";

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
  courseLessonsList: LessonContent[];
  pageOrder: ArticleOrderIds;
  siteNavigator: SiteNavigator;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private router: Router) {
    this.siteNavigator = new SiteNavigator(router);
    this.courseLessonsList = [];
    this.pageOrder = {pageID: 1, nextPageID: -1, prevPageID: -1};
  }

  ngOnInit() {
    this.course_id = this.activatedRoute.snapshot.paramMap.get('course_id');
    this.content_id = this.activatedRoute.snapshot.paramMap.get('content_id');
    this.courseService.getCourseLessonContent(this.course_id, this.content_id).subscribe(value => {
      console.log(this.lessonPage = value[0].content);
      this.title = value[0].title;
      this.lessonPage = value[0].content;
      this.comment_id = value[0].comment_id;
      console.log(this.lessonPage, this.comment_id);
    }, error => {
      alert(JSON.parse(error));
    });

    this.courseService.getCourseContent(this.course_id).subscribe(value => {
        value.forEach(element => {
          this.courseLessonsList.push
          ({
            content_id: element.id,
            order_in_course: element.order_in_course
          });
          if (element.id == this.content_id) {
            this.pageOrder.pageID = element.order_in_course;
          }
        });

        value.forEach(element => {
          if (this.pageOrder.pageID - 1 === element.order_in_course) {
            this.pageOrder.prevPageID = element.id;
          }
          if (this.pageOrder.pageID + 1 === element.order_in_course) {
            this.pageOrder.nextPageID = element.id;
          }
        });
        console.log(this.courseLessonsList);
        console.log(this.pageOrder);
      }, error => {
        alert(error);
      }
    );
  }

  onNextClick() {
    let nextid = 0;
    this.courseLessonsList.forEach(value => {
      if (value.order_in_course == this.pageOrder.pageID + 1) {
        nextid = value.content_id;
      }
    });
    console.log(Number(this.course_id), " ", nextid);

    this.siteNavigator.goCourseLesson(Number(this.course_id), nextid);
    window.location.reload();
  }

  onPrevClick() {
    let nextid = 0;
    this.courseLessonsList.forEach(value => {
      if (value.order_in_course == this.pageOrder.pageID - 1) {
        nextid = value.content_id;
      }
    });
    console.log(Number(this.course_id), " ", nextid);
    this.siteNavigator.goCourseLesson(Number(this.course_id), nextid);

    window.location.reload();
  }

}
