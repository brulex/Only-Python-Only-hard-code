import {Component, OnInit} from '@angular/core';
import {Content} from "../models/content";
import {MapService} from "../services/map.service";
import {SiteNavigator} from "../site.navigator";
import {Router} from "@angular/router";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css', '../app.component.css']
})
export class MapComponent implements OnInit {
  mapCoursesList: Content[];
  mapLesssonsList: Content[];
  siteNavigator: SiteNavigator;

  constructor(private mapService: MapService,
              private router: Router) {
    this.siteNavigator = new SiteNavigator(router);
    this.mapCoursesList = [];
    this.mapLesssonsList = [];
  }

  ngOnInit() {
    let map = this.mapService.getSiteMap();
    map.data.courses.forEach(element => {
      this.mapCoursesList.push
      ({
        title: element.title,
        content_id: element.content_id
      });
    });
    map.data.lessons.forEach(element => {
      this.mapLesssonsList.push
      ({
        title: element.title,
        content_id: element.content_id
      });
    });
  }

}
