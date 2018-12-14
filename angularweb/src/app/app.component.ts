import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularweb';
  value = '';

  constructor(private router: Router) {
  }

  goMain() {
    this.router.navigate(['/main']);
  }

  goPythonLessons() {
    this.router.navigate(['/lessons']);
  }

  goCourses() {
    this.router.navigate(['/courses']);
  }

  goSiteMap() {
    this.router.navigate(['/map']);
  }
  onEnter(value: string) {
    this.value = value;
    this.router.navigate(['/search', value]);
    window.location.reload();
  }
}
