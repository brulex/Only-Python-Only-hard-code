import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../services/course.service';
import {Model} from '../models/model';
import {SiteNavigator} from '../site.navigator';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css', '../app.component.css']
})
export class CourseComponent implements OnInit {
  content_id: string;
  name: string;
  courseLessonsList: Model[];
  questionsList: Model[];
  siteNavigator: SiteNavigator;

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseService,
              private router: Router) {
    this.siteNavigator = new SiteNavigator(router);
    this.courseLessonsList = [];
    this.questionsList = [];
  }

  ngOnInit() {
    this.content_id = this.activatedRoute.snapshot.paramMap.get('course_id');
    this.activatedRoute.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    this.courseService.getCourseContent(this.content_id).subscribe(value => {
        value.forEach(element => {
          this.courseLessonsList.push
          ({
            title: element.title,
            content_id: element.id
          });
        });
      }, error => {
        alert(error);
      }
    );
    this.courseService.getQuestionList(Number(this.content_id)).subscribe(value => {
        value.forEach(element => {
          this.questionsList.push({
            title: element.question,
            content_id: element.id
          });
        });
      },
      error => {
        alert(JSON.parse(error));
      });
  }

}
