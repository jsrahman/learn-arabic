import { Quiz } from "./types";

export const quizLevel12: Quiz = {
  id: "q12",
  levelId: 12,
  title: "Level 12: Qalqalah Mechanics & Its 3 Ranks Challenge",
  titleBangla: "লেভেল ১২: কলকলাহর বিজ্ঞান ও ৩টি স্তরের গভীর পরীক্ষা",
  description: "Master the 5 Qalqalah letters (قُطْبُ جَدٍّ), acoustic causes (Jahr + Shiddah), the 3 ranks (Sughra, Kubra, Akbar), and vowel-contamination prevention.",
  descriptionBangla: "কলকলাহর ৫ হরফ (قُطْبُ جَدٍّ), বাউন্স সৃষ্টির কারণ, সুগরা-কুবরা-আকবারের সূক্ষ্ম পার্থক্য এবং বাউন্সে যবর/যেরের মিশ্রণ রোধের কলাকৌশল পরীক্ষা।",
  passingScore: 70,
  questions: [
    {
      id: "q12_1",
      type: "multiple_choice",
      question: "Which mnemonic phrase gathers the 5 letters of Qalqalah (حُرُوفُ الْقَلْقَلَةِ)?",
      questionBangla: "কলকলাহর (প্রতিধ্বনিযুক্ত বাউন্স) ৫টি হরফ কোন স্মরণিকায় সংকলিত?",
      options: [
        "قُطْبُ جَدٍّ (Quṭbu Jaddin — Qāf, Ṭā’, Bā’, Jīm, Dāl)",
        "خُصَّ ضَغْطٍ قِظْ",
        "يَرْمَلُونَ",
        "أَخِي هَاكَ عِلْمًا"
      ],
      correctIndex: 0,
      explanation: "The 5 letters of Qalqalah are: ق, ط, ب, ج, and د, famously assembled in 'Quṭbu Jaddin'.",
      explanationBangla: "কলকলাহর ৫টি হরফ হলো: ক্বাফ, তোয়া, বা, জীম এবং দাল (সংক্ষেপে 'ক্বুতবু জাদ্দিন')।"
    },
    {
      id: "q12_2",
      type: "multiple_choice",
      question: "What does Qalqalah literally and technically mean in the science of Tajweed?",
      questionBangla: "তাজবীদ শাস্ত্রে কলকলাহ্ (الْقَلْقَلَةُ) এর আভিধানিক ও পারিভাষিক অর্থ কী?",
      options: [
        "Literally 'shaking / disturbance'; technically an echoing rebound / bounce created at the articulation point when the letter is Sākin",
        "A long whistle",
        "A 6-count Madd",
        "A complete silence"
      ],
      correctIndex: 0,
      explanation: "Qalqalah is a vibration or disturbance: releasing trapped sound with a clean rebounding echo when the letter has Sukūn.",
      explanationBangla: "কলকলাহ্ অর্থ অস্থিরতা বা ঝাঁকুনি: সাকিন অবস্থায় হরফটির মাখরাজে আবদ্ধ আওয়াজকে হালকা বাউন্স বা প্রতিধ্বনির সাথে অবমুক্ত করা।"
    },
    {
      id: "q12_3",
      type: "multiple_choice",
      question: "What two intrinsic phonetic characteristics (Ṣifāt) combine in these 5 letters to cause Qalqalah?",
      questionBangla: "এই ৫টি হরফে কোন দুটি বিপরীতহীন বৈশিষ্ট্যের মিলনের কারণে কলকলাহ্ সৃষ্টি হওয়া অপরিহার্য হয়?",
      options: [
        "Jahr (الْجَهْرُ - complete arrest of breath) and Shiddah (الشِّدَّةُ - complete arrest of sound)",
        "Hams and Rakhawah",
        "Isti‘la and Itbaq",
        "Ghunnah and Safeer"
      ],
      correctIndex: 0,
      explanation: "Because both breath (Jahr) and sound (Shiddah) are totally blocked at the Makhraj, an explosive release (Qalqalah) is required to hear the letter.",
      explanationBangla: "জাহর (শ্বাস বন্ধ থাকা) এবং শিদ্দাহ (আওয়াজ শক্তভাবে বন্ধ হওয়া) একত্রিত হওয়ায় ধাক্কা বা কলকলাহ ছাড়া হরফটি শোনাই অসম্ভব।"
    },
    {
      id: "q12_4",
      type: "multiple_choice",
      question: "What are the THREE hierarchical ranks of Qalqalah (مَرَاتِبُ الْقَلْقَلَةِ)?",
      questionBangla: "কলকলাহর তিনটি প্রধান স্তর (মারাতীবুল ক্বলক্বলাহ্) কী কী?",
      options: [
        "1. Qalqalah Ṣughrā (Minor); 2. Qalqalah Kubrā (Major); 3. Qalqalah Akbar (Greatest / Supreme)",
        "Short, Medium, Long",
        "Fathah, Dammah, Kasrah",
        "1 count, 2 counts, 3 counts"
      ],
      correctIndex: 0,
      explanation: "Scholars establish 3 ranks: Ṣughrā (in middle of word/speech), Kubrā (at end of paused word), and Akbar (on a doubled Mushaddad letter paused upon).",
      explanationBangla: "১. সুগরা (শব্দের মাঝে বা মিলিয়ে পড়ার সময়); ২. কুবরা (শব্দ বা আয়াতের শেষে একক হরফে থামলে); ৩. আকবার (তাশদীদযুক্ত হরফে থামলে)।"
    },
    {
      id: "q12_5",
      type: "multiple_choice",
      question: "When does Qalqalah Ṣughrā (الْقَلْقَلَةُ الصُّغْرَى - Minor) occur?",
      questionBangla: "কলকলায়ে সুগরা (ছোট বা মৃদু কলকলাহ্) কখন কার্যকর হয়?",
      promptText: "يَقْطَعُونَ  /  يَجْعَلُونَ",
      options: [
        "When the Qalqalah letter is Sākin in the MIDDLE of a word, or at the end of a word when continuing recitation without stopping",
        "When stopping at the end of a Surah",
        "When the letter has a Fathah",
        "Only on the letter Qaf"
      ],
      correctIndex: 0,
      explanation: "Sughrā occurs inside a word (e.g. Yaq-ṭa‘oon, Yaj-‘aloon) or between words in continuous flow, producing a crisp, quick bounce.",
      explanationBangla: "যখন কলকলাহর হরফটি শব্দের মাঝে সাকিন হয় (যেমন: ইয়াক্বত্বা'ঊন) বা আয়াত না থামিয়ে মিলিয়ে পড়া হয়, তখন হালকা সুগরা হয়।"
    },
    {
      id: "q12_6",
      type: "multiple_choice",
      question: "When does Qalqalah Kubrā (الْقَلْقَلَةُ الْكُبْرَى - Major) occur?",
      questionBangla: "কলকলায়ে কুবরা (বড় বা মধ্যম কলকলাহ্) কখন কার্যকর হয়?",
      promptText: "الْفَلَقِ ۝  /  مُحِيطٌ ۝",
      options: [
        "When STOPPING on a word whose final letter is a NON-doubled Qalqalah letter (e.g. stopping on الْفَلَقِ or كَسَبَ)",
        "In the middle of every word",
        "When the letter has a Shaddah",
        "Only with Waw and Yaa"
      ],
      correctIndex: 0,
      explanation: "Kubrā occurs when pausing at the end of a word on an un-doubled Qalqalah consonant, yielding a clear, prominent echo.",
      explanationBangla: "শব্দ বা আয়াতের শেষে তাশদীদবিহীন একক কলকলাহর হরফে ওয়াকফ করলে (যেমন: আল-ফালাক্ব্, কাসাব্) শক্তিশালী কুবরা হয়।"
    },
    {
      id: "q12_7",
      type: "multiple_choice",
      question: "When does Qalqalah Akbar (الْقَلْقَلَةُ الْأَكْبَرُ - Supreme / Greatest) occur?",
      questionBangla: "কলকলায়ে আকবার (সর্বোচ্চ ও সবচেয়ে জোরালো কলকলাহ্) কখন কার্যকর হয়?",
      promptText: "تَبَّ وَتَبَّ ۝  /  بِالْحَقِّ ۝",
      options: [
        "When STOPPING on a word whose final Qalqalah letter carries a SHADDAH (e.g. stopping on وَتَبَّ or بِالْحَقِّ)",
        "When continuing into the next Ayah",
        "On all letters of Madd",
        "Only in Surah Al-Ikhlas"
      ],
      correctIndex: 0,
      explanation: "Akbar is the supreme rank: the doubled letter is held firmly for its first component before detonating with maximum rebounding force.",
      explanationBangla: "তাশদীদযুক্ত কলকলাহর হরফে ওয়াকফ করলে (যেমন: ওয়াতাব্বা, বিল-হাক্বক্বা) প্রথম অংশ শক্তভাবে ধরে রেখে সজোরে বাউন্স করানোই আকবার।"
    },
    {
      id: "q12_8",
      type: "multiple_choice",
      question: "What is the single most common DEFECT/ERROR when students recite Qalqalah?",
      questionBangla: "কলকলাহ আদায়ের সময় শিক্ষার্থীদের সর্বাধিক মারাত্মক ও সচরাচর ভুল কোনটি?",
      options: [
        "Contaminating the bounce with a partial vowel (e.g. leaning towards Fatḥah 'qala' or Kasrah 'qali')",
        "Making the letter too clear",
        "Pronouncing with closed eyes",
        "Holding the letter for 10 seconds"
      ],
      correctIndex: 0,
      explanation: "Qalqalah must be a pristine consonant rebound with ZERO vowel contamination (neither leaning to Fathah, Kasrah, nor Dammah).",
      explanationBangla: "সবচেয়ে বড় বিকৃতি হলো বাউন্সের সাথে যবর বা যেরের টান মিশিয়ে ফেলা (যেমন: 'আবা' বা 'আবি' বলা); কলকলাহকে হরকতহীন নিরপেক্ষ রাখতে হয়।"
    },
    {
      id: "q12_9",
      type: "multiple_choice",
      question: "In Surah Al-Falaq: (قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝), how is the word (الْفَلَقِ) recited when stopping?",
      questionBangla: "সূরা আল-ফালাক্বের ১ম আয়াতে (الْفَلَقِ) শব্দে ওয়াকফ করলে কীভাবে পড়তে হবে?",
      promptText: "الْفَلَقِ ۝",
      options: [
        "Stop on Qāf with Qalqalah Kubrā, keeping it HEAVY (Mufakhkham) as 'Al-Falaq(b)'",
        "Stop with a whisper",
        "Stop with Kasrah: 'Al-Falaqi'",
        "Convert to Kaaf"
      ],
      correctIndex: 0,
      explanation: "The Qāf drops its Kasrah into a Sakin, producing a robust Qalqalah Kubrā while maintaining its heavy Isti‘la elevation.",
      explanationBangla: "কাসরাহ বাদ দিয়ে ক্বাফে সুকূন হবে এবং এর ভারী রূপ অক্ষুণ্ণ রেখে গম্ভীর কুবরা বাউন্স দিয়ে 'আল-ফালাক্ব্' থামতে হবে।"
    },
    {
      id: "q12_10",
      type: "multiple_choice",
      question: "In Surah Al-Ikhlas: (قُلْ هُوَ اللَّهُ أَحَدٌ ۝), how is (أَحَدٌ) recited when stopping at the end of Ayah 1?",
      questionBangla: "সূরা আল-ইখলাসের ১ম আয়াতের শেষে (أَحَدٌ) শব্দে ওয়াকফ করলে কীভাবে পড়তে হবে?",
      promptText: "أَحَدٌ ۝",
      options: [
        "Stop on Dāl with Qalqalah Kubrā: 'Aḥad'",
        "Stop with Tanween: 'Ahadun'",
        "Stop with a long Madd",
        "Stop silently"
      ],
      correctIndex: 0,
      explanation: "The Tanween drops, and the Dāl rebounds with a clean, light Qalqalah Kubrā.",
      explanationBangla: "তানবীন বাদ গিয়ে শেষ দাল হরফটিতে হালকা ও পরিচ্ছন্ন কলকলায়ে কুবরার সাথে প্রতিধ্বনিত হবে: 'আহাদ্ব্'।"
    },
    {
      id: "q12_11",
      type: "multiple_choice",
      question: "In (تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ ۝), what rank of Qalqalah occurs on (وَتَبَّ)?",
      questionBangla: "(وَتَبَّ) শব্দে ওয়াকফ করলে কোন স্তরের কলকলাহ হয়?",
      promptText: "وَتَبَّ ۝",
      options: ["Qalqalah Akbar (highest rank on doubled letter)", "Qalqalah Sughra", "Qalqalah Kubra", "No Qalqalah"],
      correctIndex: 0,
      explanation: "Because Bā’ carries a Shaddah, stopping on it triggers Qalqalah Akbar.",
      explanationBangla: "বা হরফে তাশদীদ থাকায় এতে সর্বোচ্চ মর্যাদার কলকলায়ে আকবার কার্যকর হয়।"
    },
    {
      id: "q12_12",
      type: "multiple_choice",
      question: "Which of the 5 Qalqalah letters are HEAVY (Mufakhkham) during their echo?",
      questionBangla: "কলকলাহর ৫টি হরফের মধ্যে কোন দুটি হরফ বাউন্স করার সময়ও সর্বদা মোটা ও ভারী থাকে?",
      promptText: "ق  /  ط",
      options: [
        "Qāf (ق) and Ṭā’ (ط)",
        "Bā’ and Jīm",
        "Dāl and Bā’",
        "All 5 are light"
      ],
      correctIndex: 0,
      explanation: "Qāf and Ṭā’ are letters of Isti‘lā’; their Qalqalah echoes with deep, heavy, mouth-filling resonance.",
      explanationBangla: "ক্বাফ (ق) এবং তোয়া (ط) ইস্তি'লার হরফ হওয়ায় এদের কলকলাহর প্রতিধ্বনিও গম্ভীর ও মোটা সুরে মুখ পূর্ণ করে বের হয়।"
    },
    {
      id: "q12_13",
      type: "multiple_choice",
      question: "Which of the 5 Qalqalah letters are LIGHT (Muraqqaq) during their echo?",
      questionBangla: "কলকলাহর ৫টি হরফের মধ্যে কোন তিনটি হরফ বাউন্স করার সময় সর্বদা হালকা ও পাতলা থাকে?",
      promptText: "ب  -  ج  -  د",
      options: [
        "Bā’ (ب), Jīm (ج), and Dāl (د)",
        "Qāf and Ṭā’",
        "All 5 are heavy",
        "None"
      ],
      correctIndex: 0,
      explanation: "Bā’, Jīm, and Dāl are letters of Istifal; their bounce must remain thin, delicate, and light.",
      explanationBangla: "বা (ب), জীম (ج) এবং দাল (د) সর্বদা পাতলা হরফ হওয়ায় এদের বাউন্সও হালকা ও চিকন সুরে আদায় করতে হয়।"
    },
    {
      id: "q12_14",
      type: "multiple_choice",
      question: "In the word (يَطْمَعُ), what rank of Qalqalah applies to the Ṭā’?",
      questionBangla: "(يَطْمَعُ) শব্দে তোয়া হরফে কোন স্তরের কলকলাহ কার্যকর?",
      promptText: "يَطْمَعُ",
      options: [
        "Qalqalah Ṣughrā (minor, in the middle of a word) with heavy Isti‘lā’",
        "Qalqalah Kubra",
        "Qalqalah Akbar",
        "No Qalqalah"
      ],
      correctIndex: 0,
      explanation: "Ṭā’ has Sukūn in the middle of the verb, producing a minor Qalqalah Ṣughrā while keeping the tongue elevated.",
      explanationBangla: "শব্দের মাঝে তোয়া-তে সুকূন থাকায় ভারী গুণ বজায় রেখে কলকলায়ে সুগরা (হালকা বাউন্স) হবে: 'ইয়াত্ব্-মা'উ'।"
    },
    {
      id: "q12_15",
      type: "multiple_choice",
      question: "In the word (أَفْرِغْ عَلَيْنَا صَبْرًا), why does the Ghayn in (أَفْرِغْ) NOT have Qalqalah?",
      questionBangla: "(أَفْرِغْ) শব্দে গাইন হরফে সুকূন থাকা সত্ত্বেও কেন কোনো কলকলাহ হয় না?",
      promptText: "أَفْرِغْ",
      options: [
        "Because Ghayn is NOT one of the 5 letters of Qalqalah; it possesses the trait of Rakhāwah (flowing sound), not Shiddah",
        "Because it is at the end",
        "Because Raa has Kasrah",
        "Because Ghayn is a throat letter"
      ],
      correctIndex: 0,
      explanation: "Only the 5 letters of Quṭbu Jaddin have Qalqalah. Letters of Rakhāwah like Ghayn have flowing sound, never an echo.",
      explanationBangla: "কারণ গাইন কলকলাহর হরফ নয়; এতে রাখাওয়াহ্ (ধ্বনি প্রবাহিত রাখা) রয়েছে, ফলে এতে বাউন্স দেওয়া মারাত্মক ভুল।"
    },
    {
      id: "q12_16",
      type: "multiple_choice",
      question: "In the word (يَجْعَلُونَ), what rank of Qalqalah occurs on Jīm?",
      questionBangla: "(يَجْعَلُونَ) শব্দে জীম হরফে কোন স্তরের কলকলাহ ঘটে?",
      promptText: "يَجْعَلُونَ",
      options: [
        "Qalqalah Ṣughrā (minor bounce inside word)",
        "Qalqalah Kubra",
        "Qalqalah Akbar",
        "Ghunnah"
      ],
      correctIndex: 0,
      explanation: "Jīm is Sakin inside the word, receiving a quick, crisp minor bounce: 'Yaj-‘aloon'.",
      explanationBangla: "শব্দের মাঝে জীম সাকিন হওয়ায় কলকলায়ে সুগরা হবে: 'ইয়াজ্-'আলূন'।"
    },
    {
      id: "q12_17",
      type: "multiple_choice",
      question: "What mistake occurs if you add an artificial Hamzah-stop at the end of a Qalqalah bounce (e.g. 'Aḥad-a')?",
      questionBangla: "কলকলাহ করার পর শেষে যদি অতিরিক্ত হামযাহর ঝটকা যোগ করা হয় (যেমন: 'আহাদ-আ' বা 'আহাদ''), তবে কী ত্রুটি হয়?",
      options: [
        "Adding an unauthorized Hamzah letter to the Quran, which is a corrupting phonological addition",
        "It improves the Tajweed",
        "It is recommended by scholars",
        "It creates a Madd"
      ],
      correctIndex: 0,
      explanation: "The Qalqalah bounce must release naturally without snapping shut into an extra glottal Hamzah stop.",
      explanationBangla: "বাউন্সের শেষে হামযাহর ঝটকা দিলে আল্লাহর কালামে একটি বাড়তি হরফ যুক্ত করার মতো মারাত্মক দোষ সৃষ্টি হয়।"
    },
    {
      id: "q12_18",
      type: "multiple_choice",
      question: "In the phrase (وَالْفَجْرِ ۝ وَلَيَالٍ عَشْرٍ), does the Jīm in (وَالْفَجْرِ) have Qalqalah?",
      questionBangla: "(وَالْفَجْرِ) শব্দে জীম হরফে কি কলকলাহ হবে?",
      promptText: "وَالْفَجْرِ",
      options: [
        "YES, Jīm is Sākin inside the word, mandating Qalqalah Ṣughrā ('Wal-fajr')",
        "No, because Ra has Kasrah",
        "Only when stopping",
        "No, Jīm is light"
      ],
      correctIndex: 0,
      explanation: "Jīm carries Sukūn inside the word, so it receives a clean minor Qalqalah whether continuing or pausing.",
      explanationBangla: "হ্যাঁ, জীম হরফে সুকূন থাকায় শব্দের মাঝে এতে কলকলায়ে সুগরা আদায় করা বাধ্যতামূলক: 'ওয়াল-ফাজর্'।"
    },
    {
      id: "q12_19",
      type: "multiple_choice",
      question: "In (أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ), what rule applies to Dāl in (صَدْرَكَ)?",
      questionBangla: "সূরা ইনশিরাহের (صَدْرَكَ) শব্দে দাল হরফে কোন নিয়ম প্রযোজ্য?",
      promptText: "صَدْرَكَ",
      options: [
        "Qalqalah Ṣughrā (light bounce inside word, keeping Dāl light while Ṣād is heavy)",
        "Qalqalah Kubra",
        "Ghunnah",
        "Madd"
      ],
      correctIndex: 0,
      explanation: "Dāl is Sakin in the middle of 'Ṣadraka', receiving a delicate light Qalqalah without absorbing the heaviness of Ṣād.",
      explanationBangla: "দাল হরফে সুকূন থাকায় হালকা সুরে কলকলায়ে সুগরা হবে এবং সোয়াদের ভারী ভাব থেকে দালকে মুক্ত রাখতে হবে: 'স্বাদ্-রকা'।"
    },
    {
      id: "q12_20",
      type: "multiple_choice",
      question: "In the word (مُحِيطٌ), when pausing at the end of the Ayah, what rule applies to the final Ṭā’?",
      questionBangla: "(مُحِيطٌ) শব্দে আয়াতের শেষে ওয়াকফ করলে তোয়া হরফে কোন নিয়ম কার্যকর হবে?",
      promptText: "مُحِيطٌ ۝",
      options: [
        "Qalqalah Kubrā: the Tanwīn drops and Ṭā’ explodes with a heavy, prominent echo ('Muḥeeṭ')",
        "Qalqalah Sughra",
        "Ghunnah",
        "Madd ‘Iwad"
      ],
      correctIndex: 0,
      explanation: "Tanween vanishes into Sukoon on Ṭā’, releasing a powerful heavy Qalqalah Kubrā.",
      explanationBangla: "তানবীন বাদ গিয়ে তোয়া-তে সুকূন হবে এবং শক্তিশালী ভারী কলকলায়ে কুবরা প্রতিধ্বনিত হবে: 'মুহীত্ব্'।"
    },
    {
      id: "q12_21",
      type: "multiple_choice",
      question: "In the word (حَبْلٌ مِّن مَّسَدٍ ۝), what rank of Qalqalah occurs on Bā’ in (حَبْلٌ) vs Dāl in (مَّسَدٍ ۝)?",
      questionBangla: "সূরা লাহাবের শেষ আয়াতে 'হাব্লুন্' এর বা এবং 'মাসাদ্ব্' এর দালের কলকলাহর তুলনা করুন:",
      promptText: "حَبْلٌ  ...  مَّسَدٍ ۝",
      options: [
        "Bā’ in (حَبْلٌ) is Qalqalah Ṣughrā (inside word); Dāl in (مَّسَدٍ) is Qalqalah Kubrā (at pause)",
        "Both are Kubra",
        "Both are Sughra",
        "Neither has Qalqalah"
      ],
      correctIndex: 0,
      explanation: "Bā’ inside the word is Ṣughrā; stopping on Dāl at the Ayah end elevates it into Kubrā.",
      explanationBangla: "'হাব্লুন'-এর বা শব্দের মাঝে থাকায় সুগরা; আর আয়াত শেষে 'মাসাদ'-এর ডালে ওয়াকফ করায় তা কুবরা।"
    },
    {
      id: "q12_22",
      type: "multiple_choice",
      question: "In the word (خَلَقْنَا), what rule applies to Qāf?",
      questionBangla: "(خَلَقْنَا) শব্দে ক্বাফ হরফে কোন নিয়মটি প্রযোজ্য?",
      promptText: "خَلَقْنَا",
      options: [
        "Qalqalah Ṣughrā with heavy Tafkhīm ('Khalaq-nā')",
        "Qalqalah Kubra",
        "Izhar Halqi",
        "Idgham"
      ],
      correctIndex: 0,
      explanation: "Qāf has Sukūn in the middle of the word, requiring a heavy, crisp minor bounce.",
      explanationBangla: "শব্দের মাঝে ক্বাফে সুকূন থাকায় ভারী কণ্ঠে কলকলায়ে সুগরা আদায় করতে হবে: 'খালাক্ব্-না'।"
    },
    {
      id: "q12_23",
      type: "multiple_choice",
      question: "Why does the word (يَقْتُلُونَ) require maintaining Qāf's heaviness during Qalqalah?",
      questionBangla: "(يَقْتُلُونَ) শব্দে কলকলাহ করার সময় ক্বাফের ভারী ভাব রক্ষা করা কেন জরুরি?",
      promptText: "يَقْتُلُونَ",
      options: [
        "Because if Qāf loses its heaviness, it mutates into Kāf, turning 'they kill' into 'they eat' or meaningless words",
        "Because Taa is heavy",
        "Because of plural ending",
        "It does not matter"
      ],
      correctIndex: 0,
      explanation: "Failing to elevate Qāf corrupts it into Kāf ('Yaktuloon'), constituting a major textual corruption (Laḥn Jalī).",
      explanationBangla: "ক্বাফকে মোটা না রাখলে তা পাতলা কাফ (يَكْتُلُونَ) হয়ে অর্থ সম্পূর্ণ বিকৃত হয়ে যাবে, যা মারাত্মক অপরাধ।"
    },
    {
      id: "q12_24",
      type: "multiple_choice",
      question: "In the phrase (الْحَقُّ ۝), when pausing, why is the Qalqalah ranked as Akbar?",
      questionBangla: "(الْحَقُّ) শব্দে ওয়াকফ করার সময় কলকলাহ কেন 'আকবার' স্তরের হয়?",
      promptText: "الْحَقُّ ۝",
      options: [
        "Because the Qāf carries a Shaddah; the first Qāf is pressed firmly for its weight before detonating the final echo",
        "Because Qaf is the biggest letter",
        "Because Haq means truth",
        "Because it is at the end of the Quran"
      ],
      correctIndex: 0,
      explanation: "The Shaddah denotes two consonants; pausing upon it requires holding the first beat before releasing the thunderous Akbar bounce.",
      explanationBangla: "তাশদীদের কারণে প্রথম ক্বাফকে চাপ দিয়ে ধরে রেখে তারপর প্রবল প্রতিধ্বনিসহ অবমুক্ত করায় এটি সর্বোচ্চ আকবার।"
    },
    {
      id: "q12_25",
      type: "multiple_choice",
      question: "Can Qalqalah ever occur on a letter that carries a vowel (Fatḥah, Kasrah, or Ḍammah)?",
      questionBangla: "হরকতযুক্ত (যবর, যের বা পেশ বিশিষ্ট) হরফে কি কখনোই কলকলাহ্ হতে পারে?",
      options: [
        "NEVER; Qalqalah is strictly exclusive to the SĀKIN state (or stopping upon a letter)",
        "Yes, always on Qaaf",
        "Only when shouting",
        "Only in Surah Al-Fatihah"
      ],
      correctIndex: 0,
      explanation: "A vowel moves the organs apart naturally; Qalqalah is required ONLY when unvowelled stillness traps the sound.",
      explanationBangla: "কখনোই নয়; হরকত থাকলে মাখরাজ এমনিতেই ফাঁক হয়ে যায়, কলকলাহ কেবল সাকিন বা ওয়াকফকালীন স্থিরতার সময় প্রযোজ্য।"
    },
    {
      id: "q12_26",
      type: "multiple_choice",
      question: "In the word (عَبْدَنَا), what rank of Qalqalah applies to the Bā’?",
      questionBangla: "(عَبْدَنَا) শব্দে বা হরফে কোন স্তরের কলকলাহ ঘটে?",
      promptText: "عَبْدَنَا",
      options: [
        "Qalqalah Ṣughrā (light, within word)",
        "Qalqalah Kubra",
        "Qalqalah Akbar",
        "Ghunnah"
      ],
      correctIndex: 0,
      explanation: "Bā’ is Sakin in the middle of the noun, taking a gentle minor bounce: '‘Ab-danā'.",
      explanationBangla: "শব্দের মাঝে বা-তে সুকূন থাকায় হালকা সুরে কলকলায়ে সুগরা হবে: 'আব্দানা'।"
    },
    {
      id: "q12_27",
      type: "multiple_choice",
      question: "In (أَشِدَّاءُ عَلَى الْكُفَّارِ رُحَمَاءُ بَيْنَهُمْ تَرَاهُمْ رُكَّعًا سُجَّدًا), does (سُجَّدًا) have Qalqalah on Jīm?",
      questionBangla: "(سُجَّدًا) শব্দে জীম হরফে কি কলকলাহ্ হবে?",
      promptText: "سُجَّدًا",
      options: [
        "NO, because the Jīm carries a Shaddah with a FATḤAH (it is vowelled, not paused upon)",
        "Yes, Qalqalah Akbar",
        "Yes, Qalqalah Sughra",
        "Always"
      ],
      correctIndex: 0,
      explanation: "The Jīm is Mutaharrik with Fathah, so no Qalqalah occurs in continuous reading.",
      explanationBangla: "না; কারণ জীমে তাশদীদের সাথে যবর রয়েছে এবং এটি ওয়াকফকৃত নয়; হরকত থাকায় কলকলাহ হবে না।"
    },
    {
      id: "q12_28",
      type: "multiple_choice",
      question: "In (وَالسَّمَاءِ ذَاتِ الْبُرُوجِ ۝), how is (الْبُرُوجِ) recited upon stopping?",
      questionBangla: "সূরা বুরূজের ১ম আয়াতে (الْبُرُوجِ) শব্দে ওয়াকফ করলে কীভাবে পড়তে হবে?",
      promptText: "الْبُرُوجِ ۝",
      options: [
        "Stop on Jīm with Qalqalah Kubrā: 'Al-Burūj'",
        "Stop with Kasrah: 'Al-Burūji'",
        "Stop with Ghunnah",
        "Stop with Madd ‘Iwad"
      ],
      correctIndex: 0,
      explanation: "The Kasrah drops, and the Jīm rebounds with prominent Qalqalah Kubrā.",
      explanationBangla: "যের বাদ দিয়ে জীমে সুকূন হবে এবং সুস্পষ্ট কলকলায়ে কুবরা দিয়ে 'আল-বুরূজ্' থামতে হবে।"
    },
    {
      id: "q12_29",
      type: "multiple_choice",
      question: "In (وَشَاهِدٍ وَمَشْهُودٍ ۝), what rank of Qalqalah occurs at the pause?",
      questionBangla: "(وَمَشْهُودٍ ۝) শব্দে ওয়াকফ করলে কোন স্তরের কলকলাহ কার্যকর হয়?",
      promptText: "وَمَشْهُودٍ ۝",
      options: ["Qalqalah Kubrā on the Dāl", "Qalqalah Sughra", "Qalqalah Akbar", "No Qalqalah"],
      correctIndex: 0,
      explanation: "Stopping on un-doubled Dāl at the end of the verse produces clear Qalqalah Kubrā.",
      explanationBangla: "আয়াত শেষে তাশদীদহীন একক দাল হরফে থামায় কলকলায়ে কুবরা প্রতিধ্বনিত হবে।"
    },
    {
      id: "q12_30",
      type: "multiple_choice",
      question: "What is the physical sensation of Qalqalah on Bā’ (ب)?",
      questionBangla: "বা (ب) হরফে কলকলাহ করার সময় ঠোঁটে কী শারীরিক অনুভূতি সৃষ্টি হয়?",
      options: [
        "The lips compress closed on the wet inner margins and then instantly rebound apart like a spring",
        "The lips stay open",
        "The tongue vibrates",
        "Air blows through the teeth"
      ],
      correctIndex: 0,
      explanation: "The two lips close tightly, arresting sound and breath, and instantly part with a crisp popping rebound.",
      explanationBangla: "দুই ঠোঁটের ভেজা অংশ শক্তভাবে বন্ধ হয়ে শব্দ আটকে যায় এবং স্প্রিংয়ের মতো নিমেষে আলাদা হয়ে পপ আওয়াজে প্রতিধ্বনিত হয়।"
    },
    {
      id: "q12_31",
      type: "multiple_choice",
      question: "In (قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝), what rank of Qalqalah is on (الصَّمَدُ) at the pause?",
      questionBangla: "(الصَّمَدُ) শব্দে ওয়াকফ করলে কোন স্তরের কলকলাহ হয়?",
      promptText: "الصَّمَدُ ۝",
      options: ["Qalqalah Kubrā on Dāl", "Qalqalah Sughra", "Qalqalah Akbar", "Zero"],
      correctIndex: 0,
      explanation: "Stopping on the final un-doubled Dāl yields Qalqalah Kubrā.",
      explanationBangla: "আয়াত শেষে একক দাল হরফে থামায় কলকলায়ে কুবরা সৃষ্টি হয়।"
    },
    {
      id: "q12_32",
      type: "multiple_choice",
      question: "In (لَمْ يَلِدْ وَلَمْ يُولَدْ ۝), how many instances of Qalqalah are in this Ayah?",
      questionBangla: "(لَمْ يَلِدْ وَلَمْ يُولَدْ) আয়াতে সর্বমোট কতটি কলকলাহ রয়েছে?",
      promptText: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      options: [
        "Two instances: Qalqalah Ṣughrā on Dāl of (يَلِدْ) and Qalqalah Kubrā on Dāl of (يُولَدْ) at pause",
        "Only one",
        "Three",
        "Zero"
      ],
      correctIndex: 0,
      explanation: "The first Dāl in (يَلِدْ) is Ṣughrā (in continuous flow); the second Dāl at the pause is Kubrā. Total = 2.",
      explanationBangla: "দুটি কলকলাহ: 'ইয়ালিদ্' এর দালটি মাঝে থাকায় সুগরা, আর 'ইউলাদ্' এর দালটি আয়াত শেষে ওয়াকফ করায় কুবরা।"
    },
    {
      id: "q12_33",
      type: "multiple_choice",
      question: "What happens if a reciter reads (يَطْبَعُ) by whispering air on the Ṭā’?",
      questionBangla: "(يَطْبَعُ) শব্দে তোয়া হরফে বাতাস বের করে ফিসফিস করে পড়লে কী মারাত্মক বিকৃতি ঘটে?",
      promptText: "يَطْبَعُ",
      options: [
        "A grave error (Laḥn) because Ṭā’ has the property of Jahr (complete arrest of breath); letting breath escape turns it into Tā’",
        "It improves pronunciation",
        "It is allowed",
        "It creates a Madd"
      ],
      correctIndex: 0,
      explanation: "Ṭā’ must have zero breath leak (Jahr). Letting breath escape corrupters the letter into the whispery Tā’ (ت).",
      explanationBangla: "তোয়া জাহরের হরফ হওয়ায় কোনো বাতাস বের হতে পারবে না; বাতাস বের করলেই তা সাধারণ তা (ت) হয়ে অর্থ নষ্ট করে দেবে।"
    },
    {
      id: "q12_34",
      type: "multiple_choice",
      question: "In (إِذَا وَقَبَ ۝), what rank of Qalqalah is on Bā’ at the pause?",
      questionBangla: "সূরা আল-ফালাক্বের (إِذَا وَقَبَ ۝) আয়াতের শেষে কোন কলকলাহ হয়?",
      promptText: "وَقَبَ ۝",
      options: ["Qalqalah Kubrā on the un-doubled Bā’", "Qalqalah Sughra", "Qalqalah Akbar", "Silent"],
      correctIndex: 0,
      explanation: "Pausing at the end of the Ayah on Bā’ produces a clean, crisp Qalqalah Kubrā.",
      explanationBangla: "আয়াত শেষে বা হরফে ওয়াকফ করায় এটি কলকলায়ে কুবরা হবে।"
    },
    {
      id: "q12_35",
      type: "multiple_choice",
      question: "Why did Arab phoneticians identify Qalqalah as a miraculous sign of Arabic eloquence?",
      questionBangla: "আরবি ভাষাবিজ্ঞানীগণ কলকলাহকে কেন তিলাওয়াতের এক অলৌকিক বাগ্মিতা ও সৌন্দর্যের প্রতীক গণ্য করেছেন?",
      options: [
        "Because without this precise bounce, letters of maximum strength and trapped breath would suffocate or become inaudible in their Sakin state",
        "Because it makes the Quran sound musical",
        "Because it speeds up reading",
        "Because it replaces vowels"
      ],
      correctIndex: 0,
      explanation: "Qalqalah rescues these intensely blocked consonants from choking into silence, providing phonetic clarity without distorting vowels.",
      explanationBangla: "কারণ এই বাউন্স না থাকলে কণ্ঠনালী ও জিহ্বার তীব্র চাপে আবদ্ধ শক্তিশালী হরফগুলোর অস্তিত্বই মুছে যেত; কলকলাহ ধ্বনিকে অবমুক্ত করে স্পষ্টতা দান করে।"
    }
  ]
};
