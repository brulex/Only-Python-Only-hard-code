import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainComponent} from './main/main.component';
import {MatButtonModule, MatToolbarModule,MatListModule} from '@angular/material';
import {MapComponent} from './map/map.component';
import {LessonsComponent} from './lessons/lessons.component';
import {CoursesComponent} from './courses/courses.component';
import { LessonComponent } from './lesson/lesson.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapComponent,
    LessonsComponent,
    CoursesComponent,
    LessonComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
