import { Quiz } from "./types";

export const quizLevel4: Quiz = {
  id: "q4",
  levelId: 4,
  title: "Level 4: Harakāt (Vowels), Sukūn & Jazm Precision Challenge",
  titleBangla: "লেভেল ৪: হরকত, সুকূন ও জযমের সূক্ষ্ম বিশুদ্ধতা পরীক্ষা",
  description: "Master exact phonetic duration of Fathah, Kasrah, Dammah, prevent vowel-dragging (Tamtīṭ) or clipping (Ikhtilās), and grasp true Sukoon mechanics.",
  descriptionBangla: "যবর, যের, পেশের একক মাত্রা, হরকত টেনে পড়া বা দ্রুত খেয়ে ফেলার ভুল বর্জন এবং সুকূনের বিশুদ্ধ স্থিরতা যাচাই করুন।",
  passingScore: 70,
  questions: [
    {
      id: "q4_1",
      type: "multiple_choice",
      question: "What is the precise duration of a single Harakah (short vowel) in Quranic recitation?",
      questionBangla: "কুরআন তিলাওয়াতে একটি একক হরকতের (হ্রস্ব স্বর) সঠিক সময়কাল বা পরিমাণ কতটুকু?",
      options: [
        "Exactly 1 count (half of a natural Madd), neither stretched nor truncated",
        "2 full seconds",
        "As long as a breath",
        "Instantaneous with zero duration"
      ],
      correctIndex: 0,
      explanation: "A single Harakah equals 1 count (the time to open or close a finger normally), precisely half the duration of Madd Asli.",
      explanationBangla: "এক হরকতের পরিমাণ হলো ঠিক ১ মাত্রা বা সাধারণ গতিতে একটি আঙুল খোলা বা বন্ধ করার সময়, যা মাদ্দের অর্ধেক।"
    },
    {
      id: "q4_2",
      type: "multiple_choice",
      question: "What is the acoustic sign Fatḥah (َ) derived from historically in Arabic phonetics?",
      questionBangla: "আরবি ধ্বনিতত্ত্বে যবর বা ফাতহাহ্ (َ) মূলত কোন দীর্ঘ স্বরবর্ণের অংশ থেকে উৎপত্তি?",
      promptText: "ـَ",
      options: [
        "A miniature portion of Alif (representing the pure open 'a' sound)",
        "A portion of Wāw",
        "A portion of Yā’",
        "A dot below the line"
      ],
      correctIndex: 0,
      explanation: "Historically, Fathah represents an abbreviated horizontal slice of an Alif (الألف المائلة), opening the mouth vertically.",
      explanationBangla: "ফাতহাহ বা যবর মূলত আলিফের ক্ষুদ্র রূপ যা মুখ উল্লম্বভাবে স্বাভাবিক ফাঁক করে বিশুদ্ধ 'আ' ধ্বনি প্রকাশ করে।"
    },
    {
      id: "q4_3",
      type: "multiple_choice",
      question: "What common reciting mistake is termed 'Tamtīṭ' (تَمْطِيط) regarding short vowels?",
      questionBangla: "হ্রস্ব স্বর বা হরকত পড়ার ক্ষেত্রে 'তামতীত' (تَمْطِيط) নামক মারাত্মক ভুলটি কী?",
      options: [
        "Illegitimately elongating a 1-count short vowel so it mistakenly turns into a 2-count Madd letter",
        "Skipping the letter completely",
        "Pronouncing the letter with a throat stop",
        "Whispering the vowel"
      ],
      correctIndex: 0,
      explanation: "Tamtīṭ is dragging a short vowel (e.g. turning كَتَبَ into كَاتَابَا), which adds false letters to the Quranic text.",
      explanationBangla: "তামতীত হলো এক হরকতের হ্রস্ব স্বরকে অযথা টেনে দুই হরকত মাদ্দের হরফে রূপান্তর করে ফেলা, যা কুরআনের শব্দ বিকৃত করে।"
    },
    {
      id: "q4_4",
      type: "multiple_choice",
      question: "What reciting mistake is known as 'Ikhtilās' (اخْتِلَاس) regarding short vowels?",
      questionBangla: "হরকত আদায়ের ক্ষেত্রে 'ইখতিলাস' (اخْتِلَاس) নামক ত্রুটিটি কী?",
      options: [
        "Stealing or rushing through a short vowel, giving it only a fraction of its count (swallowing the vowel)",
        "Shouting the vowel loudly",
        "Stopping on the vowel with breath",
        "Adding a Ghunnah to every vowel"
      ],
      correctIndex: 0,
      explanation: "Ikhtilās is snatching the vowel away prematurely so only about two-thirds of its sound is heard.",
      explanationBangla: "ইখতিলাস হলো হরকতের পূর্ণ ধ্বনি না দিয়ে তাড়াহুড়ো করে হরকতের কিছু অংশ গিলে ফেলা।"
    },
    {
      id: "q4_5",
      type: "audio_match",
      question: "Listen to the letter Bā’ with a pure Fatḥah. Is it 'Ba' or 'Baw'?",
      questionBangla: "বা-এর ওপর যবরের খাঁটি উচ্চারণটি শুনুন। এটি কি বিশুদ্ধ 'বা' নাকি আঞ্চলিক বিকৃত 'ব'?",
      audioPrompt: "بَ",
      audioUrl: "/audio/alphabet/baa.mp3",
      options: ["Pure 'Ba' with natural vertical opening", "Heavy 'Baw' with rounded lips", "Slanted 'Bay'", "Silent"],
      correctIndex: 0,
      explanation: "Light letters with Fathah must be opened vertically without lip rounding, avoiding the distorted 'baw' or 'bo' sound.",
      explanationBangla: "পাতলা হরফে যবর দিলে মুখ স্বাভাবিক খুলে খাঁটি 'বা' হবে, ঠোঁট গোল করে 'ব' বা 'বো' করা সম্পূর্ণ ভুল।"
    },
    {
      id: "q4_6",
      type: "multiple_choice",
      question: "How should Kasrah (ِ) be pronounced mechanically without 'Imālah' (slanting)?",
      questionBangla: "যের বা কাসরাহ (ِ) কে 'ইমালাহ্' (বিকৃত বিকেন্দ্রীকরণ) ছাড়া কীভাবে বিশুদ্ধভাবে আদায় করতে হয়?",
      promptText: "ـِ",
      options: [
        "By dropping the lower jaw downward and smiling slightly to produce a crisp 'i', avoiding an English 'eh' sound",
        "By pushing both lips forward like whistling",
        "By holding the breath in the throat",
        "By shouting loudly"
      ],
      correctIndex: 0,
      explanation: "True Kasrah drops the lower jaw downward, producing a crisp, clean 'i' (as in 'sit'), not a dull 'eh'.",
      explanationBangla: "কাসরাহ্ আদায়ে নিচের চোয়াল সামান্য নিচে নামিয়ে পরিষ্কার 'ই' ধ্বনি বের করতে হয়, 'এ'-কার এর মতো ঢিলেঢালা করা নিষেধ।"
    },
    {
      id: "q4_7",
      type: "multiple_choice",
      question: "How is Ḍammah (ُ) properly executed with the lips?",
      questionBangla: "পেশ বা দাম্মাহ (ُ) ঠোঁটের সাহায্যে কীভাবে যথাযথভাবে আদায় করতে হয়?",
      promptText: "ـُ",
      options: [
        "By completely rounding both lips forward into a small circle to produce a pure 'u' sound (ضم الشفتين)",
        "By leaving the lips flat and unmoving",
        "By opening the mouth wide",
        "By pressing the lower teeth against the upper lip"
      ],
      correctIndex: 0,
      explanation: "Imam Ibn al-Jazari stressed: every letter with Dammah is only perfected by rounding the two lips forward completely.",
      explanationBangla: "ইমাম ইবনুল জাযারী বলেন: দুই ঠোঁট সম্পূর্ণ গোল করে সামনে না বাড়ালে কোনো দাম্মাহ্ বা পেশ পূর্ণ হতে পারে না।"
    },
    {
      id: "q4_8",
      type: "multiple_choice",
      question: "What is Sukūn (السُّكُونُ) fundamentally in the science of Arabic phonetics?",
      questionBangla: "আরবি ধ্বনিতত্ত্বে সুকূন বা জযম (السُّكُونُ) এর মূল অর্থ ও অবস্থা কী?",
      promptText: "ـْ",
      options: [
        "The total absence of any Harakah (rest/stillness of the vocal cords upon the consonant)",
        "A fourth type of vowel",
        "An extra long Madd",
        "A pause to drink water"
      ],
      correctIndex: 0,
      explanation: "Sukoon literally means stillness; it denotes an unvowelled consonant where sound arrests at its native Makhraj.",
      explanationBangla: "সুকূন মানে স্থিরতা; অর্থাৎ হরকতবিহীন শান্ত অবস্থা যেখানে ধ্বনি সরাসরি তার মাখরাজে গিয়ে স্থির হয়।"
    },
    {
      id: "q4_9",
      type: "multiple_choice",
      question: "In the Uthmani Quranic script, what does the standard Sukūn look like?",
      questionBangla: "উসমানি কুরআনীয় লিপিতে সুকূনের আদর্শ রূপ কেমন?",
      promptText: "ـۡ",
      options: [
        "A miniature head of the letter Khā’ (خـ without dot), representing 'Khafeef' (light/unvowelled)",
        "A perfect complete circle (like zero)",
        "A triangle pointing left",
        "A small dot below"
      ],
      correctIndex: 0,
      explanation: "In Quranic print, Sukoon is written as the miniature crown of the letter Khā’ (خفيف - light), not a round zero.",
      explanationBangla: "মুসহাফে সুকূন কোনো গোল শূন্য নয়, বরং নুকতাহীন খায়ের মাথা (خفيف বা হালকা শব্দের প্রতীক)।"
    },
    {
      id: "q4_10",
      type: "multiple_choice",
      question: "In the word (يَعْلَمُونَ), which letters carry a Sukūn?",
      questionBangla: "(يَعْلَمُونَ) শব্দটিতে কোন হরফের ওপর সুকূন রয়েছে?",
      promptText: "يَعْلَمُونَ",
      options: ["‘Ayn (عْ)", "Lām (ل)", "Mīm (م)", "Nūn (ن)"],
      correctIndex: 0,
      explanation: "The word has: Yā’ with Fathah (يَ), ‘Ayn with Sukoon (عْ), Lām with Fathah (لَ), Mīm with Dammah (مُ), Waw Madd, Nūn with Fathah (نَ).",
      explanationBangla: "শব্দটিতে কেবল আইন (عْ) হরফের ওপর সুকূন রয়েছে।"
    },
    {
      id: "q4_11",
      type: "multiple_choice",
      question: "How is the phrase (قُلْ هُوَ اللَّهُ أَحَدٌ) started? What Harakah is on the Qāf in (قُلْ)?",
      questionBangla: "(قُلْ هُوَ اللَّهُ أَحَدٌ) আয়াতে 'ক্বুল' (قُلْ) শব্দের ক্বাফ হরফে কোন হরকত রয়েছে?",
      promptText: "قُلْ",
      options: ["Ḍammah (Pesh)", "Fatḥah (Zabar)", "Kasrah (Zer)", "Sukūn"],
      correctIndex: 0,
      explanation: "The imperative verb begins with Qāf carrying a Dammah: 'Qul' (قُلْ).",
      explanationBangla: "এখানে ক্বাফ হরফে পেশ (দাম্মাহ) এবং লাম হরফে সুকূন রয়েছে: 'ক্বুল্'।"
    },
    {
      id: "q4_12",
      type: "multiple_choice",
      question: "What happens when an Arabic word begins with an unvowelled Sakin letter?",
      questionBangla: "আরবি ভাষায় কোনো শব্দ যদি সাকিন বা জযমযুক্ত হরফ দিয়ে শুরু হতে চায়, তবে কী ঘটে?",
      options: [
        "It is phonetically IMPOSSIBLE in Arabic; a Hamzatul Wasl must be introduced to enable speech",
        "The letter is shouted",
        "The letter becomes a Waw",
        "The letter is deleted"
      ],
      correctIndex: 0,
      explanation: "The golden rule of Arabic phonetics: Arabic never begins with a Sakin letter, nor stops on a vowelled one (لا يُبْدَأُ بِسَاكِنٍ).",
      explanationBangla: "আরবি ভাষার মৌলিক নিয়ম: আরবিতে কখনোই সাকিন দিয়ে পড়া শুরু করা যায় না; তাই শুরুতে হামযাতুল ওয়াসল আনা হয়।"
    },
    {
      id: "q4_13",
      type: "multiple_choice",
      question: "In the word (مِنْهُمْ), identify the Harakah on Mīm, Nūn, Hā’, and Mīm respectively:",
      questionBangla: "(مِنْهُمْ) শব্দে মীম, নূন, হা এবং শেষ মীমের হরকত ক্রমানুসারে কী কী?",
      promptText: "مِنْهُمْ",
      options: [
        "Kasrah on first Mīm, Sukūn on Nūn, Ḍammah on Hā’, Sukūn on second Mīm",
        "Fatḥah, Sukūn, Fatḥah, Sukūn",
        "Ḍammah, Kasrah, Sukūn, Fatḥah",
        "All four are Sukūn"
      ],
      correctIndex: 0,
      explanation: "Pronounced 'Min-hum': Mīm carries Kasrah, Nūn is Sakin, Hā’ carries Dammah, final Mīm is Sakin.",
      explanationBangla: "উচ্চারণ 'মিন্হুম্': প্রথম মীমে যের, নূনে সুকূন, হা-তে পেশ এবং শেষ মীমে সুকূন।"
    },
    {
      id: "q4_14",
      type: "multiple_choice",
      question: "What is the sole word in the narration of Ḥafṣ ‘an ‘Āṣim with an obligatory Imālah (slanting of Fatḥah towards Kasrah)?",
      questionBangla: "হাফস্ 'আন 'আসিম রেওয়ায়েতে গোটা কুরআনে কোন একমাত্র শব্দটিতে ওয়াজিব 'ইমালাহ্' (যবরকে যেরের দিকে হেলিয়ে পড়া) রয়েছে?",
      promptText: "مَجْر۪ىٰهَا",
      options: [
        "مَجْر۪ىٰهَا (Majrāhā pronounced as Maj-ray-hā in Surah Hud: 41)",
        "بِسْمِ اللَّهِ",
        "الرَّحْمَٰنِ",
        "الصِّرَاطَ"
      ],
      correctIndex: 0,
      explanation: "Surah Hud verse 41 has the only Imalah in Hafs: 'Bismillahi majrayha wa mursaha', marked by a diamond (ـ۪) under the Rā’.",
      explanationBangla: "সূরা হুদের ৪১ নম্বর আয়াতের 'মাজরেইহা' (مَجْر۪ىٰهَا) একমাত্র শব্দ যেখানে যবরকে যেরের দিকে হেলিয়ে পড়া ওয়াজিব।"
    },
    {
      id: "q4_15",
      type: "multiple_choice",
      question: "In the word (كُتُبٌ), how many Ḍammahs are present before the Tanween?",
      questionBangla: "(كُتُبٌ) শব্দে তানবীনের পূর্বে কতটি পেশ রয়েছে?",
      promptText: "كُتُبٌ",
      options: ["Two: on Kāf and on Tā’", "Only one", "Three", "Zero"],
      correctIndex: 0,
      explanation: "Both Kāf and Tā’ carry single Dammahs: 'Ku-tu-bun'.",
      explanationBangla: "কাফ এবং তা উভয় হরফে একক পেশ রয়েছে: 'কু-তু-বুন'।"
    },
    {
      id: "q4_16",
      type: "multiple_choice",
      question: "What mistake occurs if you add a 'bounce' or echo to letters that are NOT Qalqalah when they have Sukūn (e.g. أَنْعَمْتَ)?",
      questionBangla: "(أَنْعَمْتَ) শব্দে নূন বা মীমের মতো কলকলাহ্ বিহীন সাকিন হরফকে ঝাঁকুনি বা বাউন্স দিলে কী মারাত্মক ভুল হয়?",
      options: [
        "Adding a phantom vowel (Qalqalah false error), which is a forbidden phonetic corruption (Laḥn)",
        "It improves the Tajweed",
        "It creates a long Madd",
        "It makes the word heavy"
      ],
      correctIndex: 0,
      explanation: "Only the 5 Qalqalah letters (ق ط ب ج د) bounce. Bouncing letters like Nūn, Mīm, or Lām introduces an illegal phantom vowel.",
      explanationBangla: "ক্বাফ, তোয়া, বা, জীম, দাল ব্যতীত অন্য হরফে ঝাঁকুনি দিলে অযাচিত হরকত সৃষ্টি হয় যা তিলাওয়াতে মারাত্মক দোষ।"
    },
    {
      id: "q4_17",
      type: "multiple_choice",
      question: "In (الْحَمْدُ لِلَّهِ), what Harakah is on the Dāl of (الْحَمْدُ)?",
      questionBangla: "(الْحَمْدُ لِلَّهِ) বাক্যে 'আল-হামদু' শব্দের শেষ দাল হরফে কোন হরকত রয়েছে?",
      promptText: "الْحَمْدُ",
      options: ["Ḍammah (u)", "Fatḥah (a)", "Kasrah (i)", "Sukūn"],
      correctIndex: 0,
      explanation: "The noun ends with an indicative Dammah: 'Al-Ḥamdu'.",
      explanationBangla: "এখানে দাল হরফে পেশ (দাম্মাহ্) রয়েছে: 'আল-হামদু'।"
    },
    {
      id: "q4_18",
      type: "multiple_choice",
      question: "Read the Harakat on the verb (خَلَقَكَ). What are the three vowels?",
      questionBangla: "(خَلَقَكَ) ক্রিয়াপদে তিনটি হরকত কী কী?",
      promptText: "خَلَقَكَ",
      options: [
        "All three are Fatḥah: Kha-la-qa-ka",
        "Kasrah, Dammah, Fathah",
        "Dammah, Fathah, Sukoon",
        "All three are Dammah"
      ],
      correctIndex: 0,
      explanation: "All four letters in this word carry successive Fathahs: Khā’ (َ), Lām (َ), Qāf (َ), Kāf (َ).",
      explanationBangla: "এখানে প্রতিটি হরফেই ধারাবাহিক যবর রয়েছে: 'খা-লা-ক্বা-কা'।"
    },
    {
      id: "q4_19",
      type: "multiple_choice",
      question: "In the word (رَبِّ الْعَالَمِينَ), what Harakah is underneath the Bā’ in (رَبِّ)?",
      questionBangla: "(رَبِّ الْعَالَمِينَ) বাক্যে 'রব্বি' শব্দের বা-এর নিচে কোন চিহ্ন রয়েছে?",
      promptText: "رَبِّ",
      options: [
        "A Shaddah with a Kasrah underneath (Rabbi)",
        "A Fathah",
        "A Dammah",
        "A Sukoon"
      ],
      correctIndex: 0,
      explanation: "The letter Bā’ carries a Shaddah paired with a Kasrah: 'Rabbi'.",
      explanationBangla: "এখানে বা হরফে তাশদীদের সাথে যের (কাসরাহ্) রয়েছে: 'রব্বি'।"
    },
    {
      id: "q4_20",
      type: "multiple_choice",
      question: "What is the difference between a Harakah and a letter of Madd?",
      questionBangla: "একটি সাধারণ হরকত এবং একটি মাদ্দের হরফের মধ্যে মৌলিক পার্থক্য কী?",
      options: [
        "A Harakah lasts 1 count; a letter of Madd elongates the exact same vowel quality for 2 full counts",
        "A Harakah is a consonant; Madd is a vowel",
        "Madd is silent; Harakah is noisy",
        "They are identical in duration"
      ],
      correctIndex: 0,
      explanation: "A letter of Madd is simply the acoustic prolongation of the preceding short vowel from 1 count into 2 counts.",
      explanationBangla: "হরকত হলো ১ মাত্রার হ্রস্ব স্বর; আর মাদ্দের হরফ হলো সেই একই স্বরের দ্বিগুণ (২ মাত্রা) দীর্ঘ রূপ।"
    },
    {
      id: "q4_21",
      type: "multiple_choice",
      question: "In the word (سُبْحَانَ), identify the letter carrying Sukūn:",
      questionBangla: "(سُبْحَانَ) শব্দে কোন হরফটির ওপর সুকূন রয়েছে?",
      promptText: "سُبْحَانَ",
      options: ["Bā’ (بْ)", "Sīn (س)", "Ḥā’ (ح)", "Nūn (ن)"],
      correctIndex: 0,
      explanation: "Bā’ carries the Sukūn: 'Sub-ḥāna' (and since Bā’ is a Qalqalah letter, it echoes cleanly).",
      explanationBangla: "বা (بْ) হরফের ওপর সুকূন রয়েছে এবং বা কলকলাহর হরফ হওয়ায় এতে হালকা বাউন্স হবে।"
    },
    {
      id: "q4_22",
      type: "multiple_choice",
      question: "In the word (مَالِكِ), what are the Harakat on Lām and Kāf?",
      questionBangla: "(مَالِكِ) শব্দে লাম এবং কাফ উভয় হরফের হরকত কী?",
      promptText: "مَالِكِ",
      options: [
        "Both carry Kasrah: Lām with Kasrah (li) and Kāf with Kasrah (ki)",
        "Both carry Fathah",
        "Lām has Dammah, Kāf has Sukoon",
        "Both carry Dammah"
      ],
      correctIndex: 0,
      explanation: "Pronounced 'Māliki': Mīm has Fathah followed by Alif, Lām has Kasrah (li), Kāf has Kasrah (ki).",
      explanationBangla: "উভয় হরফেই যের (কাসরাহ) রয়েছে: 'মালিকি'।"
    },
    {
      id: "q4_23",
      type: "multiple_choice",
      question: "Which of the following short vowels requires BOTH dropping the lower jaw and flattening the tongue?",
      questionBangla: "নিচের কোন হরকতটি আদায়ে নিচের চোয়াল নামাতে হয় এবং জিহ্বা সমতল রাখতে হয়?",
      promptText: "ـِ",
      options: ["Kasrah (ِ)", "Fatḥah (َ)", "Ḍammah (ُ)", "Sukūn (ْ)"],
      correctIndex: 0,
      explanation: "Kasrah is achieved by lower jaw descent and mid-tongue elevation without lip interference.",
      explanationBangla: "কাসরাহ্ বা যের আদায়ে চোয়াল নিচে নামাতে হয় এবং কোনো ঠোঁটের গোল করা ছাড়া বিশুদ্ধ 'ই' আওয়াজ করতে হয়।"
    },
    {
      id: "q4_24",
      type: "multiple_choice",
      question: "In the word (نَعْبُدُ), what Harakah is on the initial Nūn and final Dāl?",
      questionBangla: "(نَعْبُدُ) শব্দে প্রথম নূন এবং শেষ দালের হরকত কী?",
      promptText: "نَعْبُدُ",
      options: [
        "Fatḥah on Nūn (na), Ḍammah on Dāl (du)",
        "Kasrah on both",
        "Sukoon on both",
        "Dammah on Nūn, Fathah on Dāl"
      ],
      correctIndex: 0,
      explanation: "The verb is 'Na‘budu': Nūn has Fathah, ‘Ayn has Sukoon, Bā’ has Dammah, Dāl has Dammah.",
      explanationBangla: "নূনের ওপর যবর (না) এবং শেষ দালের ওপর পেশ (দু): 'না'বুদু'।"
    },
    {
      id: "q4_25",
      type: "multiple_choice",
      question: "What is the phonetic term for a letter that carries ANY of the three short vowels?",
      questionBangla: "তিনটি হরকতের যে কোনো একটি ধারণকারী হরফকে পারিভাষিক পরিভাষায় কী বলা হয়?",
      options: ["Mutaharrik (مُتَحَرِّكٌ - vowelled)", "Sākin (سَاكِنٌ)", "Mushaddad (مُشَدَّدٌ)", "Mamdūd (مَمْدُودٌ)"],
      correctIndex: 0,
      explanation: "A letter possessing a Fathah, Kasrah, or Dammah is called Mutaharrik (in motion).",
      explanationBangla: "হরকতযুক্ত হরফকে আরবি ব্যাকরণে 'মুতাহাররিক' (গতিশীল) হরফ বলা হয়।"
    },
    {
      id: "q4_26",
      type: "multiple_choice",
      question: "What happens when two Sakin letters meet in continuous speech (Iltiqā’ as-Sākinayn)?",
      questionBangla: "ধারাবাহিক তিলাওয়াতে যখন দুটি সাকিন হরফ পাশাপাশি মিলিত হয় (ইলতিকায়ে সাকিনাইন), তখন কী ঘটে?",
      options: [
        "Arabic syntax gives the first letter an accidental vowel (usually Kasrah) or drops it to prevent the impossible collision",
        "Both letters are deleted",
        "The reader stops breathing",
        "A 10-count Madd is recited"
      ],
      correctIndex: 0,
      explanation: "To resolve an impossible collision of two Sakins, the first Sakin is given an 'Arid Kasrah (e.g. قُلِ ادْعُوا) or dropped.",
      explanationBangla: "দুটি সাকিন একত্র হওয়া নিষিদ্ধ হওয়ায় প্রথম সাকিন হরফকে সাময়িক যের দিয়ে মিলিয়ে পড়া হয় (যেমন: ক্বুলিদ্'ঊ)।"
    },
    {
      id: "q4_27",
      type: "multiple_choice",
      question: "In the word (اهْدِنَا), what Harakah is given to the initial Hamzatul Wasl when starting recitation?",
      questionBangla: "(اهْدِنَا) শব্দ দিয়ে তিলাওয়াত শুরু করার সময় প্রথম হামযাতুল ওয়াসলে কোন হরকত দিতে হয়?",
      promptText: "اهْدِنَا",
      options: ["Kasrah: 'Ihdinā'", "Fathah: 'Ahdinā'", "Dammah: 'Uhdinā'", "Sukoon: 'Hdinā'"],
      correctIndex: 0,
      explanation: "Because the third letter (Dāl) carries a Kasrah, the Hamzatul Wasl must begin with a Kasrah: 'Ihdinā'.",
      explanationBangla: "তৃতীয় হরফ (দাল) এ যের থাকায় শুরুর হামযাহটিতে যের দিয়ে শুরু করতে হবে: 'ইহ্দিনা'।"
    },
    {
      id: "q4_28",
      type: "multiple_choice",
      question: "In (أَنْعَمْتَ عَلَيْهِمْ), which letter carries Sukūn in (عَلَيْهِمْ)?",
      questionBangla: "(عَلَيْهِمْ) শব্দে কোন দুটি হরফে সুকূন রয়েছে?",
      promptText: "عَلَيْهِمْ",
      options: ["Yā’ (يْ) and Mīm (مْ)", "Only ‘Ayn", "Lām and Hā’", "None"],
      correctIndex: 0,
      explanation: "In '‘Alayhim': ‘Ayn has Fathah, Lām has Fathah, Yā’ is Sakin (Leen), Hā’ has Kasrah, and Mīm is Sakin.",
      explanationBangla: "ইয়া (يْ) এবং শেষ মীম (مْ) উভয় হরফে সুকূন রয়েছে।"
    },
    {
      id: "q4_29",
      type: "multiple_choice",
      question: "What is the acoustic result of making a heavy letter carry a Kasrah (e.g. قِيلَ)?",
      questionBangla: "একটি মোটা হরফে যের (কাসরাহ) আসলে তার ভারী হওয়ার মাত্রায় কী পরিবর্তন ঘটে (যেমন: قِيلَ)?",
      promptText: "قِيلَ",
      options: [
        "It reaches the lowest rank of Tafkheem (Tafkheem Nisbi - relative heaviness), remaining heavier than Kāf but lighter than with Fathah",
        "It becomes 100% light like Kaaf",
        "It loses its sound",
        "It turns into a throat letter"
      ],
      correctIndex: 0,
      explanation: "Heavy letters with Kasrah enter the 5th and lowest level of heaviness (Tafkheem Nisbi), preserving essential elevation.",
      explanationBangla: "মোটা হরফে যের আসলে তা ভারী হওয়ার সর্বনিম্ন স্তরে (আপেক্ষিক তাফখীম) পৌঁছায়, তবে তা কাফের মতো হালকা হয় না।"
    },
    {
      id: "q4_30",
      type: "multiple_choice",
      question: "In the word (يُوَسْوِسُ), what are the Harakat on the two Wāws?",
      questionBangla: "(يُوَسْوِسُ) শব্দে উপস্থিত দুটি ওয়াও হরফের হরকত কী কী?",
      promptText: "يُوَسْوِسُ",
      options: [
        "First Wāw has Fatḥah (wa); second Wāw has Kasrah (wi)",
        "Both have Fathah",
        "Both have Dammah",
        "First has Sukoon, second has Fathah"
      ],
      correctIndex: 0,
      explanation: "Pronounced 'Yuwaswisu': Yā’ has Dammah, first Wāw has Fathah, Sīn has Sukoon, second Wāw has Kasrah, ending Sīn has Dammah.",
      explanationBangla: "প্রথম ওয়াও-এ যবর (ওয়া) এবং দ্বিতীয় ওয়াও-এ যের (উই): 'ইউওয়াস্ওয়িসু'।"
    },
    {
      id: "q4_31",
      type: "multiple_choice",
      question: "How does a Sukūn interact with breath in letters of Hams (فَحَثَّهُ شَخْصٌ سَكَتَ)?",
      questionBangla: "হামস্ (বাতাস জারি রাখার) হরফগুলোতে সুকূন আসলে কী ঘটে (فَحَثَّهُ شَخْصٌ سَكَتَ)?",
      options: [
        "Breath continues to whisper and flow freely after the articulation point collides (e.g. أَفْ, أَشْ, أَسْ, أَتْ)",
        "Breath is completely choked off",
        "The voice shouts",
        "A musical tone is created"
      ],
      correctIndex: 0,
      explanation: "Letters of Hams maintain a flowing exhalation of breath when Sakin, ensuring their acoustic clarity.",
      explanationBangla: "হামসের ১০টি হরফে সাকিন হলে শ্বাসবায়ু মৃদু হিসহিস শব্দে জারি রেখে মাখরাজ স্পষ্ট করতে হয়।"
    },
    {
      id: "q4_32",
      type: "multiple_choice",
      question: "In the word (فَوَسَطْنَ), what special rule applies to the Ṭā’ carrying a Sukūn?",
      questionBangla: "(فَوَسَطْنَ) শব্দে তোয়া (طْ) হরফে সুকূন থাকায় কোন বিশেষ তাজবীদ নিয়ম কার্যকর হয়?",
      promptText: "فَوَسَطْنَ",
      options: [
        "Qalqalah Sughra (minor echo) while keeping the heaviness of Ṭā’ elevated",
        "Ghunnah",
        "It becomes a silent letter",
        "It turns into a Taa"
      ],
      correctIndex: 0,
      explanation: "Ṭā’ is a Qalqalah letter; when Sakin in the middle of a word, it receives a crisp minor Qalqalah bounce.",
      explanationBangla: "তোয়া কলকলাহর হরফ হওয়ায় শব্দের মাঝে সুকূন অবস্থায় এতে কলকলায়ে সুগরা (হালকা বাউন্স) প্রযোজ্য হয়।"
    },
    {
      id: "q4_33",
      type: "multiple_choice",
      question: "Which of the following words consists purely of vowelled letters with NO Sukūn?",
      questionBangla: "নিচের কোন শব্দটি সম্পূর্ণ হরকতযুক্ত এবং এতে কোনো সুকূন নেই?",
      options: ["ضَرَبَ", "الْحَمْدُ", "أَنْعَمْتَ", "مِنْكُمْ"],
      correctIndex: 0,
      explanation: "‘Ḍaraba’ (ضَرَبَ) has three Mutaharrik letters each carrying a Fathah, without any Sakin letters.",
      explanationBangla: "'দ্বরবা' (ضَرَبَ) শব্দটির তিনটি হরফই যবরযুক্ত এবং এতে কোনো সাকিন নেই।"
    },
    {
      id: "q4_34",
      type: "multiple_choice",
      question: "Why must you NOT drop your jaw when articulating a Ḍammah (ُ)?",
      questionBangla: "পেশ বা দাম্মাহ্ (ُ) উচ্চারণের সময় কেন নিচের চোয়াল নিচে নামানো সম্পূর্ণ নিষিদ্ধ?",
      options: [
        "Because dropping the jaw mixes the pure 'u' sound with 'o' or 'a', corrupting the vowel quality",
        "Because it makes the sound too loud",
        "Because it breaks the teeth",
        "Because it causes an echo"
      ],
      correctIndex: 0,
      explanation: "Dropping the jaw corrupts Dammah into an impure English 'oh' sound instead of an authentic Arabic 'oo'.",
      explanationBangla: "চোয়াল নামালে পেশের খাঁটি 'উ' ধ্বনি বিকৃত হয়ে বাংলা 'ও' বা মিশ্রিত অশুদ্ধ ধ্বনিতে রূপান্তরিত হয়।"
    },
    {
      id: "q4_35",
      type: "multiple_choice",
      question: "In the word (يَخْلُقُ), identify the letters with Sukūn, Fatḥah, and Ḍammah:",
      questionBangla: "(يَخْلُقُ) শব্দে সুকূন, যবর এবং পেশ বিশিষ্ট হরফগুলো চিহ্নিত করুন:",
      promptText: "يَخْلُقُ",
      options: [
        "Yā’ has Fatḥah, Khā’ has Sukūn, Lām has Ḍammah, Qāf has Ḍammah",
        "All have Fathah",
        "All have Sukoon",
        "Khā’ has Dammah, Lām has Fathah"
      ],
      correctIndex: 0,
      explanation: "Pronounced 'Yakh-lu-qu': Yā’ carries Fathah, Khā’ is Sakin, Lām carries Dammah, and Qāf carries Dammah.",
      explanationBangla: "উচ্চারণ 'ইয়াখ্লুক্বু': ইয়া-তে যবর, খা-তে সুকূন, লাম-এ পেশ এবং ক্বাফ-এ পেশ।"
    }
  ]
};
