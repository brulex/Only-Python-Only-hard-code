import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../services/course.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css', '../app.component.css']
})
export class CourseComponent implements OnInit {
  content_id: string;
  coursePage: string;

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseService) {
  }

  ngOnInit() {
    this.content_id = this.activatedRoute.snapshot.paramMap.get('content_id');
    this.coursePage = this.courseService.getCourseContent(this.content_id);
  }

}
