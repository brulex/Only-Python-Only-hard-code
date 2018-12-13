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

export interface QuestionContent {
  questionData: Models;
  answersList: Models[];
  answer: Models;
  verified: boolean;
}

export interface ArticleOrderIds {
  pageID: number;
  nextPageID: number;
  prevPageID: number;
}


