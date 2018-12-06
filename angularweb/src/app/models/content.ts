export interface Content {
  title: string;
  content_id: string;
}

export interface CourseContent {
  courseData: Content;
  articles: Content[];
}
