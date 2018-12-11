import {Component, OnInit} from '@angular/core';
import {Models, CourseContent} from "../models/models";
import {SiteNavigator} from "../site.navigator";
import {LessonService} from "../services/lesson.service";
import {CourseService} from "../services/course.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css', '../app.component.css']
})
export class MapComponent implements OnInit {
  mapCoursestList: CourseContent[];
  mapLesssonsList: Models[];
  siteNavigator: SiteNavigator;

  constructor(private lessonService: LessonService,
              private courseService: CourseService,
              private router: Router) {
    this.siteNavigator = new SiteNavigator(router);
    this.mapCoursestList = [];
    this.mapLesssonsList = [];
  }

  ngOnInit() {

    this.courseService.getCoursesList().subscribe(value => {
      value.forEach(element => {
        this.mapCoursestList.push
        ({
          courseData: {
            title: element.name,
            content_id: element.id
          },
          articles: null
        });
          let content_id = this.mapCoursestList.length - 1;
          this.courseService.getCourseContent(String(this.mapCoursestList[content_id].courseData.content_id)).subscribe(value => {
              this.mapCoursestList[content_id].articles = [];
              value.forEach(element => {
                this.mapCoursestList[content_id].articles.push
                ({
                  title: element.title,
                  content_id: element.id
                });
              });
            }, error => {
              alert(JSON.parse(error));
            }
          );

      });
    }, error => {
      alert(JSON.parse(error));
    });

    this.lessonService.getLossonsList().subscribe(value => {
        value.forEach(element => {
          this.mapLesssonsList.push
          ({
            title: element.title,
            content_id: element.id
          });
        });
      }, error => {
        alert(JSON.parse(error));
      }
    );
  }

}
