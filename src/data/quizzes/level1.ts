import { Quiz } from "./types";

export const quizLevel1: Quiz = {
  id: "q1",
  levelId: 1,
  title: "Level 1: Arabic Alphabet & Orthography Master Challenge",
  titleBangla: "লেভেল ১: আরবি বর্ণমালা ও হরফের গভীর পরিচিতি",
  description: "Test your mastery of all 28 Arabic letters, dot counts and positions, similar shape distinctions, and authentic letter naming.",
  descriptionBangla: "২৮টি আরবি হরফের নাম, নুকতার অবস্থান, সমগোত্রীয় হরফের সূক্ষ্ম পার্থক্য এবং বর্ণমালার গভীর জ্ঞান যাচাই করুন।",
  passingScore: 70,
  questions: [
    {
      id: "q1_1",
      type: "multiple_choice",
      question: "Which of the following Arabic letters has exactly ONE dot placed underneath its base?",
      questionBangla: "নিচের কোন আরবি হরফটির নিচে ঠিক একটি নুকতা থাকে?",
      promptText: "ب",
      options: ["Tā’ (ت)", "Bā’ (ب)", "Nūn (ن)", "Yā’ (ي)"],
      correctIndex: 1,
      explanation: "Bā’ (ب) is distinguished by having a single dot underneath its horizontal boat shape.",
      explanationBangla: "বা (ب) হরফের নৌকার ন্যায় কাঠামোর নিচে একটি মাত্র নুকতা থাকে।"
    },
    {
      id: "q1_2",
      type: "multiple_choice",
      question: "How many letters in the 28-letter Arabic alphabet have NO dots at all (Muḥmalah)?",
      questionBangla: "আরবি ২৮টি হরফের মধ্যে কতটি হরফে কোনো নুকতা নেই (মুহমালাহ্)?",
      options: ["10 letters", "13 letters", "15 letters", "18 letters"],
      correctIndex: 1,
      explanation: "Exactly 13 letters are dotless (حروف مهملة): ا, ح, د, ر, س, ص, ط, ع, ك, ل, م, و, هـ.",
      explanationBangla: "আরবি বর্ণমালার মোট ১৩টি হরফ নুকতাবিহীন: আলিফ, হা, দাল, র, সীন, সোয়াদ, তোয়া, আইন, কাফ, লাম, মীম, ওয়াও, হা।"
    },
    {
      id: "q1_3",
      type: "audio_match",
      question: "Listen to the pronunciation. Which Arabic letter is being articulated softly with the tip of the tongue?",
      questionBangla: "উচ্চারণটি শুনুন। জিহ্বার ডগা ও সামনের উপরের দাঁতের আগা দিয়ে কোন হরফ উচ্চারিত হচ্ছে?",
      audioPrompt: "ثاء",
      audioUrl: "/audio/alphabet/thaa.mp3",
      options: ["ث (Thā’)", "س (Sīn)", "ص (Ṣād)", "ت (Tā’)"],
      correctIndex: 0,
      explanation: "Thā’ (ث) has 3 dots above and is pronounced softly by placing the tongue tip against the edges of the top front teeth.",
      explanationBangla: "সা (ث) হরফের উপরে ৩টি নুকতা থাকে এবং জিহ্বার আগা সামনের ওপরের দাঁতের কিনারার সাথে লাগিয়ে নরমভাবে উচ্চারিত হয়।"
    },
    {
      id: "q1_4",
      type: "multiple_choice",
      question: "What visual feature precisely differentiates Dāl (د) from Dhāl (ذ)?",
      questionBangla: "দাল (د) এবং যাল (ذ) এর মধ্যে চাক্ষুষ পার্থক্য কী?",
      promptText: "د  /  ذ",
      options: [
        "Dāl has a dot below, Dhāl has none",
        "Dhāl has one dot above, Dāl has no dot",
        "Dāl is taller than Dhāl",
        "Dhāl connects to the left while Dāl does not"
      ],
      correctIndex: 1,
      explanation: "Dāl (د) is completely dotless, whereas Dhāl (ذ) carries one single dot on its upper vertex.",
      explanationBangla: "দাল (د) নুকতাহীন, আর যাল (ذ) এর শীর্ষে একটি নুকতা থাকে।"
    },
    {
      id: "q1_5",
      type: "multiple_choice",
      question: "Which triplet of letters share the exact same head-and-belly base curve, differentiated strictly by dot placement?",
      questionBangla: "কোন তিনটি হরফের মূল বক্ররেখা হুবহু এক, শুধুমাত্র নুকতার অবস্থান দ্বারা আলাদা করা হয়?",
      options: [
        "ب, ت, ث",
        "ج, ح, خ",
        "د, ذ, ر",
        "ف, ق, ك"
      ],
      correctIndex: 1,
      explanation: "Jīm (ج - 1 dot inside), Ḥā’ (ح - no dots), and Khā’ (خ - 1 dot above) share the identical anatomical base stroke.",
      explanationBangla: "জীম (ج - পেটে ১ নুকতা), হা (ح - নুকতাহীন), এবং খা (خ - মাথায় ১ নুকতা) একই মূল কাঠামো বিশিষ্ট।"
    },
    {
      id: "q1_6",
      type: "audio_match",
      question: "Listen to the deep guttural sound from the middle of the throat. Which letter is this?",
      questionBangla: "গলার মধ্যভাগ থেকে উচ্চারিত গভীর স্বরটি শুনুন। এটি কোন হরফ?",
      audioPrompt: "عين",
      audioUrl: "/audio/alphabet/ayn.mp3",
      options: ["ء (Hamzah)", "ع (‘Ayn)", "ح (Ḥā’)", "غ (Ghayn)"],
      correctIndex: 1,
      explanation: "‘Ayn (ع) is articulated from the exact middle of the throat (Wasat al-Halq) by squeezing the epiglottis.",
      explanationBangla: "আইন (ع) হলকের মধ্যভাগ থেকে স্বরযন্ত্র চেপে উচ্চারিত হয়।"
    },
    {
      id: "q1_7",
      type: "multiple_choice",
      question: "Which of these letters has THREE dots placed above it?",
      questionBangla: "নিচের কোন হরফটির উপরে তিনটি নুকতা থাকে?",
      options: ["Tā’ (ت)", "Qāf (ق)", "Shīn (ش)", "Nūn (ن)"],
      correctIndex: 2,
      explanation: "Only two letters in Arabic have three dots above: Thā’ (ث) and Shīn (ش).",
      explanationBangla: "আরবি বর্ণমালায় কেবল দুটি হরফের মাথায় ৩ নুকতা থাকে: সা (ث) এবং শীন (ش)।"
    },
    {
      id: "q1_8",
      type: "multiple_choice",
      question: "Which letter is known as the unique symbol of the Arabic language ('Lughat aḍ-Ḍād')?",
      questionBangla: "কোন হরফটিকে আরবি ভাষার অনন্য প্রতীক ('লুগাতুদ দোয়াদ') বলা হয়?",
      promptText: "ض",
      options: ["Ṣād (ص)", "Ḍād (ض)", "Ṭā’ (ط)", "Ẓā’ (ظ)"],
      correctIndex: 1,
      explanation: "Ḍād (ض) is produced from the lateral edge of the tongue against the upper molars, unique to classical Arabic.",
      explanationBangla: "দোয়াদ (ض) হরফের উচ্চারণ জিহ্বার পাশ ও মাড়ির দাঁতের সংযোগ থেকে হয়, যা আরবি ব্যতীত অন্য ভাষায় পাওয়া যায় না।"
    },
    {
      id: "q1_9",
      type: "multiple_choice",
      question: "What is the key difference between Raa (ر) and Zay (ز)?",
      questionBangla: "র (ر) এবং যা (ز) এর মধ্যে প্রধান পার্থক্য কী?",
      promptText: "ر  /  ز",
      options: [
        "Rā has one dot below, Zāy has none",
        "Zāy has one dot above, Rā has no dots",
        "Rā curves upward, Zāy curves downward",
        "Zāy connects to following letters, Rā does not"
      ],
      correctIndex: 1,
      explanation: "Rā’ (ر) is dotless, while Zāy (ز) has a single dot on top.",
      explanationBangla: "র (ر) নুকতাহীন, আর যা (ز) হরফের উপরে একটি নুকতা থাকে।"
    },
    {
      id: "q1_10",
      type: "multiple_choice",
      question: "How many letters in the Arabic alphabet NEVER connect to a following letter on their left (Non-connectors)?",
      questionBangla: "আরবি বর্ণমালার কয়টি হরফ তাদের বাম দিকের পরবর্তী হরফের সাথে কখনোই জোড়া লাগে না?",
      options: ["4 letters", "6 letters", "8 letters", "10 letters"],
      correctIndex: 1,
      explanation: "There are 6 non-connecting letters: Alif (ا), Dāl (د), Dhāl (ذ), Rā’ (ر), Zāy (ز), and Wāw (و).",
      explanationBangla: "৬টি হরফ বামে যুক্ত হয় না: আলিফ (ا), দাল (د), যাল (ذ), র (ر), যা (ز), এবং ওয়াও (و)।"
    },
    {
      id: "q1_11",
      type: "audio_match",
      question: "Listen to the sharp whistle-like sound. Is this Sīn (س) or Ṣād (ص)?",
      questionBangla: "তীক্ষ্ণ শিসযুক্ত ধ্বনিটি শুনুন। এটি কি হালকা সীন (س) নাকি ভারী সোয়াদ (ص)?",
      audioPrompt: "صاد",
      audioUrl: "/audio/alphabet/saad.mp3",
      options: ["س (Sīn - light)", "ص (Ṣād - heavy emphatic)", "ث (Thā’ - soft)", "ز (Zāy - buzzing)"],
      correctIndex: 1,
      explanation: "Ṣād (ص) possesses the heavy attributes of Isti‘la (elevation) and Iṭbāq (tongue closure), giving it a rich, thick acoustic profile.",
      explanationBangla: "সোয়াদ (ص) মোটা ও ভারী (ইস্তি'লা ও ইতবাক) বিশিষ্ট হরফ, যার ধ্বনি অত্যন্ত গম্ভীর ও পূর্ণ হয়।"
    },
    {
      id: "q1_12",
      type: "multiple_choice",
      question: "Identify the letter: A loop with an upright vertical mast and ONE dot above it.",
      questionBangla: "হরফটি চিনুন: ডিম্বাকৃতির ভিত্তির সাথে সোজা খাড়া দণ্ড এবং মাথায় একটি নুকতা।",
      promptText: "ظ",
      options: ["Ṭā’ (ط)", "Ẓā’ (ظ)", "Ḍād (ض)", "Ṣād (ص)"],
      correctIndex: 1,
      explanation: "Ẓā’ (ظ) is the dotted twin of Ṭā’ (ط), featuring an upright mast and one dot on top.",
      explanationBangla: "জোয়া (ظ) হরফটিতে তোয়ার মতো খাড়া দণ্ড এবং উপরে একটি নুকতা থাকে।"
    },
    {
      id: "q1_13",
      type: "multiple_choice",
      question: "Which of the following pairs represents letters that differ ONLY in having an upright vertical stroke (mast)?",
      questionBangla: "নিচের কোন জোড়ার হরফের মূল রূপ প্রায় এক, কিন্তু একটিতে খাড়া দণ্ড থাকে অন্যটিতে থাকে না?",
      options: ["ص and ط", "ب and ل", "د and ر", "ع and غ"],
      correctIndex: 0,
      explanation: "Ṣād (ص) has a circular head with a deep dish, whereas Ṭā’ (ط) replaces the dish with an upright vertical mast.",
      explanationBangla: "সোয়াদ (ص) এবং তোয়া (ط) উভয়ের মাথার অংশ ডিম্বাকার, তবে তোয়া-তে সোজা খাড়া দণ্ড যুক্ত থাকে।"
    },
    {
      id: "q1_14",
      type: "audio_match",
      question: "Listen to this deep guttural throat sound. Which letter is this?",
      questionBangla: "গলার উপরিভাগ থেকে উচ্চারিত এই ভারী ঘর্ষণযুক্ত ধ্বনিটি শুনুন। এটি কোন হরফ?",
      audioPrompt: "خاء",
      audioUrl: "/audio/alphabet/khaa.mp3",
      options: ["ح (Ḥā’)", "خ (Khā’)", "غ (Ghayn)", "هـ (Hā’)"],
      correctIndex: 1,
      explanation: "Khā’ (خ) is articulated at the closest part of the throat (Adna al-Halq) with noticeable rasping friction and elevation.",
      explanationBangla: "খা (خ) গলার সবচেয়ে কাছের অংশ থেকে উচ্চারিত ভারী ও খরখরে হরফ।"
    },
    {
      id: "q1_15",
      type: "multiple_choice",
      question: "What differentiates the letter Fā’ (ف) from Qāf (ق) in their standard isolated forms?",
      questionBangla: "একক রূপে ফা (ف) এবং ক্বাফ (ق) এর মধ্যে প্রধান পার্থক্য কী?",
      promptText: "ف  /  ق",
      options: [
        "Fā’ has 1 dot and a shallow wide bowl on the line; Qāf has 2 dots and a deeper circular basin dropping below the line",
        "Fā’ has 2 dots and Qāf has 1 dot",
        "Qāf sits entirely above the line while Fā’ drops below",
        "They are identical except Fā’ is written backwards"
      ],
      correctIndex: 0,
      explanation: "Fā’ (ف) has 1 dot with a flat base resting on the baseline, while Qāf (ق) has 2 dots and its basin drops beneath the line.",
      explanationBangla: "ফা (ف) ১ নুকতা বিশিষ্ট ও লাইনের ওপর সমান থাকে; ক্বাফ (ق) ২ নুকতা বিশিষ্ট এবং এর গভীর পেয়ালাটি লাইনের নিচে নেমে যায়।"
    },
    {
      id: "q1_16",
      type: "multiple_choice",
      question: "Which letter has TWO dots underneath it in its isolated or final form?",
      questionBangla: "কোন হরফটির নিচে দুইটি নুকতা থাকে?",
      promptText: "ي",
      options: ["Tā’ (ت)", "Qāf (ق)", "Yā’ (ي)", "Nūn (ن)"],
      correctIndex: 2,
      explanation: "Yā’ (ي) has two dots underneath it in its initial, medial, and often final forms.",
      explanationBangla: "ইয়া (ي) হরফের নিচে পাশাপাশি দুটি নুকতা থাকে।"
    },
    {
      id: "q1_17",
      type: "multiple_choice",
      question: "What is the letter Kāf (ك) distinguished by inside its wide shallow base?",
      questionBangla: "কাফ (ك) হরফের পেটের ভেতরে কী প্রতীক থাকে?",
      promptText: "ك",
      options: ["A miniature dot", "A miniature S-curve mini-Kāf mark (Shakl al-Kāf)", "A double dot", "A Sukoon"],
      correctIndex: 1,
      explanation: "In Arabic calligraphy, the mark inside isolated Kāf (ك) is a miniature handwritten Kāf (شكل الكاف), not a Hamzah.",
      explanationBangla: "কাফ (ك) এর পেটের ভেতরের চিহ্নটি ছোট হামযাহ নয়, বরং ছোট আকারের হস্তলিখিত কাফের রূপ (শাকলুল কাফ)।"
    },
    {
      id: "q1_18",
      type: "audio_match",
      question: "Listen to the heavy, echoing throat sound. Is this Qāf (ق) or Kāf (ك)?",
      questionBangla: "শব্দটি শুনুন। এটি কি আলজিহ্বার গোড়ার গম্ভীর ক্বাফ (ق) নাকি সাধারণ হালকা কাফ (ك)?",
      audioPrompt: "قاف",
      audioUrl: "/audio/alphabet/qaaf.mp3",
      options: ["ق (Qāf - heavy)", "ك (Kāf - light)", "ط (Ṭā’)", "ت (Tā’)"],
      correctIndex: 0,
      explanation: "Qāf (ق) is articulated deep at the extreme back of the tongue against the soft uvular palate.",
      explanationBangla: "ক্বাফ (ق) জিহ্বার গোড়ার একেবারে শেষ প্রান্ত নরম আলজিহ্বার তালুতে লাগিয়ে গম্ভীর ভারী কণ্ঠে উচ্চারিত হয়।"
    },
    {
      id: "q1_19",
      type: "multiple_choice",
      question: "Which of the following letters is articulated purely from both lips coming together?",
      questionBangla: "নিচের কোন হরফটি উভয় ঠোঁটের মিলনে উচ্চারিত হয়?",
      options: ["Mīm (م)", "Fā’ (ف)", "Lām (ل)", "Nūn (ن)"],
      correctIndex: 0,
      explanation: "Mīm (م) and Bā’ (ب) are pronounced by pressing the two lips together, whereas Fā’ uses the upper teeth and lower lip.",
      explanationBangla: "মীম (م) দুই ঠোঁট সম্পূর্ণ বন্ধ করে উচ্চারিত হয়।"
    },
    {
      id: "q1_20",
      type: "multiple_choice",
      question: "What is the correct letter name for the consonant written as (ء)?",
      questionBangla: "এই চিহ্নটির (ء) প্রকৃত নাম কী?",
      promptText: "ء",
      options: ["Alif", "Hamzah", "Ayn", "Waw"],
      correctIndex: 1,
      explanation: "The glottal stop character (ء) is Hamzah. Alif (ا) acts primarily as a long vowel carrier or seat for Hamzah.",
      explanationBangla: "এই চিহ্নটির প্রকৃত নাম হামযাহ (ء)। আলিফ মূলত দীর্ঘ স্বরবর্ণ বা হামযাহর আসন হিসেবে কাজ করে।"
    },
    {
      id: "q1_21",
      type: "multiple_choice",
      question: "Which letter pair is pronounced from the tip of the tongue and the inner edges of the upper front teeth?",
      questionBangla: "জিহ্বার ডগা ও সামনের ওপরের দাঁতের আগা থেকে কোন জোড়া উচ্চারিত হয়?",
      options: ["ذ and ظ", "د and ت", "ج and ش", "ق and ك"],
      correctIndex: 0,
      explanation: "Dhāl (ذ), Thā’ (ث), and Ẓā’ (ظ) are the three dental letters articulated from the tongue tip touching the incisor tips.",
      explanationBangla: "যাল (ذ), সা (ث) এবং জোয়া (ظ) জিহ্বার ডগা ও ওপরের দাঁতের আগা থেকে উচ্চারিত হয়।"
    },
    {
      id: "q1_22",
      type: "audio_match",
      question: "Listen to the breathy sound from the deepest bottom of the throat/chest. Which letter is this?",
      questionBangla: "বুকের কাছাকাছি গলার গভীর থেকে আসা মৃদু বাতাসযুক্ত ধ্বনিটি শুনুন। এটি কোন হরফ?",
      audioPrompt: "هاء",
      audioUrl: "/audio/alphabet/haa_chest.mp3",
      options: ["ح (Ḥā’ - throat)", "هـ (Hā’ - deep chest/throat)", "خ (Khā’)", "ع (‘Ayn)"],
      correctIndex: 1,
      explanation: "Hā’ (هـ) originates from the deepest region of the throat (Aqsa al-Halq) near the vocal cords.",
      explanationBangla: "হা (هـ) গলার সর্বনিম্ন গভীর অংশ (বুকের নিকটবর্তী) থেকে স্বাভাবিক নিঃশ্বাসের সাথে উচ্চারিত হয়।"
    },
    {
      id: "q1_23",
      type: "multiple_choice",
      question: "How do you distinguish isolated ‘Ayn (ع) from isolated Ghayn (غ)?",
      questionBangla: "আইন (ع) এবং গাইন (غ) এর মধ্যে বাহ্যিক পার্থক্য কী?",
      promptText: "ع  /  غ",
      options: [
        "‘Ayn has a dot on top, Ghayn is dotless",
        "Ghayn has one dot on top, ‘Ayn has no dots",
        "‘Ayn has a dot inside its loop, Ghayn has none",
        "Ghayn has two dots below"
      ],
      correctIndex: 1,
      explanation: "‘Ayn (ع) is dotless, while Ghayn (غ) has a single dot positioned above its open head.",
      explanationBangla: "আইন (ع) নুকতাহীন, আর গাইন (غ) এর মাথায় একটি নুকতা থাকে।"
    },
    {
      id: "q1_24",
      type: "multiple_choice",
      question: "Which letter consists of a tall vertical rod followed by an elegant leftward loop descending below the line?",
      questionBangla: "সোজা ওপর থেকে নেমে লাইনের নিচে বৃত্তাকার বাঁক নেওয়া হরফটি কোনটি?",
      promptText: "ل",
      options: ["Alif (ا)", "Lām (ل)", "Kāf (ك)", "Nūn (ن)"],
      correctIndex: 1,
      explanation: "Lām (ل) begins with a vertical stroke like Alif but curves under the baseline like a fish hook.",
      explanationBangla: "লাম (ل) আলিফের মতো ওপর থেকে নেমে লাইনের নিচে মাছ ধরার বড়শির মতো বৃত্তাকার বাঁক নেয়।"
    },
    {
      id: "q1_25",
      type: "multiple_choice",
      question: "Which of the following letters has a deep rounded bowl dropping BELOW the line with ONE dot placed inside its center?",
      questionBangla: "লাইনের নিচে নেমে যাওয়া গভীর বাটির মাঝে ঠিক ১টি নুকতা বিশিষ্ট হরফ কোনটি?",
      promptText: "ن",
      options: ["Bā’ (ب)", "Tā’ (ت)", "Nūn (ن)", "Zāy (ز)"],
      correctIndex: 2,
      explanation: "Nūn (ن) is deeper and rounder than Bā’ and drops below the line, holding one dot centrally inside.",
      explanationBangla: "নূন (ن) এর বাটিটি বা এর চেয়ে গভীর ও গোলাকার, লাইনের নিচে নামে এবং মাঝে একটি নুকতা থাকে।"
    },
    {
      id: "q1_26",
      type: "multiple_choice",
      question: "What is the visual combination of Lām and Alif called when written together?",
      questionBangla: "লাম এবং আলিফ যখন বিশেষ শৈলীতে একত্রে লেখা হয় তখন তাকে কী বলা হয়?",
      promptText: "لا",
      options: ["Lām-Mīm", "Lām-Alif (Lā)", "Kāf-Alif", "Alif-Madd"],
      correctIndex: 1,
      explanation: "Lām-Alif (لا) is a composite ligature representing the sound 'Lā'.",
      explanationBangla: "লাম-আলিফ (لا) একটি যুক্তাক্ষর যা 'লা' ধ্বনি নির্দেশ করে।"
    },
    {
      id: "q1_27",
      type: "audio_match",
      question: "Listen to the vibration. Is this Zāy (ز) or Dhāl (ذ)?",
      questionBangla: "তীক্ষ্ণ গুঞ্জনটি শুনুন। এটি কি যা (ز) নাকি যাল (ذ)?",
      audioPrompt: "زاي",
      audioUrl: "/audio/alphabet/zay.mp3",
      options: ["ز (Zāy - buzzing whistle)", "ذ (Dhāl - soft dental)", "ظ (Ẓā’)", "س (Sīn)"],
      correctIndex: 0,
      explanation: "Zāy (ز) has an intense buzzing whistling sound (Ṣafeer), unlike the soft interdental Dhāl (ذ).",
      explanationBangla: "যা (ز) হরফে মৌমাছির গুঞ্জনের মতো তীব্র শিস ধ্বনি (সাফীর) থাকে।"
    },
    {
      id: "q1_28",
      type: "multiple_choice",
      question: "Which Arabic letter has a circular loop head sitting on the line with a trailing tail curving below?",
      questionBangla: "লাইনের ওপর গোল মাথা এবং লাইনের নিচে বাঁকা লেজ বিশিষ্ট হরফ কোনটি?",
      promptText: "و",
      options: ["Fā’ (ف)", "Qāf (ق)", "Wāw (و)", "Rā’ (ر)"],
      correctIndex: 2,
      explanation: "Wāw (و) has a loop head sitting on the baseline with a sweeping curve below.",
      explanationBangla: "ওয়াও (و) এর গোল মাথাটি লাইনের ওপর থাকে এবং লেজটি লাইনের নিচে বৃত্তাকারে বাঁকা হয়।"
    },
    {
      id: "q1_29",
      type: "multiple_choice",
      question: "How many letters in Arabic have exactly TWO dots (either above or below)?",
      questionBangla: "আরবি বর্ণমালায় মোট কতটি হরফে ঠিক দুইটি নুকতা থাকে (উপরে অথবা নিচে)?",
      options: ["2 letters", "3 letters", "4 letters", "5 letters"],
      correctIndex: 1,
      explanation: "Exactly 3 letters have two dots: Tā’ (ت - 2 above), Qāf (ق - 2 above), and Yā’ (ي - 2 below).",
      explanationBangla: "মোট ৩টি হরফে দুটি করে নুকতা থাকে: তা (ت - উপরে ২ নুকতা), ক্বাফ (ق - উপরে ২ নুকতা), এবং ইয়া (ي - নিচে ২ নুকতা)।"
    },
    {
      id: "q1_30",
      type: "multiple_choice",
      question: "Which of the following letters is NOT an emphatic/heavy (Mufakhkham) letter?",
      questionBangla: "নিচের কোন হরফটি সর্বদা ভারী বা মোটা হরফ (মুফাখ্খাম) নয়?",
      options: ["Ṣād (ص)", "Ḍād (ض)", "Sīn (س)", "Ṭā’ (ط)"],
      correctIndex: 2,
      explanation: "Sīn (س) is a light letter (Mustafil / Muraqqaq), while Ṣād, Ḍād, and Ṭā’ are heavy (Musta‘li).",
      explanationBangla: "সীন (س) সর্বদা পাতলা ও হালকা হরফ, পক্ষান্তরে সোয়াদ, দোয়াদ ও তোয়া সর্বদা মোটা ও ভারী হরফ।"
    },
    {
      id: "q1_31",
      type: "multiple_choice",
      question: "When reciting the Arabic alphabet in traditional sequence, which letter immediately succeeds Nūn (ن)?",
      questionBangla: "আরবি বর্ণমালার চিরায়ত ক্রমানুসারে নূন (ن) এর ঠিক পরবর্তী হরফ কোনটি?",
      options: ["Mīm (م)", "Hā’ (هـ)", "Wāw (و)", "Yā’ (ي)"],
      correctIndex: 1,
      explanation: "The standard modern Hijā'ī order is: Lām, Mīm, Nūn, Hā’, Wāw, Yā’ (ل م ن هـ و ي).",
      explanationBangla: "আধুনিক হিজায়ী নিয়মে নূনের পরবর্তী ক্রম হলো: লাম, মীম, নূন, হা, ওয়াও, ইয়া।"
    },
    {
      id: "q1_32",
      type: "multiple_choice",
      question: "Which of the following describes the letter Tā’ Marbūṭah (ة)?",
      questionBangla: "তা মারবূতাহ (ة) সম্পর্কে কোনটি সঠিক?",
      promptText: "ة",
      options: [
        "A regular letter of the alphabet used anywhere in a word",
        "A feminine grammatical marker appearing only at the end of words, pronounced as 't' with vowels and as 'h' when stopping",
        "Another spelling for standard Alif",
        "A letter with 3 dots above"
      ],
      correctIndex: 1,
      explanation: "Tā’ Marbūṭah (ة) appears strictly at word endings. When stopped upon, its sound transforms into a soft 'h' (هاء).",
      explanationBangla: "তা মারবূতাহ (ة) শুধুমাত্র শব্দের শেষে আসে; হরকত অবস্থায় 'ত' এবং ওয়াকফ (থামা) অবস্থায় 'হ' উচ্চারিত হয়।"
    },
    {
      id: "q1_33",
      type: "audio_match",
      question: "Listen to the heavy letter Ṭā’ (ط). Notice how it differs from the light Tā’ (ت).",
      questionBangla: "তোয়া (ط) এর ভারী উচ্চারণটি শুনুন। এটি সাধারণ তা (ت) থেকে কতটা গম্ভীর লক্ষ্য করুন।",
      audioPrompt: "طاء",
      audioUrl: "/audio/alphabet/taa_emphatic.mp3",
      options: ["ت (Tā’ - light)", "ط (Ṭā’ - heavy)", "د (Dāl)", "ض (Ḍād)"],
      correctIndex: 1,
      explanation: "Ṭā’ (ط) is the strongest letter in Arabic, combining Shiddah (strength), Isti‘la (elevation), and Iṭbāq (enclosure).",
      explanationBangla: "তোয়া (ط) আরবি ভাষার সবচেয়ে শক্তিশালী হরফ, যাতে তীব্রতা, উচ্চতা ও পূর্ণ মুখবন্ধ বৈশিষ্ট্য রয়েছে।"
    },
    {
      id: "q1_34",
      type: "multiple_choice",
      question: "Which group contains ONLY letters that have dots placed ABOVE the body?",
      questionBangla: "কোন দলের সবগুলো হরফের নুকতা শুধুমাত্র ওপরে থাকে?",
      options: [
        "ت, ث, خ, ذ, ز, ش, ض, ظ, غ, ف, ق, ن",
        "ب, ج, ي, ت, ث",
        "ح, خ, د, ذ, ر, ز",
        "ط, ظ, ع, غ, ف, ق"
      ],
      correctIndex: 0,
      explanation: "All 12 of these letters (ت ث خ ذ ز ش ض ظ غ ف ق ن) have their dots placed strictly above their base.",
      explanationBangla: "এই ১২টি হরফের প্রত্যেকের নুকতা শরীরের ওপরের অংশে অবস্থান করে।"
    },
    {
      id: "q1_35",
      type: "multiple_choice",
      question: "What is the primary acoustic trap when pronouncing Ḥā’ (ح) compared to Hā’ (هـ)?",
      questionBangla: "গলার মধ্যভাগের হা (ح) এবং বুকঘেঁষা হা (هـ) উচ্চারণের প্রধান পার্থক্য কী?",
      options: [
        "Ḥā’ (ح) is from the middle of the throat with strong breath friction; Hā’ (هـ) is from the deep chest with relaxed exhalation",
        "They are identical and interchangeable",
        "Ḥā’ (ح) is pronounced from the lips",
        "Hā’ (هـ) has a heavy sound like Qāf"
      ],
      correctIndex: 0,
      explanation: "Ḥā’ (ح) requires conscious constriction of the mid-throat muscles producing a clean, breathy scrape, unlike deep chest Hā’ (هـ).",
      explanationBangla: "হা (ح) গলার মধ্যভাগ চেপে পরিষ্কার হিসহিস শব্দে বের করতে হয়, আর হা (هـ) স্বাভাবিক দীর্ঘশ্বাসের মতো গম্ভীর বুক থেকে আসে।"
    }
  ]
};
