export interface LearningLevel {
  id: number;
  slug: string;
  number: number;
  title: string;
  titleArabic: string;
  subtitle: string;
  subtitleBangla: string;
  description: string;
  descriptionBangla: string;
  color: string;
  accentColor: string;
  lessonsCount: number;
  estimatedMinutes: number;
  objectives: string[];
  objectivesBangla: string[];
}

export const LEARNING_LEVELS: LearningLevel[] = [
  {
    id: 1,
    slug: "alphabet",
    number: 1,
    title: "Arabic Alphabet",
    titleArabic: "حُرُوفُ الْهِجَاءِ",
    subtitle: "Letter Recognition & Authentic Sounds",
    subtitleBangla: "আরবি ২৮টি হরফ চেনা ও সঠিক মাখরাজ",
    description: "Master all 28 Arabic letters in their isolated forms. Learn letter names, visual distinction, and mouth articulation points (Makharij).",
    descriptionBangla: "আরবির ২৮টি একক হরফ চেনা, নাম শেখা এবং বিশুদ্ধ উচ্চারণ মাখরাজ সহ আয়ত্ত করুন।",
    color: "from-emerald-700 to-teal-900",
    accentColor: "border-emerald-500 text-emerald-400 bg-emerald-500/10",
    lessonsCount: 6,
    estimatedMinutes: 45,
    objectives: [
      "Recognize all 28 Arabic letters instantly",
      "Pronounce each letter with authentic Makhraj articulation",
      "Differentiate similar letters like ت and ث, or س and ص",
      "Pass the Level 1 letter recognition quiz",
    ],
    objectivesBangla: [
      "২৮টি আরবি হরফ চেনা",
      "সঠিক মাখরাজ থেকে বিশুদ্ধ উচ্চারণ",
      "সাদৃশ্যপূর্ণ হরফের পার্থক্য উপলব্ধি",
      "লেভেল ১ কুইজ সফলভাবে সমাপ্ত করা",
    ],
  },
  {
    id: 2,
    slug: "letter-forms",
    number: 2,
    title: "Letter Forms & Connections",
    titleArabic: "أَشْكَالُ الْحُرُوفِ",
    subtitle: "Beginning, Middle & Ending Shapes",
    subtitleBangla: "হরফের বিভিন্ন রূপ (শুরু, মধ্য ও শেষ)",
    description: "Discover how Arabic letters transform and join within words. Learn the 6 non-connecting letters and master script joining rules.",
    descriptionBangla: "শব্দের শুরুতে, মাঝে ও শেষে হরফ কীভাবে রূপ বদলায় ও যুক্ত হয় তা শিখুন।",
    color: "from-teal-800 to-cyan-950",
    accentColor: "border-teal-500 text-teal-400 bg-teal-500/10",
    lessonsCount: 5,
    estimatedMinutes: 50,
    objectives: [
      "Identify isolated, initial, medial, and final letter shapes",
      "Master the 6 non-connecting letters (ا د ذ ر ز و)",
      "Connect Arabic letters seamlessly in script",
      "Match transformed shapes back to base letters",
    ],
    objectivesBangla: [
      "হরফের চার রূপ সনাক্তকরণ",
      "৬টি অবন্ধনযোগ্য হরফের নিয়ম",
      "শব্দে হরফ জোড়া লাগানোর কলাকৌশল",
      "লেভেল ২ আকৃতি ম্যাচিং পরীক্ষা",
    ],
  },
  {
    id: 3,
    slug: "harakat",
    number: 3,
    title: "Harakat (Vowel Signs)",
    titleArabic: "الْحَرَكَاتُ وَالسُّكُونُ",
    subtitle: "Short Vowels: Fathah, Kasrah, Dammah & Sukoon",
    subtitleBangla: "হরকত ও সুকূন (যবর, যের, পেশ ও জযম)",
    description: "Learn to give voice to Arabic letters! Understand Fathah (a), Kasrah (i), Dammah (u), and the stopping silence of Sukoon (ْ).",
    descriptionBangla: "যবর (া-কার), যের (ি-কার), পেশ (ু-কার) এবং জযম (স্থির অবস্থা) এর বিশুদ্ধ প্রয়োগ ও উচ্চারণ।",
    color: "from-amber-700 to-emerald-900",
    accentColor: "border-amber-500 text-amber-400 bg-amber-500/10",
    lessonsCount: 5,
    estimatedMinutes: 40,
    objectives: [
      "Read any Arabic letter with Fathah (َ)",
      "Read any Arabic letter with Kasrah (ِ)",
      "Read any Arabic letter with Dammah (ُ)",
      "Pronounce Sukoon (ْ) as an exact stop without dragging",
    ],
    objectivesBangla: [
      "যবর দিয়ে দ্রুত সাবলীল পড়া",
      "যের দিয়ে বিশুদ্ধ উচ্চারণ",
      "পেশ দিয়ে দুই ঠোঁট গোল করে পড়া",
      "জযমের স্থির ধ্বনি সঠিকভাবে আদায়",
    ],
  },
  {
    id: 4,
    slug: "advanced-signs",
    number: 4,
    title: "Advanced Reading Signs",
    titleArabic: "التَّنْوِينُ وَالشَّدَّةُ وَالْمَدُّ",
    subtitle: "Tanween, Shaddah & Vowel Lengthening (Madd)",
    subtitleBangla: "তানবীন, তাশদীদ ও মাদ্দ",
    description: "Master double-vowel nunation (Tanween), consonant doubling emphasis (Shaddah), and melodic vowel elongation (Madd).",
    descriptionBangla: "দুই যবর/যের/পেশ (তানবীন), হরফের ওপর তাশদীদ এবং টেনে পড়ার মাদ্দের নিয়ম।",
    color: "from-emerald-800 to-indigo-950",
    accentColor: "border-indigo-400 text-indigo-300 bg-indigo-500/10",
    lessonsCount: 5,
    estimatedMinutes: 55,
    objectives: [
      "Read Tanween (ً ٍ ٌ) with accurate nunation sound",
      "Articulate Shaddah (ّ) with proper consonant emphasis",
      "Distinguish short vowels from long Madd letters (ا, و, ي)",
      "Count Madd lengths accurately (2, 4, and 6 counts)",
    ],
    objectivesBangla: [
      "তানবীনের উচ্চারণ নিখুঁত করা",
      "তাশদীদের দ্বিত্ব স্বর স্পষ্ট করা",
      "হ্রস্ব স্বর ও দীর্ঘ মাদ্দের পার্থক্য চেনা",
      "মাদ্দের পরিমাণ (২, ৪ ও ৬ হরকত) নির্ধারণ",
    ],
  },
  {
    id: 5,
    slug: "word-formation",
    number: 5,
    title: "Word Formation & Vocabulary",
    titleArabic: "تَرْكِيبُ الْكَلِمَاتِ",
    subtitle: "Blending Letters into Quranic Words",
    subtitleBangla: "শব্দ গঠন ও কুরআনিক শব্দভাণ্ডার",
    description: "Combine individual letters and Harakat into whole words. Practice essential Quranic vocabulary and build fluid sight-reading ability.",
    descriptionBangla: "হরফ ও হরকত মিলিয়ে সম্পূর্ণ শব্দ গঠন এবং কুরআনের বহুল ব্যবহৃত শব্দ পড়া।",
    color: "from-cyan-900 to-emerald-950",
    accentColor: "border-cyan-400 text-cyan-300 bg-cyan-500/10",
    lessonsCount: 5,
    estimatedMinutes: 60,
    objectives: [
      "Read 2-letter and 3-letter combinations smoothly",
      "Sight-read common Quranic words like كِتَاب, رَحْمَة, نُور",
      "Assemble scrambled Arabic letters into valid words",
      "Gain confidence reading continuous Arabic text",
    ],
    objectivesBangla: [
      "২ ও ৩ হরফের শব্দ সাবলীল পাঠ",
      "সাধারণ কুরআনি শব্দের পরিচিতি",
      "শব্দ জোড়া লাগানোর অনুশীলনী",
      "অবিচ্ছিন্ন আরবি পাঠে দক্ষতা অর্জন",
    ],
  },
  {
    id: 6,
    slug: "quran-reading",
    number: 6,
    title: "Quran Reading & Tajweed",
    titleArabic: "تِلَاوَةُ الْقُرْآنِ الْكَرِيمِ",
    subtitle: "Short Surahs & Essential Tajweed Rules",
    subtitleBangla: "কুরআন তিলাওয়াত ও তাজবীদ",
    description: "Put everything together to read actual verses of the Holy Quran! Practice Surah Al-Fatihah, Al-Ikhlas, Al-Falaq, An-Nas with Tajweed guidance.",
    descriptionBangla: "সূরা ফাতিহা ও শেষ চার কুল সূরা তাজবীদ ও বিশুদ্ধ তিলাওয়াত সহ সম্পূর্ণ পাঠ।",
    color: "from-amber-800 to-emerald-900",
    accentColor: "border-gold-500 text-gold-300 bg-gold-500/10",
    lessonsCount: 6,
    estimatedMinutes: 75,
    objectives: [
      "Read Surah Al-Fatihah verse by verse with audio",
      "Apply Qalqalah echoing rules on (ق, ط, ب, ج, د)",
      "Apply Ghunnah nasalization on (نّ, مّ)",
      "Recite the 4 Qul Surahs (Al-Ikhlas, Al-Falaq, An-Nas, Al-Kafirun) fluently",
    ],
    objectivesBangla: [
      "সূরা ফাতিহা বিশুদ্ধ তিলাওয়াত",
      "কলকলাহ ও গুন্নাহর প্রয়োগ",
      "৪ কুল সূরা তাজবীদ সহ পাঠ",
      "কুরআনুল কারীম পড়ার স্থায়ী আত্মবিশ্বাস অর্জন",
    ],
  },
];

