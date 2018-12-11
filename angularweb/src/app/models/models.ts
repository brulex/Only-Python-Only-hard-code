export interface Models {
  title: string;
  content_id: number;
}

export interface LessonContent {
  content_id: number;
  order_in_course: number;
}

export interface CourseContent {
  courseData: Models;
  articles: Models[];
}

export interface articleOrderIds {
  pageID: number;
  nextPageID: number;
  prevPageID: number;
}


