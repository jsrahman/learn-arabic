import { Quiz } from "./types";

export const quizLevel8: Quiz = {
  id: "q8",
  levelId: 8,
  title: "Level 8: Tafkhīm (Heavy) & Tarqīq (Light) Master Challenge",
  titleBangla: "লেভেল ৮: তাফখীম (মোটা) ও তারক্বীক্ব (পাতলা) হরফের গভীর নিয়ম পরীক্ষা",
  description: "Dissect permanently heavy letters (خص ضغط قظ), the 5 ranks of Tafkheem, Ra rules, the Lam of Allah's name, and dynamic Ghunnah coloration.",
  descriptionBangla: "সর্বদা মোটা ৭টি হরফ, তাফখীমের ৫টি স্তর, র (ر) হরফ মোটা ও চিকন হওয়ার যাবতীয় নিয়ম এবং আল্লাহ নামের লামের বিধান যাচাই করুন।",
  passingScore: 70,
  questions: [
    {
      id: "q8_1",
      type: "multiple_choice",
      question: "Which mnemonic phrase gathers the 7 permanently heavy letters of Isti‘lā’ (حُرُوفُ الِاسْتِعْلَاءِ)?",
      questionBangla: "সর্বদা মোটা বা ভারী উচ্চারিত ৭টি ইস্তি'লার হরফ কোন স্মরণিকায় সংকলিত?",
      options: [
        "خُصَّ ضَغْطٍ قِظْ (Khā’, Ṣād, Ḍād, Ghayn, Ṭā’, Qāf, Ẓā’)",
        "قُطْبُ جَدٍّ",
        "يَرْمَلُونَ",
        "أَخِي هَاكَ عِلْمًا"
      ],
      correctIndex: 0,
      explanation: "The 7 permanently heavy letters are: خ, ص, ض, غ, ط, ق, ظ, assembled in the phrase 'Khuṣṣa Ḍaghṭin Qiz'.",
      explanationBangla: "সর্বদা ভারী ৭টি হরফ হলো: খা, সোয়াদ, দোয়াদ, গাইন, তোয়া, ক্বাফ, জোয়া (خُصَّ ضَغْطٍ قِظْ)।"
    },
    {
      id: "q8_2",
      type: "multiple_choice",
      question: "Among the 7 heavy letters, which 4 letters possess the strongest heaviness due to Iṭbāq (إِطْبَاق - tongue enclosure against the palate)?",
      questionBangla: "৭টি মোটা হরফের মধ্যে কোন ৪টি হরফে 'ইতবাক' (তালুর সাথে পূর্ণ আবদ্ধতা) থাকায় তাদের ভারী হওয়ার মাত্রা সবচেয়ে তীব্র?",
      promptText: "ص  -  ض  -  ط  -  ظ",
      options: [
        "Ṣād (ص), Ḍād (ض), Ṭā’ (ط), and Ẓā’ (ظ)",
        "Qāf, Kāf, Lām, Mīm",
        "Khā’, Ghayn, Qāf, Alif",
        "Hamzah, Hā’, ‘Ayn, Ḥā’"
      ],
      correctIndex: 0,
      explanation: "The 4 letters of Iṭbāq (ص ض ط ظ) enclose the sound between the cupped tongue and palate, making them supremely heavy.",
      explanationBangla: "ইতবাকের ৪টি হরফ হলো: সোয়াদ, দোয়াদ, তোয়া এবং জোয়া; এগুলোতে জিহ্বার মধ্যভাগ তালুর দিকে চেপে আওয়াজ খাঁচাবদ্ধ ও তীব্র ভারী হয়।"
    },
    {
      id: "q8_3",
      type: "multiple_choice",
      question: "According to Imam Ibn al-Jazari, what is the HIGHEST of the 5 ranks of Tafkhīm (heaviness)?",
      questionBangla: "ইমাম ইবনুল জাযারীর মতে তাফখীমের (মোটা করার) ৫টি স্তরের মধ্যে সর্বোচ্চ ১ম স্তর কোনটি?",
      options: [
        "A heavy letter carrying a Fatḥah followed immediately by an Alif (e.g. خَالِدِينَ, قَالَ)",
        "A heavy letter with a Dammah",
        "A heavy letter with a Sukoon",
        "A heavy letter with a Kasrah"
      ],
      correctIndex: 0,
      explanation: "Rank 1 is a heavy letter with Fathah followed by Alif, producing the most resonant acoustic volume (e.g. Qā-la).",
      explanationBangla: "সর্বোচ্চ স্তর হলো: মোটা হরফে যবরের পর খালি আলিফ থাকা (যেমন: খালিদীনা, ক্বালা)।"
    },
    {
      id: "q8_4",
      type: "multiple_choice",
      question: "What is the LOWEST (5th) rank of Tafkhīm for the letters of Isti‘lā’?",
      questionBangla: "ইস্তি'লার মোটা হরফগুলোর জন্য তাফখীমের সর্বনিম্ন (৫ম) স্তর কোনটি?",
      options: [
        "A heavy letter carrying a Kasrah (e.g. قِيلَ, خِيَانَةَ)",
        "A heavy letter with Fathah",
        "A heavy letter with Dammah",
        "A heavy letter with Sukoon"
      ],
      correctIndex: 0,
      explanation: "A heavy letter with Kasrah exhibits the lowest tier of heaviness (Tafkhīm Nisbī), remaining heavy but subdued.",
      explanationBangla: "সর্বনিম্ন স্তর হলো: মোটা হরফে যের (কাসরাহ্) থাকা (যেমন: ক্বীলা, খিয়ানাহ্)।"
    },
    {
      id: "q8_5",
      type: "multiple_choice",
      question: "Under which condition is the letter Rā’ (ر) recited as HEAVY (Mufakhkham)?",
      questionBangla: "নিচের কোন অবস্থায় র (ر) হরফটি মোটা বা ভারী (মুফাখ্খাম) করে পড়তে হয়?",
      promptText: "رَبَّنَا  /  رُحَمَاءُ",
      options: [
        "When it carries a Fatḥah or a Ḍammah (e.g. رَبَّنَا / رُحَمَاءُ)",
        "When it carries a Kasrah",
        "When it is preceded by Yaa Sakinah",
        "When it has a Sukoon after an original Kasrah"
      ],
      correctIndex: 0,
      explanation: "Rā’ is unconditionally heavy when it possesses a Fathah or a Dammah, or when Sakin preceded by Fathah or Dammah.",
      explanationBangla: "র-এর ওপর যবর বা পেশ থাকলে, অথবা র সাকিন হয়ে তার পূর্বে যবর বা পেশ থাকলে তা সর্বদা মোটা হয়।"
    },
    {
      id: "q8_6",
      type: "multiple_choice",
      question: "Under which condition is the letter Rā’ (ر) recited as LIGHT (Muraqqaq)?",
      questionBangla: "নিচের কোন অবস্থায় র (ر) হরফটি পাতলা বা চিকন (মুরাক্কাক্ব) করে পড়তে হয়?",
      promptText: "رِجَالٌ",
      options: [
        "When it carries a Kasrah (e.g. رِجَالٌ)",
        "When it carries a Fathah",
        "When it carries a Dammah",
        "When followed by an Alif"
      ],
      correctIndex: 0,
      explanation: "Rā’ carrying a Kasrah (sound 'ri') is always pronounced light with downward jaw relaxation.",
      explanationBangla: "র-এর নিচে যের (কাসরাহ্) থাকলে তা সর্বদা পাতলা ও হালকাভাবে উচ্চারিত হয় (যেমন: রিজালুন)।"
    },
    {
      id: "q8_7",
      type: "multiple_choice",
      question: "In the word (فِرْعَوْنَ), why is the Rā’ Sākinah recited as LIGHT (Muraqqaq)?",
      questionBangla: "(فِرْعَوْنَ) শব্দে সাকিনযুক্ত র কেন পাতলা বা চিকন করে পড়তে হয়?",
      promptText: "فِرْعَوْنَ",
      options: [
        "Because it is preceded by an original Kasrah in the same word, and is NOT followed by a heavy letter",
        "Because Pharaoh was bad",
        "Because ‘Ayn has a Sukoon",
        "Because Waw is a Leen letter"
      ],
      correctIndex: 0,
      explanation: "A Sakin Rā’ preceded by a genuine original Kasrah within the same word (without a heavy letter after it) is strictly light.",
      explanationBangla: "কারণ র সাকিনের পূর্বের হরফে আসল যের রয়েছে এবং র-এর পরে কোনো মোটা হরফ আসেনি (যেমন: ফির'আওন)।"
    },
    {
      id: "q8_8",
      type: "multiple_choice",
      question: "In the word (قِرْطَاسٍ), why is the Rā’ Sākinah recited as HEAVY despite being preceded by a Kasrah?",
      questionBangla: "(قِرْطَاسٍ) শব্দে র-এর পূর্বে যের থাকা সত্ত্বেও র কেন মোটা করে পড়তে হবে?",
      promptText: "قِرْطَاسٍ",
      options: [
        "Because it is immediately followed in the same word by a heavy letter of Isti‘lā’ (Ṭā’) that carries a Fatḥah",
        "Because Qaf has a Kasrah",
        "Because of the ending Seen",
        "Because it is a non-Arabic word"
      ],
      correctIndex: 0,
      explanation: "If a Sakin Rā’ is followed in the same word by a heavy letter with Fathah, the heaviness dominates and makes the Rā’ heavy.",
      explanationBangla: "কারণ র সাকিনের ঠিক পরেই একই শব্দে যবরযুক্ত একটি শক্তিশালী মোটা হরফ তোয়া (ط) আসায় র মোটা হয়ে যায়।"
    },
    {
      id: "q8_9",
      type: "multiple_choice",
      question: "In the phrase (ارْجِعِي إِلَىٰ رَبِّكِ), why is the initial Rā’ Sākinah recited as HEAVY?",
      questionBangla: "(ارْجِعِي إِلَىٰ رَبِّكِ) বাক্যে শুরুর র সাকিনটি কেন মোটা পড়তে হয়?",
      promptText: "ارْجِعِي",
      options: [
        "Because the preceding Kasrah on Hamzatul Wasl is accidental / temporary (‘Āriḍah), not an original root Kasrah",
        "Because Jīm is heavy",
        "Because it is at the end of the Surah",
        "Because of Yaa"
      ],
      correctIndex: 0,
      explanation: "When a Sakin Rā’ is preceded by Hamzatul Wasl (an accidental connecting vowel), the Rā’ is unconditionally heavy.",
      explanationBangla: "কারণ হামযাতুল ওয়াসলের যেরটি আসল বা মৌলিক নয় বরং সাময়িক (আরেদ্বী); আর সাময়িক যেরের পর র সাকিন সর্বদা মোটা হয়।"
    },
    {
      id: "q8_10",
      type: "multiple_choice",
      question: "When is the letter Lām in the Majestic Name of Allah (اللَّه / اللَّهُمَّ) recited as HEAVY (Mufakhkham)?",
      questionBangla: "আল্লাহ নামের লাম (لَفْظُ الْجَلَالَة) কোন অবস্থায় মোটা বা ভারী করে পড়তে হয়?",
      promptText: "قَالَ اللَّهُ  /  نَصْرُ اللَّهِ",
      options: [
        "When the letter immediately preceding it carries a Fatḥah or a Ḍammah (e.g. قَالَ اللَّهُ / نَصْرُ اللَّهِ)",
        "When preceded by a Kasrah",
        "Always in every verse",
        "Only when stopping"
      ],
      correctIndex: 0,
      explanation: "The Lām of Allah is heavy if preceded by Fathah or Dammah, producing a grand, majestic resonance.",
      explanationBangla: "আল্লাহ শব্দের পূর্বের হরফে যবর বা পেশ থাকলে আল্লাহ নামের লামটি মোটা করে পড়তে হয় (যেমন: ক্বালাল্লাহু, নাসরুল্লাহি)।"
    },
    {
      id: "q8_11",
      type: "multiple_choice",
      question: "When is the letter Lām in the Majestic Name of Allah recited as LIGHT (Muraqqaq)?",
      questionBangla: "আল্লাহ নামের লাম কখন পাতলা বা চিকন করে পড়তে হয়?",
      promptText: "بِسْمِ اللَّهِ",
      options: [
        "When the letter immediately preceding it carries a Kasrah (e.g. بِسْمِ اللَّهِ / قُلِ اللَّهُمَّ)",
        "When preceded by a Fathah",
        "When preceded by Dammah",
        "Never"
      ],
      correctIndex: 0,
      explanation: "Preceded by a Kasrah, the Lām of Allah becomes light and refined: 'Bismillāh' (never 'Bismil-lawh').",
      explanationBangla: "আল্লাহ শব্দের পূর্বের হরফে যের (কাসরাহ্) থাকলে লাম চিকন করে পড়তে হয় (যেমন: বিসমিল্লাহি)।"
    },
    {
      id: "q8_12",
      type: "multiple_choice",
      question: "How does the sound of Alif (the long vowel) behave with regard to Tafkhīm and Tarqīq?",
      questionBangla: "দীর্ঘ স্বরবর্ণ আলিফ মাদ্দের ক্ষেত্রে মোটা (তাফখীম) ও পাতলা (তারক্বীক্ব) হওয়ার নিয়ম কী?",
      options: [
        "Alif is a subordinate follower: it is HEAVY if preceded by a heavy letter (e.g. قَالَ), and LIGHT if preceded by a light letter (e.g. كَانَ)",
        "Alif is always heavy",
        "Alif is always light",
        "Alif only follows the letter after it"
      ],
      correctIndex: 0,
      explanation: "The Tajweed rule states: Alif follows what comes BEFORE it; if preceded by Isti‘lā’, it is heavy, otherwise light.",
      explanationBangla: "নিয়ম হলো: আলিফ তার পূর্ববর্তী হরফকে অনুসরণ করে; পূর্বে মোটা হরফ থাকলে আলিফ মোটা হয় (ক্বালা), আর পাতলা হরফ থাকলে আলিফ পাতলা হয় (কানা)।"
    },
    {
      id: "q8_13",
      type: "multiple_choice",
      question: "How does the nasal sound of Ghunnah (in Ikhfā’ Ḥaqīqī) behave with regard to Tafkhīm and Tarqīq?",
      questionBangla: "ইখফায়ে হাক্বীক্বীর গুন্নাহর সুর মোটা বা পাতলা হওয়ার ক্ষেত্রে কোন নিয়মটি কার্যকর?",
      options: [
        "Ghunnah follows what comes AFTER it: if the following Ikhfā’ letter is heavy (ص ض ط ظ ق), the Ghunnah is HEAVY; if light, it is LIGHT",
        "Ghunnah is always heavy",
        "Ghunnah is always light",
        "Ghunnah follows what comes before it"
      ],
      correctIndex: 0,
      explanation: "Unlike Alif, Ghunnah anticipates what comes AFTER it: heavy before heavy letters (e.g. مِن قَبْلُ), light before light letters (e.g. مِن دُونِ).",
      explanationBangla: "আলিফের উল্টো হলো গুন্নাহ: গুন্নাহ তার পরবর্তী হরফকে অনুসরণ করে; পরবর্তী হরফ মোটা হলে গুন্নাহ মোটা হয় (মিন ক্বব্লি), আর পাতলা হলে গুন্নাহ পাতলা হয় (মিন দূনি)।"
    },
    {
      id: "q8_14",
      type: "multiple_choice",
      question: "In the phrase (مِن قَبْلُ), what is the phonetic quality of the Ghunnah?",
      questionBangla: "(مِن قَبْلُ) বাক্যাংশে গুন্নাহর ধ্বনিগত গুণ কেমন হবে?",
      promptText: "مِن قَبْلُ",
      options: [
        "Heavy (Mufakhkhamah) because Qāf is a heavy letter of Isti‘lā’",
        "Light (Muraqqaqah)",
        "Silent",
        "Double Ghunnah"
      ],
      correctIndex: 0,
      explanation: "Because Qāf is a heavy letter, the nasal resonance inside the mouth is elevated and thick: 'Ming qablu'.",
      explanationBangla: "ক্বাফ মোটা হরফ হওয়ায় মুখের পেছনের অংশ উঁচিয়ে ভারী সুরে গুন্নাহ আদায় করতে হবে।"
    },
    {
      id: "q8_15",
      type: "multiple_choice",
      question: "In the phrase (مِن كَانَ), what is the phonetic quality of the Ghunnah?",
      questionBangla: "(مِن كَانَ) বাক্যাংশে গুন্নাহর সুর কেমন হবে?",
      promptText: "مِن كَانَ",
      options: [
        "Light (Muraqqaqah) because Kāf is a light letter of Istifāl",
        "Heavy",
        "Medium",
        "Zero Ghunnah"
      ],
      correctIndex: 0,
      explanation: "Because Kāf is a light letter, the Ghunnah is delicate and thin: 'Ming kāna'.",
      explanationBangla: "কাফ পাতলা হরফ হওয়ায় গুন্নাহ অত্যন্ত হালকা ও চিকন সুরে আদায় করতে হবে।"
    },
    {
      id: "q8_16",
      type: "multiple_choice",
      question: "What is the status of the word (فِرْقٍ) in Surah Ash-Shu‘ara: 63 regarding the Rā’ Sākinah?",
      questionBangla: "সূরা আশ-শু'আরার ৬৩ নম্বর আয়াতে (فِرْقٍ) শব্দের র সাকিনের ক্ষেত্রে ইমামদের ঐকমত্য কী?",
      promptText: "فِرْقٍ",
      options: [
        "Permissible in BOTH ways (Jawāz al-Wajhayn): can be read heavy or light, with light (Tarqīq) being preferred by most scholars in continuous reading",
        "Obligatorily heavy only",
        "Obligatorily light only",
        "Silent"
      ],
      correctIndex: 0,
      explanation: "Because the heavy Qāf following the Rā’ carries a Kasrah (which weakens its heaviness), scholars permit both Tarqeeq and Tafkheem.",
      explanationBangla: "যেহেতু র-এর পরবর্তী মোটা হরফ ক্বাফে যের রয়েছে, তাই এতে মোটা ও চিকন উভয়ভাবে পড়ার সুযোগ রয়েছে, তবে মিলিয়ে পড়ার সময় চিকন পড়া উত্তম।"
    },
    {
      id: "q8_17",
      type: "multiple_choice",
      question: "When stopping (Waqf) on the word (مِصْرَ) in the Quran, what is the preferred way to recite the Rā’?",
      questionBangla: "কুরআনে (مِصْرَ) শব্দে ওয়াকফ (থামার) সময় র হরফে কোনটি অধিক অগ্রগণ্য?",
      promptText: "مِصْرَ",
      options: [
        "Tafkhīm (Heavy) is preferred by Imam Ibn al-Jazari because the original vowel of the word in text is a Fatḥah",
        "Tarqeeq (Light) is preferred",
        "It must not be stopped on",
        "Qalqalah is mandatory"
      ],
      correctIndex: 0,
      explanation: "While both are allowed upon stopping, Ibn al-Jazari preferred Tafkheem for 'Miṣr' due to the base Fathah on the Rā’.",
      explanationBangla: "উভয় নিয়ম বৈধ হলেও ইবনুল জাযারীর মতে র-এর মূল হরকত যবর হওয়ায় ওয়াকফের সময় মোটা (তাফখীম) করে পড়া অধিক পছন্দনীয়।"
    },
    {
      id: "q8_18",
      type: "multiple_choice",
      question: "When stopping (Waqf) on the word (الْقِطْرِ) in Surah Saba: 12, what is the preferred way to recite the Rā’?",
      questionBangla: "সূরা সাবার ১২ নম্বর আয়াতে (الْقِطْرِ) শব্দে ওয়াকফ করার সময় র-এর ক্ষেত্রে কোনটি অগ্রগণ্য?",
      promptText: "الْقِطْرِ",
      options: [
        "Tarqīq (Light) is preferred because the original vowel of the word in text is a Kasrah",
        "Tafkheem is preferred",
        "It is silent",
        "Must be read with Ghunnah"
      ],
      correctIndex: 0,
      explanation: "Tarqeeq is prioritized for 'Al-Qiṭr' upon stopping because its original grammatical vowel is Kasrah.",
      explanationBangla: "ওয়াকফের সময় চিকন (তারক্বীক্ব) পড়া অগ্রগণ্য কারণ র হরফের মূল ব্যাকরণগত হরকত ছিল যের (কাসরাহ্)।"
    },
    {
      id: "q8_19",
      type: "multiple_choice",
      question: "When stopping on a word ending with Rā’ preceded by a Yā’ Sākinah (e.g. قَدِيرٌ / خَبِيرٌ), how is the Rā’ recited?",
      questionBangla: "ইয়া সাকিনের পর শব্দের শেষ র-তে ওয়াকফ করলে (যেমন: قَدِيرٌ বা خَبِيرٌ) র কীভাবে পড়তে হয়?",
      promptText: "قَدِيرٌ  /  خَبِيرٌ",
      options: [
        "Strictly LIGHT (Muraqqaqah) without any disagreement among scholars",
        "Strictly heavy",
        "Optional",
        "With Qalqalah"
      ],
      correctIndex: 0,
      explanation: "A terminal Sakin Rā’ preceded by Yā’ Sakinah (whether Madd or Leen) is unconditionally light (e.g. Qadeer, Khabiir, Khayr).",
      explanationBangla: "সাকিন ইয়ার পর আগত শেষ র-তে ওয়াকফ করলে সর্বসম্মতিক্রমে র সর্বদা পাতলা ও চিকন (মুরাক্কাক্ব) হয়।"
    },
    {
      id: "q8_20",
      type: "multiple_choice",
      question: "When stopping on the word (خَيْرٌ), why is the Rā’ recited as LIGHT?",
      questionBangla: "(خَيْرٌ) শব্দে ওয়াকফ করলে র কেন পাতলা হয়?",
      promptText: "خَيْرٌ",
      options: [
        "Because it is preceded by a Yā’ of Līn (يْ), and any Yā’ Sākinah directly pulls the following paused Rā’ into Tarqīq",
        "Because Khā is light",
        "Because of Tanween",
        "Because it means goodness"
      ],
      correctIndex: 0,
      explanation: "The presence of Sakin Yā’ immediately before the paused Rā’ demands Tarqeeq across all classical schools.",
      explanationBangla: "কারণ র-এর ঠিক পূর্বে সাকিনযুক্ত ইয়া (লীন) রয়েছে; আর সাকিন ইয়া পরবর্তী র-কে সরাসরি পাতলা করে ফেলে।"
    },
    {
      id: "q8_21",
      type: "multiple_choice",
      question: "In the word (أَنْذِرْهُمْ), what is the ruling on the Rā’ Sākinah?",
      questionBangla: "(أَنْذِرْهُمْ) শব্দে সাকিন র-এর তাজবীদ বিধান কী?",
      promptText: "أَنْذِرْهُمْ",
      options: [
        "Light (Muraqqaqah) because it is preceded by Dhāl with an original Kasrah, followed by a light letter (Hā’)",
        "Heavy because Hā has Dammah",
        "Heavy because of Noon",
        "Optional"
      ],
      correctIndex: 0,
      explanation: "Rā’ is Sakin preceded by genuine Kasrah and not followed by an Isti‘lā’ letter in the same word, so it is light.",
      explanationBangla: "যাল হরফে আসল যেরের পর র সাকিন আসায় এবং পরবর্তী হরফ ভারী না হওয়ায় র পাতলা হবে।"
    },
    {
      id: "q8_22",
      type: "multiple_choice",
      question: "In the word (مِرْيَةٍ), what is the ruling on the Rā’?",
      questionBangla: "(مِرْيَةٍ) শব্দে র হরফের বিধান কী?",
      promptText: "مِرْيَةٍ",
      options: [
        "Light (Muraqqaqah) because preceded by original Kasrah on Mīm",
        "Heavy because Yaa follows",
        "Heavy because of Tanween",
        "Silent"
      ],
      correctIndex: 0,
      explanation: "Rā’ Sakin preceded by genuine Kasrah on Mīm is recited thin and light: 'Mir-yah'.",
      explanationBangla: "মীমের আসল যেরের পর র সাকিন আসায় তা পাতলা ও চিকন হবে: 'মিরইয়াহ্'।"
    },
    {
      id: "q8_23",
      type: "multiple_choice",
      question: "In (أَمِ ارْتَابُوا), why is the Rā’ Sākinah recited as HEAVY?",
      questionBangla: "(أَمِ ارْتَابُوا) বাক্যাংশে র সাকিনটি কেন মোটা পড়তে হয়?",
      promptText: "أَمِ ارْتَابُوا",
      options: [
        "Because the Kasrah on the Mīm of (أَمِ) is ACCIDENTAL (transferred to resolve Iltiqā’ as-Sākinayn), not an original root vowel",
        "Because Mīm is heavy",
        "Because Tā’ is heavy",
        "Because it is a question"
      ],
      correctIndex: 0,
      explanation: "The Kasrah on 'Am' is temporary, introduced solely to bridge the two Sakins. Accidental Kasrah makes Rā’ heavy.",
      explanationBangla: "কারণ 'আম্' এর মীমের যেরটি আসল নয় বরং দুই সাকিন মেলানোর জন্য সাময়িক আগন্তুক যের; ফলে র মোটা হবে।"
    },
    {
      id: "q8_24",
      type: "multiple_choice",
      question: "In the phrase (فِي مِرْيَةٍ), what is the ruling on the Rā’?",
      questionBangla: "(فِي مِرْيَةٍ) বাক্যে র-এর উচ্চারণ কেমন হবে?",
      promptText: "فِي مِرْيَةٍ",
      options: ["Light (Muraqqaqah)", "Heavy (Mufakhkhamah)", "Optional", "With Ghunnah"],
      correctIndex: 0,
      explanation: "Mīm carries an authentic root Kasrah, rendering the Sakin Rā’ light.",
      explanationBangla: "মীমের মূল যেরের কারণে র সাকিন নির্দ্বিধায় পাতলা হবে।"
    },
    {
      id: "q8_25",
      type: "multiple_choice",
      question: "Why is the Ghunnah in (عَن طَبَقٍ) recited as HEAVY?",
      questionBangla: "(عَن طَبَقٍ) বাক্যাংশে গুন্নাহটি কেন ভারী মোটা সুরে আদায় করতে হয়?",
      promptText: "عَن طَبَقٍ",
      options: [
        "Because the following Ikhfā’ letter is Ṭā’ (ط), which is the strongest heavy letter of Isti‘lā’ and Iṭbāq",
        "Because ‘Ayn is heavy",
        "Because of Tanween",
        "Because Baa has Fathah"
      ],
      correctIndex: 0,
      explanation: "Ṭā’ is a supremely heavy letter; the preparatory nasalization in the mouth must be thick and heavy.",
      explanationBangla: "পরবর্তী হরফ তোয়া (ط) সর্বোচ্চ শক্তিশালী মোটা হরফ হওয়ায় ইখফার গুন্নাহ অত্যন্ত গম্ভীর ও মোটা হবে।"
    },
    {
      id: "q8_26",
      type: "multiple_choice",
      question: "Why is the Ghunnah in (مِن تَحْتِهَا) recited as LIGHT?",
      questionBangla: "(مِن تَحْتِهَا) বাক্যাংশে গুন্নাহটি কেন পাতলা চিকন সুরে পড়তে হয়?",
      promptText: "مِن تَحْتِهَا",
      options: [
        "Because Tā’ (ت) is a light letter of Istifāl",
        "Because Meem has Kasrah",
        "Because Haa is in the throat",
        "Because of Alif"
      ],
      correctIndex: 0,
      explanation: "Tā’ is light; the Ikhfa Ghunnah mirrors this by keeping the tongue flat and the resonance thin.",
      explanationBangla: "তা (ت) পাতলা হরফ হওয়ায় ইখফার সুর মুখের ভেতর পাতলা ও চিকন রাখতে হয়।"
    },
    {
      id: "q8_27",
      type: "multiple_choice",
      question: "In (خَالِدِينَ فِيهَا), how is the Alif following Khā’ recited?",
      questionBangla: "(خَالِدِينَ) শব্দে খা-এর পরবর্তী আলিফ মাদ্দটি কীভাবে তিলাওয়াত করতে হবে?",
      promptText: "خَالِدِينَ",
      options: [
        "Heavy (Mufakhkham) because it follows the heavy letter Khā’",
        "Light",
        "Silent",
        "With Ghunnah"
      ],
      correctIndex: 0,
      explanation: "Alif adopts the heavy timbre of Khā’, filling the mouth with deep resonance: 'Khā-lideen'.",
      explanationBangla: "আলিফ তার পূর্ববর্তী মোটা হরফ খা-কে অনুসরণ করে গম্ভীর ভারী কণ্ঠে মুখ পূর্ণ করে উচ্চারিত হবে।"
    },
    {
      id: "q8_28",
      type: "multiple_choice",
      question: "In (مَالِكِ يَوْمِ الدِّينِ), how is the Alif on Mīm in (مَالِكِ) recited?",
      questionBangla: "(مَالِكِ) শব্দে মীমের খাড়া আলিফটি কীভাবে তিলাওয়াত করতে হবে?",
      promptText: "مَالِكِ",
      options: [
        "Light (Muraqqaq) because Mīm is a light letter of Istifāl",
        "Heavy like Qaf",
        "With Ghunnah",
        "Silent"
      ],
      correctIndex: 0,
      explanation: "Mīm is a light consonant; its Alif follows suit with a pristine light, open vowel.",
      explanationBangla: "মীম পাতলা হরফ হওয়ায় এর আলিফ মাদ্দটিও হালকা ও চিকন সুরে আদায় হবে।"
    },
    {
      id: "q8_29",
      type: "multiple_choice",
      question: "What is the danger of exaggerating Tafkhīm on a heavy letter?",
      questionBangla: "মোটা হরফকে তাফখীম করার ক্ষেত্রে বাড়াবাড়ি করলে কোন মারাত্মক ভুলটি ঘটে?",
      options: [
        "Rounding the lips artificially where no Ḍammah exists, corrupting the letter with a false 'w' or 'o' bias",
        "Making the letter too fast",
        "Whispering the vowel",
        "Dropping the letter"
      ],
      correctIndex: 0,
      explanation: "Many reciters wrongly purse their lips forward when pronouncing Ṣād, Ṭā’, or Qāf with Fathah, which is an error.",
      explanationBangla: "সবচেয়ে বড় বিকৃতি হলো পেশ না থাকা সত্ত্বেও ঠোঁট গোল করে ফেলা (যেমন: 'ত্বো' বা 'স্বো' বলা), যা স্পষ্ট ভুল।"
    },
    {
      id: "q8_30",
      type: "multiple_choice",
      question: "What is the danger when a light letter is surrounded by heavy letters (e.g. وَلَا الضَّالِّينَ or مَخْمَصَةٍ)?",
      questionBangla: "ভারী হরফের পাশে কোনো পাতলা হরফ আসলে (যেমন: مَخْمَصَةٍ) তিলাওয়াতকারীর কোন বিপদ ঘটে?",
      options: [
        "Contagious Tafkhīm: accidentally making the light letter heavy by inertia (e.g. turning Mīm into a heavy 'Maw')",
        "Skipping the light letter",
        "Adding a Madd",
        "Adding a stop"
      ],
      correctIndex: 0,
      explanation: "A great master of Tajweed preserves the delicacy of light letters even when touching heavy giants like Khā’ and Ṣād.",
      explanationBangla: "ভারী হরফের প্রভাবে পাশের হালকা হরফকে অজান্তে মোটা বানিয়ে ফেলা (যেমন: মীমকে 'ম' বলা); দক্ষ ক্বারী উভয়কে পৃথক রাখেন।"
    },
    {
      id: "q8_31",
      type: "multiple_choice",
      question: "In the word (عَصَوْا), why is the ‘Ayn pronounced LIGHT even though Ṣād immediately follows?",
      questionBangla: "(عَصَوْا) শব্দে সোয়াদ ঠিক পরেই থাকা সত্ত্বেও আইন (ع) কেন অবশ্যই পাতলা পড়তে হবে?",
      promptText: "عَصَوْا",
      options: [
        "Because ‘Ayn is permanently a letter of Istifāl (lowering); making it heavy is an unacceptable error (Laḥn)",
        "Because Ayn has a Kasrah",
        "Because Waw is heavy",
        "Because it is short"
      ],
      correctIndex: 0,
      explanation: "‘Ayn must be kept strictly light ('‘A-'), before the tongue elevates for the heavy Ṣād ('-ṣaw').",
      explanationBangla: "কারণ আইন সর্বদা পাতলা হরফ; সোয়াদের প্রভাবে আইনকে মোটা করা মারাত্মক লাহনে জলী।"
    },
    {
      id: "q8_32",
      type: "multiple_choice",
      question: "In (سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى), what is the quality of the Rā’ in (رَبِّكَ)?",
      questionBangla: "(رَبِّكَ) শব্দে র-এর তাজবীদ গুণ কী?",
      promptText: "رَبِّكَ",
      options: ["Heavy (Mufakhkhamah) because it carries a Fatḥah", "Light", "Silent", "Optional"],
      correctIndex: 0,
      explanation: "Rā’ has a Fathah, making it decisively heavy: 'Rab-bika'.",
      explanationBangla: "র-এর ওপর যবর থাকায় এটি সুস্পষ্টভাবে মোটা বা তাফখীম হবে: 'রব্বিকা'।"
    },
    {
      id: "q8_33",
      type: "multiple_choice",
      question: "What are the only two letters in the Arabic alphabet that fluctuate between heavy and light depending on context?",
      questionBangla: "আরবি বর্ণমালার কোন দুটি হরফ নিয়ম ও পারিপার্শ্বিক অবস্থার ওপর ভিত্তি করে কখনো মোটা আবার কখনো পাতলা হয়?",
      options: [
        "Lām (in the name of Allah) and Rā’ (plus the derivative behavior of Alif and Ghunnah)",
        "Qāf and Kāf",
        "Bā’ and Tā’",
        "Hamzah and ‘Ayn"
      ],
      correctIndex: 0,
      explanation: "Lām (specifically in Allah) and Rā’ fluctuate between Tafkhīm and Tarqīq, while Alif and Ghunnah mirror their neighbors.",
      explanationBangla: "লাম (আল্লাহর নামে) এবং র (ر) হরফ নিয়মভেদে মোটা ও চিকন হয়, আর আলিফ ও গুন্নাহ তাদের সঙ্গীকে অনুসরণ করে।"
    },
    {
      id: "q8_34",
      type: "multiple_choice",
      question: "In the word (الْفَجْرِ), when stopping on it at the end of Ayah 1 of Surah Al-Fajr, how is the Rā’ recited?",
      questionBangla: "সূরা আল-ফজরের ১ম আয়াতের শেষে (الْفَجْرِ) শব্দে ওয়াকফ করলে র-এর উচ্চারণ কেমন হবে?",
      promptText: "وَالْفَجْرِ",
      options: [
        "Heavy (Mufakhkhamah) because the letter preceding the paused Rā’ is Jīm (Sakin), which is preceded by Fatḥah on Fā’",
        "Light because the written vowel is Kasrah",
        "Silent",
        "With Qalqalah"
      ],
      correctIndex: 0,
      explanation: "On pause, look back past Sakin Jīm to the Fā’ which carries Fathah; this makes the paused Rā’ heavy.",
      explanationBangla: "ওয়াকফের সময় র সাকিন ও জীম সাকিন অতিক্রম করে ফা-এর যবরের দিকে তাকাতে হয়; যবরের কারণে র মোটা হয়ে থামবে।"
    },
    {
      id: "q8_35",
      type: "multiple_choice",
      question: "What is the ultimate purpose of mastering Tafkhīm and Tarqīq?",
      questionBangla: "তাফখীম ও তারক্বীক্বের সূক্ষ্ম নিয়ম আয়ত্ত করার চূড়ান্ত উদ্দেশ্য কী?",
      options: [
        "To preserve the authentic acoustic aesthetics revealed to Prophet Muhammad (PBUH) and protect Arabic vowels from linguistic drift",
        "To make recitation sound exotic",
        "To read faster",
        "To win recitation trophies"
      ],
      correctIndex: 0,
      explanation: "Tafkheem and Tarqeeq honor the exact oral transmission of divine speech, preserving both meaning and phonetic majesty.",
      explanationBangla: "রাসূলুল্লাহ (সা.)-এর ওপর অবতীর্ণ ওহীর বিশুদ্ধ সুরধারা অবিকৃত রাখা এবং ভাষার রূপ ও মাহাত্ম্য রক্ষা করাই এর মূল উদ্দেশ্য।"
    }
  ]
};
