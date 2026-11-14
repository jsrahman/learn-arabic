export type QuestionType = "multiple_choice" | "audio_match" | "form_match" | "word_builder";

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  question: string;
  questionBangla: string;
  promptText?: string; // Arabic display prompt
  audioPrompt?: string; // Audio to play
  audioUrl?: string;
  options: string[]; // Answers to pick from
  correctIndex: number;
  explanation: string;
  explanationBangla: string;
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

export const QUIZZES: Record<string, Quiz> = {
  // Level 1: Alphabet Recognition & Makhraj
  q1: {
    id: "q1",
    levelId: 1,
    title: "Level 1: Arabic Alphabet Quiz",
    titleBangla: "লেভেল ১: আরবি হরফ পরিচিতি কুইজ",
    description: "Test your recognition of Arabic letters, dot positions, and articulation points.",
    descriptionBangla: "আরবি হরফ সনাক্তকরণ, নুকতার অবস্থান এবং মাখরাজের জ্ঞান যাচাই করুন।",
    passingScore: 70,
    questions: [
      {
        id: "q1_1",
        type: "multiple_choice",
        question: "Which letter is this?",
        questionBangla: "এই হরফটির নাম কী?",
        promptText: "ب",
        options: ["Tā’ (ت)", "Bā’ (ب)", "Thā’ (ث)", "Nūn (ن)"],
        correctIndex: 1,
        explanation: "Bā’ has a single dot placed underneath the boat shape.",
        explanationBangla: "বা এর নিচে একটি মাত্র নুকতা থাকে।",
      },
      {
        id: "q1_2",
        type: "audio_match",
        question: "Listen to the pronunciation. Which Arabic letter is being spoken?",
        questionBangla: "উচ্চারণটি শুনুন। কোন আরবি হরফটি বলা হলো?",
        audioPrompt: "ثاء",
        audioUrl: "/audio/alphabet/thaa.mp3",
        options: ["ث (Thā’)", "س (Sīn)", "ص (Ṣād)", "ت (Tā’)"],
        correctIndex: 0,
        explanation: "Thā’ (ث) is pronounced softly with the tongue tip touching the upper teeth edges.",
        explanationBangla: "সা (ث) নরমভাবে জিহ্বার ডগা সামনের উপরের দাঁতের কিনারায় লাগিয়ে উচ্চারিত হয়।",
      },
      {
        id: "q1_3",
        type: "multiple_choice",
        question: "How do you distinguish Jeem (ج), Ḥā’ (ح), and Khā’ (خ)?",
        questionBangla: "জীম, হা এবং খা কীভাবে আলাদা করবেন?",
        options: [
          "Jeem has 1 dot inside, Ḥā’ has none, Khā’ has 1 dot above",
          "They all have 2 dots",
          "Ḥā’ has a dot below, Jeem has none",
          "Khā’ has a dot below, Jeem has one above",
        ],
        correctIndex: 0,
        explanation: "Jeem has a dot in its belly (ج), Ḥā’ is clean (ح), and Khā’ carries a dot on its head (خ).",
        explanationBangla: "জীমের পেটে ১ নুকতা, হা এর কোনো নুকতা নেই, আর খা এর মাথায় ১ নুকতা থাকে।",
      },
      {
        id: "q1_4",
        type: "audio_match",
        question: "Listen carefully. Is this the heavy throat letter or the light one?",
        questionBangla: "মনোযোগ দিয়ে শুনুন। এটি কি গলার গভীরের ভারী ক্বাফ নাকি সাধারণ কাফ?",
        audioPrompt: "قاف",
        audioUrl: "/audio/alphabet/qaaf.mp3",
        options: ["ق (Qāf - Deep emphatic)", "ك (Kāf - Light)", "ت (Tā’)", "ط (Ṭā’)"],
        correctIndex: 0,
        explanation: "Qāf (ق) is articulated deep at the very back of the tongue against the soft palate.",
        explanationBangla: "ক্বাফ (ق) জিহ্বার একেবারে গোড়া নরম তালুর সাথে লাগিয়ে গম্ভীর ভারী কণ্ঠে উচ্চারিত হয়।",
      },
      {
        id: "q1_5",
        type: "multiple_choice",
        question: "Which letter is unique to the Arabic language, pronounced from the side of the tongue?",
        questionBangla: "কোন হরফটি শুধুমাত্র আরবি ভাষার নিজস্ব বৈশিষ্ট্য, যা জিহ্বার এক পাশ দিয়ে উচ্চারিত হয়?",
        options: ["Ḍād (ض)", "Ṣād (ص)", "Dāl (د)", "Zāy (ز)"],
        correctIndex: 0,
        explanation: "Arabic is famously known as 'Lughat aḍ-Ḍād' because of the letter Ḍād (ض).",
        explanationBangla: "দোয়াদ (ض) হরফের অনন্য উচ্চারণের কারণেই আরবিকে 'লুগাতুদ দোয়াদ' বা দোয়াদের ভাষা বলা হয়।",
      },
    ],
  },

  // Level 2: Letter Forms
  q2: {
    id: "q2",
    levelId: 2,
    title: "Level 2: Letter Forms & Connection Quiz",
    titleBangla: "লেভেল ২: হরফের রূপ ও সংযোজন পরীক্ষা",
    description: "Demonstrate your ability to recognize initial, medial, and final letter shapes.",
    descriptionBangla: "শুরু, মধ্য ও শেষ রূপ সনাক্ত করার দক্ষতা প্রদর্শন করুন।",
    passingScore: 70,
    questions: [
      {
        id: "q2_1",
        type: "form_match",
        question: "What is the initial (beginning) form of the letter Seen (س)?",
        questionBangla: "সীন (س) হরফের শব্দের শুরুর রূপ কোনটি?",
        promptText: "س",
        options: ["سـ", "ـسـ", "ـس", "شـ"],
        correctIndex: 0,
        explanation: "In the initial form, Seen keeps its 3 teeth and reaches out to the left: سـ.",
        explanationBangla: "শব্দের শুরুতে সীন তিনটি দাঁত রেখে বায়ে হাত বাড়ায়: سـ।",
      },
      {
        id: "q2_2",
        type: "multiple_choice",
        question: "How many letters in Arabic NEVER connect to the following letter on the left?",
        questionBangla: "আরবিতে কতটি হরফ বামের হরফের সাথে কখনো জোড়া লাগে না?",
        options: ["6 letters (ا د ذ ر ز و)", "4 letters", "2 letters", "All letters connect"],
        correctIndex: 0,
        explanation: "The 6 non-connecting letters are Alif, Dāl, Dhāl, Rā’, Zāy, and Wāw.",
        explanationBangla: "এই ৬টি হরফ হলো: আলিফ, দাল, যাল, র, যা, এবং ওয়াও।",
      },
      {
        id: "q2_3",
        type: "multiple_choice",
        question: "Identify the Middle (Medial) letter in the word 'كِـتـَاب' (Kitāb):",
        questionBangla: "'كِـتـَاب' শব্দটির মাঝের হরফটি কোনটি?",
        promptText: "كِـتـَاب",
        options: ["Tā’ (ـتـ)", "Kāf (كـ)", "Alif (ـا)", "Bā’ (ب)"],
        correctIndex: 0,
        explanation: "The middle letter with 2 dots above connecting both sides is Tā’ (ـتـ).",
        explanationBangla: "উভয় পাশে হাত বাড়িয়ে দুই নুকতা বিশিষ্ট হরফটি হলো তা (ـتـ)।",
      },
    ],
  },

  // Level 3: Harakat & Sukoon
  q3: {
    id: "q3",
    levelId: 3,
    title: "Level 3: Harakat & Sukoon Quiz",
    titleBangla: "লেভেল ৩: হরকত ও সুকূন পরীক্ষা",
    description: "Read letters with short vowels (Fathah, Kasrah, Dammah) and stop with Sukoon.",
    descriptionBangla: "যবর, যের, পেশ ও জযমযুক্ত হরফের পাঠ দক্ষতা যাচাই।",
    passingScore: 70,
    questions: [
      {
        id: "q3_1",
        type: "multiple_choice",
        question: "What sound does the mark on this letter make: بَ ?",
        questionBangla: "ব এর উপরের চিহ্নটির (যবর) উচ্চারণ কেমন হবে?",
        promptText: "بَ",
        options: ["Ba (short 'a')", "Bi (short 'i')", "Bu (short 'u')", "Ab (stop)"],
        correctIndex: 0,
        explanation: "Fathah ( َ ) creates a short 'a' sound, making بَ pronounced as 'Ba'.",
        explanationBangla: "যবর হরফের উপর থাকে এবং 'বা' হিসেবে উচ্চারিত হয়।",
      },
      {
        id: "q3_2",
        type: "multiple_choice",
        question: "How do you read this letter with Dammah: رُ ?",
        questionBangla: "পেশযুক্ত এই হরফটি কীভাবে পড়বেন: رُ ?",
        promptText: "رُ",
        options: ["Ru (lips rounded)", "Ra", "Ri", "Ar"],
        correctIndex: 0,
        explanation: "Dammah ( ُ ) rounds the lips to make 'Ru'.",
        explanationBangla: "পেশ দুই ঠোঁট গোল করে 'রু' ধ্বনি তৈরি করে।",
      },
      {
        id: "q3_3",
        type: "multiple_choice",
        question: "What is the function of the circle mark Sukoon ( ْ ) in أَبْ ?",
        questionBangla: "أَبْ শব্দে বা এর উপর সুকূন বা জযমের কাজ কী?",
        promptText: "أَبْ",
        options: [
          "It silences vowel sounds and makes a firm stop ('Ab')",
          "It adds an 'a' sound",
          "It doubles the letter",
          "It lengthens the letter by 3 seconds",
        ],
        correctIndex: 0,
        explanation: "Sukoon indicates the absence of a vowel, creating an exact phonetic stop: 'Ab'.",
        explanationBangla: "সুকূন স্বরহীন থামার চিহ্ন, পূর্বের হরকতের সাথে থেমে যায়: 'আব'।",
      },
    ],
  },

  // Level 4: Advanced Signs (Tanween & Shaddah)
  q4: {
    id: "q4",
    levelId: 4,
    title: "Level 4: Tanween & Shaddah Quiz",
    titleBangla: "লেভেল ৪: তানবীন ও তাশদীদ পরীক্ষা",
    description: "Identify nunation endings, consonant doubling, and vowel elongation.",
    descriptionBangla: "তানবীন (দুই যবর/যের/পেশ), তাশদীদ এবং মাদ্দের নিয়ম পরীক্ষা।",
    passingScore: 70,
    questions: [
      {
        id: "q4_1",
        type: "multiple_choice",
        question: "How is the double Dammatayn read on this word: قَلْبٌ ?",
        questionBangla: "قَلْبٌ শব্দের শেষ হরফে দুই পেশের উচ্চারণ কেমন হবে?",
        promptText: "قَلْبٌ",
        options: ["Qalbun (-un)", "Qalban (-an)", "Qalbin (-in)", "Qalbu (-u)"],
        correctIndex: 0,
        explanation: "Dammatayn ( ٌ ) adds an '-un' sound, so قَلْبٌ is pronounced 'Qalbun'.",
        explanationBangla: "দুই পেশ 'উন' ধ্বনি দেয়, তাই قَلْبٌ এর উচ্চারণ 'ক্বলবুন'।",
      },
      {
        id: "q4_2",
        type: "multiple_choice",
        question: "What does a Shaddah ( ّ ) indicate on a letter?",
        questionBangla: "হরফের উপর তাশদীদ ( ّ ) কী নির্দেশ করে?",
        options: [
          "The letter is pronounced twice with emphasis (first sukoon, then vowel)",
          "The letter is silent",
          "The letter is stretched for 6 beats",
          "The letter is whispered softly",
        ],
        correctIndex: 0,
        explanation: "Shaddah doubles the letter: first silent contact, then release with the vowel.",
        explanationBangla: "তাশদীদ হরফটিকে দ্বিত্ব করে দৃঢ়তার সাথে উচ্চারণ করায়।",
      },
    ],
  },

  // Level 5: Word Formation
  q5: {
    id: "q5",
    levelId: 5,
    title: "Level 5: Word Reading & Vocabulary",
    titleBangla: "লেভেল ৫: শব্দ গঠন ও পাঠ পরীক্ষা",
    description: "Read 2-3 letter combinations and assemble common Quranic words.",
    descriptionBangla: "যুক্ত শব্দ পাঠ এবং আরবি শব্দ গঠনের দক্ষতা পরীক্ষা।",
    passingScore: 70,
    questions: [
      {
        id: "q5_1",
        type: "word_builder",
        question: "Assemble the letters to form the Quranic word for 'Book' (Kitāb):",
        questionBangla: "'কিতাব' (كِتَاب) শব্দটি তৈরি করতে সঠিক ক্রমে সাজান:",
        scrambledLetters: ["ب", "كِـ", "ـتـَا"],
        targetWord: "كِتَاب",
        options: ["كِتَاب", "بَتَاك", "تَاكِب", "كِبَات"],
        correctIndex: 0,
        explanation: "كِـ (Ki) + ـتـَا (tā) + ب (b) = كِتَاب (Kitāb).",
        explanationBangla: "কাফ (যের) + তা (আলিফ মাদ্দ) + বা = কিতাব।",
      },
      {
        id: "q5_2",
        type: "multiple_choice",
        question: "How do you read the word: سَلَامٌ ?",
        questionBangla: "سَلَامٌ শব্দটির সঠিক উচ্চারণ কোনটি?",
        promptText: "سَلَامٌ",
        options: ["Salāmun", "Salamu", "Silamun", "Sulmun"],
        correctIndex: 0,
        explanation: "Seen with Fathah (Sa) + Lam with Alif Madd (lā) + Meem with Tanween (mun) = Salāmun.",
        explanationBangla: "সীন (যবর) + লাম-আলিফ (মাদ্দ) + মীম (দুই পেশ) = সালামুন।",
      },
    ],
  },

  // Level 6: Quran Reading & Tajweed
  q6: {
    id: "q6",
    levelId: 6,
    title: "Level 6: Quran Reading & Tajweed Master Quiz",
    titleBangla: "লেভেল ৬: কুরআন তিলাওয়াত ও তাজবীদ পরীক্ষা",
    description: "Apply Tajweed rules: Qalqalah, Ghunnah, and recite verses accurately.",
    descriptionBangla: "কলকলাহ ও গুন্নাহর নিয়ম প্রয়োগ এবং পবিত্র আয়াত পাঠের পরীক্ষা।",
    passingScore: 70,
    questions: [
      {
        id: "q6_1",
        type: "multiple_choice",
        question: "Which of the following are the 5 letters of Qalqalah (Echoing bounce)?",
        questionBangla: "কলকলাহর ৫টি হরফ কোনগুলো (যাতে সাকিন অবস্থায় প্রতিধ্বনি হয়)?",
        options: [
          "ق, ط, ب, ج, د (Qutb Jadd)",
          "ا, و, ي, ن, م",
          "س, ش, ص, ض, ط",
          "ت, ث, ذ, ز, ظ",
        ],
        correctIndex: 0,
        explanation: "The 5 Qalqalah letters are memorized as قُطْبُ جَدٍّ (Qaf, Taa, Baa, Jeem, Dal).",
        explanationBangla: "কলকলাহর ৫টি হরফ সহজে মনে রাখার সূত্র: 'ক্বুতুবু জাদ্দীন' (ق ط ب ج د)।",
      },
      {
        id: "q6_2",
        type: "multiple_choice",
        question: "In Surah Al-Ikhlas: 'قُلْ هُوَ اللَّهُ أَحَدٌ', how should you stop on the word 'أَحَد'?",
        questionBangla: "সূরা ইখলাসে 'أَحَد' শব্দে থামার সময় কীভাবে পড়তে হবে?",
        promptText: "أَحَدْ",
        options: [
          "With an echoing bounce on the Dal: 'A-ḥad(d)' (Qalqalah)",
          "Without any sound at the end",
          "By stretching the Dal for 4 seconds",
          "By whispering softly",
        ],
        correctIndex: 0,
        explanation: "Stopping on Dal creates a Sukoon on a Qalqalah letter, causing a crisp echo bounce.",
        explanationBangla: "দাল একটি কলকলাহ হরফ হওয়ায় থামার সময় স্পষ্ট প্রতিধ্বনি সৃষ্টি করতে হবে।",
      },
      {
        id: "q6_3",
        type: "multiple_choice",
        question: "What is Ghunnah (غُنَّة) in Tajweed?",
        questionBangla: "তাজবীদের পরিভাষায় গুন্নাহ (غُنَّة) বলতে কী বোঝায়?",
        options: [
          "A nasal sound held for about 2 counts on Noon or Meem with Shaddah (نّ, مّ)",
          "Stopping immediately without breathing",
          "Rolling the tongue on letter Raa",
          "Reading as fast as possible",
        ],
        correctIndex: 0,
        explanation: "Ghunnah is a resonant sound produced from the nasal cavity (Khayshoom) held for 2 counts.",
        explanationBangla: "গুন্নাহ হলো নাকের বাঁশির সাহায্যে ২ হরকত পরিমাণ সময় নিয়ে গুঞ্জনময় ধ্বনি ধরে রাখা।",
      },
    ],
  },
};

