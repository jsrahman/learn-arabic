import { Quiz } from "./types";

export const quizLevel5: Quiz = {
  id: "q5",
  levelId: 5,
  title: "Level 5: Tanwīn & Nunation Nuances Master Challenge",
  titleBangla: "লেভেল ৫: তানবীন, নূন সাযুজ্য ও ওয়াকফের কঠিন পরীক্ষা",
  description: "Examine double vowels (Fatḥatayn, Kasratayn, Ḍammatayn), supportive Alif conventions, Madd ‘Iwaḍ upon stopping, and orthographic exceptions.",
  descriptionBangla: "দুই যবর, দুই যের, দুই পেশ (তানবীন), অতিরিক্ত আলিফের বিধান, দুই যবরে ওয়াকফকালীন মাদ্দ 'ইওয়াদ এবং কুরআনের ব্যতিক্রমী বানান যাচাই করুন।",
  passingScore: 70,
  questions: [
    {
      id: "q5_1",
      type: "multiple_choice",
      question: "What is Tanwīn (التَّنْوِينُ) fundamentally in Arabic phonetic definition?",
      questionBangla: "আরবি ধ্বনিতত্ত্বে তানবীন (التَّنْوِينُ) এর মূল সংজ্ঞা কী?",
      promptText: "ً   ٍ   ٌ",
      options: [
        "An extra unvowelled Nūn (Nūn Sākinah Zā’idah) heard in pronunciation at the end of nouns, but never written as the letter Nūn",
        "A double Shaddah",
        "A long vowel lasting 4 counts",
        "A silent letter at the end of verbs"
      ],
      correctIndex: 0,
      explanation: "Tanween is an extra Sakin Nun sound added to the end of nouns phonetically, dropped when stopping.",
      explanationBangla: "তানবীন হলো শব্দের শেষে উচ্চারিত একটি অতিরিক্ত অপ্রকাশ্য সাকিন নূন ধ্বনি, যা ওয়াকফে বিলুপ্ত হয়।"
    },
    {
      id: "q5_2",
      type: "multiple_choice",
      question: "What are the three forms of Tanwīn?",
      questionBangla: "তানবীনের তিনটি রূপ কী কী?",
      options: [
        "Fatḥatayn (ً), Kasratayn (ٍ), and Ḍammatayn (ٌ)",
        "Alif, Waw, and Yaa",
        "Sukoon, Shaddah, and Madd",
        "Izhar, Idgham, and Ikhfa"
      ],
      correctIndex: 0,
      explanation: "Tanween manifests as double Fathah (an), double Kasrah (in), or double Dammah (un).",
      explanationBangla: "তানবীনের ৩ রূপ হলো: দুই যবর (ফাতহাতাইন), দুই যের (কাসরাতাইন) এবং দুই পেশ (দাম্মাতাইন)।"
    },
    {
      id: "q5_3",
      type: "multiple_choice",
      question: "When stopping (Waqf) on a word ending with Fatḥatayn (two Fathahs) on a regular letter (e.g. عَلِيمًا), how is it pronounced?",
      questionBangla: "সাধারণ হরফে দুই যবরযুক্ত শব্দে (যেমন: عَلِيمًا) ওয়াকফ (থামা) করলে কীভাবে পড়তে হয়?",
      promptText: "عَلِيمًا",
      options: [
        "It transforms into a 2-count Alif of elongation known as Madd ‘Iwaḍ ('Alīmā')",
        "It becomes a Sukoon ('Alīm')",
        "The Nun sound is doubled ('Alīmann')",
        "It becomes a Kasrah"
      ],
      correctIndex: 0,
      explanation: "Stopping on double Fathah substitutes the Tanween with a 2-count long vowel Alif, termed Madd ‘Iwaḍ (مَدُّ الْعِوَضِ).",
      explanationBangla: "দুই যবরে থামলে তানবীনের নূন ধ্বনি পরিবর্তিত হয়ে ২ হরকত পরিমাণ দীর্ঘ আলিফে পরিণত হয়, যাকে মাদ্দ 'ইওয়াদ বলে (যেমন: 'আলীমা)।"
    },
    {
      id: "q5_4",
      type: "multiple_choice",
      question: "When stopping (Waqf) on a word ending with Ḍammatayn or Kasratayn (e.g. غَفُورٌ / رَحِيمٍ), how is it pronounced?",
      questionBangla: "দুই পেশ বা দুই যেরযুক্ত শব্দে (যেমন: غَفُورٌ বা رَحِيمٍ) ওয়াকফ করলে তা কীভাবে উচ্চারিত হয়?",
      promptText: "غَفُورٌ  /  رَحِيمٍ",
      options: [
        "The Tanwīn drops entirely and the final consonant is pronounced with a pure Sukūn",
        "It converts into a 2-count Madd",
        "It is pronounced with a full Nun",
        "It converts into an Alif"
      ],
      correctIndex: 0,
      explanation: "Unlike double Fathah, double Dammah and double Kasrah vanish completely on Waqf, leaving a pristine Sakin consonant.",
      explanationBangla: "দুই পেশ ও দুই যেরের ক্ষেত্রে ওয়াকফ করলে তানবীন সম্পূর্ণ বাদ দিয়ে শেষ হরফটিকে খাঁটি সুকূন বা জযম দিয়ে পড়তে হয়।"
    },
    {
      id: "q5_5",
      type: "multiple_choice",
      question: "When stopping on a word ending with Tā’ Marbūṭah carrying Fatḥatayn (e.g. رَحْمَةً), how must it be recited?",
      questionBangla: "তা মারবূতাহর ওপর দুই যবর বিশিষ্ট শব্দে (যেমন: رَحْمَةً) থামলে কীভাবে তিলাওয়াত করতে হবে?",
      promptText: "رَحْمَةً",
      options: [
        "It converts into a Sakin Hā’ without Madd ('Raḥmah'), NEVER into an Alif",
        "It becomes 'Raḥmatā'",
        "It stays 'Raḥmatan'",
        "It becomes 'Raḥmat'"
      ],
      correctIndex: 0,
      explanation: "Tā’ Marbūṭah is an absolute exception to Madd ‘Iwad; it always stops as a silent Hā’ with Sukoon regardless of vowel.",
      explanationBangla: "তা মারবূতাহ এর ব্যতিক্রম: এর ওপর দুই যবর থাকলেও থামার সময় এটি কখনোই আলিফ হবে না, বরং সাকিনযুক্ত 'হা' (রহমাহ্) হবে।"
    },
    {
      id: "q5_6",
      type: "multiple_choice",
      question: "Why do most Arabic words ending with Fatḥatayn receive an extra silent Alif (e.g. كِتَابًا)?",
      questionBangla: "বেশিরভাগ শব্দে দুই যবরের সাথে কেন একটি অতিরিক্ত দৃশ্যমান আলিফ (যেমন: كِتَابًا) লেখা হয়?",
      promptText: "كِتَابًا",
      options: [
        "It acts as an orthographic bearer (Alif al-Tanwīn) to accommodate Madd ‘Iwaḍ when stopping",
        "It is pronounced as a Hamzah",
        "It indicates the word is plural",
        "It has no grammatical purpose"
      ],
      correctIndex: 0,
      explanation: "The written Alif supports the Tanween and represents the 2-count Alif that emerges upon pausing (Waqf).",
      explanationBangla: "এই আলিফটিকে 'আলিফুত তানবীন' বলা হয় যা ওয়াকফ করার সময় ২ হরকত দীর্ঘ মাদ্দ 'ইওয়াদ পড়ার জন্য আসন হিসেবে কাজ করে।"
    },
    {
      id: "q5_7",
      type: "multiple_choice",
      question: "Which of the following words does NOT take an extra supportive Alif when written with Fatḥatayn?",
      questionBangla: "নিচের কোন শব্দে দুই যবর থাকা সত্ত্বেও নিয়মানুযায়ী অতিরিক্ত আলিফ লেখা নিষিদ্ধ?",
      options: [
        "Words ending in Hamzah preceded by Alif (e.g. مَاءً) and words ending in Tā’ Marbūṭah (e.g. جَنَّةً)",
        "Words ending in Bā’",
        "Words ending in Qāf",
        "All words must have Alif"
      ],
      correctIndex: 0,
      explanation: "Arabic orthography forbids placing Hamzah between two Alifs (e.g. مَاءً, not ماءا), and Tā’ Marbūṭah never takes an Alif.",
      explanationBangla: "আলিফের পরবর্তী হামযাহ (যেমন: مَاءً) এবং তা মারবূতাহ (যেমন: جَنَّةً) তে দুই যবরের পর অতিরিক্ত আলিফ লেখা হয় না।"
    },
    {
      id: "q5_8",
      type: "multiple_choice",
      question: "How does the Uthmani script visually indicate Tanwīn before letters of Iẓhār (clear pronunciation)?",
      questionBangla: "উসমানি মুসহাফে ইজহারের (স্পষ্ট পড়ার) হরফের পূর্বে তানবীনের চিহ্ন দুটি কীভাবে সাজানো থাকে?",
      options: [
        "The two stroke lines are drawn perfectly parallel and evenly aligned (مُتَرَاكِبَتَانِ)",
        "The lines are staggered and offset",
        "A small Meem is written above",
        "One line is green and one is red"
      ],
      correctIndex: 0,
      explanation: "For Izhar, double Fathah and double Kasrah strokes are strictly parallel and even (تراكب الحركتين); Dammah is a loop with an inverted arc.",
      explanationBangla: "ইযহারের ক্ষেত্রে দুই যবর ও দুই যেরের দাগ দুটি সম্পূর্ণ সমান ও সমান্তরালভাবে ওপর-নিচ সাজানো থাকে।"
    },
    {
      id: "q5_9",
      type: "multiple_choice",
      question: "How does the Uthmani script visually indicate Tanwīn before letters of Idghām or Ikhfā’?",
      questionBangla: "ইদগাম বা ইখফার হরফের পূর্বে তানবীনের হরকত দুটি মুসহাফে কীভাবে আঁকা থাকে?",
      options: [
        "The two strokes are staggered / sequential, with the top stroke offset forward (مُتَتَابِعَتَانِ)",
        "They are written as two dots",
        "They are drawn as a cross",
        "They are circled"
      ],
      correctIndex: 0,
      explanation: "For Idgham and Ikhfa, the two lines are staggered (تتابع الحركتين) and Dammahs are written as two sequential 6-shapes.",
      explanationBangla: "ইদগাম ও ইখফায় দুই যবর ও দুই যেরের দাগ দুটি একটি অপরটি থেকে সামান্য সামনে তেরছা ও অসমানভাবে সাজানো থাকে।"
    },
    {
      id: "q5_10",
      type: "multiple_choice",
      question: "When Tanwīn is followed by the letter Bā’ (ب), what symbol replaces one of the double vowels in the Quranic script?",
      questionBangla: "তানবীনের পর বা (ب) হরফ আসলে মুসহাফের লিপিতে দ্বিতীয় হরকতের স্থানে কোন চিহ্নটি বসানো হয়?",
      promptText: "عَلِيمٌ بِذَاتِ",
      options: [
        "A small vertical isolated Mīm (ـمـ / م) indicating Iqlāb",
        "A miniature Sukoon",
        "A dagger Alif",
        "A double dot"
      ],
      correctIndex: 0,
      explanation: "In Iqlāb, the second vowel is replaced by a small standing Mīm, signifying the transformation of Tanween into Meem.",
      explanationBangla: "ইক্বলাবের ক্ষেত্রে তানবীনের দ্বিতীয় চিহ্নের বদলে একটি ছোট খাড়া মীম (م) বসিয়ে মীম দ্বারা পরিবর্তনের ইঙ্গিত দেওয়া হয়।"
    },
    {
      id: "q5_11",
      type: "multiple_choice",
      question: "In the phrase (سَمِيعٌ عَلِيمٌ), what Tajweed rule applies to the Tanwīn on (سَمِيعٌ)?",
      questionBangla: "(سَمِيعٌ عَلِيمٌ) বাক্যাংশে 'সামী'উন্' এর দুই পেশের পর কোন তাজবীদ নিয়ম কার্যকর?",
      promptText: "سَمِيعٌ عَلِيمٌ",
      options: [
        "Iẓhār Ḥalqī (clear pronunciation without extra Ghunnah) because it is followed by the throat letter ‘Ayn",
        "Idgham bi-Ghunnah",
        "Ikhfa Haqiqi",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "‘Ayn (ع) is one of the 6 throat letters of Izhar; the Tanween must be recited crisp and distinct.",
      explanationBangla: "পরবর্তী হরফ আইন (ع) কণ্ঠনালীর ইযহারের হরফ হওয়ায় এখানে তানবীনের নূন স্পষ্ট ও স্বাভাবিকভাবে আদায় হবে।"
    },
    {
      id: "q5_12",
      type: "multiple_choice",
      question: "In the phrase (غَفُورًا رَّحِيمًا), what Tajweed rule applies to the Tanwīn on (غَفُورًا)?",
      questionBangla: "(غَفُورًا رَّحِيمًا) বাক্যাংশে 'গফূরান্' এর তানবীনের ওপর কোন নিয়মটি কার্যকর?",
      promptText: "غَفُورًا رَّحِيمًا",
      options: [
        "Idghām without Ghunnah (complete assimilation into Rā’)",
        "Izhar Halqi",
        "Ikhfa Haqiqi",
        "Madd Lazim"
      ],
      correctIndex: 0,
      explanation: "Rā’ is a letter of complete Idgham without Ghunnah; the Tanween merges totally into the heavy Rā’.",
      explanationBangla: "র (ر) হরফে বিনা গুন্নাহয় পূর্ণ ইদগাম হয়; তানবীনের নূন ধ্বনি বিলুপ্ত হয়ে সরাসরি তাশদীদযুক্ত র-তে প্রবেশ করে।"
    },
    {
      id: "q5_13",
      type: "multiple_choice",
      question: "In the phrase (هُدًى لِّلْمُتَّقِينَ), what is the letter carrying the Tanwīn?",
      questionBangla: "(هُدًى لِّلْمُتَّقِينَ) শব্দে তানবীনটি মূলত কোন হরফের ওপর অবস্থিত?",
      promptText: "هُدًى",
      options: [
        "On the Dāl (د), with the final Alif Maqṣūrah (ى) acting as the seat for stopping",
        "On the Yā’",
        "On the Hā’",
        "On the Lām"
      ],
      correctIndex: 0,
      explanation: "In 'Hudan', the Tanween is phonetically on the Dāl. When stopping, it is pronounced 'Hudā' with a 2-count Madd.",
      explanationBangla: "এখানে তানবীন মূলত দাল হরফের ওপর অবস্থিত এবং ওয়াকফের সময় আলিফ মাকসূরায় ২ হরকত মাদ্দ হিসেবে 'হুদা' পড়া হয়।"
    },
    {
      id: "q5_14",
      type: "multiple_choice",
      question: "What occurs when Tanwīn meets an unvowelled letter (Hamzatul Wasl) across words (e.g. مَثَلًا الْقَوْمُ)?",
      questionBangla: "যখন তানবীনের পর হামযাতুল ওয়াসল বা সাকিন হরফ আসে (যেমন: مَثَلًا الْقَوْمُ), তখন কীভাবে মিলিয়ে পড়তে হয়?",
      promptText: "مَثَلًا الْقَوْمُ",
      options: [
        "The hidden Sakin Nūn of Tanwīn takes an accidental Kasrah: 'Mathalanil-qawm' (নূন কুতনী)",
        "The second word is deleted",
        "A 6-count Madd is mandatory",
        "Recitation must be stopped between them"
      ],
      correctIndex: 0,
      explanation: "To resolve two colliding Sakins, the Tanween's latent Nun is vocalized with a Kasrah ('Mathala-nil-qawm').",
      explanationBangla: "দুটি সাকিনের মিলন রোধে তানবীনের অপ্রকাশ্য নূনকে যের (কাসরাহ্) দিয়ে মিলিয়ে পড়তে হয়, যাকে 'নূন কুতনী' বলে (যেমন: মাছালানিল ক্বওম)।"
    },
    {
      id: "q5_15",
      type: "multiple_choice",
      question: "In (أَحَدٌ اللَّهُ الصَّمَدُ) if you read continuously without stopping on Ayah 1, how is it pronounced?",
      questionBangla: "(قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ) আয়াত দুটি ওয়াকফ না করে মিলিয়ে পড়লে কীভাবে পড়তে হবে?",
      promptText: "أَحَدٌ اللَّهُ",
      options: [
        "‘Aḥadunil-Lāhuṣ-Ṣamad’ (with Nun Qutni carrying Kasrah)",
        "‘Ahadu Allah’",
        "‘Ahadan Allah’",
        "‘Ahad lil-Lah’"
      ],
      correctIndex: 0,
      explanation: "Continuous reading merges the Tanween of Ahad into the Lam of Allah via a Kasrah on the Nun: 'Ahadunil-lah'.",
      explanationBangla: "১ম ও ২য় আয়াত মিলিয়ে পড়লে তানবীনের নূনে যের দিয়ে 'আহাদুনিল্লাহুস্-সমাদ' পড়তে হবে।"
    },
    {
      id: "q5_16",
      type: "multiple_choice",
      question: "Which of the following endings produces a Madd ‘Iwaḍ upon stopping?",
      questionBangla: "নিচের কোন সমাপ্তিটিতে ওয়াকফ করলে মাদ্দ 'ইওয়াদ (আলিফ টেনে পড়া) সৃষ্টি হয়?",
      options: ["حَكِيمًا", "حَكِيمٌ", "حَكِيمٍ", "حَكِيمْ"],
      correctIndex: 0,
      explanation: "Only double Fathah (حَكِيمًا) converts into an elongated Alif 'Ḥakeemā' upon stopping.",
      explanationBangla: "শুধুমাত্র দুই যবরযুক্ত হরফেই ওয়াকফকালে মাদ্দ 'ইওয়াদ হয় এবং 'হাকীমা' হিসেবে ২ হরকত টেনে থামতে হয়।"
    },
    {
      id: "q5_17",
      type: "multiple_choice",
      question: "In the word (مُسْتَقِيمًا), what is the letter sequence and Harakat?",
      questionBangla: "(مُسْتَقِيمًا) শব্দে হরকতগুলোর বিন্যাস কী?",
      promptText: "مُسْتَقِيمًا",
      options: [
        "Mīm (Ḍammah), Sīn (Sukūn), Tā’ (Fatḥah), Qāf (Kasrah), Yā’ (Madd), Mīm (Fatḥatayn with Alif)",
        "All Fathah",
        "Mīm has Kasrah, Qāf has Dammah",
        "All Sukoon"
      ],
      correctIndex: 0,
      explanation: "Pronounced 'Mustaqīman': Mīm has Dammah, Sīn is Sakin, Tā’ has Fathah, Qāf has Kasrah with Yā’ Madd, ending in Tanween Fathah.",
      explanationBangla: "উচ্চারণ 'মুসতাক্বীমান': মীমে পেশ, সীনে সুকূন, তা-তে যবর, ক্বাফে যের ও মাদ্দ এবং শেষ মীমে দুই যবরসহ আলিফ।"
    },
    {
      id: "q5_18",
      type: "multiple_choice",
      question: "When stopping on (مَاءً), what is the rule of recitation?",
      questionBangla: "(مَاءً) শব্দে ওয়াকফ করলে কীভাবে পড়তে হয়?",
      promptText: "مَاءً",
      options: [
        "Stop with Madd ‘Iwaḍ: elongate the Hamzah as 'Mā’ā' for 2 counts, even though no Alif is written after it",
        "Stop with Sukoon on Hamzah: 'Mā’'",
        "Drop the whole word",
        "Add a Nun"
      ],
      correctIndex: 0,
      explanation: "Despite the orthographic absence of the Alif, double Fathah on Hamzah still stops as Madd ‘Iwad ('Mā’ā').",
      explanationBangla: "বানানে আলিফ লেখা না থাকলেও দুই যবরের নিয়মানুযায়ী ওয়াকফের সময় হামযাহকে ২ হরকত মাদ্দ 'ইওয়াদ করে 'মা-আ' পড়তে হয়।"
    },
    {
      id: "q5_19",
      type: "multiple_choice",
      question: "In the word (سَوَاءٌ عَلَيْهِمْ), what is the exact Harakah on the Hamzah of (سَوَاءٌ)?",
      questionBangla: "(سَوَاءٌ عَلَيْهِمْ) শব্দে হামযাহর ওপর কোন তানবীনটি রয়েছে?",
      promptText: "سَوَاءٌ",
      options: ["Ḍammatayn (two Dammahs: un)", "Fathatayn", "Kasratayn", "Sukoon"],
      correctIndex: 0,
      explanation: "The word ends in Dammatayn: 'Sawā’un ‘alayhim'.",
      explanationBangla: "এখানে হামযাহর ওপর দুই পেশ (দাম্মাতাইন) রয়েছে: 'সাওয়া-উন্'।"
    },
    {
      id: "q5_20",
      type: "multiple_choice",
      question: "Can Tanwīn ever appear on a verb in classical Arabic?",
      questionBangla: "আরবি ব্যাকরণে তানবীন কি সাধারণ ক্রিয়াপদে (ফে'ল) আসতে পারে?",
      options: [
        "No, Tanwīn is an exclusive grammatical sign of NOUNS (Asmā’), with only 2 unique emphatic exceptions in the Quran",
        "Yes, all verbs have Tanween",
        "Only past tense verbs take Tanween",
        "Tanween is only for letters"
      ],
      correctIndex: 0,
      explanation: "Tanween is exclusively for nouns. The two Quranic exceptions are emphatic Nun written like Tanween: (لَنَسْفَعًا) and (وَلَيَكُونًا).",
      explanationBangla: "তানবীন বিশেষ্যের (ইসম) অনন্য বৈশিষ্ট্য; তবে কুরআনে দুটি ব্যতিক্রমী ক্রিয়াপদে তাগিদের নূন তানবীনের মতো লেখা হয়েছে (লানাস্ফা'আন্ ও লাইয়াকূনান্)।"
    },
    {
      id: "q5_21",
      type: "multiple_choice",
      question: "In the Quranic verse (كَلَّا لَئِن لَّمْ يَنتَهِ لَنَسْفَعًا بِالنَّاصِيَةِ), how does (لَنَسْفَعًا) behave upon stopping?",
      questionBangla: "(لَنَسْفَعًا بِالنَّاصِيَةِ) আয়াতে যদি 'লানাস্ফা'আন্' (لَنَسْفَعًا) শব্দে থামা হয়, তবে কীভাবে থামতে হবে?",
      promptText: "لَنَسْفَعًا",
      options: [
        "Stop with an Alif: 'Lanasfa‘ā' (Madd ‘Iwaḍ), following the written Uthmani script",
        "Stop with Nun: 'Lanasfa‘an'",
        "Stop with Sukoon on ‘Ayn",
        "It is forbidden to stop"
      ],
      correctIndex: 0,
      explanation: "Because it is written with an Alif of Tanween in the Mushaf, pausing upon it requires stopping with an Alif ('Lanasfa‘ā').",
      explanationBangla: "মুসহাফে এটি তানবীনের আলিফসহ লেখা হওয়ায় ওয়াকফকালে আলিফ মাদ্দ করে 'লানাস্ফা'আ' পড়ে থামতে হয়।"
    },
    {
      id: "q5_22",
      type: "multiple_choice",
      question: "What is the phonetic reason why Kasratayn is written UNDER the letter while Fatḥatayn is written ABOVE?",
      questionBangla: "দুই যবর হরফের উপরে এবং দুই যের হরফের নিচে লেখার কারণ কী?",
      options: [
        "It mirrors the single Kasrah (which is always below) and single Fatḥah (always above)",
        "It was decided randomly",
        "It depends on the page color",
        "Kasrah is heavier than Fathah"
      ],
      correctIndex: 0,
      explanation: "Double vowels visually represent doubling of the base vowel symbol, preserving top/bottom orientation.",
      explanationBangla: "কারণ মৌলিক যবর হরফের উপরে থাকে বিধায় দুই যবর উপরে বসে, এবং মৌলিক যের নিচে থাকে বিধায় দুই যের নিচে বসে।"
    },
    {
      id: "q5_23",
      type: "multiple_choice",
      question: "In (أَفْوَاجًا ۝ فَسَبِّحْ), how do you stop on Ayah 2 of Surah An-Nasr?",
      questionBangla: "সূরা নাসরের ২য় আয়াতে (أَفْوَاجًا) শব্দে কীভাবে ওয়াকফ করবেন?",
      promptText: "أَفْوَاجًا",
      options: ["‘Afwājā’ (with 2 counts of Madd ‘Iwaḍ)", "‘Afwāj’ with Sukoon", "‘Afwājan’", "‘Afwāji’"],
      correctIndex: 0,
      explanation: "At the end of the Ayah, the Tanween with Fathah stops as 'Afwājā' with Madd ‘Iwad.",
      explanationBangla: "আয়াত শেষে দুই যবরে ওয়াকফের কারণে ২ হরকত মাদ্দ 'ইওয়াদ করে 'আফ্ওয়াজা' পড়তে হবে।"
    },
    {
      id: "q5_24",
      type: "multiple_choice",
      question: "In the word (عَذَابٌ أَلِيمٌ), what is the relationship between the two Tanwīns?",
      questionBangla: "(عَذَابٌ أَلِيمٌ) শব্দদ্বয়ে দুটি তানবীনের তাজবীদ হুকুম কী?",
      promptText: "عَذَابٌ أَلِيمٌ",
      options: [
        "First Tanwīn has Iẓhār Ḥalqī because Hamzah (أ) follows; second Tanwīn depends on whether you stop or continue",
        "Both have Idgham",
        "Both have Ikhfa",
        "First has Iqlab"
      ],
      correctIndex: 0,
      explanation: "First Tanween meets Hamzah (throat letter = Izhar). If stopping on 'Aleem', the second Tanween becomes a Sukoon.",
      explanationBangla: "প্রথম তানবীনের পর হামযাহ থাকায় তা ইজহার হবে; আর দ্বিতীয় তানবীনে ওয়াকফ করলে তা সুকূন হয়ে যাবে ('আলীম্)।"
    },
    {
      id: "q5_25",
      type: "multiple_choice",
      question: "What happens if a reciter reads (قَوْلًا ثَقِيلًا) with clear Izhar on the first Tanwīn?",
      questionBangla: "(قَوْلًا ثَقِيلًا) শব্দে প্রথম তানবীনে কেউ যদি ইখফা না করে স্পষ্ট ইযহার করে পড়ে, তবে কী ত্রুটি ঘটবে?",
      promptText: "قَوْلًا ثَقِيلًا",
      options: [
        "A Tajweed error (Laḥn) because Thā’ (ث) is one of the 15 letters of Ikhfā’ Ḥaqīqī, requiring hidden Ghunnah",
        "It is acceptable",
        "It creates a Qalqalah",
        "It turns the word into Hebrew"
      ],
      correctIndex: 0,
      explanation: "Thā’ (ث) mandates Ikhfa Haqiqi with light Ghunnah; pronouncing it with Izhar is an authentic Tajweed violation.",
      explanationBangla: "সা (ث) ইখফার হরফ হওয়ায় এখানে তানবীনকে নাকের বাঁশিতে গোপন না করে স্পষ্ট পড়া মারাত্মক তাজবীদ ত্রুটি।"
    },
    {
      id: "q5_26",
      type: "multiple_choice",
      question: "Which of the following has Tanwīn Ḍammah written as two identical sequential 6-shapes (ـٌ / 𞄲)?",
      questionBangla: "মুসহাফে কোন তানবীনে দুটি পেশ পাশাপাশি উল্টানো অবস্থায় ক্রমিকভাবে লেখা থাকে?",
      options: [
        "Tanwīn before letters of Idghām or Ikhfā’ (signaling non-Izhar)",
        "Tanwīn before Izhar letters",
        "Tanwīn before a full stop",
        "Tanwīn on Alif"
      ],
      correctIndex: 0,
      explanation: "Sequential 6-shapes indicate the Tanween is modified by Idgham or Ikhfa.",
      explanationBangla: "ইদগাম ও ইখফার ক্ষেত্রে দুই পেশকে দুটি পাশাপাশি উল্টানো পেশ হিসেবে ক্রমিকভাবে আঁকা হয়।"
    },
    {
      id: "q5_27",
      type: "multiple_choice",
      question: "In the word (مُسَمًّى), how is it pronounced when continuing vs stopping?",
      questionBangla: "(مُسَمًّى) শব্দটিতে মিলিয়ে পড়ার সময় এবং ওয়াকফ করার সময় কী পার্থক্য হয়?",
      promptText: "مُسَمًّى",
      options: [
        "When continuing, it is pronounced 'Musamman' (with Tanween rules); when stopping, it becomes 'Musammā' (2-count Alif Madd)",
        "It sounds identical in both cases",
        "It is deleted when stopping",
        "It becomes 'Musamm' with Sukoon"
      ],
      correctIndex: 0,
      explanation: "In continuous reading, Tanween applies; when stopping, Alif Maqsurah takes over as a 2-count Madd 'Musammā'.",
      explanationBangla: "মিলিয়ে পড়লে তানবীনের নূন কার্যকর থাকে; আর থামলে তানবীন বিলুপ্ত হয়ে আলিফ মাকসূরায় 'মুসাম্মা' (২ হরকত) হয়।"
    },
    {
      id: "q5_28",
      type: "multiple_choice",
      question: "In the phrase (خَيْرًا يَرَهُ), what rule applies to the Tanwīn on (خَيْرًا)?",
      questionBangla: "(خَيْرًا يَرَهُ) বাক্যাংশে 'খয়রন্' এর তানবীনে কোন নিয়ম প্রযোজ্য?",
      promptText: "خَيْرًا يَرَهُ",
      options: [
        "Idghām bi-Ghunnah (incomplete assimilation into Yā’ with 2 counts of nasalization)",
        "Izhar Halqi",
        "Iqlab",
        "Qalqalah"
      ],
      correctIndex: 0,
      explanation: "Yā’ is one of the 4 letters of Idghām bi-Ghunnah (يَنْمُو); the Tanween blends into Yā’ with nasal buzzing.",
      explanationBangla: "ইয়া (ي) গুন্নাহসহ ইদগামের হরফ হওয়ায় তানবীন ইয়া হরফে মিলিত হয়ে ২ মাত্রা গুন্নাহর সাথে উচ্চারিত হয়।"
    },
    {
      id: "q5_29",
      type: "multiple_choice",
      question: "In (أَنْدَادًا لِّيُضِلُّوا), what happens to the Tanwīn?",
      questionBangla: "(أَنْدَادًا لِّيُضِلُّوا) বাক্যে তানবীনের ক্ষেত্রে কী ঘটে?",
      promptText: "أَنْدَادًا لِّيُضِلُّوا",
      options: [
        "Idghām without Ghunnah: complete merging into the Lām without nasal sound ('Andādal-liyuḍillū')",
        "Izhar",
        "Ikhfa",
        "Madd"
      ],
      correctIndex: 0,
      explanation: "Lām is an Idgham letter without Ghunnah; the Tanween merges completely into Lām without nasalization.",
      explanationBangla: "লামে কোনো গুন্নাহ ছাড়া পূর্ণ ইদগাম হওয়ায় তানবীনের নূন সরাসরি লামে মিশে 'আন্দাদাল-লিউদ্বিল্লু' হয়।"
    },
    {
      id: "q5_30",
      type: "multiple_choice",
      question: "Why is Tanwīn considered a sister subject to Nūn Sākinah in classical Tajweed texts?",
      questionBangla: "চিরায়ত তাজবীদ গ্রন্থগুলোতে তানবীনকে কেন নূন সাকিনার 'জমজ বোন' হিসেবে একসাথে আলোচনা করা হয়?",
      options: [
        "Because phonetically, Tanwīn IS a Nūn Sākinah; both share the identical four rules: Iẓhār, Idghām, Iqlāb, and Ikhfā’",
        "Because both look like a circle",
        "Because both were invented together",
        "Because neither has a vowel"
      ],
      correctIndex: 0,
      explanation: "Acoustically, Tanween is a Nun Sakinah. Therefore, all four core Tajweed rules apply identically to both.",
      explanationBangla: "কারণ উচ্চারণের দিক থেকে তানবীন মূলত একটি নূন সাকিনাই; ফলে নূন সাকিনার চার নিয়ম (ইযহার, ইদগাম, ইক্বলাব, ইখফা) তানবীনেও হুবহু প্রযোজ্য।"
    },
    {
      id: "q5_31",
      type: "multiple_choice",
      question: "In the word (طِبَاقًا ۝ تَرَىٰ), if you do NOT stop between Ayahs, what rule governs the Tanwīn?",
      questionBangla: "আয়াত না থামিয়ে (طِبَاقًا تَرَىٰ) একসাথে তিলাওয়াত করলে তানবীনে কী হুকুম হবে?",
      promptText: "طِبَاقًا تَرَىٰ",
      options: [
        "Ikhfā’ Ḥaqīqī with light Ghunnah because Tā’ (ت) is a light Ikhfā’ letter",
        "Idgham",
        "Izhar",
        "Madd ‘Iwad"
      ],
      correctIndex: 0,
      explanation: "Continuous reading into the next Ayah treats Tanween according to Tā’ (an Ikhfa letter with light Ghunnah).",
      explanationBangla: "মিলিয়ে পড়লে তা (ت) হরফের কারণে তানবীনে পাতলা গুন্নাহসহ ইখফায়ে হাক্বীক্বী করতে হবে।"
    },
    {
      id: "q5_32",
      type: "multiple_choice",
      question: "Which of the following is written with Dammatayn in Surah Al-Ikhlas?",
      questionBangla: "সূরা আল-ইখলাসে কোন শব্দটির শেষে দুই পেশ (দাম্মাতাইন) রয়েছে?",
      promptText: "أَحَدٌ  /  صَمَدٌ  /  كُفُوًا",
      options: ["أَحَدٌ (Aḥadun)", "الصَّمَدُ", "يَلِدْ", "يُولَدْ"],
      correctIndex: 0,
      explanation: "‘Qul huwa Allāhu Aḥadun’ ends with Dammatayn on the Dāl.",
      explanationBangla: "'ক্বুল হুওয়াল্লাহু আহাদুন' এর আহাদ (أَحَدٌ) শব্দের দালের ওপর দুই পেশ রয়েছে।"
    },
    {
      id: "q5_33",
      type: "multiple_choice",
      question: "What is the rule when stopping on a word with a Hamzah carrying Dammatayn (e.g. شَيْءٌ)?",
      questionBangla: "(شَيْءٌ) এর মতো হামযাহর ওপর দুই পেশযুক্ত শব্দে ওয়াকফ করলে কী রূপ ধারণ করবে?",
      promptText: "شَيْءٌ",
      options: [
        "Hamzah becomes Sakin with zero Madd: 'Shay’' (accompanied by potential Madd Leen on Yaa)",
        "Hamzah becomes 'Shay’ā'",
        "Hamzah is deleted",
        "Tanween is vocalized"
      ],
      correctIndex: 0,
      explanation: "Double Dammah drops into a pure Sukoon on the Hamzah: 'Shay’'.",
      explanationBangla: "দুই পেশ বাদ গিয়ে হামযাহতে সাকিন হয়ে যাবে: 'শাই'।"
    },
    {
      id: "q5_34",
      type: "multiple_choice",
      question: "In the phrase (عَذَابًا أَلِيمًا), how many instances of Madd ‘Iwaḍ occur if you stop on each word separately?",
      questionBangla: "(عَذَابًا أَلِيمًا) দুটি শব্দেই যদি পৃথকভাবে ওয়াকফ করা হয়, তবে মোট কতটি মাদ্দ 'ইওয়াদ হবে?",
      promptText: "عَذَابًا  /  أَلِيمًا",
      options: [
        "Two instances: '‘Adhābā' and '’Aleemā'",
        "Only one instance",
        "Zero instances",
        "Three instances"
      ],
      correctIndex: 0,
      explanation: "Both words end in double Fathah; each independently stops with a 2-count Madd ‘Iwad.",
      explanationBangla: "উভয় শব্দেই দুই যবর থাকায় প্রতিটিতে থামলে স্বতন্ত্রভাবে মাদ্দ 'ইওয়াদ হবে ('আযাবা এবং 'আলীমা)।"
    },
    {
      id: "q5_35",
      type: "multiple_choice",
      question: "What is the primary difference in meaning between (عَلِيمٌ) and (عَلِيمًا)?",
      questionBangla: "(عَلِيمٌ) এবং (عَلِيمًا) এর মধ্যে অর্থের পার্থক্য কী?",
      options: [
        "They have the exact same lexical meaning ('All-Knowing'); the difference is solely Arabic grammatical case (Nominative vs Accusative)",
        "One means knowing, one means ignorant",
        "One is past tense, one is future",
        "One is plural, one is singular"
      ],
      correctIndex: 0,
      explanation: "Both denote 'All-Knowing'; Dammatayn marks the nominative case (Marfoo‘) while Fathatayn marks the accusative (Mansoub).",
      explanationBangla: "উভয়ের মূল অর্থ হুবহু এক ('সর্বজ্ঞ'); কেবল ব্যাকরণগত কারণ (মরফূ' বা মানসূব অবস্থা) অনুযায়ী হরকতের পরিবর্তন হয়েছে।"
    }
  ]
};
