import { Quiz } from "./types";

export const quizLevel14: Quiz = {
  id: "q14",
  levelId: 14,
  title: "Level 14: Hamzatul Waṣl & Hamzatul Qaṭ‘ Master Challenge",
  titleBangla: "লেভেল ১৪: হামযাতুল ওয়াসল ও হামযাতুল ক্বাত' এর সূক্ষ্ম নিয়ম পরীক্ষা",
  description: "Differentiate permanent vs connecting Hamzahs, beginning vowel determination in Quranic verbs (the 3rd letter rule), irregular nouns, and edge cases.",
  descriptionBangla: "কুরআনি ক্রিয়াপদ ও বিশেষ্যে হামযাতুল ওয়াসলের যবর/যের/পেশ নির্ধারণের ৩য় হরফ নিয়ম, ৭টি বিশেষ বিশেষ্য এবং 'বি'সাল ইসমু' এর মতো কঠিন পরীক্ষা।",
  passingScore: 70,
  questions: [
    {
      id: "q14_1",
      type: "multiple_choice",
      question: "What is the fundamental difference between Hamzatul Qaṭ‘ (هَمْزَةُ الْقَطْعِ) and Hamzatul Waṣl (هَمْزَةُ الْوَصْلِ)?",
      questionBangla: "হামযাতুল ক্বাত' (هَمْزَةُ الْقَطْعِ) এবং হামযাতুল ওয়াসল (هَمْزَةُ الْوَصْلِ) এর মধ্যকার মৌলিক পার্থক্য কী?",
      options: [
        "Hamzatul Qaṭ‘ is PERMANENT and pronounced in both starting and continuous speech; Hamzatul Waṣl is pronounced ONLY when starting and DROPPED in continuous flow",
        "Hamzatul Wasl is always written with two dots",
        "Hamzatul Qat‘ is only in verbs",
        "Hamzatul Wasl has 6 counts of Madd"
      ],
      correctIndex: 0,
      explanation: "Hamzatul Qat‘ is an authentic permanent root consonant (ء). Hamzatul Wasl is a temporary bridge, dropped when words connect.",
      explanationBangla: "হামযাতুল ক্বাত' সর্বদা সর্বাবস্থায় উচ্চারিত হয়; আর হামযাতুল ওয়াসল কেবল শুরুতে উচ্চারিত হয় এবং মিলিয়ে পড়ার সময় সম্পূর্ণ বিলুপ্ত হয়ে যায়।"
    },
    {
      id: "q14_2",
      type: "multiple_choice",
      question: "How is Hamzatul Waṣl visually marked in the standard Uthmani Quranic script?",
      questionBangla: "উসমানি কুরআনীয় লিপিতে হামযাতুল ওয়াসল চেনার চাক্ষুষ প্রতীক কোনটি?",
      promptText: "ٱ",
      options: [
        "A small miniature crown of the letter Ṣād (صـ - representing صِلَة / connection) placed above the Alif (ٱ)",
        "A miniature letter ‘Ayn (ء)",
        "A small circle",
        "A red dot"
      ],
      correctIndex: 0,
      explanation: "Hamzatul Wasl is crowned with a small Ṣād head (صـ) derived from the word 'Ṣilah' (connection), indicating it bridges speech.",
      explanationBangla: "আলিফের ওপর 'সিলাহ্' (সংযোগ) শব্দের সংক্ষেপ হিসেবে একটি ছোট সোয়াদের মাথা (ٱ) মুদ্রিত থাকে।"
    },
    {
      id: "q14_3",
      type: "multiple_choice",
      question: "How is Hamzatul Qaṭ‘ visually marked in the standard Arabic script?",
      questionBangla: "আরবি লিপিতে হামযাতুল ক্বাত' চেনার প্রতীক কোনটি?",
      promptText: "أَ   /   إِ   /   أُ   /   ء",
      options: [
        "A miniature head of the letter ‘Ayn (ء - derived from عين) written above or below the carrier (أ / إ / ؤ / ئ / ء)",
        "A small letter Saad",
        "A triangle",
        "A straight line"
      ],
      correctIndex: 0,
      explanation: "Al-Khalil ibn Ahmad created the Hamzah mark from the head of the letter ‘Ayn (ء) due to its shared guttural proximity.",
      explanationBangla: "আইন (ع) হরফের মাথা কেটে ছোট হামযাহ চিহ্নটি (ء) উদ্ভাবন করা হয়েছে, যা আলিফের উপরে বা নিচে (أ / إ) বসে।"
    },
    {
      id: "q14_4",
      type: "multiple_choice",
      question: "What vowel is GIVEN to Hamzatul Waṣl when starting recitation with the definite article (ال - 'Al')?",
      questionBangla: "নির্দিষ্টতাজ্ঞাপক অব্যয় আলিফ-লাম (ال) দিয়ে তিলাওয়াত শুরু করার সময় হামযাতুল ওয়াসলে কোন হরকত হয়?",
      promptText: "ٱلْحَمْدُ  /  ٱلرَّحْمَٰنُ",
      options: [
        "Always a FATḤAH: 'Al-Ḥamdu', 'Ar-Raḥmānu' (invariable rule for the definite article)",
        "Always a Kasrah",
        "Always a Dammah",
        "It can never start with a vowel"
      ],
      correctIndex: 0,
      explanation: "Hamzatul Wasl in the definite article 'Al-' (لام التعريف) is unconditionally and invariably started with a Fatḥah.",
      explanationBangla: "আলিফ-লামের (ال) হামযাতুল ওয়াসলে শুরু করার ক্ষেত্রে কোনো ব্যতিক্রম ছাড়াই সর্বদা যবর (ফাতহাহ) দিতে হয় (যেমন: আল-হামদু)।"
    },
    {
      id: "q14_5",
      type: "multiple_choice",
      question: "How do you determine the starting vowel of Hamzatul Waṣl in standard Quranic VERBS?",
      questionBangla: "কুরআনের সাধারণ ক্রিয়াপদে (ফে'ল) শুরুতে হামযাতুল ওয়াসলের হরকত কীভাবে নির্ধারণ করতে হয়?",
      options: [
        "By inspecting the vowel on the THIRD letter (ثالث الفعل) of the verb: if Ḍammah, start with Ḍammah; if Fatḥah or Kasrah, start with Kasrah",
        "By looking at the last letter",
        "It is always a Fathah",
        "It is chosen randomly"
      ],
      correctIndex: 0,
      explanation: "The Golden Verb Rule: examine the 3rd letter. Original Dammah = start with Dammah; Fathah or Kasrah = start with Kasrah (NEVER with Fathah!).",
      explanationBangla: "স্বর্ণালী নিয়ম: ক্রিয়ার ৩য় হরফ দেখুন। ৩য় হরফে আসল পেশ থাকলে পেশ দিয়ে শুরু করুন; আর ৩য় হরফে যবর বা যের থাকলে যের দিয়ে শুরু করুন।"
    },
    {
      id: "q14_6",
      type: "multiple_choice",
      question: "In the verb (ٱدْعُ إِلَىٰ سَبِيلِ رَبِّكَ), what vowel is given to Hamzatul Waṣl when beginning recitation with (ٱدْعُ)?",
      questionBangla: "যদি (ٱدْعُ) ক্রিয়াপদ দিয়ে তিলাওয়াত শুরু করা হয়, তবে হামযাতুল ওয়াসলে কোন হরকত দিতে হবে?",
      promptText: "ٱدْعُ",
      options: [
        "Ḍammah: 'Ud‘u' (because the 3rd letter ‘Ayn carries an original Ḍammah)",
        "Kasrah: 'Id‘u'",
        "Fathah: 'Ad‘u'",
        "Sukoon: 'D‘u'"
      ],
      correctIndex: 0,
      explanation: "The 3rd letter is ‘Ayn with Dammah (د - ع - ُ); therefore, you begin with Dammah: 'Ud‘u'.",
      explanationBangla: "এখানে ৩য় হরফ আইন (ع)-এ আসল পেশ থাকায় পেশ দিয়ে শুরু করতে হবে: 'উদ্'ঊ'।"
    },
    {
      id: "q14_7",
      type: "multiple_choice",
      question: "In the verb (ٱذْهَبْ إِلَىٰ فِرْعَوْنَ), what vowel is given to Hamzatul Waṣl when beginning with (ٱذْهَبْ)?",
      questionBangla: "(ٱذْهَبْ) ক্রিয়াপদ দিয়ে তিলাওয়াত শুরু করার সময় প্রথম হামযাহতে কোন হরকত হবে?",
      promptText: "ٱذْهَبْ",
      options: [
        "Kasrah: 'Idh-hab' (because the 3rd letter Hā’ carries a Fatḥah)",
        "Fathah: 'Adh-hab'",
        "Dammah: 'Udh-hab'",
        "Sukoon"
      ],
      correctIndex: 0,
      explanation: "The 3rd letter Hā’ carries a Fathah (ذ - هـ - َ); when the 3rd letter has Fathah, verbs start with Kasrah: 'Idh-hab'.",
      explanationBangla: "এখানে ৩য় হরফ হা (هـ)-এ যবর থাকায় নিয়ম অনুযায়ী যের দিয়ে শুরু করতে হবে: 'ইযহাব্' (কখনোই 'আযহাব' নয়)।"
    },
    {
      id: "q14_8",
      type: "multiple_choice",
      question: "In the verb (ٱرْجِعِي إِلَىٰ رَبِّكِ), what vowel is given to Hamzatul Waṣl when beginning with (ٱرْجِعِي)?",
      questionBangla: "(ٱرْجِعِي) দিয়ে তিলাওয়াত শুরু করার সময় হামযাতুল ওয়াসলে কোন হরকত হবে?",
      promptText: "ٱرْجِعِي",
      options: [
        "Kasrah: 'Irji‘ī' (because the 3rd letter Jīm carries a Kasrah)",
        "Fathah: 'Arji‘ī'",
        "Dammah: 'Urji‘ī'",
        "Sukoon"
      ],
      correctIndex: 0,
      explanation: "The 3rd letter Jīm carries a Kasrah (ر - ج - ِ); verbs with a 3rd letter Kasrah start with Kasrah: 'Irji‘ī'.",
      explanationBangla: "৩য় হরফ জীম (ج)-এ যের থাকায় যের দিয়ে শুরু করতে হবে: 'ইরজি'ঈ'।"
    },
    {
      id: "q14_9",
      type: "multiple_choice",
      question: "Can a regular Arabic verb EVER begin with a Fatḥah on Hamzatul Waṣl?",
      questionBangla: "আরবি ভাষার কোনো ক্রিয়াপদে (ফে'ল) কি কখনো শুরুতে হামযাতুল ওয়াসলে যবর (ফাতহাহ) হতে পারে?",
      options: [
        "NEVER; Hamzatul Waṣl in verbs can ONLY ever start with a Ḍammah or a Kasrah (Fathah is reserved for nouns with 'Al-')",
        "Yes, all past tense verbs start with Fathah",
        "Yes, in Surah Al-Fatihah",
        "It depends on the reader's choice"
      ],
      correctIndex: 0,
      explanation: "Verbs never take Fathah on Hamzatul Wasl; they exclusively take Dammah (if 3rd is Dammah) or Kasrah (if 3rd is Fathah/Kasrah).",
      explanationBangla: "কখনোই নয়; ক্রিয়াপদের শুরুতে হামযাতুল ওয়াসলে কেবল পেশ বা যের হতে পারে, যবর কেবল আলিফ-লাম যুক্ত বিশেষ্যের জন্য সংরক্ষিত।"
    },
    {
      id: "q14_10",
      type: "multiple_choice",
      question: "In the plural command verbs (ٱبْنُوا), (ٱمْشُوا), and (ٱقْضُوا), why do you start with KASRAH despite the 3rd letter having a Ḍammah?",
      questionBangla: "(ٱبْنُوا), (ٱمْشُوا), এবং (ٱقْضُوا) ক্রিয়াপদগুলোতে ৩য় হরফে পেশ থাকা সত্ত্বেও কেন যের দিয়ে শুরু করতে হয়?",
      promptText: "ٱبْنُوا  /  ٱمْشُوا  /  ٱقْضُوا",
      options: [
        "Because the Ḍammah is ACCIDENTAL / NON-ORIGINAL (ضم عارض); the original root vowel was a Kasrah (e.g. امشِيُوا -> امشُوا)",
        "Because it is an irregular dialect",
        "Because of the Waw",
        "Because of a typographical tradition"
      ],
      correctIndex: 0,
      explanation: "The root imperative is singular (اِمْشِ). The Dammah was introduced solely to suit plural Waw. Accidental Dammah starts with Kasrah: 'Imshū'.",
      explanationBangla: "কারণ এই পেশটি আসল নয় বরং আগন্তুক সাময়িক পেশ (মূল ধাতু ছিল ইম্শিউ); আর সাময়িক পেশে সর্বদা যের দিয়ে শুরু করতে হয় ('ইব্নূ', 'ইমশূ')।"
    },
    {
      id: "q14_11",
      type: "multiple_choice",
      question: "What vowel is given to Hamzatul Waṣl when beginning with the 7 irregular nouns in the Holy Quran?",
      questionBangla: "পবিত্র কুরআনে উল্লেখিত ৭টি বিশেষ অনিয়মিত বিশেষ্যে শুরুতে হামযাতুল ওয়াসলে কোন হরকত দিতে হয়?",
      promptText: "ٱبْن  /  ٱبْنَت  /  ٱمْرُؤ  /  ٱمْرَأَت  /  ٱسْم  /  ٱثْنَيْن  /  ٱثْنَتَيْن",
      options: [
        "Invariably a KASRAH: 'Ibn', 'Ibnat', 'Imru’', 'Imra’at', 'Ism', 'Ithnayn', 'Ithnatayn'",
        "Invariably a Fathah",
        "Invariably a Dammah",
        "A Sukoon"
      ],
      correctIndex: 0,
      explanation: "All 7 non-Alif irregular nouns in the Quran begin unconditionally with Kasrah: Ism, Ibn, Imra'at, etc.",
      explanationBangla: "কুরআনের এই ৭টি নির্দিষ্ট বিশেষ্যে শুরুর হামযাতে সর্বদা যের (কাসরাহ্) দিয়ে শুরু করতে হয় (যেমন: ইব্ন, ইসম, ইমরা'আহ্)।"
    },
    {
      id: "q14_12",
      type: "multiple_choice",
      question: "In the phrase (سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى), how is the word (ٱسْمَ) recited in continuous reading vs starting?",
      questionBangla: "(سَبِّحِ اسْمَ) বাক্যাংশে মিলিয়ে পড়ার সময় এবং আলাদা শুরু করার সময় 'ইস্ম' কীভাবে পড়া হয়?",
      promptText: "سَبِّحِ اسْمَ",
      options: [
        "In continuous reading, Hamzatul Waṣl is dropped: 'Sabbiḥis-ma'; if starting on it alone, it begins with Kasrah: 'Isma'",
        "It is always pronounced 'Isma'",
        "It is always pronounced 'Asma'",
        "The letter Sīn is dropped"
      ],
      correctIndex: 0,
      explanation: "Continuous reading drops Hamzatul Wasl ('Sabbiḥis-ma'); beginning with it requires Kasrah ('Isma').",
      explanationBangla: "মিলিয়ে পড়লে হামযাতুল ওয়াসল বাদ গিয়ে 'সাব্বিহিস্-মা' হবে; আর আলাদা শুরু করলে যের দিয়ে 'ইস্মা' হবে।"
    },
    {
      id: "q14_13",
      type: "multiple_choice",
      question: "In Surah Al-Hujurat: 11, what is the famous recitation rule for the phrase (بِئْسَ الاِسْمُ الْفُسُوقُ)?",
      questionBangla: "সূরা হুজুরাতের ১১ নম্বর আয়াতে (بِئْسَ الاِسْمُ) পাঠ করার ক্ষেত্রে কী বিশেষ নিয়ম কার্যকর?",
      promptText: "بِئْسَ ٱلِاسْمُ",
      options: [
        "In continuous reading, it is pronounced 'Bi’salismu'; if starting specifically on the second word, you may start with 'Alismu' or 'Lismu'",
        "It is strictly deleted",
        "You must stop for 10 seconds",
        "It is read backwards"
      ],
      correctIndex: 0,
      explanation: "When continuing: 'Bi’salismu'. If beginning with the second word, Hafs permits two options: 'Al-ismu' or directly 'Lismu'.",
      explanationBangla: "মিলিয়ে পড়লে 'বি'সালিস্মু'; আর ২য় শব্দ থেকে শুরু করলে দুটি রূপ অনুমোদিত: 'আলিস্মু' অথবা সরাসরি লাম দিয়ে 'লিস্মু'।"
    },
    {
      id: "q14_14",
      type: "multiple_choice",
      question: "In Surah Al-Ahqaf: 4, when BEGINNING recitation with the words (ٱئْتُونِي بِكِتَابٍ), how is it pronounced?",
      questionBangla: "সূরা আল-আহক্বাফের ৪ নম্বর আয়াতে (ٱئْتُونِي) দিয়ে তিলাওয়াত শুরু করলে কীভাবে পড়তে হবে?",
      promptText: "ٱئْتُونِي",
      options: [
        "‘Ītūnī’ (the Hamzatul Wasl begins with Kasrah, and the second Sakin Hamzah transforms into a prolonged Yā’ of Madd Badal)",
        "‘I’tūnī’ with a heavy glottal catch",
        "‘A’tūnī’",
        "‘Utūnī’"
      ],
      correctIndex: 0,
      explanation: "Arabic forbids two Hamzahs at start (إِئْتُوني). The second Hamzah is exchanged (Badal) into Yā’ to match Kasrah: 'Ītūnī'.",
      explanationBangla: "শুরুতে দুই হামযাহ একত্র হওয়া নিষিদ্ধ হওয়ায় দ্বিতীয় সাকিন হামযাহ যেরের সাথে মিলে দীর্ঘ ইয়ায় পরিণত হয়ে 'ঈতূনী' উচ্চারিত হয়।"
    },
    {
      id: "q14_15",
      type: "multiple_choice",
      question: "When connecting (فِي السَّمَاوَاتِ ٱئْتُونِي) without pausing in Surah Al-Ahqaf: 4, how is it pronounced?",
      questionBangla: "সূরা আল-আহক্বাফের ৪ নম্বর আয়াত যদি না থেমে মিলিয়ে পড়া হয় (فِي السَّمَاوَاتِ ٱئْتُونِي), তবে কীভাবে পড়তে হবে?",
      promptText: "فِي السَّمَاوَاتِ ٱئْتُونِي",
      options: [
        "‘Fis-samāwāti’tūnī’ (Hamzatul Waṣl is dropped, and the second Hamzah remains a true glottal stop with Sukūn)",
        "‘Fis-samāwāti eetoonee’",
        "‘Fis-samāwāti a’toonee’",
        "Both Hamzahs are deleted"
      ],
      correctIndex: 0,
      explanation: "In continuous flow, Hamzatul Wasl drops; the second Hamzah sits comfortably after Kasrah as a genuine Sakin stop: 'Samāwāti’tūnī'.",
      explanationBangla: "মিলিয়ে পড়ার সময় হামযাতুল ওয়াসল বাদ গিয়ে দ্বিতীয় হামযাহ সাকিনের ঝটকাসহ খাঁটি হামযাহ হিসেবে 'সামাওয়াতি'তূনী' উচ্চারিত হবে।"
    },
    {
      id: "q14_16",
      type: "multiple_choice",
      question: "In the verb (ٱسْتَغْفِرْ لَهُمْ), how do you begin recitation with (ٱسْتَغْفِرْ)?",
      questionBangla: "(ٱسْتَغْفِرْ) ক্রিয়াপদ দিয়ে তিলাওয়াত শুরু করার সময় প্রথম হামযাহতে কোন হরকত হবে?",
      promptText: "ٱسْتَغْفِرْ",
      options: [
        "Kasrah: 'Istaghfir' (because the 3rd letter Tā’ carries a Fatḥah)",
        "Fathah: 'Astaghfir'",
        "Dammah: 'Ustaghfir'",
        "Sukoon"
      ],
      correctIndex: 0,
      explanation: "The 3rd letter Tā’ has Fathah (س - ت - َ); when the 3rd letter is Fathah, verbs start with Kasrah: 'Istaghfir'.",
      explanationBangla: "এখানে ৩য় হরফ তা (ت)-তে যবর থাকায় নিয়ম অনুযায়ী যের দিয়ে শুরু করতে হবে: 'ইসতাগফির'।"
    },
    {
      id: "q14_17",
      type: "multiple_choice",
      question: "In the verb (ٱنظُرْ كَيْفَ), how do you begin recitation with (ٱنظُرْ)?",
      questionBangla: "(ٱنظُرْ) দিয়ে তিলাওয়াত শুরু করার সময় প্রথম হামযাহতে কোন হরকত দিতে হবে?",
      promptText: "ٱنظُرْ",
      options: [
        "Ḍammah: 'Unẓur' (because the 3rd letter Ẓā’ carries an original Ḍammah)",
        "Kasrah: 'Inẓur'",
        "Fathah: 'Anẓur'",
        "Sukoon"
      ],
      correctIndex: 0,
      explanation: "The 3rd letter Ẓā’ carries Dammah (ن - ظ - ُ); therefore you begin with Dammah: 'Unẓur'.",
      explanationBangla: "এখানে ৩য় হরফ জোয়া (ظ)-তে আসল পেশ থাকায় পেশ দিয়ে শুরু করতে হবে: 'উন্জুর্'।"
    },
    {
      id: "q14_18",
      type: "multiple_choice",
      question: "In the phrase (وَٱسْتَعِينُوا بِالصَّبْرِ), what happens to Hamzatul Waṣl in (وَٱسْتَعِينُوا)?",
      questionBangla: "(وَٱسْتَعِينُوا) শব্দে হামযাতুল ওয়াসলটির ক্ষেত্রে কী ঘটে?",
      promptText: "وَٱسْتَعِينُوا",
      options: [
        "It is completely dropped in speech, gliding straight from Wāw with Fatḥah into Sīn Sākinah: 'Wasta‘īnoo'",
        "It is read as a long Madd",
        "It becomes a Dammah",
        "It is pronounced as 'Wa-ista‘eenu'"
      ],
      correctIndex: 0,
      explanation: "Hamzatul Wasl exists solely to avoid starting on a Sakin. Since the vowelled Wāw precedes it, the bridge is discarded: 'Wasta‘īnoo'.",
      explanationBangla: "পূর্ববর্তী ওয়াও হরকতযুক্ত হওয়ায় হামযাতুল ওয়াসলের প্রয়োজন ফুরিয়ে যায় এবং তা সরাসরি বিলুপ্ত হয়ে 'ওয়াস্ তা'ঈনূ' উচ্চারিত হয়।"
    },
    {
      id: "q14_19",
      type: "multiple_choice",
      question: "In the word (أَنْعَمْتَ), what type of Hamzah is the initial letter?",
      questionBangla: "(أَنْعَمْتَ) শব্দে শুরুর হামযাহটি কোন প্রকারের?",
      promptText: "أَنْعَمْتَ",
      options: [
        "Hamzatul Qaṭ‘ (genuine permanent Hamzah, pronounced in all positions)",
        "Hamzatul Wasl",
        "Alif Madd",
        "Silent letter"
      ],
      correctIndex: 0,
      explanation: "It carries the distinct Hamzah mark (أَ); it is a permanent root consonant that is never dropped under any circumstances.",
      explanationBangla: "এটি হামযাতুল ক্বাত'; এটি শব্দের স্থায়ী মৌলিক হরফ যা মিলিয়ে পড়া বা আলাদা পড়া সর্বাবস্থায় উচ্চারিত হয়।"
    },
    {
      id: "q14_20",
      type: "multiple_choice",
      question: "In the word (إِبْرَاهِيمَ), what type of Hamzah is at the beginning?",
      questionBangla: "(إِبْرَاهِيمَ) শব্দে শুরুর হামযাহটি কোন প্রকারের?",
      promptText: "إِبْرَاهِيمَ",
      options: [
        "Hamzatul Qaṭ‘ (permanent Hamzah with Kasrah)",
        "Hamzatul Wasl",
        "Yaa Madd",
        "A dagger Alif"
      ],
      correctIndex: 0,
      explanation: "Written as an explicit Hamzah under Alif (إِ), it is Hamzatul Qat‘, pronounced in all contexts: 'Ibrāhīm'.",
      explanationBangla: "এটি হামযাতুল ক্বাত'; আলিফের নিচে স্পষ্ট হামযাহ মুদ্রিত থাকায় এটি যে কোনো অবস্থায় উচ্চারিত হবে।"
    },
    {
      id: "q14_21",
      type: "multiple_choice",
      question: "In the verb (ٱخْرُجْ عَلَيْهِنَّ), what vowel is given to Hamzatul Waṣl when beginning with (ٱخْرُجْ)?",
      questionBangla: "(ٱخْرُجْ) ক্রিয়াপদ দিয়ে তিলাওয়াত শুরু করার সময় প্রথম হামযাহতে কোন হরকত হবে?",
      promptText: "ٱخْرُجْ",
      options: [
        "Ḍammah: 'Ukhruj' (because the 3rd letter Rā’ carries an original Ḍammah)",
        "Kasrah: 'Ikhruj'",
        "Fathah: 'Akhruj'",
        "Sukoon"
      ],
      correctIndex: 0,
      explanation: "The 3rd letter Rā’ carries an original Dammah (خ - ر - ُ); hence, the verb opens with Dammah: 'Ukhruj'.",
      explanationBangla: "৩য় হরফ র (ر)-এ আসল পেশ থাকায় পেশ দিয়ে শুরু করতে হবে: 'উখ্রুজ্'।"
    },
    {
      id: "q14_22",
      type: "multiple_choice",
      question: "In the verb (ٱضْرِب بِّعَصَاكَ), how do you begin recitation with (ٱضْرِب)?",
      questionBangla: "(ٱضْرِب) ক্রিয়াপদ দিয়ে শুরু করলে হামযাতে কোন হরকত হবে?",
      promptText: "ٱضْرِب",
      options: [
        "Kasrah: 'Iḍrib' (because the 3rd letter Rā’ carries a Kasrah)",
        "Fathah: 'Aḍrib'",
        "Dammah: 'Uḍrib'",
        "Sukoon"
      ],
      correctIndex: 0,
      explanation: "The 3rd letter carries Kasrah (ض - ر - ِ); verbs with 3rd letter Kasrah begin with Kasrah: 'Iḍrib'.",
      explanationBangla: "৩য় হরফ র-এ যের থাকায় নিয়ম অনুযায়ী যের দিয়ে শুরু করতে হবে: 'ইদ্ব্ রিব্'।"
    },
    {
      id: "q14_23",
      type: "multiple_choice",
      question: "In the word (ٱمْرُؤٌ هَلَكَ), how do you begin recitation with (ٱمْرُؤٌ)?",
      questionBangla: "(ٱمْرُؤٌ) বিশেষ্য পদ দিয়ে তিলাওয়াত শুরু করার সময় প্রথম হামযাহতে কোন হরকত হবে?",
      promptText: "ٱمْرُؤٌ",
      options: [
        "Kasrah: 'Imru’un' (one of the 7 designated irregular nouns in the Quran)",
        "Dammah: 'Umru’un'",
        "Fathah: 'Amru’un'",
        "Sukoon"
      ],
      correctIndex: 0,
      explanation: "Imru’ is one of the 7 Quranic irregular nouns; all non-definite nouns with Hamzatul Wasl start with Kasrah.",
      explanationBangla: "কুরআনের ৭টি বিশেষ অনিয়মিত বিশেষ্যের অন্যতম হওয়ায় এতে যের দিয়ে শুরু করতে হবে: 'ইমরুউন'।"
    },
    {
      id: "q14_24",
      type: "multiple_choice",
      question: "In (عِيسَى ابْنُ مَرْيَمَ), what happens to Hamzatul Waṣl in (ٱبْنُ) during continuous reading?",
      questionBangla: "(عِيسَى ابْنُ مَرْيَمَ) তিলাওয়াতকালে 'ইব্নু' শব্দের হামযাতুল ওয়াসলটির কী ঘটে?",
      promptText: "عِيسَى ابْنُ",
      options: [
        "It is dropped in speech: '‘Īsab-nu Maryam' (the Madd Alif of ‘Īsā also drops to resolve Iltiqā’ as-Sākinayn)",
        "It becomes a 6-count Madd",
        "It is pronounced as '‘Īsā Ibn'",
        "Both letters are deleted"
      ],
      correctIndex: 0,
      explanation: "Hamzatul Wasl drops, and the Alif of ‘Īsā drops to bridge directly into the Sakin Bā’: '‘Īsab-nu Maryam'.",
      explanationBangla: "হামযাতুল ওয়াসল বাদ যায় এবং দুই সাকিনের কারণে ঈসার আলিফও বিলুপ্ত হয়ে সরাসরি বা সাকিনে যুক্ত হয়: 'ঈসাব্-নু মারইয়াম্'।"
    },
    {
      id: "q14_25",
      type: "multiple_choice",
      question: "In the word (ٱتَّخَذْتُمْ), what vowel is given to Hamzatul Waṣl when beginning with it?",
      questionBangla: "(ٱتَّخَذْتُمْ) দিয়ে তিলাওয়াত শুরু করার সময় প্রথম হামযাহতে কোন হরকত দিতে হবে?",
      promptText: "ٱتَّخَذْتُمْ",
      options: [
        "Kasrah: 'Ittakhadhtum' (because the 3rd letter Khā’ carries a Fatḥah; notice Tā’ carries Shaddah and accounts for letters 2 and 3)",
        "Fathah: 'Attakhadhtum'",
        "Dammah: 'Uttakhadhtum'",
        "Sukoon"
      ],
      correctIndex: 0,
      explanation: "Tā’ is doubled (تْ + تَ); the 3rd phonetic letter is Tā’ with Fathah, so it begins with Kasrah: 'Ittakhadhtum'.",
      explanationBangla: "তা হরফে তাশদীদ থাকায় (ত সাকিন + ত যবর) ৩য় উপাদানটিতে যবর রয়েছে; ফলে যের দিয়ে শুরু হবে: 'ইত্তাকায্তুম্'।"
    },
    {
      id: "q14_26",
      type: "multiple_choice",
      question: "In the word (ٱقْرَأْ بِاسْمِ رَبِّكَ), what vowel is given to Hamzatul Waṣl when beginning with (ٱقْرَأْ)?",
      questionBangla: "পবিত্র কুরআনের প্রথম অবতীর্ণ শব্দ (ٱقْرَأْ) দিয়ে শুরু করার সময় হামযাহতে কোন হরকত হবে?",
      promptText: "ٱقْرَأْ",
      options: [
        "Kasrah: 'Iqra’' (because the 3rd letter Rā’ carries a Fatḥah)",
        "Fathah: 'Aqra’'",
        "Dammah: 'Uqra’'",
        "Sukoon"
      ],
      correctIndex: 0,
      explanation: "The 3rd letter Rā’ has a Fathah (ق - ر - َ); when the 3rd letter has Fathah, verbs start with Kasrah: 'Iqra’'.",
      explanationBangla: "৩য় হরফ র (ر)-এ যবর থাকায় নিয়ম অনুযায়ী যের দিয়ে শুরু করতে হবে: 'ইক্বরা''।"
    },
    {
      id: "q14_27",
      type: "multiple_choice",
      question: "What is the phonetic reason why Hamzatul Waṣl was invented by the Arabs?",
      questionBangla: "আরবি ধ্বনিতত্ত্বে হামযাতুল ওয়াসল সৃষ্টির মূল কারণ কী ছিল?",
      options: [
        "Because classical Arabic phonotactics strictly forbid starting speech with a SĀKIN consonant; Hamzatul Waṣl acts as an entrance ramp for the vocal cords",
        "To make words rhyme",
        "To fill space on the page",
        "To confuse readers"
      ],
      correctIndex: 0,
      explanation: "The Arab tongue cannot pronounce a Sakin consonant at rest. Hamzatul Wasl serves as an acoustic ladder to reach the Sakin letter.",
      explanationBangla: "যেহেতু আরবি ভাষায় কোনো সাকিন হরফ দিয়ে পড়া শুরু করা অসম্ভব, তাই সাকিন হরফে পৌঁছানোর জন্য হামযাতুল ওয়াসলকে সিঁড়ি হিসেবে ব্যবহার করা হয়।"
    },
    {
      id: "q14_28",
      type: "multiple_choice",
      question: "In (أَأَنتُمْ أَشَدُّ خَلْقًا), what type of Hamzahs are the first two?",
      questionBangla: "(أَأَنتُمْ) শব্দে প্রথম দুটি হামযাহ কোন প্রকারের?",
      promptText: "أَأَنتُمْ",
      options: [
        "Both are Hamzatul Qaṭ‘ (two genuine permanent Hamzahs: the interrogative particle + the pronoun Hamzah)",
        "First is Wasl, second is Qat‘",
        "Both are Wasl",
        "Both are silent"
      ],
      correctIndex: 0,
      explanation: "Both are authentic permanent Hamzahs of Qat‘ (ء + ء), pronounced crisp and sharp: '’A-’antum'.",
      explanationBangla: "উভয়টিই হামযাতুল ক্বাত' (প্রশ্নবোধক হামযাহ + সর্বনামের মূল হামযাহ); উভয়টি স্পষ্ট উচ্চারিত হবে।"
    },
    {
      id: "q14_29",
      type: "multiple_choice",
      question: "In the word (ٱصْبِرْ عَلَىٰ مَا يَقُولُونَ), what vowel is given to Hamzatul Waṣl when beginning with (ٱصْبِرْ)?",
      questionBangla: "(ٱصْبِرْ) দিয়ে তিলাওয়াত শুরু করার সময় হামযাতুল ওয়াসলে কোন হরকত হবে?",
      promptText: "ٱصْبِرْ",
      options: [
        "Kasrah: 'Iṣbir' (because the 3rd letter Bā’ carries a Kasrah)",
        "Fathah: 'Aṣbir'",
        "Dammah: 'Uṣbir'",
        "Sukoon"
      ],
      correctIndex: 0,
      explanation: "The 3rd letter Bā’ carries Kasrah (ص - ب - ِ); hence the verb begins with Kasrah: 'Iṣbir'.",
      explanationBangla: "৩য় হরফ বা (ب)-এ যের থাকায় যের দিয়ে শুরু করতে হবে: 'ইস্ব্বির'।"
    },
    {
      id: "q14_30",
      type: "multiple_choice",
      question: "In (قُلْ إِنَّ ٱلْهُدَىٰ هُدَى اللَّهِ), how is the word (ٱلْهُدَىٰ) pronounced in continuous reading?",
      questionBangla: "(إِنَّ ٱلْهُدَىٰ) বাক্যাংশে 'আল-হুদা'র হামযাতুল ওয়াসল কীভাবে পড়া হয়?",
      promptText: "إِنَّ ٱلْهُدَىٰ",
      options: [
        "Dropped completely in pronunciation, gliding from the Nūn Mushaddadah directly into Lām Sākinah: 'Innal-hudā'",
        "Pronounced with an Alif: 'Inna al-huda'",
        "Pronounced with Kasrah",
        "Pronounced with Dammah"
      ],
      correctIndex: 0,
      explanation: "In continuous flow, Hamzatul Wasl vanishes; the Nūn joins directly to the Sakin Lām: 'Innal-hudā'.",
      explanationBangla: "মিলিয়ে পড়ার সময় হামযাতুল ওয়াসল বাদ গিয়ে নূন সরাসরি সাকিন লামকে ধরে 'ইন্নাল্-হুদা' উচ্চারিত হবে।"
    },
    {
      id: "q14_31",
      type: "multiple_choice",
      question: "In the word (ٱسْتَكْبَرَ), what vowel is given to Hamzatul Waṣl when beginning with it?",
      questionBangla: "(ٱسْتَكْبَرَ) দিয়ে তিলাওয়াত শুরু করার সময় প্রথম হামযাহতে কোন হরকত হবে?",
      promptText: "ٱسْتَكْبَرَ",
      options: [
        "Kasrah: 'Istakbara' (because the 3rd letter Tā’ carries a Fatḥah)",
        "Fathah: 'Astakbara'",
        "Dammah: 'Ustakbara'",
        "Sukoon"
      ],
      correctIndex: 0,
      explanation: "The 3rd letter Tā’ has Fathah (س - ت - َ); verbs with 3rd letter Fathah start with Kasrah: 'Istakbara'.",
      explanationBangla: "৩য় হরফ তা (ت)-তে যবর থাকায় ক্রিয়াপদের নিয়ম অনুসারে যের দিয়ে শুরু করতে হবে: 'ইস্তাক্ব্বারা'।"
    },
    {
      id: "q14_32",
      type: "multiple_choice",
      question: "In the command (ٱرْكَب مَّعَنَا), how do you begin recitation with (ٱرْكَب)?",
      questionBangla: "(ٱرْكَب) ক্রিয়াপদ দিয়ে তিলাওয়াত শুরু করার সময় হামযাতুল ওয়াসলে কোন হরকত হবে?",
      promptText: "ٱرْكَب",
      options: [
        "Kasrah: 'Irkab' (because the 3rd letter Kāf carries a Fatḥah)",
        "Fathah: 'Arkab'",
        "Dammah: 'Urkab'",
        "Sukoon"
      ],
      correctIndex: 0,
      explanation: "The 3rd letter Kāf has Fathah (ر - ك - َ); verbs with 3rd letter Fathah start with Kasrah: 'Irkab'.",
      explanationBangla: "৩য় হরফ কাফ (ك)-এ যবর থাকায় যের দিয়ে শুরু করতে হবে: 'ইর্কাব্'।"
    },
    {
      id: "q14_33",
      type: "multiple_choice",
      question: "In the noun (ٱمْرَأَتُ فِرْعَوْنَ), how do you begin recitation with (ٱمْرَأَتُ)?",
      questionBangla: "(ٱمْرَأَتُ) বিশেষ্য দিয়ে তিলাওয়াত শুরু করার সময় প্রথম হামযাহতে কোন হরকত হবে?",
      promptText: "ٱمْرَأَتُ",
      options: [
        "Kasrah: 'Imra’atu' (one of the 7 designated irregular nouns)",
        "Fathah: 'Amra’atu'",
        "Dammah: 'Umra’atu'",
        "Sukoon"
      ],
      correctIndex: 0,
      explanation: "Imra’at is one of the 7 irregular Quranic nouns, starting with Kasrah: 'Imra’atu'.",
      explanationBangla: "কুরআনের ৭টি বিশেষ অনিয়মিত বিশেষ্যের অন্তর্ভুক্ত হওয়ায় যের দিয়ে শুরু করতে হবে: 'ইমরা'আতু'।"
    },
    {
      id: "q14_34",
      type: "multiple_choice",
      question: "Why does the word (أَهْلُ) have a permanent Hamzatul Qaṭ‘ rather than Hamzatul Waṣl?",
      questionBangla: "(أَهْلُ) শব্দে শুরুর হামযাহটি কেন স্থায়ী হামযাতুল ক্বাত' এবং ওয়াসল নয়?",
      promptText: "أَهْلُ",
      options: [
        "Because it is an authentic radical root consonant of the noun; Hamzatul Qaṭ‘ is an organic letter of the word, never dropped",
        "Because it starts with a vowel",
        "Because it has a Sukoon on Haa",
        "Because it is short"
      ],
      correctIndex: 0,
      explanation: "Hamzatul Qat‘ belongs to the root of the word (ء - هـ - ل); it is a permanent consonant.",
      explanationBangla: "কারণ এটি শব্দের মূল ধাতুর অবিচ্ছেদ্য স্থায়ী হরফ; ফলে এটি হামযাতুল ক্বাত' এবং সর্বাবস্থায় উচ্চারিত হবে।"
    },
    {
      id: "q14_35",
      type: "multiple_choice",
      question: "What is the supreme practical benefit of mastering Hamzatul Waṣl rules?",
      questionBangla: "হামযাতুল ওয়াসলের সূক্ষ্ম নিয়মগুলো আয়ত্ত করার সর্বাধিক ব্যবহারিক সুফল কী?",
      options: [
        "It eliminates hesitation when beginning recitation on unfamiliar Quranic verbs or nouns, ensuring grammatically flawless opening vowels",
        "It speeds up reading",
        "It makes recitation louder",
        "It replaces Arabic grammar"
      ],
      correctIndex: 0,
      explanation: "Knowing the exact rules empowers the reciter to start upon ANY Quranic verb or noun with immediate certainty and precision.",
      explanationBangla: "কুরআনের যে কোনো আয়াতের মধ্যবর্তী ক্রিয়াপদ বা বিশেষ্য দিয়ে তিলাওয়াত শুরু করার সময় কোনো দ্বিধা ছাড়াই নির্ভুল হরকত নির্ধারণ করা যায়।"
    }
  ]
};
