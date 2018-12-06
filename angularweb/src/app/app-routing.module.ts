import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {MapComponent} from "./map/map.component";
import {LessonsComponent} from "./lessons/lessons.component";
import {CoursesComponent} from "./courses/courses.component";
import {LessonComponent} from "./lesson/lesson.component";
import {CourseComponent} from "./course/course.component";
import {ArticleComponent} from "./article/article.component";

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'lessons', component: LessonsComponent},
  {path: 'lesson/:content_id', component: LessonComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'course/:course_id', component: CourseComponent},
  {path: 'course/:course_id/:content_id', component: ArticleComponent},
  {path: 'map', component: MapComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**', redirectTo: ''} // TODO: add page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
