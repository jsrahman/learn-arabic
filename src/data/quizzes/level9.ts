import { Quiz } from "./types";

export const quizLevel9: Quiz = {
  id: "q9",
  levelId: 9,
  title: "Level 9: Nūn Sākinah & Tanwīn: Iẓhār & Iqlāb Master Challenge",
  titleBangla: "লেভেল ৯: নূন সাকিন ও তানবীন: ইযহার ও ইক্বলাবের কঠিন পরীক্ষা",
  description: "Dissect Iẓhār Ḥalqī with the 6 throat letters, the 4 unique single-word exceptions of Iẓhār Muṭlaq, and authentic Iqlāb mechanics with Bā’.",
  descriptionBangla: "হলক্বী ইযহারের ৬ হরফ, কুরআনের ৪টি ব্যতিক্রমী শব্দের ইযহারে মুত্বলাক্ব (দুনিয়া, বুনইয়ান ইত্যাদি) এবং বা-এর সাথে ইক্বলাবের সূক্ষ্ম নিয়ম যাচাই করুন।",
  passingScore: 70,
  questions: [
    {
      id: "q9_1",
      type: "multiple_choice",
      question: "What are the four fundamental rules governing Nūn Sākinah and Tanwīn in Tajweed?",
      questionBangla: "তাজবীদের বিজ্ঞানে নূন সাকিন ও তানবীনের মৌলিক চারটি বিধান কী কী?",
      options: [
        "Iẓhār (إظهار), Idghām (إدغام), Iqlāb (إقلاب), and Ikhfā’ (إخفاء)",
        "Tafkheem, Tarqeeq, Qalqalah, Madd",
        "Fathah, Kasrah, Dammah, Sukoon",
        "Waqf, Wasl, Sakt, Qat‘"
      ],
      correctIndex: 0,
      explanation: "Whenever Nun Sakinah or Tanween meets any of the 28 Arabic letters, exactly one of these 4 rules applies.",
      explanationBangla: "নূন সাকিন বা তানবীনের পর আরবি ২৮ হরফের যে কোনোটি আসলে এই ৪টি নিয়মের কোনো একটি কার্যকর হয়।"
    },
    {
      id: "q9_2",
      type: "multiple_choice",
      question: "What is Iẓhār Ḥalqī (الْإِظْهَارُ الْحَلْقِيُّ) linguistically and technically?",
      questionBangla: "পারিভাষিক সংজ্ঞায় ইযহারে হলক্বী (الْإِظْهَارُ الْحَلْقِيُّ) বলতে কী বোঝায়?",
      options: [
        "Pronouncing the Nūn clearly from its native articulation point without added Ghunnah or pausing",
        "Merging the Nun into the next letter",
        "Changing the Nun into a Meem",
        "Hiding the Nun completely"
      ],
      correctIndex: 0,
      explanation: "Izhar means making clear: articulating the Sakin Nun cleanly without elongation of Ghunnah or hesitation.",
      explanationBangla: "ইযহার মানে স্পষ্ট করা: নূন সাকিনকে অতিরিক্ত কোনো গুন্নাহ বা থামা ব্যতিরেকে তার আসল মাখরাজ থেকে পরিষ্কার উচ্চারণ করা।"
    },
    {
      id: "q9_3",
      type: "multiple_choice",
      question: "Which 6 letters mandate Iẓhār Ḥalqī when preceded by Nūn Sākinah or Tanwīn?",
      questionBangla: "নূন সাকিন বা তানবীনের পর কোন ৬টি কণ্ঠনালীর হরফ আসলে ইযহারে হলক্বী ওয়াজিব হয়?",
      promptText: "ء  -  هـ  -  ع  -  ح  -  غ  -  خ",
      options: [
        "Hamzah (ء), Hā’ (هـ), ‘Ayn (ع), Ḥā’ (ح), Ghayn (غ), and Khā’ (خ)",
        "Baa, Meem, Waw, Faa, Taa, Thaa",
        "Yaa, Raa, Meem, Laam, Waw, Noon",
        "Qaaf, Taa, Baa, Jeem, Daal, Saad"
      ],
      correctIndex: 0,
      explanation: "The six throat letters (حروف الحلق) are collected in the famous line: 'أخي هاك علماً حازه غير خاسر'.",
      explanationBangla: "হলক্বী ইযহারের ৬টি হরফ হলো: হামযাহ, হা, আইন, হা, গাইন এবং খা।"
    },
    {
      id: "q9_4",
      type: "multiple_choice",
      question: "Why does Iẓhār occur specifically with the throat letters?",
      questionBangla: "কণ্ঠনালীর এই ৬টি হরফের সাথে নূন সাকিনের ইযহার হওয়ার কারণ কী?",
      options: [
        "Due to the great anatomical distance (Bu‘d al-Makhraj) between the tongue tip (Nūn) and the throat (Halq)",
        "Because throat letters are loud",
        "Because Nun cannot connect to throat letters in script",
        "Because it is easier to breathe"
      ],
      correctIndex: 0,
      explanation: "Because the tip of the tongue is far removed from the throat, assimilation (Idgham) or hiding (Ikhfa) is phonetically unnatural.",
      explanationBangla: "কারণ জিহ্বার ডগা (নূনের স্থান) এবং কণ্ঠনালী (হলক্ব)-র মধ্যকার দূরত্ব অত্যন্ত বেশি; দূরত্বের কারণে ইদগাম বা ইখফা অসম্ভব।"
    },
    {
      id: "q9_5",
      type: "multiple_choice",
      question: "In the word (أَنْعَمْتَ), what rule applies to the Nūn Sākinah?",
      questionBangla: "(أَنْعَمْتَ) শব্দে নূন সাকিনে কোন নিয়ম প্রযোজ্য?",
      promptText: "أَنْعَمْتَ",
      options: [
        "Iẓhār Ḥalqī in a single word because it is followed by ‘Ayn (ع)",
        "Ikhfa Haqiqi",
        "Idgham bi-Ghunnah",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "The Nūn is followed immediately in the same word by ‘Ayn (a throat letter), mandating crisp Izhar without extra Ghunnah.",
      explanationBangla: "একই শব্দে নূন সাকিনের পর কণ্ঠনালীর হরফ আইন (ع) আসায় এখানে স্পষ্ট ইযহারে হলক্বী করতে হবে।"
    },
    {
      id: "q9_6",
      type: "multiple_choice",
      question: "In the phrase (مِنْ حَكِيمٍ), what Tajweed rule applies?",
      questionBangla: "(مِنْ حَكِيمٍ) বাক্যাংশে কোন নিয়মটি কার্যকর?",
      promptText: "مِنْ حَكِيمٍ",
      options: [
        "Iẓhār Ḥalqī across two words because Nūn Sākinah meets Ḥā’ (ح)",
        "Idgham without Ghunnah",
        "Ikhfa",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Nūn Sakinah at the end of 'Min' meets Ḥā’ at the start of 'Ḥakeem', creating two-word Izhar Halqi.",
      explanationBangla: "নূন সাকিনের পর হা (ح) আসায় দুই শব্দের মাঝে ইযহারে হলক্বী হবে।"
    },
    {
      id: "q9_7",
      type: "multiple_choice",
      question: "In (فَصَلِّ لِرَبِّكَ وَانْحَرْ), what rule applies to the Nūn in (وَانْحَرْ)?",
      questionBangla: "সূরা কাউসারের (وَانْحَرْ) শব্দে নূনের হুকুম কী?",
      promptText: "وَانْحَرْ",
      options: ["Iẓhār Ḥalqī (followed by Ḥā’)", "Ikhfa Haqiqi", "Idgham", "Iqlab"],
      correctIndex: 0,
      explanation: "The Sakin Nūn is followed by throat letter Ḥā’ inside the verb, requiring clear pronunciation.",
      explanationBangla: "নূন সাকিনের পর গলার মধ্যভাগের হরফ হা (ح) আসায় এটি ইযহারে হলক্বী।"
    },
    {
      id: "q9_8",
      type: "multiple_choice",
      question: "What is Iẓhār Muṭlaq (الْإِظْهَارُ الْمُطْلَقُ - Absolute Izhar)?",
      questionBangla: "ইযহারে মুত্বলাক্ব (الْإِظْهَارُ الْمُطْلَقُ) কী?",
      options: [
        "When Nūn Sākinah is followed by Wāw or Yā’ inside a SINGLE word, preventing Idghām to preserve word meaning",
        "Izhar that can be skipped",
        "Izhar with a 6-count Madd",
        "Izhar that applies to every letter"
      ],
      correctIndex: 0,
      explanation: "Idghām strictly requires two separate words. If Nūn Sakinah meets Wāw or Yā’ within one single word, it MUST be read with Izhar.",
      explanationBangla: "ইদগামের জন্য দুই শব্দ হওয়া আবশ্যক; এক শব্দের ভেতর নূন সাকিনের পর ওয়াও বা ইয়া আসলে ইদগাম না করে স্পষ্ট পড়াকে ইযহারে মুত্বলাক্ব বলে।"
    },
    {
      id: "q9_9",
      type: "multiple_choice",
      question: "What are the ONLY FOUR words in the entire Holy Quran that contain Iẓhār Muṭlaq?",
      questionBangla: "গোটা পবিত্র কুরআনে ইযহারে মুত্বলাক্ব বিশিষ্ট মাত্র চারটি অনন্য শব্দ কোনগুলো?",
      promptText: "دُنْيَا  /  بُنْيَانٌ  /  قِنْوَانٌ  /  صِنْوَانٌ",
      options: [
        "دُنْيَا (Dunyā), بُنْيَانٌ (Bunyān), قِنْوَانٌ (Qinwān), and صِنْوَانٌ (Ṣinwān)",
        "Kitāb, Rasūl, Nabī, Imām",
        "Fasabbih, Bihamdika, Rabbika, Wastaghfirh",
        "Alif, Laam, Meem, Saad"
      ],
      correctIndex: 0,
      explanation: "Across the entire Quran, only these 4 words exhibit Nun Sakin before Waw/Yaa within one word: Dunyā, Bunyān, Qinwān, Ṣinwān.",
      explanationBangla: "সমগ্র কুরআনে কেবল এই ৪টি শব্দেই ইযহারে মুত্বলাক্ব বিদ্যমান: দুনইয়া, বুনইয়ান, ক্বিনওয়ান এবং সিনওয়ান।"
    },
    {
      id: "q9_10",
      type: "multiple_choice",
      question: "Why is Idghām FORBIDDEN in the word (دُنْيَا)? What would happen if you merged the Nūn into Yā’?",
      questionBangla: "(دُنْيَا) শব্দে ইদগাম করা কেন কঠোরভাবে নিষিদ্ধ? নূনকে ইয়া-তে মিলিয়ে পড়লে কী বিকৃতি ঘটত?",
      promptText: "دُنْيَا",
      options: [
        "It would sound like 'Duyyā' (دُيَّا), confusing it with a doubled root (Muda‘‘af) and obliterating its authentic Arabic meaning",
        "It would make the word too heavy",
        "It would turn the word into Hebrew",
        "It would create a silent letter"
      ],
      correctIndex: 0,
      explanation: "If merged, Dunyā becomes 'Duyyā' and Bunyān becomes 'Buyyān', which confuses the genuine root words and destroys comprehension.",
      explanationBangla: "ইদগাম করলে শব্দটি 'দুইয়া' বা 'বুইয়ান' শোনাবে, যার ফলে মূল ধাতুর রূপ নষ্ট হয়ে অর্থ অজ্ঞাত ও বিকৃত হয়ে যেত।"
    },
    {
      id: "q9_11",
      type: "multiple_choice",
      question: "In the word (مَنْ ءَامَنَ), what rule governs the Nūn Sākinah?",
      questionBangla: "(مَنْ ءَامَنَ) বাক্যাংশে নূন সাকিনে কোন তাজবীদ নিয়ম কার্যকর?",
      promptText: "مَنْ ءَامَنَ",
      options: [
        "Iẓhār Ḥalqī because it is followed by Hamzah (ء)",
        "Idgham",
        "Ikhfa",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Hamzah is the first of the 6 throat letters; the Nun in 'Man' is articulated with pure Izhar: 'Man ’āmana'.",
      explanationBangla: "হামযাহ (ء) কণ্ঠনালীর প্রধান হরফ হওয়ায় নূন সাকিনে পরিষ্কার ইযহারে হলক্বী হবে: 'মান্ আ-মানা'।"
    },
    {
      id: "q9_12",
      type: "multiple_choice",
      question: "In the phrase (مِنْ غِلٍّ), what rule applies to the Nūn Sākinah?",
      questionBangla: "(مِنْ غِلٍّ) বাক্যাংশে নূন সাকিনে কোন নিয়ম কার্যকর?",
      promptText: "مِنْ غِلٍّ",
      options: [
        "Iẓhār Ḥalqī because it is followed by Ghayn (غ)",
        "Ikhfa Haqiqi with heavy Ghunnah",
        "Idgham without Ghunnah",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Ghayn (غ) is from Adna al-Halq (the upper throat), mandating clear Izhar Halqi.",
      explanationBangla: "গাইন (غ) কণ্ঠনালীর হরফ হওয়ায় এখানে কোনো গুন্নাহ ছাড়া স্পষ্ট ইযহারে হলক্বী করতে হবে।"
    },
    {
      id: "q9_13",
      type: "multiple_choice",
      question: "In the word (الْمُنْخَنِقَةُ), what rule applies to the Nūn?",
      questionBangla: "সূরা মায়িদার (الْمُنْخَنِقَةُ) শব্দে নূন সাকিনে কোন নিয়ম প্রযোজ্য?",
      promptText: "الْمُنْخَنِقَةُ",
      options: [
        "Iẓhār Ḥalqī in a single word because it is followed by Khā’ (خ)",
        "Ikhfa Haqiqi",
        "Idgham",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Khā’ is a throat letter of Izhar. Even inside a single word, the Nun is read clearly: 'Al-munkhaniqah'.",
      explanationBangla: "খা (خ) কণ্ঠনালীর ইযহারের হরফ হওয়ায় এক শব্দের মধ্যে নূনটি স্পষ্ট ইযহার করে পড়তে হবে।"
    },
    {
      id: "q9_14",
      type: "multiple_choice",
      question: "What is Iqlāb (الْإِقْلَابُ) linguistically and technically in Tajweed?",
      questionBangla: "তাজবীদ বিজ্ঞানে ইক্বলাব (الْإِقْلَابُ) এর শাব্দিক ও পারিভাষিক অর্থ কী?",
      options: [
        "Linguistically 'turning something'; technically converting Nūn Sākinah or Tanwīn into a Mīm (م) before Bā’, accompanied by Ghunnah",
        "Pronouncing clearly",
        "Merging completely into Baa",
        "Whispering the sound"
      ],
      correctIndex: 0,
      explanation: "Iqlāb means turning: changing the Sakin Nun into a Sakin Meem before Bā’, with 2 counts of Ghunnah.",
      explanationBangla: "ইক্বলাব মানে পরিবর্তন করা: বা (ب) হরফের পূর্বে নূন সাকিন বা তানবীনকে খাঁটি মীমে রূপান্তর করে ২ হরকত গুন্নাহসহ আদায় করা।"
    },
    {
      id: "q9_15",
      type: "multiple_choice",
      question: "How many letters cause Iqlāb in the entire Arabic language?",
      questionBangla: "গোটা আরবি বর্ণমালায় ইক্বলাব সৃষ্টিকারী হরফ কয়টি?",
      options: [
        "Exactly ONE letter: Bā’ (ب)",
        "Two letters: Baa and Meem",
        "Three letters",
        "Six letters"
      ],
      correctIndex: 0,
      explanation: "Iqlāb occurs strictly with one solitary letter: Bā’ (ب).",
      explanationBangla: "ইক্বলাবের হরফ মাত্র একটি: বা (ب)।"
    },
    {
      id: "q9_16",
      type: "multiple_choice",
      question: "What are the THREE essential steps to correctly execute Iqlāb in recitation?",
      questionBangla: "তিলাওয়াতে বিশুদ্ধভাবে ইক্বলাব আদায় করার তিনটি অপরিহার্য ধাপ কী কী?",
      options: [
        "1. Transform Nūn into Mīm; 2. Hide the Mīm with gentle lip contact (Ikhfā’); 3. Sustain 2 counts of Ghunnah from the nose",
        "1. Shout; 2. Stop; 3. Continue",
        "1. Double the Baa; 2. Add Alif; 3. Drop Nun",
        "1. Say Nun; 2. Say Baa; 3. Say Meem"
      ],
      correctIndex: 0,
      explanation: "The 3 steps are: Qalb (turning Nun to Meem), Ikhfa of the Meem with gentle lip contact, and vocalizing Ghunnah for 2 counts.",
      explanationBangla: "১. নূনকে মীমে রূপান্তর; ২. দুই ঠোঁট আলতোভাবে মিলিয়ে মীম গোপন করা; ৩. নাসারন্ধ্র থেকে ২ মাত্রা পূর্ণ গুন্নাহ আদায় করা।"
    },
    {
      id: "q9_17",
      type: "multiple_choice",
      question: "In the phrase (مِن بَعْدِ), how is it pronounced with authentic Iqlāb?",
      questionBangla: "(مِن بَعْدِ) বাক্যাংশটি বিশুদ্ধ ইক্বলাবের সাথে কীভাবে তিলাওয়াত করতে হবে?",
      promptText: "مِنۢ بَعْدِ",
      options: [
        "‘Mim-ba‘di’ with lips touching gently and nasal Ghunnah held for 2 counts",
        "‘Min-ba‘di’ with sharp Nun",
        "‘Mib-ba‘di’ with doubled Baa",
        "‘Mee-ba‘di’"
      ],
      correctIndex: 0,
      explanation: "The Sakin Nun converts to Meem before Bā’, holding a 2-count nasal Ghunnah: 'Mim-ba‘di'.",
      explanationBangla: "নূন সাকিন মীমে পরিণত হয়ে ঠোঁটের কোমল স্পর্শে ২ হরকত গুন্নাহসহ উচ্চারিত হবে: 'মিম্‌-বা'দি'।"
    },
    {
      id: "q9_18",
      type: "multiple_choice",
      question: "In the word (أَنۢبِئْهُم), does Iqlāb occur inside a single word?",
      questionBangla: "(أَنۢبِئْهُم) শব্দে ইক্বলাব কি একটি মাত্র শব্দের ভেতরে সংঘটিত হয়েছে?",
      promptText: "أَنۢبِئْهُم",
      options: [
        "Yes, Iqlāb occurs both within a single word (أَنۢبِئْهُم) and across two separate words (مِنۢ بَعْدِ)",
        "No, Iqlab can only happen in two words",
        "It is not Iqlab",
        "Only when stopping"
      ],
      correctIndex: 0,
      explanation: "Iqlab occurs within one word (e.g. Anbi’hum, Yunbitu) and between two words (e.g. Min ba‘di).",
      explanationBangla: "হ্যাঁ, ইক্বলাব এক শব্দের ভেতরেও হতে পারে (যেমন: আম্বিহুম) এবং দুই শব্দের মাঝেও হতে পারে (যেমন: মিম বা'দি)।"
    },
    {
      id: "q9_19",
      type: "multiple_choice",
      question: "In the phrase (كَلَّا لَيُنبَذَنَّ فِي الْحُطَمَةِ), what rule applies to (لَيُنبَذَنَّ)?",
      questionBangla: "সূরা হুত্বামাহর (لَيُنبَذَنَّ) শব্দে কোন তাজবীদ নিয়ম কার্যকর?",
      promptText: "لَيُنبَذَنَّ",
      options: [
        "Iqlāb (Nūn Sākinah meets Bā’ inside the word), accompanied by Ghunnah Mushaddadah on the final Nūn",
        "Izhar Halqi",
        "Idgham without Ghunnah",
        "Madd Lazim"
      ],
      correctIndex: 0,
      explanation: "‘Layumbadhanna’ has Iqlāb (Nūn before Bā’), plus an obligatory Ghunnah Mushaddadah on the terminal Nūn.",
      explanationBangla: "শব্দটিতে বা-এর পূর্বে নূন সাকিন থাকায় ইক্বলাব হয়েছে এবং শেষের তাশদীদযুক্ত নূনে ওয়াজিব গুন্নাহ রয়েছে: 'লাইয়ুম্বাযান্না'।"
    },
    {
      id: "q9_20",
      type: "multiple_choice",
      question: "How is Iqlāb marked in the standard Uthmani Quranic script?",
      questionBangla: "উসমানি মুসহাফে ইক্বলাবের উপস্থিতি চেনার উপায় কী?",
      options: [
        "A small standing isolated Mīm (م) is printed above the Nūn, or replaces the second stroke of Tanwīn",
        "A small green circle",
        "A Sukoon on Baa",
        "A cross mark"
      ],
      correctIndex: 0,
      explanation: "A miniature standing Mīm (م / ۢ) is placed directly above the unvowelled Nūn or over the Tanween vowel.",
      explanationBangla: "মুসহাফে নূন সাকিনের ওপরে বা তানবীনের সাথে একটি ছোট খাড়া মীম (م) প্রতীক হিসেবে মুদ্রিত থাকে।"
    },
    {
      id: "q9_21",
      type: "multiple_choice",
      question: "What is the crucial difference between the small Iqlāb Mīm (م / ۢ) and the small Waqf Lāzim Mīm (ـمـ)?",
      questionBangla: "ইক্বলাবের ছোট মীম (م) এবং ওয়াকফে লাযিম (বাধ্যতামূলক থামা)-এর মীম (ـمـ) এর মধ্যে পার্থক্য কী?",
      options: [
        "The Iqlāb Mīm has a descending tail pointing straight down (م); the Waqf Lāzim Mīm has a horizontal tail extended flat (ـمـ)",
        "They are identical with no difference",
        "The Iqlab Meem is red, Waqf Meem is blue",
        "Waqf Meem has two dots"
      ],
      correctIndex: 0,
      explanation: "Iqlāb Mīm has a vertical tail (م / ۢ); compulsory stop (Waqf Lāzim) Mīm has a horizontal baseline tail (ـمـ).",
      explanationBangla: "ইক্বলাবের মীমের লেজ খাড়া নিচের দিকে নামে (م); আর ওয়াকফে লাযিমের মীমের লেজ অনুভূমিকভাবে ডানে-বামে বিস্তৃত থাকে (ـمـ)।"
    },
    {
      id: "q9_22",
      type: "multiple_choice",
      question: "Why do the lips NOT press together with harsh force during Iqlāb?",
      questionBangla: "ইক্বলাব আদায়ের সময় কেন দুই ঠোঁট সজোরে চেপে বন্ধ করা উচিত নয়?",
      options: [
        "Because the Mīm is concealed (Mukhfāh); the lips should meet gently without forceful compression (بِتَلَامُسٍ خَفِيفٍ)",
        "Because it hurts the lips",
        "Because Baa requires open mouth",
        "Because of air pressure"
      ],
      correctIndex: 0,
      explanation: "Scholars specify that the lips touch gently (Talāmus bila Kazz) to allow the pure nasal Ghunnah to resonate cleanly.",
      explanationBangla: "ইক্বলাবের মীমটি ইখফাকৃত হওয়ায় ঠোঁট দুটি কোনো তীব্র চাপ ব্যতিরেকে কোমলভাবে স্পর্শ করবে যাতে গুন্নাহর সুর অবিকৃত থাকে।"
    },
    {
      id: "q9_23",
      type: "multiple_choice",
      question: "In the word (سَمِيعٌ بَصِيرٌ), what rule applies to the Tanwīn?",
      questionBangla: "(سَمِيعٌ بَصِيرٌ) বাক্যাংশে তানবীনের হুকুম কী?",
      promptText: "سَمِيعٌۢ بَصِيرٌ",
      options: [
        "Iqlāb because Tanwīn is followed by Bā’ ('Samee‘um-Baseer')",
        "Izhar Halqi",
        "Idgham bi-Ghunnah",
        "Ikhfa Haqiqi"
      ],
      correctIndex: 0,
      explanation: "The Tanween on Samee‘ meets Bā’ of Baseer, triggering Iqlāb with a 2-count nasal Ghunnah.",
      explanationBangla: "তানবীনের পর বা আসায় ইক্বলাব হবে এবং ২ হরকত গুন্নাহসহ 'সামী'উম্-বাস্বর' পড়তে হবে।"
    },
    {
      id: "q9_24",
      type: "multiple_choice",
      question: "In the word (مَنْ هُوَ), what rule applies to the Nūn?",
      questionBangla: "(مَنْ هُوَ) বাক্যাংশে নূনে কোন নিয়ম কার্যকর?",
      promptText: "مَنْ هُوَ",
      options: [
        "Iẓhār Ḥalqī because Hā’ (هـ) is a throat letter from the deep throat",
        "Iqlab",
        "Idgham",
        "Ikhfa"
      ],
      correctIndex: 0,
      explanation: "Hā’ (هـ) is an authentic throat letter of Izhar Halqi; the Nun is recited crisp and clear.",
      explanationBangla: "হা (هـ) গলার গভীরের হরফ হওয়ায় নূন সাকিনে পরিষ্কার ইযহারে হলক্বী হবে: 'মান্ হুওয়া'।"
    },
    {
      id: "q9_25",
      type: "multiple_choice",
      question: "What is the common error when reciting Iẓhār Ḥalqī?",
      questionBangla: "ইযহারে হলক্বী পড়ার সময় পাঠকদের সর্বাধিক প্রচলিত ভুল কোনটি?",
      options: [
        "Adding a pause / silence (Saktah) or bouncing the Nūn (Qalqalah), or holding an artificial Ghunnah",
        "Pronouncing the letter too clearly",
        "Looking at the ceiling",
        "Reading with a smile"
      ],
      correctIndex: 0,
      explanation: "Many reciters make the error of adding a pause (e.g. 'Man ... aamana') or bouncing the Nun; it must flow smoothly without pause.",
      explanationBangla: "প্রধান ভুল হলো নূনে অনাকাঙ্ক্ষিত সাকতাহ্ (বিরতি) দেওয়া, বা নূনকে কলকলাহর মতো ঝাঁকুনি দেওয়া, অথবা অপ্রয়োজনীয় গুন্নাহ করা।"
    },
    {
      id: "q9_26",
      type: "multiple_choice",
      question: "In (يَنْهَوْنَ عَنْهُ), how many instances of Iẓhār Ḥalqī are in this short phrase?",
      questionBangla: "(يَنْهَوْنَ عَنْهُ) বাক্যাংশে কতটি ইযহারে হলক্বী রয়েছে?",
      promptText: "يَنْهَوْنَ عَنْهُ",
      options: [
        "Two instances: Nūn before Hā’ in (يَنْهَوْنَ) and Nūn before Hā’ in (عَنْهُ)",
        "Only one instance",
        "Three instances",
        "Zero"
      ],
      correctIndex: 0,
      explanation: "Both words feature Nun Sakin followed by the throat letter Hā’ (هـ), producing two consecutive Izhar Halqis.",
      explanationBangla: "দুটি ইযহার রয়েছে: 'ইয়ান্হাওনা'র নূনে এবং 'আনহু'র নূনে; উভয়টিতেই নূনের পর হা (هـ) রয়েছে।"
    },
    {
      id: "q9_27",
      type: "multiple_choice",
      question: "In (عَلِيمٌ حَكِيمٌ), what rule governs the first Tanwīn?",
      questionBangla: "(عَلِيمٌ حَكِيمٌ) শব্দদ্বয়ে প্রথম তানবীনে কোন নিয়ম প্রযোজ্য?",
      promptText: "عَلِيمٌ حَكِيمٌ",
      options: [
        "Iẓhār Ḥalqī because it is followed by Ḥā’ (ح)",
        "Idgham",
        "Ikhfa",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Ḥā’ is one of the 6 throat letters, making the Tanween on ‘Aleem recited with pure Izhar.",
      explanationBangla: "হা (ح) কণ্ঠনালীর মধ্যভাগের হরফ হওয়ায় প্রথম তানবীনে স্পষ্ট ইযহারে হলক্বী হবে।"
    },
    {
      id: "q9_28",
      type: "multiple_choice",
      question: "In (صِنْوَانٌ وَغَيْرُ صِنْوَانٍ), what rule governs the Nūn inside the word (صِنْوَانٌ)?",
      questionBangla: "(صِنْوَانٌ) শব্দের ভেতরের নূন সাকিনে কোন তাজবীদ নিয়ম কার্যকর?",
      promptText: "صِنْوَانٌ",
      options: [
        "Iẓhār Muṭlaq (Absolute Izhar in a single word)",
        "Idgham bi-Ghunnah",
        "Ikhfa Haqiqi",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Because Nūn Sakin meets Wāw in a single word, it is one of the 4 absolute words of Izhar Mutlaq.",
      explanationBangla: "একই শব্দের ভেতর নূন সাকিনের পর ওয়াও আসায় এটি ইযহারে মুত্বলাক্বের চার শব্দের অন্যতম।"
    },
    {
      id: "q9_29",
      type: "multiple_choice",
      question: "In the word (كِرَامًا بَرَرَةٍ), what rule applies to the Tanwīn on (كِرَامًا)?",
      questionBangla: "(كِرَامًا بَرَرَةٍ) বাক্যাংশে 'কিরামান' এর তানবীনে কোন নিয়ম প্রযোজ্য?",
      promptText: "كِرَامًۢا بَرَرَةٍ",
      options: [
        "Iqlāb because Tanwīn is followed by Bā’",
        "Izhar Halqi",
        "Idgham bi-Ghunnah",
        "Ikhfa"
      ],
      correctIndex: 0,
      explanation: "Tanween meets Bā’ of Bararah, producing authentic Iqlāb: 'Kirāmam-Bararah'.",
      explanationBangla: "তানবীনের পর বা আসায় ইক্বলাব হবে এবং তা 'কিরামাম-বারারাহ্' গুন্নাহসহ উচ্চারিত হবে।"
    },
    {
      id: "q9_30",
      type: "multiple_choice",
      question: "Why does the Arabic language transform Nūn into Mīm specifically before Bā’ (Iqlāb)?",
      questionBangla: "আরবি ভাষা বা (ب) হরফের পূর্বে নূন সাকিনকে বিশেষ করে মীমে (م) রূপান্তর করে কেন?",
      options: [
        "Because Mīm shares its articulation point (lips) with Bā’, while sharing its acoustic property (Ghunnah) with Nūn, forming the perfect phonetic bridge",
        "Because it is easier to write",
        "Because Baa likes Meem",
        "Because Meem is silent"
      ],
      correctIndex: 0,
      explanation: "Mīm is the ideal transition: it has the lips of Bā’ and the nasal Ghunnah of Nūn, eliminating vocal strain.",
      explanationBangla: "কারণ মীম উচ্চারণের স্থানে বা-এর সমগোত্রীয় (উভয় ঠোঁট) এবং ধ্বনির দিক থেকে নূনের সমগোত্রীয় (গুন্নাহ); ফলে এটি নিখুঁত মধ্যস্থতাকারী হরফ।"
    },
    {
      id: "q9_31",
      type: "multiple_choice",
      question: "In the phrase (مِنْ أَهْلِ الْكِتَابِ), what rule governs the Nūn Sākinah in (مِنْ)?",
      questionBangla: "(مِنْ أَهْلِ الْكِتَابِ) বাক্যাংশে 'মিন' এর নূন সাকিনের বিধান কী?",
      promptText: "مِنْ أَهْلِ",
      options: ["Iẓhār Ḥalqī (followed by Hamzah)", "Idgham", "Ikhfa", "Iqlab"],
      correctIndex: 0,
      explanation: "Hamzah is a throat letter; the Nun is read crisp and clearly: 'Min ahli'.",
      explanationBangla: "হামযাহ গলার হরফ হওয়ায় নূন পরিষ্কার ইযহারে হলক্বী হবে: 'মিন আহলি'।"
    },
    {
      id: "q9_32",
      type: "multiple_choice",
      question: "In (ذَرَّةٍ خَيْرًا يَرَهُ), what rule applies to the Tanwīn on (ذَرَّةٍ)?",
      questionBangla: "(ذَرَّةٍ خَيْرًا) শব্দদ্বয়ে প্রথম তানবীনের হুকুম কী?",
      promptText: "ذَرَّةٍ خَيْرًا",
      options: [
        "Iẓhār Ḥalqī because it is followed by Khā’ (خ)",
        "Idgham without Ghunnah",
        "Ikhfa Haqiqi",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Khā’ is a throat letter of Izhar; the Tanween on 'Dharrah' is read with pure Izhar.",
      explanationBangla: "খা (خ) কণ্ঠনালীর হরফ হওয়ায় যাররাহ্ শব্দের তানবীনে ইযহারে হলক্বী প্রযোজ্য হবে।"
    },
    {
      id: "q9_33",
      type: "multiple_choice",
      question: "In the word (عَزِيزٌ غَفُورٌ), what rule applies to the Tanwīn on (عَزِيزٌ)?",
      questionBangla: "(عَزِيزٌ غَفُورٌ) বাক্যাংশে 'আযীযুন' এর তানবীনে কোন নিয়ম প্রযোজ্য?",
      promptText: "عَزِيزٌ غَفُورٌ",
      options: [
        "Iẓhār Ḥalqī because it is followed by Ghayn (غ)",
        "Idgham bi-Ghunnah",
        "Ikhfa Haqiqi",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Ghayn is a throat letter, demanding clear Izhar Halqi.",
      explanationBangla: "গাইন কণ্ঠনালীর হরফ হওয়ায় প্রথম তানবীন ইযহারে হলক্বী হবে।"
    },
    {
      id: "q9_34",
      type: "multiple_choice",
      question: "What happens if a reciter reads (مِنْ عِلْمٍ) with nasal Ikhfā’ instead of Iẓhār?",
      questionBangla: "(مِنْ عِلْمٍ) পড়ার সময় কেউ যদি ইযহার না করে নাকের বাঁশিতে ইখফা করে পড়ে, তবে কী বিধান হবে?",
      promptText: "مِنْ عِلْمٍ",
      options: [
        "It is a clear Tajweed error (Laḥn) because ‘Ayn is an Izhar letter, not an Ikhfa letter",
        "It is allowed optionally",
        "It is considered Tajweed excellence",
        "It has no ruling"
      ],
      correctIndex: 0,
      explanation: "‘Ayn strictly demands Izhar; applying Ikhfa corrupts the established rules of recitation.",
      explanationBangla: "আইন নিশ্চিতভাবে ইযহারের হরফ; এতে ইখফা বা গুন্নাহ করা তিলাওয়াতের সুপ্রতিষ্ঠিত নিয়মের স্পষ্ট লঙ্ঘন (লাহন)।"
    },
    {
      id: "q9_35",
      type: "multiple_choice",
      question: "In the verse (جَزَاءً مِّن رَّبِّكَ عَطَاءً حِسَابًا), how many instances of Iẓhār Ḥalqī occur?",
      questionBangla: "(عَطَاءً حِسَابًا) অংশে কোন তাজবীদ নিয়মটি কার্যকর?",
      promptText: "عَطَاءً حِسَابًا",
      options: [
        "Iẓhār Ḥalqī (Tanwīn on ‘Aṭā’an followed by Ḥā’ in Ḥisābā)",
        "Idgham bi-Ghunnah",
        "Ikhfa Haqiqi",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "The Tanween on ‘Aṭā’an is followed by Ḥā’ in Ḥisābā, making it a pristine Izhar Halqi.",
      explanationBangla: "'আত্বা-আন' এর তানবীনের পর হা (ح) আসায় এটি খাঁটি ইযহারে হলক্বী।"
    }
  ]
};
