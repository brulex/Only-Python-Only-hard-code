import {Component, OnInit} from '@angular/core';
import {MainService} from '../services/main.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchModel} from '../models/model';
import {SiteNavigator} from '../site.navigator';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', '../app.component.css']
})
export class SearchComponent implements OnInit {

  search_title: string;
  articlesList: SearchModel[];
  siteNavigator: SiteNavigator;

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: MainService,
              private router: Router) {
    this.siteNavigator = new SiteNavigator(router);
    this.articlesList = [];
  }

  ngOnInit() {
    this.search_title = this.activatedRoute.snapshot.paramMap.get('search_title');
    this.courseService.articlesSearch(this.search_title).subscribe(value => {
        value.forEach(element => {
          this.articlesList.push
          ({
            title: element.fields.title,
            content_id: element.pk,
            course_id: element.fields.course_id
          });
        });
      }, error => {
        alert(error);
      }
    );
  }

  navigateToPage(article: SearchModel) {
    if (article.course_id === null) {
      this.siteNavigator.goLesson(article.content_id);
    } else {
      this.siteNavigator.goCourseLesson(article.course_id, article.content_id);
    }
  }
}
