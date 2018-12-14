export interface Model {
  title: string;
  content_id: number;
}

export interface SearchModel {
  title: string;
  content_id: number;
  course_id: number;
}

export interface LessonContent {
  content_id: number;
  order_in_course: number;
}

export interface CourseContent {
  courseData: Model;
  articles: Model[];
}

export interface QuestionContent {
  questionData: Model;
  answersList: Model[];
  answer: Model;
  verified: boolean;
}

export interface ArticleOrderIds {
  pageID: number;
  nextPageID: number;
  prevPageID: number;
}
