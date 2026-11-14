export type QuestionType = "multiple_choice" | "audio_match" | "form_match" | "word_builder";

export interface QuizQuestion {
  id: string;
  type?: QuestionType;
  question: string;
  questionBangla: string;
  promptText?: string; // Arabic display prompt with Tashkeel
  audioPrompt?: string; // Audio or Arabic text to pronounce
  audioUrl?: string;
  options: string[]; // Answers to pick from (4 options)
  correctIndex: number;
  explanation: string;
  explanationBangla: string;
  ruleTag?: string;
  scrambledLetters?: string[]; // for word_builder
  targetWord?: string;
}

export interface Quiz {
  id: string;
  levelId: number;
  title: string;
  titleBangla: string;
  description: string;
  descriptionBangla: string;
  passingScore: number; // percentage, e.g. 70
  questions: QuizQuestion[];
}
