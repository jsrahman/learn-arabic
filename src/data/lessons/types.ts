export interface LessonSlide {
  id: string;
  arabic: string;
  transliteration?: string;
  audioPrompt?: string;
  audioUrl?: string;
  title: string;
  titleBangla: string;
  explanation: string;
  explanationBangla: string;
  makhrajInfo?: string;
  ruleBadge?: string;
  formExamples?: { label: string; text: string; translit: string }[];
  checkQuestion?: {
    question: string;
    questionBangla?: string;
    options: string[];
    optionsBangla?: string[];
    correctIndex: number;
    explanation: string;
    explanationBangla?: string;
  };
}

export interface Lesson {
  id: string;
  levelId: number;
  lessonNumber: number;
  slug: string;
  title: string;
  titleBangla: string;
  description: string;
  descriptionBangla: string;
  slides: LessonSlide[];
  quizId: string;
}
