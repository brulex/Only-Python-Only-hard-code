import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatListModule, MatRadioModule, MatStepperModule, MatToolbarModule} from '@angular/material';
import {DisqusModule} from 'ngx-disqus';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainComponent} from './main/main.component';
import {MapComponent} from './map/map.component';
import {LessonsComponent} from './lessons/lessons.component';
import {CoursesComponent} from './courses/courses.component';
import {LessonComponent} from './lesson/lesson.component';
import {CourseComponent} from './course/course.component';
import {ArticleComponent} from './article/article.component';
import {QuestionComponent} from './question/question.component';
import {SearchComponent} from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapComponent,
    LessonsComponent,
    CoursesComponent,
    LessonComponent,
    CourseComponent,
    ArticleComponent,
    QuestionComponent,
    SearchComponent
  ],
  imports: [
    DisqusModule.forRoot('ngx'),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatStepperModule,
    MatRadioModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
