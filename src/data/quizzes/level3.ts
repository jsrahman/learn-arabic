import { Quiz } from "./types";

export const quizLevel3: Quiz = {
  id: "q3",
  levelId: 3,
  title: "Level 3: Connected Script, Ligatures & Orthography Challenge",
  titleBangla: "লেভেল ৩: যুক্তাক্ষর, হরফের চার রূপ ও ক্যালিগ্রাফিক গঠন পরীক্ষা",
  description: "Examine complex connected letterforms, beginning/middle/ending transformations, ligature identification, and non-connecting breaks in Quranic script.",
  descriptionBangla: "শব্দের শুরুতে, মাঝে ও শেষে হরফের রূপান্তর, লিগেচার বা যুক্তবর্ণ এবং অবন্ধনযোগ্য হরফের কারণে সৃষ্ট জটিল কুরআনীয় হরফের রূপ যাচাই করুন।",
  passingScore: 70,
  questions: [
    {
      id: "q3_1",
      type: "multiple_choice",
      question: "In the word (كَتَبَ), what form is the letter Tā’ (ت) appearing in?",
      questionBangla: "শব্দটিতে (كَتَبَ) তা (ت) হরফটি কোন রূপে এসেছে?",
      promptText: "كَتَبَ",
      options: ["Initial form (beginning)", "Medial form (middle)", "Final form (end)", "Isolated form"],
      correctIndex: 1,
      explanation: "In 'kataba', Tā’ is in the medial position, connecting backwards to Kāf and forward to Bā’.",
      explanationBangla: "এখানে 'তা' মধ্যম রূপে রয়েছে, যা ডানে কাফ এবং বামে বা-এর সাথে যুক্ত হয়েছে।"
    },
    {
      id: "q3_2",
      type: "multiple_choice",
      question: "Which of the following letters NEVER changes its vertical height regardless of whether it connects or stands alone?",
      questionBangla: "নিচের কোন হরফটি শুরুতে বা মাঝে যুক্ত হলেও তার খাড়া উচ্চতা অপরিবর্তিত থাকে?",
      promptText: "ط",
      options: ["Ṭā’ (ط)", "Mīm (م)", "‘Ayn (ع)", "Yā’ (ي)"],
      correctIndex: 0,
      explanation: "Ṭā’ (ط) and Ẓā’ (ظ) maintain their tall vertical mast upright in initial, medial, and final positions.",
      explanationBangla: "তোয়া (ط) এবং জোয়া (ظ) শব্দের যে কোনো স্থানে এলেও তাদের খাড়া দণ্ড সর্বদা অক্ষুণ্ণ থাকে।"
    },
    {
      id: "q3_3",
      type: "multiple_choice",
      question: "How does the letter ‘Ayn (ع) uniquely transform in its MEDIAL connected position (e.g. نَعْبُدُ)?",
      questionBangla: "আইন (ع) হরফটি শব্দের মাঝে যুক্ত অবস্থায় (যেমন: نَعْبُدُ) কীভাবে বিশেষ রূপ নেয়?",
      promptText: "نَعْبُدُ",
      options: [
        "Its top head becomes a closed, inverted filled triangle/loop",
        "It looks exactly like Alif",
        "It gains three dots",
        "It drops below the line entirely"
      ],
      correctIndex: 0,
      explanation: "In authentic Arabic script, medial ‘Ayn (ـعـ) and Ghayn (ـغـ) become closed, shaded inverted triangular loops.",
      explanationBangla: "শব্দের মাঝে আইন এবং গাইন যুক্ত হলে তাদের মাথাটি উল্টানো ত্রিকোণাকৃতি বা ভরাট বৃত্তে রূপান্তরিত হয়।"
    },
    {
      id: "q3_4",
      type: "multiple_choice",
      question: "What happens to the descending tail of Jīm (ج), Ḥā’ (ح), and Khā’ (خ) when they appear at the BEGINNING of a word?",
      questionBangla: "জীম, হা ও খা যখন শব্দের শুরুতে আসে, তখন তাদের নিচের ঝুলন্ত পেটের কী পরিবর্তন হয়?",
      promptText: "جَعَلَ",
      options: [
        "The curved bottom belly is completely dropped, and only the horizontal brow connects on the baseline",
        "The tail doubles in size",
        "The tail points upward like Alif",
        "They cannot be written at the beginning"
      ],
      correctIndex: 0,
      explanation: "When connecting forward, their lower loop is discarded, leaving just the upper beak and baseline connector.",
      explanationBangla: "শুরুতে যুক্ত হওয়ার সময় তাদের পেছনের বৃত্তাকার পেট বাদ দিয়ে শুধু মাথার অংশটি লাইনের ওপর যুক্ত হয়।"
    },
    {
      id: "q3_5",
      type: "multiple_choice",
      question: "In the word (يَدْعُونَ), why does the letter ‘Ayn (ع) appear in its INITIAL form rather than medial, even though it is inside the word?",
      questionBangla: "(يَدْعُونَ) শব্দটিতে আইন (ع) মাঝে থাকা সত্ত্বেও কেন শুরুর স্বতন্ত্র রূপ নিয়েছে?",
      promptText: "يَدْعُونَ",
      options: [
        "Because it is preceded by Dāl (د), which is a non-connecting letter that breaks the cursive line to its left",
        "Because it has a Sukoon",
        "Because Dāl must be followed by a capital letter",
        "It is a spelling error in the Quran"
      ],
      correctIndex: 0,
      explanation: "Dāl (د) does not connect to anything on its left. Therefore, any letter following Dāl must begin afresh.",
      explanationBangla: "দাল (د) একটি অবন্ধনযোগ্য হরফ যা বামের হরফকে ধরে না; ফলে এর পরবর্তী হরফটি শব্দের মাঝে হলেও শুরুর রূপ পরিগ্রহ করে।"
    },
    {
      id: "q3_6",
      type: "multiple_choice",
      question: "What are the 6 letters that break the connection to the left?",
      questionBangla: "বাম দিকের সাথে সংযোগ বিচ্ছিন্নকারী ৬টি অবন্ধনযোগ্য হরফ কোনগুলো?",
      options: [
        "ا, د, ذ, ر, ز, و",
        "ب, ت, ث, ن, ي, ف",
        "ج, ح, خ, ع, غ, م",
        "س, ش, ص, ض, ط, ظ"
      ],
      correctIndex: 0,
      explanation: "Alif, Dāl, Dhāl, Rā, Zāy, and Wāw can connect from the right, but never connect to their left.",
      explanationBangla: "আলিফ, দাল, যাল, র, যা এবং ওয়াও ডানে জোড়া লাগে কিন্তু বামের হরফের সাথে কখনোই যুক্ত হয় না।"
    },
    {
      id: "q3_7",
      type: "multiple_choice",
      question: "Identify the three letters that share the exact same 'tooth' (nib) shape when written at the beginning or middle of a word, differing only by dots:",
      questionBangla: "শব্দের শুরুতে ও মাঝে ঠিক একই 'দাঁত' বা খাড়া খাঁজ বিশিষ্ট রূপ নেয় কিন্তু কেবল নুকতা দ্বারা পৃথক হয় কোন তিনটি হরফ?",
      options: [
        "ب, ت, ث (and also ن and ي in initial/medial positions)",
        "د, ذ, ر",
        "س, ش, ص",
        "ف, ق, ك"
      ],
      correctIndex: 0,
      explanation: "In initial/medial positions, Bā’, Tā’, Thā’, Nūn, and Yā’ all reduce to a single short tooth (سِنّ).",
      explanationBangla: "শুরুতে ও মাঝে বা, তা, সা, নূন এবং ইয়া প্রত্যেকেই একটি মাত্র একক দাঁতের (খাঁজ) মতো রূপ ধারণ করে।"
    },
    {
      id: "q3_8",
      type: "multiple_choice",
      question: "In the word (خَلَقَ), how is the final Qāf (ق) written?",
      questionBangla: "(خَلَقَ) শব্দে শেষের ক্বাফ (ق) কীভাবে লেখা হয়েছে?",
      promptText: "خَلَقَ",
      options: [
        "In its full final form with its circular basin descending below the baseline",
        "As a straight horizontal line",
        "Without any dots",
        "As an initial tooth"
      ],
      correctIndex: 0,
      explanation: "At the end of a connected word, Qāf restores its full rounded basin descending below the line.",
      explanationBangla: "শব্দের শেষে ক্বাফ তার পূর্ণ পেয়ালা ফিরে পায় যা লাইনের নিচে নেমে যায়।"
    },
    {
      id: "q3_9",
      type: "multiple_choice",
      question: "How is the letter Hā’ (هـ) uniquely shaped in its MEDIAL position (e.g. يَهْدِي)?",
      questionBangla: "হা (هـ) হরফটি শব্দের মাঝে যুক্ত হলে (যেমন: يَهْدِي) কী চমৎকার রূপ নেয়?",
      promptText: "يَهْدِي",
      options: [
        "A dual loop resembling a figure-8 or butterfly extending above and below the baseline (هاء أذنية / فيونكة)",
        "A single dot",
        "A tall vertical stick",
        "A flat open dish"
      ],
      correctIndex: 0,
      explanation: "In medial position, Hā’ transforms into a twin-loop ribbon (often called the butterfly Hā’ or figure-8).",
      explanationBangla: "শব্দের মাঝে হা (ـهـ) প্রজাপতির ডানা বা ইংরেজি ৮-এর মতো ওপর ও নিচে দ্বি-বৃত্তাকার রূপ নেয়।"
    },
    {
      id: "q3_10",
      type: "multiple_choice",
      question: "How is the letter Hā’ written at the very END of a word when connected from the right (e.g. لَهُ)?",
      questionBangla: "শব্দের শেষে ডানের সাথে যুক্ত অবস্থায় হা (যেমন: لَهُ) কীভাবে রূপ নেয়?",
      promptText: "لَهُ",
      options: [
        "A closed teardrop or oval flag hoisted on a short vertical stem (ـه)",
        "A wide boat with two dots",
        "A circle below the line",
        "An open crescent"
      ],
      correctIndex: 0,
      explanation: "When connected at the end, Hā’ becomes a small oval or teardrop shape raised on a short vertical stem (ـه).",
      explanationBangla: "শব্দের শেষে যুক্ত অবস্থায় হা একটি ছোট খাড়া ডালের মাথায় ওভাল বা পতাকার মতো (ـه) রূপ নেয়।"
    },
    {
      id: "q3_11",
      type: "multiple_choice",
      question: "In the word (بِسْمِ), what happens to the letter Sīn (س)?",
      questionBangla: "(بِسْمِ) শব্দে সীন (س) হরফের কোন রূপ দেখা যায়?",
      promptText: "بِسْمِ",
      options: [
        "Its three teeth connect forward to Mīm while dropping its large ending tail",
        "It loses all its teeth",
        "It gains two dots",
        "It becomes identical to Shīn"
      ],
      correctIndex: 0,
      explanation: "Sīn retains its distinctive three teeth on the baseline while discarding its terminal bowl to join Mīm.",
      explanationBangla: "সীন তার ৩টি খাঁজ বজায় রেখে পেছনের পেয়ালা বাদ দিয়ে মীমের সাথে যুক্ত হয়।"
    },
    {
      id: "q3_12",
      type: "multiple_choice",
      question: "What is the ligature (لله) in the phrase 'Bismillāh' composed of?",
      questionBangla: "বিসমিল্লাহ্ বাক্যে 'লিল্লাহ্' (لله) অংশটি কোন কোন হরফের সমন্বয়ে গঠিত?",
      promptText: "لله",
      options: ["Lām + Lām + Hā’", "Alif + Lām + Hā’", "Lām + Yā’ + Hā’", "Lām + Kāf + Hā’"],
      correctIndex: 0,
      explanation: "The word consists of preposition Lām joined to the majestic name: Lām + Lām + Hā’ (ل + ل + ه).",
      explanationBangla: "এটি দুটি লাম এবং একটি হা এর সমন্বয়ে গঠিত: লাম + লাম + হা।"
    },
    {
      id: "q3_13",
      type: "multiple_choice",
      question: "In the word (مُحَمَّدٌ), how does the letter Mīm connect to Ḥā’?",
      questionBangla: "(مُحَمَّدٌ) শব্দে মীম হরফটি হা-এর সাথে কীভাবে যুক্ত হয়?",
      promptText: "مُحَمَّدٌ",
      options: [
        "The Ḥā’ is stacked directly beneath or suspended from the initial loop of Mīm",
        "They cannot connect",
        "Ḥā’ becomes an Alif",
        "Mīm drops to the bottom of the page"
      ],
      correctIndex: 0,
      explanation: "In Arabic calligraphy, letters like Ḥā’, Jīm, and Khā’ frequently sit under an incoming Mīm in an elegant vertical cascade.",
      explanationBangla: "আরবি লিপিশৈলীতে মীমের ঠিক নিচ থেকে হা ঝুলে এসে চমৎকারভাবে যুক্ত হয়।"
    },
    {
      id: "q3_14",
      type: "multiple_choice",
      question: "Which of the following letters has an entirely different shape in its isolated vs connected forms?",
      questionBangla: "নিচের কোন হরফটি একক রূপের তুলনায় যুক্ত অবস্থায় সবচেয়ে চমকপ্রদ আকার বদলায়?",
      promptText: "ك",
      options: ["Kāf (ك to كـ)", "Dāl (د)", "Rā’ (ر)", "Zāy (ز)"],
      correctIndex: 0,
      explanation: "Isolated Kāf is a wide flat bowl (ك), but in initial/medial positions it becomes an angled slant stroke (كـ).",
      explanationBangla: "কাফ একক অবস্থায় বাটির মতো (ك), কিন্তু শুরুতে বা মাঝে এটি সম্পূর্ণ পরিবর্তিত হয়ে তেরছা খাড়া রূপ (كـ) ধারণ করে।"
    },
    {
      id: "q3_15",
      type: "multiple_choice",
      question: "In the word (أَنْعَمْتَ), identify the 5 letters in exact sequential order:",
      questionBangla: "(أَنْعَمْتَ) শব্দে বিদ্যমান ৫টি হরফ ক্রমানুসারে চিহ্নিত করুন:",
      promptText: "أَنْعَمْتَ",
      options: [
        "Alif/Hamzah, Nūn, ‘Ayn, Mīm, Tā’",
        "Alif, Bā’, Ḥā’, Mīm, Tā’",
        "Hamzah, Tā’, Ghayn, Nūn, Tā’",
        "Alif, Nūn, Hamzah, Mīm, Bā’"
      ],
      correctIndex: 0,
      explanation: "The word contains: Hamzah on Alif (أَ), Nūn Sakinah (نْ), medial ‘Ayn (عَ), medial Mīm (مْ), and final Tā’ (تَ).",
      explanationBangla: "হরফগুলো হলো: আলিফ/হামযাহ, নূন, আইন, মীম এবং তা।"
    },
    {
      id: "q3_16",
      type: "multiple_choice",
      question: "What is the small dagger-like vertical stroke (الألف الخنجرية) found above words like (هَٰذَا) or (الرَّحْمَٰنِ)?",
      questionBangla: "(هَٰذَا) বা (الرَّحْمَٰنِ) শব্দের ওপর ছোট খাড়া আলিফ চিহ্নটির কাজ কী?",
      promptText: "هَٰذَا  /  الرَّحْمَٰنِ",
      options: [
        "A superscript dagger Alif representing a full long 'ā' vowel omitted in early orthography",
        "A short vowel Kasrah",
        "A sign that the letter is silent",
        "A decoration with no acoustic sound"
      ],
      correctIndex: 0,
      explanation: "The dagger Alif represents an authentic long Alif of prolongation that was preserved phonetically from revelation.",
      explanationBangla: "খাড়া যবর বা খঞ্জরী আলিফ মূলত একটি পূর্ণ দীর্ঘ আলিফ মাদ্দ নির্দেশ করে।"
    },
    {
      id: "q3_17",
      type: "multiple_choice",
      question: "In Quranic orthography, how is Hamzah seated on top of Wāw written in (يُؤْمِنُونَ)?",
      questionBangla: "(يُؤْمِنُونَ) শব্দে ওয়াও এর ওপর হামযাহ (ؤ) কী নির্দেশ করে?",
      promptText: "يُؤْمِنُونَ",
      options: [
        "Wāw acts purely as the seat (kursī) for the glottal stop Hamzah; you pronounce the Hamzah, not the Wāw",
        "You pronounce both Waw and Hamzah together",
        "The Waw is pronounced as a long 'oo' sound",
        "The Hamzah is silent"
      ],
      correctIndex: 0,
      explanation: "The Wāw serves as an orthographic chair (كُرْسِيُّ الْهَمْزَةِ). The actual articulated letter is Hamzah with Sukoon.",
      explanationBangla: "এখানে ওয়াও হলো হামযাহর আসন মাত্র; উচ্চারণ হবে হামযাহর জযমযুক্ত ঝটকাসহ, ওয়াও উচ্চারিত হবে না।"
    },
    {
      id: "q3_18",
      type: "multiple_choice",
      question: "In the word (الصِّرَاطَ), which letter connects to Ṭā’ (ط)?",
      questionBangla: "(الصِّرَاطَ) শব্দে তোয়া (ط) এর সাথে কোন হরফ যুক্ত হয়েছে?",
      promptText: "الصِّرَاطَ",
      options: [
        "The preceding Alif does NOT connect to Ṭā’, so Ṭā’ stands in its standalone final form",
        "Rā’ connects to Ṭā’",
        "Ṣād connects to Ṭā’",
        "Lām connects to Ṭā’"
      ],
      correctIndex: 0,
      explanation: "Alif is preceded by Rā’ (non-connector), and Alif itself is a non-connector; hence Ṭā’ appears detached at the end.",
      explanationBangla: "আলিফ অবন্ধনযোগ্য হওয়ায় তোয়া (ط) পূর্ববর্তী আলিফের সাথে না জুড়ে একক সমাপ্তির রূপ নিয়েছে।"
    },
    {
      id: "q3_19",
      type: "multiple_choice",
      question: "How can you tell apart an initial Nūn (نـ) from an initial Bā’ (بـ), Tā’ (تـ), and Yā’ (يـ)?",
      questionBangla: "শব্দের শুরুতে নূন (نـ) কে বা (بـ), তা (تـ) এবং ইয়া (يـ) থেকে কীভাবে আলাদা করবেন?",
      promptText: "نـ  /  بـ  /  تـ  /  يـ",
      options: [
        "By counting and placing the dots: Nūn has 1 dot above; Bā’ has 1 below; Tā’ has 2 above; Yā’ has 2 below",
        "Nūn is three times wider",
        "Nūn has a curly tail at the start",
        "They have completely different tooth heights"
      ],
      correctIndex: 0,
      explanation: "All four share the identical single tooth; their dot positions and counts are the sole distinguishing feature.",
      explanationBangla: "সবগুলোর মূল দাঁত একই; একমাত্র নুকতার সংখ্যা ও অবস্থান (উপরে/নিচে) এদের পার্থক্য নির্দেশ করে।"
    },
    {
      id: "q3_20",
      type: "multiple_choice",
      question: "In the word (فِي), what form is the letter Yā’ (ي) in?",
      questionBangla: "(فِي) শব্দে ইয়া (ي) কোন রূপে রয়েছে?",
      promptText: "فِي",
      options: ["Final connected form", "Initial form", "Medial form", "Isolated form"],
      correctIndex: 0,
      explanation: "Yā’ is connected to Fā’ at the end of the two-letter word, appearing in its final connected form with its duck-like tail.",
      explanationBangla: "এখানে ইয়া ফা-এর সাথে যুক্ত হয়ে শব্দের শেষে তার পূর্ণ বাঁকানো লেজসহ এসেছে।"
    },
    {
      id: "q3_21",
      type: "multiple_choice",
      question: "Which letter looks like a circle resting on the line in its initial form, but must NEVER be confused with Fā’?",
      questionBangla: "শব্দের শুরুতে গোল মাথার হরফ যা ফা-এর মতো কিন্তু কোনো নুকতা থাকে না, তা কোনটি?",
      promptText: "مـ",
      options: ["Mīm (مـ)", "Wāw (و)", "Hā’ (هـ)", "Qāf (قـ)"],
      correctIndex: 0,
      explanation: "Initial Mīm forms a small rounded knot connecting from its bottom or top to the baseline without any dots.",
      explanationBangla: "শুরুর মীম (مـ) একটি ছোট নুকতাহীন বৃত্তাকার চক্র যা লাইনের সাথে যুক্ত থাকে।"
    },
    {
      id: "q3_22",
      type: "multiple_choice",
      question: "When Lām precedes Mīm (e.g. لَمْ), how are they typically joined in Quranic calligraphic script?",
      questionBangla: "কুরআনি লিপিতে লাম ও মীম যখন যুক্ত হয় (যেমন: لَمْ) তখন তারা কীভাবে জোড়া লাগে?",
      promptText: "لَمْ",
      options: [
        "The tall vertical mast of Lām drops down and Mīm hangs gracefully from its lower tip",
        "They are written on opposite lines",
        "Lām turns upside down",
        "Mīm turns into a circle above Lām"
      ],
      correctIndex: 0,
      explanation: "Lām remains a tall vertical stroke, flowing directly from its lower terminus into the head of Mīm.",
      explanationBangla: "লামের সোজা খাড়া দণ্ডের গোড়া থেকে মীমের মাথাটি সংযুক্ত হয়ে নিচে নেমে যায়।"
    },
    {
      id: "q3_23",
      type: "multiple_choice",
      question: "In the word (عَلَيْهِمْ), which letter is located immediately between Lām and Hā’?",
      questionBangla: "(عَلَيْهِمْ) শব্দে লাম এবং হা-এর ঠিক মাঝখানে কোন হরফটি অবস্থিত?",
      promptText: "عَلَيْهِمْ",
      options: ["Yā’ (ي)", "Alif (ا)", "Nūn (ن)", "Tā’ (ت)"],
      correctIndex: 0,
      explanation: "The word breakdown is: ‘Ayn + Lām + Yā’ + Hā’ + Mīm (ع - ل - ي - هـ - م).",
      explanationBangla: "শব্দটিতে লাম ও হা এর মাঝে যবরযুক্ত ইয়া হরফটি অবস্থান করছে।"
    },
    {
      id: "q3_24",
      type: "multiple_choice",
      question: "What is the difference between final Hā’ (ـه) and final Tā’ Marbūṭah (ـة)?",
      questionBangla: "শব্দের শেষের হা (ـه) এবং তা মারবূতাহ (ـة) এর মধ্যকার চাক্ষুষ পার্থক্য কী?",
      promptText: "ـه  /  ـة",
      options: [
        "Tā’ Marbūṭah has TWO dots on top; final Hā’ has NO dots",
        "Final Hā’ has one dot; Tā’ Marbūṭah has three",
        "Tā’ Marbūṭah has a line underneath",
        "They look completely identical in every font"
      ],
      correctIndex: 0,
      explanation: "Tā’ Marbūṭah is visually an ending Hā’ crowned with the two dots of Tā’.",
      explanationBangla: "তা মারবূতাহ দেখতে হা-এর মতো কিন্তু তার মাথায় দুটি নুকতা থাকে; পক্ষান্তরে হা নুকতাহীন।"
    },
    {
      id: "q3_25",
      type: "multiple_choice",
      question: "In the word (شَيْءٍ), why does the final Hamzah (ء) sit on the line completely detached rather than on Yā’?",
      questionBangla: "(شَيْءٍ) শব্দে শেষ হামযাহ (ء) কেন ইয়ার পিঠে না বসে লাইনের ওপর আলাদা বসেছে?",
      promptText: "شَيْءٍ",
      options: [
        "Because it is preceded by a Sukoon on the Yā’, meaning the Hamzah is an independent consonant on the line (على السطر)",
        "Because the printer ran out of space",
        "Because Yā’ cannot carry Hamzah",
        "Because Hamzah is always written on the floor"
      ],
      correctIndex: 0,
      explanation: "When an ending Hamzah is preceded by a Sakin letter, it is written on the baseline independently (مُتَطَرِّفَةٌ عَلَى السَّطْر).",
      explanationBangla: "শব্দের শেষে সাকিনযুক্ত হরফের পর হামযাহ এলে তা কোনো হরফের ওপর না বসে সরাসরি লাইনের ওপর বসে।"
    },
    {
      id: "q3_26",
      type: "multiple_choice",
      question: "How many letters in the word (الرَّحْمَٰنِ) do NOT connect to the subsequent letter on their left?",
      questionBangla: "(الرَّحْمَٰنِ) শব্দটিতে কয়টি হরফ তাদের বাম দিকের পরবর্তী হরফের সাথে জোড়া লাগেনি?",
      promptText: "الرَّحْمَٰنِ",
      options: ["Two letters: Alif and Rā’", "Only one letter", "Three letters", "None"],
      correctIndex: 0,
      explanation: "First Alif does not connect to Lām (breaks to left), and Rā’ does not connect to Ḥā’ (breaks to left). Total = 2.",
      explanationBangla: "দুটি হরফ: প্রথম আলিফ লামকে ধরে না এবং র হা-কে ধরে না।"
    },
    {
      id: "q3_27",
      type: "multiple_choice",
      question: "Identify the word constructed by joining the letters: [س - ج - د]",
      questionBangla: "[س - ج - د] হরফ তিনটি যুক্ত করলে কোন শব্দটি গঠিত হয়?",
      options: ["سَجَدَ", "جَسَدَ", "سَدَجَ", "دَسَجَ"],
      correctIndex: 0,
      explanation: "Sīn connects to Jīm, which connects to Dāl, forming the Quranic verb 'Sajada' (سَجَدَ - he prostrated).",
      explanationBangla: "সীন, জীম এবং দাল পরস্পর যুক্ত হয়ে তৈরি হয় 'সাজাদা' (سَجَدَ)।"
    },
    {
      id: "q3_28",
      type: "multiple_choice",
      question: "Identify the word constructed by joining the letters: [خ - ل - ق]",
      questionBangla: "[خ - ل - ق] হরফ তিনটি যুক্ত করলে কোনটি গঠিত হয়?",
      options: ["خَلَقَ", "قَلَخَ", "لَخَقَ", "خَقَلَ"],
      correctIndex: 0,
      explanation: "Khā’ connects to Lām, which connects to Qāf, creating 'Khalaqa' (خَلَقَ - He created).",
      explanationBangla: "খা, লাম এবং ক্বাফ যুক্ত হয়ে গঠিত হয় 'খালাক্বা' (خَلَقَ)।"
    },
    {
      id: "q3_29",
      type: "multiple_choice",
      question: "In the Quranic spelling of (إِبْرَاهِيمَ), which letter does the initial Hamzah sit under?",
      questionBangla: "(إِبْرَاهِيمَ) বানানে শুরুর হামযাহটি কোথায় বসে?",
      promptText: "إِبْرَاهِيمَ",
      options: ["Underneath the vertical Alif with a Kasrah", "On top of Wāw", "Inside Mīm", "On the line"],
      correctIndex: 0,
      explanation: "When Hamzah carries a Kasrah (sound 'i'), it is written underneath the vertical stroke of Alif (إِ).",
      explanationBangla: "হামযাহ যখন যের (কাসরাহ) গ্রহণ করে, তখন তা আলিফের নিচে (إِ) অবস্থান করে।"
    },
    {
      id: "q3_30",
      type: "multiple_choice",
      question: "What is the function of the small loop or hook on the right of the letter Ṣād (ص) when connecting to the next letter?",
      questionBangla: "সোয়াদ (ص) যখন পরবর্তী হরফের সাথে জোড়া লাগে তখন তার ডানে/শেষে থাকা ছোট খাঁজটির (سِنَّة) কাজ কী?",
      promptText: "صَبَرَ",
      options: [
        "It is the mandatory intrinsic tooth of Ṣād, preserving its anatomical identity before connecting forward",
        "It is a decoration that can be omitted",
        "It turns the letter into a Dāḍ",
        "It acts as a Kasrah"
      ],
      correctIndex: 0,
      explanation: "Ṣād and Ḍād must always have their distinctive small tooth (سنة الصاد) after the oval loop before joining the next letter.",
      explanationBangla: "সোয়াদ এবং দোয়াদ হরফের ডিম্বাকার মাথার পরেই একটি অবিচ্ছেদ্য ছোট দাঁত থাকতে হয় যা পরবর্তী হরফকে সংযুক্ত করে।"
    },
    {
      id: "q3_31",
      type: "multiple_choice",
      question: "In the word (يَسْتَهْزِئُ), which chair does the final Hamzah sit upon?",
      questionBangla: "(يَسْتَهْزِئُ) শব্দে শেষ হামযাহটি কার আসনে বসেছে?",
      promptText: "يَسْتَهْزِئُ",
      options: [
        "On a dotless Yā’ / Nabrah (نبرة)",
        "On an Alif",
        "On a Wāw",
        "Directly on Zāy"
      ],
      correctIndex: 0,
      explanation: "Because the preceding letter carries a Kasrah (zāy with kasrah), the ending Hamzah sits on a Yā’ chair (على الياء/النبرة).",
      explanationBangla: "পূর্ববর্তী হরফে কাসরাহ (যের) থাকায় শেষ হামযাহটি ইয়া বা নাবারাহর ওপর আসন গ্রহণ করেছে।"
    },
    {
      id: "q3_32",
      type: "multiple_choice",
      question: "How many letters are in the word (فَاسْتَقِمْ)?",
      questionBangla: "(فَاسْتَقِمْ) শব্দটিতে মোট কতটি হরফ রয়েছে?",
      promptText: "فَاسْتَقِمْ",
      options: ["6 letters: Fā’, Alif, Sīn, Tā’, Qāf, Mīm", "5 letters", "7 letters", "4 letters"],
      correctIndex: 0,
      explanation: "The word consists of: Fā’ (ف), Hamzatul Wasl (ا), Sīn (س), Tā’ (ت), Qāf (ق), and Mīm (م). Total = 6.",
      explanationBangla: "মোট ৬টি হরফ: ফা, আলিফ (হামযাতুল ওয়াসল), সীন, তা, ক্বাফ এবং মীম।"
    },
    {
      id: "q3_33",
      type: "multiple_choice",
      question: "In the word (الضُّحَىٰ), what is the final letter (ىٰ) termed orthographically?",
      questionBangla: "(الضُّحَىٰ) শব্দের শেষের হরফটিকে (ىٰ) পারিভাষিকভাবে কী বলা হয়?",
      promptText: "الضُّحَىٰ",
      options: ["Alif Maqṣūrah (الألف المقصورة)", "Standard Yā’", "Tā’ Marbūṭah", "Hamzah"],
      correctIndex: 0,
      explanation: "It is Alif Maqṣūrah, shaped like a dotless Yā’ but pronounced as a long Alif ('ā').",
      explanationBangla: "এটিকে আলিফ মাকসূরাহ বলা হয়; এটি নুকতাহীন ইয়ার মতো লেখা হলেও দীর্ঘ আলিফের ন্যায় উচ্চারিত হয়।"
    },
    {
      id: "q3_34",
      type: "multiple_choice",
      question: "Why does the letter Wāw (و) never connect to the following letter in words like (وَاللَّهِ)?",
      questionBangla: "(وَاللَّهِ) শব্দে ওয়াও (و) কেন পরবর্তী লামের সাথে যুক্ত হয় না?",
      promptText: "وَاللَّهِ",
      options: [
        "Because Wāw is one of the 6 non-connecting letters",
        "Because Allah's name must start separated",
        "Because Waw has a Fathah",
        "It is connected in Arabic"
      ],
      correctIndex: 0,
      explanation: "Wāw belongs to the six letters that never join to the left, regardless of context.",
      explanationBangla: "কারণ ওয়াও সেই ৬টি হরফের অন্তর্ভুক্ত যা বামের হরফের সাথে কখনোই যুক্ত হয় না।"
    },
    {
      id: "q3_35",
      type: "multiple_choice",
      question: "What visual cue guarantees you are looking at a Khasrah / Yaa rather than a Kasrah / Baa in (بِي)?",
      questionBangla: "(بِي) শব্দে বা (ب) এবং ইয়া (ي) এর মধ্যে পার্থক্যকারী চাক্ষুষ বৈশিষ্ট্য কোনটি?",
      promptText: "بِي",
      options: [
        "Bā’ is the first tooth with 1 dot below; Yā’ is the trailing duck-curve with 2 dots below",
        "Bā’ has two dots",
        "Yā’ is taller than Alif",
        "There is no difference"
      ],
      correctIndex: 0,
      explanation: "Bā’ has a single dot under its tooth, while the terminal Yā’ drops into a sweeping basin carrying two dots.",
      explanationBangla: "বা হরফের দাঁতের নিচে ১টি নুকতা, আর শেষ প্রান্তের ইয়া হরফে নিচে ২টি নুকতা থাকে।"
    }
  ]
};
