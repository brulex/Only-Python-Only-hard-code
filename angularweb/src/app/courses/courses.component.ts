import {Component, OnInit} from '@angular/core';
import {SiteNavigator} from "../site.navigator";
import {Router} from "@angular/router";
import {CourseService} from "../services/course.service";
import {Content} from "../models/content";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css', '../app.component.css']
})
export class CoursesComponent implements OnInit {
  siteNavigator: SiteNavigator;
  coursesList: Content[];

  constructor(private courseService: CourseService, private router: Router) {
    this.siteNavigator = new SiteNavigator(router);
    this.coursesList = [];
  }

  ngOnInit() {
    this.courseService.getCoursesData().subscribe(value => {
      value.forEach(element => {
        this.coursesList.push
        ({
          title: element.name,
          content_id: element.id
        });
      });
    },error => {
      alert(JSON.parse(error));
      }
    );
  }
}
