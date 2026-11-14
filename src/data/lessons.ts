export interface LessonSlide {
  id: string;
  arabic: string;
  transliteration?: string;
  audioPrompt?: string;
  title: string;
  titleBangla: string;
  explanation: string;
  explanationBangla: string;
  makhrajInfo?: string;
  ruleBadge?: string;
  formExamples?: { label: string; text: string; translit: string }[];
  checkQuestion?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
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

export const LESSONS: Record<string, Lesson> = {
  // ==========================================
  // LEVEL 1: ARABIC ALPHABET
  // ==========================================
  "l1-1": {
    id: "l1-1",
    levelId: 1,
    lessonNumber: 1,
    slug: "letters-alif-to-thaa",
    title: "First Steps: Alif to Thā’",
    titleBangla: "প্রথম পাঠ: আলিফ থেকে সা",
    description: "Learn the foundational 4 letters: Alif (ا), Bā’ (ب), Tā’ (ت), and Thā’ (ث). Notice how the dot positions change the sound completely!",
    descriptionBangla: "আরবি প্রথম চারটি হরফ: আলিফ, বা, তা এবং সা এর রূপ ও মাখরাজ শিখুন।",
    quizId: "q1",
    slides: [
      {
        id: "s1",
        arabic: "ا",
        transliteration: "Alif (ā)",
        audioPrompt: "ألف",
        title: "Alif — The Upright Letter",
        titleBangla: "আলিফ — সোজা দণ্ডের মতো হরফ",
        explanation: "Alif is a tall, straight vertical stroke. It has no dots. By itself, it acts as an open vowel carrier or elongation.",
        explanationBangla: "আলিফ সোজা একটি খাড়া দাগের মতো। এর কোনো নুকতা (বিন্দু) নেই।",
        makhrajInfo: "Al-Jawf: Open space of the mouth and throat.",
        checkQuestion: {
          question: "How many dots does Alif (ا) have?",
          options: ["Zero dots", "One dot above", "One dot below", "Two dots"],
          correctIndex: 0,
          explanation: "Alif is a simple vertical stroke with no dots.",
        },
      },
      {
        id: "s2",
        arabic: "ب",
        transliteration: "Bā’ (b)",
        audioPrompt: "باء",
        title: "Bā’ — Boat with One Dot Below",
        titleBangla: "বা — নিচে এক নুকতা বিশিষ্ট নৌকা",
        explanation: "Bā’ is shaped like a shallow plate or boat with ONE dot underneath. Press both wet parts of your lips together to pronounce it cleanly.",
        explanationBangla: "বা এর আকৃতি অগভীর নৌকার মতো এবং নিচে একটি নুকতা থাকে। দুই ঠোঁট মিলিয়ে বলুন।",
        makhrajInfo: "Lips: Contact between the wet inner surface of both lips.",
        checkQuestion: {
          question: "Where is the dot located on the letter Bā’ (ب)?",
          options: ["One dot underneath", "One dot on top", "Two dots inside", "Three dots"],
          correctIndex: 0,
          explanation: "Bā’ has a single dot below its curved base.",
        },
      },
      {
        id: "s3",
        arabic: "ت",
        transliteration: "Tā’ (t)",
        audioPrompt: "تاء",
        title: "Tā’ — Two Dots Above (Happy Eyes)",
        titleBangla: "তা — উপরে দুই নুকতা",
        explanation: "Tā’ shares the exact same base boat shape as Bā’, but it has TWO dots placed ABOVE inside the basin. Touch your tongue tip to the root of your upper front teeth.",
        explanationBangla: "তা এর নিচে কোনো নুকতা থাকে না, উপরে পাশাপাশি দুইটি নুকতা থাকে।",
        makhrajInfo: "Tongue tip touching the base of the top front teeth.",
      },
      {
        id: "s4",
        arabic: "ث",
        transliteration: "Thā’ (th)",
        audioPrompt: "ثاء",
        title: "Thā’ — Three Dots Above (Soft Sound)",
        titleBangla: "সা — উপরে তিন নুকতা (নরম শব্দ)",
        explanation: "Thā’ has THREE dots arranged like a small pyramid above the boat. Place your tongue tip gently against the edges of your front teeth — do NOT whistle like an 's'!",
        explanationBangla: "সা এর উপরে তিনটি নুকতা থাকে। জিহ্বার আগা উপরের দাঁতের কিনারায় নরমভাবে স্পর্শ করে বলতে হয়।",
        makhrajInfo: "Tip of the tongue gently touching the edge of the upper incisors.",
        checkQuestion: {
          question: "Which letter has 3 dots above its shape?",
          options: ["Thā’ (ث)", "Tā’ (ت)", "Bā’ (ب)", "Alif (ا)"],
          correctIndex: 0,
          explanation: "Thā’ (ث) has 3 dots forming a small triangle above.",
        },
      },
    ],
  },
  "l1-2": {
    id: "l1-2",
    levelId: 1,
    lessonNumber: 2,
    slug: "letters-jeem-to-khaa",
    title: "Throat & Tongue: Jeem, Ḥā’ & Khā’",
    titleBangla: "দ্বিতীয় পাঠ: জীম, হা ও খা",
    description: "Discover the triplet letters with the distinctive belly shape: Jeem (ج), clean throat Ḥā’ (ح), and rasping Khā’ (خ).",
    descriptionBangla: "পেটের মতো বাঁকানো তিন সহোদর হরফ: জীম, গলার মধ্যভাগের হা এবং খসখসে খা।",
    quizId: "q1",
    slides: [
      {
        id: "s1",
        arabic: "ج",
        transliteration: "Jeem (j)",
        audioPrompt: "جيم",
        title: "Jeem — Dot in the Center",
        titleBangla: "জীম — পেটের মাঝে এক নুকতা",
        explanation: "Jeem has a horizontal brow and a large curved belly with ONE dot tucked inside the belly. It sounds like the 'j' in 'jump'.",
        explanationBangla: "জীম এর পেটের মাঝে একটি নুকতা থাকে। জিহ্বার মধ্যভাগ তালুতে চেপে শক্ত করে বলুন।",
      },
      {
        id: "s2",
        arabic: "ح",
        transliteration: "Ḥā’ (ḥ)",
        audioPrompt: "حاء",
        title: "Ḥā’ — Pure Throat Breathy 'H'",
        titleBangla: "হা — কোনো নুকতা নেই (কণ্ঠনালীর মধ্যভাগ)",
        explanation: "Ḥā’ is completely clean with NO dots. Produce this sound from the very middle of your throat, like breathing warm air onto cold glass.",
        explanationBangla: "হা এর কোনো নুকতা নেই। এটি কণ্ঠনালীর মধ্যভাগ থেকে গভীর বাতাস সহ উচ্চারিত হয়।",
      },
      {
        id: "s3",
        arabic: "خ",
        transliteration: "Khā’ (kh)",
        audioPrompt: "خاء",
        title: "Khā’ — Dot on Top (Rasping Sound)",
        titleBangla: "খা — মাথার উপরে এক নুকতা",
        explanation: "Khā’ has ONE dot perched on its top head. It has a rough, heavy gargling quality from the upper throat, similar to the Scottish 'loch'.",
        explanationBangla: "খা এর মাথার উপর একটি নুকতা থাকে। এটি গলার উপরের অংশ থেকে খসখসে ভারী আওয়াজে হয়।",
      },
    ],
  },
  "l1-3": {
    id: "l1-3",
    levelId: 1,
    lessonNumber: 3,
    slug: "letters-dal-to-zay",
    title: "Angle Letters: Dāl, Dhāl, Rā’ & Zāy",
    titleBangla: "তৃতীয় পাঠ: দাল, যাল, র ও যা",
    description: "Meet the non-connecting angle pairs. Learn how Dāl & Dhāl differ from the sweeping curve of Rā’ and buzzing Zāy.",
    descriptionBangla: "দাল-যাল এবং র-যা হরফের আকৃতি ও শব্দে ভিন্নতা অনুধাবন করুন।",
    quizId: "q1",
    slides: [
      {
        id: "s1",
        arabic: "د",
        transliteration: "Dāl (d)",
        audioPrompt: "دال",
        title: "Dāl — The Open Angle",
        titleBangla: "দাল — নুকতাবিহীন কোণ",
        explanation: "Dāl forms a clean open angle resting right on the baseline. Clean, light 'd' sound.",
        explanationBangla: "দাল সোজা লাইনের উপর বসে থাকে, কোনো নুকতা নেই।",
      },
      {
        id: "s2",
        arabic: "ذ",
        transliteration: "Dhāl (dh)",
        audioPrompt: "ذال",
        title: "Dhāl — Angle with One Dot",
        titleBangla: "যাল — উপরে এক নুকতা (নরম 'য')",
        explanation: "Dhāl has the exact shape of Dāl with ONE dot on top. Place tongue tip on your upper teeth edge for a soft voiced sound like 'this'.",
        explanationBangla: "যাল দেখতে দালের মতো তবে উপরে এক নুকতা। জিহ্বার ডগা দাঁতের কিনারায় লাগিয়ে নরম শব্দ।",
      },
      {
        id: "s3",
        arabic: "ر",
        transliteration: "Rā’ (r)",
        audioPrompt: "راء",
        title: "Rā’ — The Dropping Crescent",
        titleBangla: "র — অর্ধচন্দ্রের মতো নিচের দিকে বাঁকা",
        explanation: "Rā’ drops below the writing baseline like a crescent slide. Roll your tongue lightly.",
        explanationBangla: "র লাইনের নিচে নেমে যায়। এটি কোনো নুকতা ছাড়া অর্ধচন্দ্রাকার।",
      },
      {
        id: "s4",
        arabic: "ز",
        transliteration: "Zāy (z)",
        audioPrompt: "زاي",
        title: "Zāy — Crescent with One Dot",
        titleBangla: "যা — উপরে এক নুকতা (গুঞ্জনময় 'ঝ')",
        explanation: "Zāy is the twin of Rā’ with ONE dot on top. It produces a sharp, buzzing bee sound 'zzz'.",
        explanationBangla: "যা র এর মতো কিন্তু উপরে এক নুকতা থাকে। মৌমাছির গুঞ্জনের মতো ধারালো শব্দ।",
      },
    ],
  },

  // ==========================================
  // LEVEL 2: LETTER FORMS & CONNECTIONS
  // ==========================================
  "l2-1": {
    id: "l2-1",
    levelId: 2,
    lessonNumber: 1,
    slug: "how-letters-connect",
    title: "How Arabic Letters Connect",
    titleBangla: "আরবি হরফ কীভাবে জোড়া লাগে",
    description: "Arabic is always written in cursive script. A letter can have up to 4 forms: Isolated, Initial (beginning), Medial (middle), and Final (ending).",
    descriptionBangla: "আরবি হরফ ডান থেকে বামে টানা লেখার নিয়ম এবং হরফের চার রূপ সম্পর্কে জানুন।",
    quizId: "q2",
    slides: [
      {
        id: "s1",
        arabic: "بـ  ـبـ  ـب",
        transliteration: "Initial, Medial, Final Forms of Bā’",
        audioPrompt: "باء",
        title: "The 4 Positions in a Word",
        titleBangla: "শব্দে একটি হরফের ৪টি রূপ",
        explanation: "Look at Bā’: In the beginning it opens its left arm (بـ), in the middle it opens both arms (ـبـ), and at the end it closes its full shape (ـب).",
        explanationBangla: "শুরুতে হাত বাড়িয়ে দেয় (بـ), মাঝে উভয় পাশে জোড়া লাগে (ـبـ), আর শেষে পূর্ণ রূপ ফিরে পায় (ـب)।",
        formExamples: [
          { label: "Isolated", text: "ب", translit: "Bā’ alone" },
          { label: "Beginning (Initial)", text: "بـَيْت", translit: "Bayt (House)" },
          { label: "Middle (Medial)", text: "كِـتـَاب", translit: "Kitāb (Book)" },
          { label: "Ending (Final)", text: "قَلْـب", translit: "Qalb (Heart)" },
        ],
      },
      {
        id: "s2",
        arabic: "ا د ذ ر ز و",
        transliteration: "The 6 Non-Connecting Letters",
        audioPrompt: "ألف دال ذال راء زاي واو",
        title: "The 6 Friendly Letters (Non-Connectors)",
        titleBangla: "৬টি অবন্ধনযোগ্য হরফ (যেগুলো বায়ে জোড়া লাগে না)",
        explanation: "These 6 letters NEVER connect to any letter that comes AFTER them on the left: Alif (ا), Dāl (د), Dhāl (ذ), Rā’ (ر), Zāy (ز), and Wāw (و). The next letter must start fresh!",
        explanationBangla: "এই ৬টি হরফ নিজের ডানের হরফের সাথে জোড়া লাগতে পারে, কিন্তু বাঁয়ের হরফের সাথে কখনো জোড়া লাগে না।",
        ruleBadge: "Vital Rule",
        checkQuestion: {
          question: "Which of these letters will NEVER connect to a letter on its left?",
          options: ["Dāl (د)", "Bā’ (ب)", "Seen (س)", "Meem (م)"],
          correctIndex: 0,
          explanation: "Dāl is one of the 6 non-connecting letters (ا د ذ ر ز و).",
        },
      },
    ],
  },
  "l2-2": {
    id: "l2-2",
    levelId: 2,
    lessonNumber: 2,
    slug: "connecting-seen-sheen-saad",
    title: "Connecting Whispering & Emphatic Letters",
    titleBangla: "সীন, শীন ও সোয়াদ এর জোড়া রূপ",
    description: "Learn how Seen (سـ), Sheen (شـ), and Ṣād (صـ) tuck their long tails when starting or sitting in the middle of a word.",
    descriptionBangla: "সীন, শীন ও সোয়াদের শেষ অংশ বাদ দিয়ে কীভাবে শব্দে জোড়া লাগানো হয় তা দেখুন।",
    quizId: "q2",
    slides: [
      {
        id: "s1",
        arabic: "سـ  ـسـ  ـس",
        transliteration: "Seen in all positions",
        audioPrompt: "سين",
        title: "Seen (س): The Three Teeth",
        titleBangla: "সীন: তিনটি দাঁত বজায় থাকে",
        explanation: "Notice how Seen keeps its three signature teeth in the beginning and middle, dropping its sweeping tail until the final position.",
        explanationBangla: "শুরুতে ও মাঝে তিনটি দাঁত বজায় রেখে সামনে হাত বাড়ায়, শেষে পুরো লেজটি ফেরত আসে।",
      },
    ],
  },

  // ==========================================
  // LEVEL 3: HARAKAT (VOWEL SIGNS)
  // ==========================================
  "l3-1": {
    id: "l3-1",
    levelId: 3,
    lessonNumber: 1,
    slug: "fathah-kasrah-dammah",
    title: "The Three Short Vowels (Harakat)",
    titleBangla: "তিনটি প্রধান হরকত (যবর, যের ও পেশ)",
    description: "Arabic letters are consonants. Harakat are small marks placed above or below letters to give them short vowel sounds: 'a', 'i', and 'u'.",
    descriptionBangla: "যবর (া-ধ্বনি), যের (ি-ধ্বনি) এবং পেশ (ু-ধ্বনি) দিয়ে আরবি অক্ষর পড়ার নিয়ম।",
    quizId: "q3",
    slides: [
      {
        id: "s1",
        arabic: "بَ  تَ  ثَ  جَ",
        transliteration: "Ba, Ta, Tha, Ja",
        audioPrompt: "بَ تَ تَ ثَ",
        title: "Fathah ( َ ) — Short 'a' Sound",
        titleBangla: "যবর ( َ ) — 'আ' বা আকারের মতো শব্দ",
        explanation: "Fathah is a diagonal stroke written ABOVE a letter. It produces a crisp, open short 'a' sound like in 'cup'. E.g. بَ = Ba.",
        explanationBangla: "যবর হরফের উপরে একটি হেলানো দাগ। এটি বাংলা 'আ' বা আকারের মতো সংক্ষেপিত আওয়াজ দেয়। যেমন: بَ = বা।",
        formExamples: [
          { label: "Ba with Fathah", text: "بَ", translit: "Ba" },
          { label: "Da with Fathah", text: "دَ", translit: "Da" },
          { label: "Ra with Fathah", text: "رَ", translit: "Ra" },
        ],
      },
      {
        id: "s2",
        arabic: "بِ  تِ  ثِ  جِ",
        transliteration: "Bi, Ti, Thi, Ji",
        audioPrompt: "بِ تِ ثِ جِ",
        title: "Kasrah ( ِ ) — Short 'i' Sound",
        titleBangla: "যের ( ِ ) — 'ই' বা ই-কারের মতো শব্দ",
        explanation: "Kasrah is a diagonal stroke written UNDERNEATH a letter. It produces a smiling short 'i' sound like in 'bit'. E.g. بِ = Bi.",
        explanationBangla: "যের হরফের নিচে বসে এবং এটি বাংলা 'ই' বা ই-কারের মতো সংক্ষিপ্ত আওয়াজ দেয়। যেমন: بِ = বি।",
      },
      {
        id: "s3",
        arabic: "بُ  تُ  ثُ  جُ",
        transliteration: "Bu, Tu, Thu, Ju",
        audioPrompt: "بُ تُ ثُ جُ",
        title: "Dammah ( ُ ) — Short 'u' Sound",
        titleBangla: "পেশ ( ُ ) — 'উ' বা উ-কারের মতো শব্দ",
        explanation: "Dammah is a miniature Waw shape written ABOVE a letter. Round both lips forward to produce a short 'u' sound like in 'put'. E.g. بُ = Bu.",
        explanationBangla: "পেশ হরফের উপর ছোট ওয়াও এর মতো বসে। দুই ঠোঁট গোল করে 'উ' বা উ-কারের মতো পড়তে হয়। যেমন: بُ = বু।",
      },
    ],
  },
  "l3-2": {
    id: "l3-2",
    levelId: 3,
    lessonNumber: 2,
    slug: "the-sukoon",
    title: "Sukoon ( ْ ) — The Silent Stop",
    titleBangla: "সুকূন বা জযম ( ْ ) — থামার চিহ্ন",
    description: "Sukoon is a small circle above a letter indicating zero vowel sound. It connects firmly to the preceding vowel.",
    descriptionBangla: "সুকূন বা জযম হরফকে স্বরহীন অবস্থায় পূর্ববর্তী হরকতের সাথে বেঁধে উচ্চারণ করায়।",
    quizId: "q3",
    slides: [
      {
        id: "s1",
        arabic: "أَبْ  أَتْ  أَثْ",
        transliteration: "Ab, At, Ath",
        audioPrompt: "أَبْ أَتْ أَثْ",
        title: "Stopping on a Letter",
        titleBangla: "হরফে থামার নিয়ম",
        explanation: "When a letter has a Sukoon ( ْ ), you pronounce its consonant sound and immediately stop without adding 'a', 'i', or 'u'. أَبْ = 'Ab'.",
        explanationBangla: "সুকূনযুক্ত হরফে কোনো স্বরধ্বনি (যবর/যের/পেশ) থাকে না, আগের হরকতের সাথে মিলিয়ে থেমে যেতে হয়।",
      },
    ],
  },

  // ==========================================
  // LEVEL 4: ADVANCED SIGNS (TANWEEN, SHADDAH, MADD)
  // ==========================================
  "l4-1": {
    id: "l4-1",
    levelId: 4,
    lessonNumber: 1,
    slug: "tanween-double-vowels",
    title: "Tanween: Double Vowel Nunation",
    titleBangla: "তানবীন: দুই যবর, দুই যের ও দুই পেশ",
    description: "Tanween doubles the short vowels (ً ٍ ٌ) and adds a hidden 'n' sound at the end of nouns: -an, -in, -un.",
    descriptionBangla: "দুই যবর (ান), দুই যের (িন), এবং দুই পেশ (ুন) এর উচ্চারণ ও কুরআন পাঠের নিয়ম।",
    quizId: "q4",
    slides: [
      {
        id: "s1",
        arabic: "بًا  بٍ  بٌ",
        transliteration: "Ban, Bin, Bun",
        audioPrompt: "بَنْ بِنْ بُنْ",
        title: "The Three Forms of Tanween",
        titleBangla: "তানবীনের তিন প্রকার",
        explanation: "Fathatayn (ً) = 'an' (usually accompanied by a silent Alif: بًا). Kasratayn (ٍ) = 'in' (بٍ). Dammatayn (ٌ) = 'un' (بٌ).",
        explanationBangla: "দুই যবর = 'আন' (বাইয়ান), দুই যের = 'ইন' (বায়্যিন), দুই পেশ = 'উন' (বায়্যুন)।",
      },
    ],
  },
  "l4-2": {
    id: "l4-2",
    levelId: 4,
    lessonNumber: 2,
    slug: "shaddah-consonant-doubling",
    title: "Shaddah ( ّ ) — Consonant Emphasis",
    titleBangla: "তাশদীদ ( ّ ) — হরফকে দ্বিত্ব করা",
    description: "Shaddah (Tashdeed) looks like a small 'w' above a letter. It means the letter is doubled: first with a Sukoon, then with a Harakah!",
    descriptionBangla: "তাশদীদযুক্ত হরফ দুইবার পড়া হয় — প্রথমবার আগের হরফের সাথে জযম দিয়ে, দ্বিতীয়বার নিজের হরকত দিয়ে।",
    quizId: "q4",
    slides: [
      {
        id: "s1",
        arabic: "رَبِّ  =  رَبْ + بِ",
        transliteration: "Rab-bi (Rabbi)",
        audioPrompt: "رَبِّ",
        title: "Two Letters in One",
        titleBangla: "এক হরফে দুই হরফের শক্তি",
        explanation: "In the word رَبِّ (Rabbi), the Ba has a Shaddah with Kasrah underneath. You press on the Ba: 'Rab' + 'bi' = 'Rabbi'.",
        explanationBangla: "রَبِّ শব্দটিতে বা এর উপর তাশদীদ আছে। তাই এটি 'রাব' + 'বি' = 'রাব্বি' হিসেবে দৃঢ়ভাবে উচ্চারিত হয়।",
      },
    ],
  },

  // ==========================================
  // LEVEL 5: WORD FORMATION & VOCABULARY
  // ==========================================
  "l5-1": {
    id: "l5-1",
    levelId: 5,
    lessonNumber: 1,
    slug: "two-and-three-letter-words",
    title: "Reading 2 & 3 Letter Words",
    titleBangla: "২ ও ৩ অক্ষরের শব্দ পাঠ",
    description: "Now blend sounds together! Move smoothly from letter to letter without pausing between them.",
    descriptionBangla: "আলাদা আলাদা অক্ষর থেকে পূর্ণ শব্দে রূপান্তর এবং একটানা সাবলীল পাঠ।",
    quizId: "q5",
    slides: [
      {
        id: "s1",
        arabic: "كَتَبَ",
        transliteration: "Ka - Ta - Ba = Kataba",
        audioPrompt: "كَتَبَ",
        title: "Ka + Ta + Ba = Kataba (He Wrote)",
        titleBangla: "কা + তা + বা = ক্বাতাবা (তিনি লিখলেন)",
        explanation: "Each letter has a Fathah. Read each sound with equal duration: Ka - Ta - Ba -> 'Kataba'. Do not drag or prolong any sound.",
        explanationBangla: "তিনটি হরফেই যবর আছে। সমান তালে দ্রুত মিলিয়ে পড়ুন: ক্বা-তা-বা -> ক্বাতাবা।",
      },
      {
        id: "s2",
        arabic: "قَرَأَ",
        transliteration: "Qa - Ra - 'A = Qara'a",
        audioPrompt: "قَرَأَ",
        title: "Qa + Ra + 'A = Qara'a (He Read)",
        titleBangla: "ক্বাফ + র + আলিফ = ক্বারা'আ (তিনি পড়লেন)",
        explanation: "The first word revealed in the Quran! Deep heavy Qaf (قَ), heavy rolled Ra (رَ), and sharp glottal stop Hamzah on Alif (أَ).",
        explanationBangla: "পবিত্র কুরআনের প্রথম অবতীর্ণ শব্দ! ক্বাফ ভারী, র যবরের কারণে ভারী, আর আলিফের উপর হামযাহ দিয়ে স্পষ্ট সমাপ্তি।",
      },
    ],
  },
  "l5-2": {
    id: "l5-2",
    levelId: 5,
    lessonNumber: 2,
    slug: "quranic-core-words",
    title: "Essential Quranic Vocabulary",
    titleBangla: "কুরআনের মূল শব্দভাণ্ডার",
    description: "Practice sight-reading the most frequently occurring words in the Holy Quran.",
    descriptionBangla: "পবিত্র কুরআনে শত শত বার আসা মৌলিক বরকতময় শব্দসমূহ চেনা ও পাঠ করা।",
    quizId: "q5",
    slides: [
      {
        id: "s1",
        arabic: "كِتَابٌ",
        transliteration: "Kitābun",
        audioPrompt: "كِتَابٌ",
        title: "Kitāb (Book)",
        titleBangla: "কিতাব (বই / কুরআন)",
        explanation: "Notice the Madd elongation on the Ta (ـتَا) followed by Dammatayn Tanween on Ba (بٌ).",
        explanationBangla: "তা এর সাথে আলিফ যোগ হয়ে ১ আলিফ টেনে পড়া (মাদ্দ) এবং বা এর উপর দুই পেশ (তানবীন)।",
      },
      {
        id: "s2",
        arabic: "رَحْمَةٌ",
        transliteration: "Raḥmatun",
        audioPrompt: "رَحْمَةٌ",
        title: "Raḥmah (Mercy)",
        titleBangla: "রাহমাহ (দয়া ও করুণা)",
        explanation: "Ra with Fathah (رَ), clean throat breathy Haa with Sukoon (حْ), Meem with Fathah (مَ), and closed Ta Marbutah (ةٌ).",
        explanationBangla: "র যবর 'রা', গলার মধ্যভাগ থেকে হা সাকিন 'হ', মীম যবর 'মা', তা দুই পেশ 'তুন' -> রাহমাতুন।",
      },
    ],
  },

  // ==========================================
  // LEVEL 6: QURAN READING & TAJWEED
  // ==========================================
  "l6-1": {
    id: "l6-1",
    levelId: 6,
    lessonNumber: 1,
    slug: "surah-al-fatihah-part-1",
    title: "Surah Al-Fatihah — The Opening",
    titleBangla: "সূরা আল-ফাতিহা — সূচনা (আয়াত ১-৪)",
    description: "Read the greatest chapter of the Quran verse by verse. Apply all your reading skills with authentic Tajweed rules.",
    descriptionBangla: "উম্মুল কুরআন সূরা ফাতিহার প্রথম চারটি আয়াত বিশুদ্ধ তিলাওয়াত ও তাজবীদ সহ পাঠ।",
    quizId: "q6",
    slides: [
      {
        id: "s1",
        arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        transliteration: "Bismillāhir-Raḥmānir-Raḥīm",
        audioPrompt: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        title: "Verse 1: In the Name of Allah",
        titleBangla: "আয়াত ১: পরম করুণাময় ও দয়ালু আল্লাহর নামে",
        explanation: "Pay attention to the light Lam in 'Bismillah' because of the preceding Kasrah on Meem, followed by heavy Ra in 'Ar-Rahman' and 'Ar-Raheem'.",
        explanationBangla: "বিসমিল্লাহ এর লাম হালকা (যেরের কারণে), আর আর-রহমান ও আর-রহীমের র তাশদীদযুক্ত হওয়ায় ভারী করে পড়তে হয়।",
      },
      {
        id: "s2",
        arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        transliteration: "Al-ḥamdu lillāhi Rabbil-‘ālamīn",
        audioPrompt: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        title: "Verse 2: All Praise is for Allah",
        titleBangla: "আয়াত ২: সমস্ত প্রশংসা বিশ্বজগতের প্রতিপালক আল্লাহর জন্য",
        explanation: "Pronounce the clean throat Ḥā’ in 'Al-Ḥamdu', light double Ba in 'Rabbi', and deep throat ‘Ayn in 'Al-‘Ālamīn'.",
        explanationBangla: "আলহামদুর 'হা' পরিষ্কার কণ্ঠনালীর মধ্যভাগ হতে, রব্বির 'বা' তাশদীদ সহ এবং আলামীনের 'আইন' গভীর হতে।",
      },
    ],
  },
  "l6-2": {
    id: "l6-2",
    levelId: 6,
    lessonNumber: 2,
    slug: "surah-al-ikhlas",
    title: "Surah Al-Ikhlas — The Sincerity",
    titleBangla: "সূরা আল-ইখলাস — একত্ববাদের নির্যাস",
    description: "Master the Qalqalah (echoing bounce) rule on Qaf, Dal, and Ba throughout this profound 4-verse Surah.",
    descriptionBangla: "সূরা ইখলাসে কলকলাহর (প্রতিধ্বনি সৃষ্টিকারী হরফ: দাল) সঠিক নিয়ম আয়ত্ত করুন।",
    quizId: "q6",
    slides: [
      {
        id: "s1",
        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        transliteration: "Qul Huwal-Lāhu Aḥad",
        audioPrompt: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        title: "Verse 1: Say, He is Allah, the One",
        titleBangla: "আয়াত ১: বলুন, তিনিই আল্লাহ, একক",
        explanation: "Qalqalah Rule: When you stop on 'Aḥad', the Dāl receives a Sukoon and creates a crisp echoing bounce: 'A-had(d)'.",
        explanationBangla: "কলকলাহ নিয়ম: 'আহাদ' শব্দে থামলে দাল সাকিন হয়ে সুন্দর প্রতিধ্বনি তৈরি করে।",
        ruleBadge: "Qalqalah (Echo)",
      },
      {
        id: "s2",
        arabic: "اللَّهُ الصَّمَدُ",
        transliteration: "Allāhuṣ-Ṣamad",
        audioPrompt: "اللَّهُ الصَّمَدُ",
        title: "Verse 2: Allah, the Eternal Refuge",
        titleBangla: "আয়াত ২: আল্লাহ কারো মুখাপেক্ষী নন",
        explanation: "Notice the heavy emphatic Ṣād in 'Aṣ-Ṣamad' followed by another crisp Qalqalah bounce on the final Dāl.",
        explanationBangla: "আস-সমাদ এর সোয়াদ ভারী এবং শেষ হরফ দাল আবার কলকলাহর প্রতিধ্বনি সহ থামবে।",
      },
      {
        id: "s3",
        arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        transliteration: "Lam yalid wa lam yūlad",
        audioPrompt: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        title: "Verse 3: He neither begets nor is born",
        titleBangla: "আয়াত ৩: তিনি কাউকে জন্ম দেননি এবং তাঁকেও জন্ম দেওয়া হয়নি",
        explanation: "Two clear Qalqalah bounces in this verse: 'ya-lid(d)' and 'yū-lad(d)'.",
        explanationBangla: "এই আয়াতে দুইবার দাল সাকিনে স্পষ্ট কলকলাহ প্রতিধ্বনি হবে: ইয়ালিদ ও ইউলাদ।",
      },
      {
        id: "s4",
        arabic: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        transliteration: "Wa lam yakul-lahū kufuwan aḥad",
        audioPrompt: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        title: "Verse 4: Nor is there to Him any equivalent",
        titleBangla: "আয়াত ৪: এবং তাঁর সমতুল্য কেউই নেই",
        explanation: "Idgham Rule: The Noon Sakinah in 'yakun' merges seamlessly into the following Laam: 'yakul-lahu'.",
        explanationBangla: "ঈদগাম নিয়ম: 'ইয়াকুন' এর নূন সাকিন পরের লামের মধ্যে মিলিয়ে 'ইয়াকুল-লাহু' হিসেবে পড়া হয়।",
      },
    ],
  },
};

