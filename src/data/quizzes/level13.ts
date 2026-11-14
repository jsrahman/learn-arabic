import { Quiz } from "./types";

export const quizLevel13: Quiz = {
  id: "q13",
  levelId: 13,
  title: "Level 13: Secondary Madd (Madd Far‘ī) Master Challenge",
  titleBangla: "লেভেল ১৩: মাদ্দে ফার'ঈ (শাখা মাদ্দসমূহ) ও দীর্ঘ মাদ্দের কঠিন পরীক্ষা",
  description: "Dissect Madd caused by Hamzah (Muttasil, Munfasil, Silah Kubra) and Madd caused by Sukoon (Lazim Kalimi/Harfi, ‘Aarid li-Sukoon, Leen).",
  descriptionBangla: "হামযাহর কারণে সৃষ্ট মাদ্দ (মুত্তাসিল, মুনফাসিল, সিলাহ কুবরা) এবং সুকূনের কারণে সৃষ্ট মাদ্দ (লাযিম কালিমী/হরফী, আরেদ্ব লিস-সুকূন) এর মাত্রা ও বিধান পরীক্ষা।",
  passingScore: 70,
  questions: [
    {
      id: "q13_1",
      type: "multiple_choice",
      question: "What are the TWO primary causes (Asbāb) that elevate a Natural Madd into a Secondary Madd (Madd Far‘ī)?",
      questionBangla: "স্বাভাবিক মাদ্দকে শাখা মাদ্দে (মাদ্দে ফার'ঈ) রূপান্তরিত করার দুটি মূল কারণ (আসবাব) কী কী?",
      options: [
        "Hamzah (الْهَمْزُ) and Sukūn (السُّكُونُ)",
        "Shaddah and Tanween",
        "Kasrah and Dammah",
        "Qalqalah and Ghunnah"
      ],
      correctIndex: 0,
      explanation: "All secondary extensions (Madd Far‘ī) are caused either by an encounter with Hamzah (سبب لفظي: الهمز) or with Sukūn (سبب لفظي: السكون).",
      explanationBangla: "সকল মাদ্দে ফার'ঈর মূল কারণ কেবল দুটি: মাদ্দের হরফের পর হামযাহ আসা অথবা সুকূন (জযম বা তাশদীদ) আসা।"
    },
    {
      id: "q13_2",
      type: "multiple_choice",
      question: "What is Madd Muttaṣil (الْمَدُّ الْمُتَّصِلُ - Connected Obligatory Madd)?",
      questionBangla: "মাদ্দে মুত্তাসিল (ওয়াজিব যুক্ত মাদ্দ) কাকে বলে?",
      promptText: "جَاءَ  /  السَّمَاءِ  /  سُوءَ",
      options: [
        "When a letter of Madd is followed by a Hamzah inside the EXACT SAME single word (e.g. جَاءَ, السَّمَاءِ, سُوءَ)",
        "When Hamzah is in the next word",
        "When the word ends in a Tanween",
        "When two Madd letters meet"
      ],
      correctIndex: 0,
      explanation: "Muttaṣil means connected: the Madd letter and the triggering Hamzah are welded together within the same single word.",
      explanationBangla: "যখন মাদ্দের হরফ এবং তার কারণ হামযাহ উভয়টি একই শব্দের ভেতর যুক্ত হয়ে আসে (যেমন: জা-আ, আস-সামা-ই, সূ-আ)।"
    },
    {
      id: "q13_3",
      type: "multiple_choice",
      question: "What is the mandatory recitation duration of Madd Muttaṣil in the narration of Ḥafṣ ‘an ‘Āṣim (Ṭarīq ash-Shāṭibiyyah)?",
      questionBangla: "হাফস 'আন 'আসিম রেওয়ায়েতে (শাতিবিয়্যাহ ত্বরীক্বা) মাদ্দে মুত্তাসিল কত হরকত টানা ওয়াজিব?",
      options: [
        "4 or 5 counts (Ḥarakāt) during continuous reading, extendable to 6 counts if the Hamzah is stopped upon at the end of a word",
        "2 counts only",
        "6 counts always",
        "3 counts only"
      ],
      correctIndex: 0,
      explanation: "Madd Muttaṣil is obligatorily prolonged for 4 or 5 counts (or 6 counts if paused on extreme Hamzah like 'As-Samā’').",
      explanationBangla: "মাদ্দে মুত্তাসিল ৪ বা ৫ হরকত টানা ওয়াজিব; আর শব্দের শেষে হামযাহতে ওয়াকফ করলে তা ৬ হরকত পর্যন্ত টানা যায়।"
    },
    {
      id: "q13_4",
      type: "multiple_choice",
      question: "What is Madd Munfaṣil (الْمَدُّ الْمُنْفَصِلُ - Detached Permissible Madd)?",
      questionBangla: "মাদ্দে মুনফাসিল (জায়েয বিচ্ছিন্ন মাদ্দ) কাকে বলে?",
      promptText: "إِنَّا أَنزَلْنَاهُ  /  قُولُوا آمَنَّا",
      options: [
        "When the letter of Madd is at the END of one word, and the Hamzah is at the BEGINNING of the NEXT word (e.g. إِنَّا أَنزَلْنَاهُ)",
        "When both are in one word",
        "When there is no Hamzah",
        "When stopping on an Ayah"
      ],
      correctIndex: 0,
      explanation: "Munfaṣil means detached: the Madd letter terminates word 1, and the Hamzah inaugurates word 2.",
      explanationBangla: "যখন মাদ্দের হরফ প্রথম শব্দের শেষে থাকে এবং পরবর্তী শব্দের শুরুতে হামযাহ আসে (যেমন: ইন্না- আন্ঝাল্নাহু)।"
    },
    {
      id: "q13_5",
      type: "multiple_choice",
      question: "What is the standard recitation duration of Madd Munfaṣil in Ḥafṣ ‘an ‘Āṣim (via Ash-Shāṭibiyyah)?",
      questionBangla: "শাতিবিয়্যাহ ত্বরীক্বায় হাফস রেওয়ায়েতে মাদ্দে মুনফাসিল কত হরকত পর্যন্ত প্রলম্বিত করা যায়?",
      options: [
        "4 or 5 counts (with 2 counts permissible in specific alternative paths like Ṭayyibat an-Nashr)",
        "Strictly 2 counts only",
        "Strictly 6 counts only",
        "1 count"
      ],
      correctIndex: 0,
      explanation: "In standard Shatibiyyah recitation, Madd Munfaṣil is sustained for 4 or 5 counts (Tawassuṭ).",
      explanationBangla: "সাধারণ শাতিবিয়্যাহ ত্বরীক্বার তিলাওয়াতে মাদ্দে মুনফাসিল ৪ বা ৫ হরকত (তাওয়াস্সুত) পরিমাণ টানা হয়।"
    },
    {
      id: "q13_6",
      type: "multiple_choice",
      question: "What happens to Madd Munfaṣil if you STOP (Waqf) upon the first word (e.g. stopping on إِنَّا in إِنَّا أَنزَلْنَاهُ)?",
      questionBangla: "যদি মাদ্দে মুনফাসিলের ১ম শব্দে ওয়াকফ (থামা) করা হয় (যেমন: إِنَّا أَنزَلْنَاهُ এর 'ইন্না'তে), তবে মাদ্দ কতটুকু টানা হবে?",
      promptText: "إِنَّا",
      options: [
        "The reason for Madd Far‘ī (the Hamzah) disappears; it reverts back to a simple Natural Madd (Madd Aṣlī) of 2 COUNTS ONLY",
        "It stretches to 6 counts",
        "It becomes a silent stop",
        "It must not be stopped on"
      ],
      correctIndex: 0,
      explanation: "On pause, the detached Hamzah is not reached; thus the Alif returns to its baseline natural 2-count Madd Asli: 'Innā'.",
      explanationBangla: "যেহেতু হামযাহ পরবর্তী শব্দে এবং সেখানে পৌঁছানো হয়নি, তাই অতিরিক্ত টান বাতিল হয়ে তা স্বাভাবিক ২ হরকতের মাদ্দে আসলী ('ইন্না') হয়ে যাবে।"
    },
    {
      id: "q13_7",
      type: "multiple_choice",
      question: "In words like (هَٰؤُلَاءِ), how many Madds are present and what types are they?",
      questionBangla: "(هَٰؤُلَاءِ) শব্দটিতে কতটি মাদ্দ রয়েছে এবং সেগুলো কোন কোন প্রকারের?",
      promptText: "هَٰؤُلَاءِ",
      options: [
        "TWO Madds: the first (هَـآ) is Madd Munfaṣil (detachable vocative particle); the second (-لَآءِ) is Madd Muttaṣil (connected)",
        "Both are Muttaṣil",
        "Both are Munfaṣil",
        "Only one Madd"
      ],
      correctIndex: 0,
      explanation: "‘Hā’ulā’i’ combines: 1. Hā vocative (Madd Munfaṣil, 4-5 counts) + 2. ‘Ulā’i’ (Madd Muttaṣil, 4-5 counts).",
      explanationBangla: "দুটি মাদ্দ রয়েছে: প্রথমটি (হা-উ) মাদ্দে মুনফাসিল এবং দ্বিতীয়টি (-লা-ই) মাদ্দে মুত্তাসিল; উভয়টিতে ৪-৫ হরকত টানতে হয়।"
    },
    {
      id: "q13_8",
      type: "multiple_choice",
      question: "What is Madd Lāzim (الْمَدُّ اللَّازِمُ - Compulsory Madd)?",
      questionBangla: "মাদ্দে লাযিম (বাধ্যতামূলক মাদ্দ) কাকে বলে?",
      promptText: "الضَّالِّينَ  /  الْحَاقَّةُ  /  الم",
      options: [
        "When a letter of Madd is followed by an ORIGINAL, permanent Sukūn (or Shaddah) in the same word or letter, in both continuous reading and pause",
        "A Madd that can be read with 2 counts",
        "A Madd caused by Hamzah",
        "A Madd only at the end of a Surah"
      ],
      correctIndex: 0,
      explanation: "Lāzim means compulsory: a Madd letter followed by a permanent authentic Sukūn, unanimously requiring 6 full counts.",
      explanationBangla: "মাদ্দের হরফের পর স্থায়ী আসল সাকিন বা তাশদীদ আসলে তাকে মাদ্দে লাযিম বলে; সকল ক্বারীর ঐকমত্যে একে পূর্ণ ৬ হরকত টানা বাধ্যতামূলক।"
    },
    {
      id: "q13_9",
      type: "multiple_choice",
      question: "What is the mandatory duration of Madd Lāzim across ALL schools of recitation?",
      questionBangla: "সকল ক্বিরাআত বিশারদদের সর্বসম্মত ঐকমত্যে মাদ্দে লাযিমের পরিমাপ কতটুকু?",
      options: [
        "Strictly 6 Ḥarakāt (6 counts / 3 Alifs), with NO exception",
        "4 counts",
        "2 counts",
        "8 counts"
      ],
      correctIndex: 0,
      explanation: "Madd Lāzim is unanimously fixed at 6 full counts (Al-Ishbā‘ / 6 Harakāt) without variance.",
      explanationBangla: "মাদ্দে লাযিমের পরিমাণ সর্বসম্মতিক্রমে অবধারিতভাবে পূর্ণ ৬ হরকত (বা ৩ আলিফ পরিমাণ)।"
    },
    {
      id: "q13_10",
      type: "multiple_choice",
      question: "What are the FOUR major subdivisions of Madd Lāzim?",
      questionBangla: "মাদ্দে লাযিমের মূল ৪টি প্রধান প্রকারভেদ কী কী?",
      options: [
        "1. Kalimī Muthaqqal (Word-Heavy); 2. Kalimī Mukhaffaf (Word-Light); 3. Ḥarfī Muthaqqal (Letter-Heavy); 4. Ḥarfī Mukhaffaf (Letter-Light)",
        "Fathah, Kasrah, Dammah, Sukoon",
        "Izhar, Idgham, Iqlab, Ikhfa",
        "Sughra, Kubra, Akbar, Mutlaq"
      ],
      correctIndex: 0,
      explanation: "Madd Lāzim splits into Word (Kalimī) and Letter (Ḥarfī), each divided into Heavy with Shaddah (Muthaqqal) or Light with Sukūn (Mukhaffaf).",
      explanationBangla: "১. কালিমী মুছাক্বাল; ২. কালিমী মুখাফ্ফাফ; ৩. হরফী মুছাক্বাল; ৪. হরফী মুখাফ্ফাফ।"
    },
    {
      id: "q13_11",
      type: "multiple_choice",
      question: "In the word (الضَّالِّينَ), what specific type of Madd Lāzim is present?",
      questionBangla: "(الضَّالِّينَ) শব্দে কোন সুনির্দিষ্ট প্রকারের মাদ্দে লাযিম বিদ্যমান?",
      promptText: "الضَّالِّينَ",
      options: [
        "Madd Lāzim Kalimī Muthaqqal (Word-based Heavy, because the Madd letter Alif is followed by a Shaddah on Lām)",
        "Madd Lazim Kalimi Mukhaffaf",
        "Madd Lazim Harfi Muthaqqal",
        "Madd Muttaṣil"
      ],
      correctIndex: 0,
      explanation: "It is in a regular word (Kalimī) and followed by a Shaddah (Muthaqqal), requiring 6 full counts.",
      explanationBangla: "এটি একটি পূর্ণ শব্দে (কালিমী) অবস্থিত এবং মাদ্দের পর তাশদীদ (মুছাক্বাল) থাকায় এটি মাদ্দে লাযিম কালিমী মুছাক্বাল (৬ হরকত)।"
    },
    {
      id: "q13_12",
      type: "multiple_choice",
      question: "What is the single famous Quranic example of Madd Lāzim Kalimī Mukhaffaf (كلمي مخفف - Word-based Light)?",
      questionBangla: "গোটা কুরআনে মাদ্দে লাযিম কালিমী মুখাফ্ফাফের (শব্দভিত্তিক হালকা) একমাত্র বিখ্যাত উদাহরণ কোনটি?",
      promptText: "ءَآلْآنَ",
      options: [
        "ءَآلْآنَ (Āl’āna — in Surah Yunus: 51 & 91, where Madd Alif is followed by a plain Sakin Lām without Shaddah)",
        "الضَّالِّينَ",
        "الْحَاقَّةُ",
        "الم"
      ],
      correctIndex: 0,
      explanation: "Surah Yunus verses 51 and 91 contain the sole example in the Quran where a Madd letter is followed by a simple un-doubled Sukūn.",
      explanationBangla: "সূরা ইউনুসের ৫১ ও ৯১ নং আয়াতের 'আ-ল্'আ-না' (ءَآلْآنَ) একমাত্র উদাহরণ যেখানে মাদ্দের পর তাশদীদ ছাড়া সাধারণ সাকিনযুক্ত লাম এসেছে।"
    },
    {
      id: "q13_13",
      type: "multiple_choice",
      question: "In the disjointed opening (الم - Alif-Lām-Mīm), what type of Madd Lāzim occurs on the letter Lām (لَامْ)?",
      questionBangla: "(الم) এর 'লাম' (لَامْ) পাঠকালে কোন প্রকারের মাদ্দে লাযিম হয়?",
      promptText: "الم (لَامْ مِّيمْ)",
      options: [
        "Madd Lāzim Ḥarfī Muthaqqal (Letter-based Heavy) because the Mīm of Lām merges with Idghām/Shaddah into the next Mīm",
        "Madd Lazim Harfi Mukhaffaf",
        "Madd Muttaṣil",
        "Madd Asli"
      ],
      correctIndex: 0,
      explanation: "The letter spelling is L-A-M; because its ending Meem assimilates with Shaddah into the word Meem, it is Ḥarfī Muthaqqal (6 counts).",
      explanationBangla: "'লাম'-এর শেষ সাকিন মীম পরবর্তী 'মীম'-এর সাথে তাশদীদে মিলিত হওয়ায় এটি মাদ্দে লাযিম হরফী মুছাক্বাল (৬ হরকত)।"
    },
    {
      id: "q13_14",
      type: "multiple_choice",
      question: "In (الم), what type of Madd Lāzim occurs on the final letter Mīm (مِيمْ)?",
      questionBangla: "(الم) এর শেষ 'মীম' (مِيمْ) পাঠকালে কোন প্রকারের মাদ্দে লাযিম হয়?",
      promptText: "الم (مِيمْ)",
      options: [
        "Madd Lāzim Ḥarfī Mukhaffaf (Letter-based Light) because its final Mīm is un-doubled with plain Sukūn",
        "Madd Lazim Harfi Muthaqqal",
        "Madd Badal",
        "Madd Munfasil"
      ],
      correctIndex: 0,
      explanation: "‘Mīm’ ends in an un-doubled Sakin Meem without assimilation, making it Ḥarfī Mukhaffaf (6 full counts).",
      explanationBangla: "'মীম'-এর শেষে কোনো তাশদীদ ছাড়া সাধারণ সাকিন থাকায় এটি মাদ্দে লাযিম হরফী মুখাফ্ফাফ (৬ হরকত)।"
    },
    {
      id: "q13_15",
      type: "multiple_choice",
      question: "In isolated opening letters like (ق - Qāf) and (ن - Nūn), what type of Madd Lāzim occurs?",
      questionBangla: "একক হুরুফে মুক্বাত্ত্বা'আত যেমন (ق) এবং (ن) পাঠকালে কোন মাদ্দ হয়?",
      promptText: "ق  /  ن",
      options: [
        "Madd Lāzim Ḥarfī Mukhaffaf (6 full counts on the middle Madd letter)",
        "Madd Asli (2 counts)",
        "Madd Muttaṣil",
        "Zero Madd"
      ],
      correctIndex: 0,
      explanation: "Spelled 'Q-A-F' and 'N-U-N', their middle Madd letter is followed by a plain Sakin consonant, requiring 6 counts of Ḥarfī Mukhaffaf.",
      explanationBangla: "'ক্বাফ' ও 'নূন'-এর বানান ৩ হরফের এবং মাঝে মাদ্দের পর সাকিন থাকায় ৬ হরকত মাদ্দে লাযিম হরফী মুখাফ্ফাফ হবে।"
    },
    {
      id: "q13_16",
      type: "multiple_choice",
      question: "Which letters among the Hurūf Muqaṭṭa‘ah are prolonged for ONLY 2 counts (Madd Aṣlī Ṭabee‘ī)?",
      questionBangla: "হুরুফে মুক্বাত্ত্বা'আতের মধ্যে কোন ৫টি হরফে মাত্র ২ হরকত (স্বাভাবিক মাদ্দ) টানতে হয়?",
      promptText: "حَيٌّ طَهُرَ (ح - ي - ط - هـ - ر)",
      options: [
        "The 5 letters in 'Ḥayyun Ṭahura' (ح, ي, ط, هـ, ر) whose names consist of only 2 letters ending in Alif (e.g. Ḥā, Yā, Ṭā, Hā, Rā)",
        "Alif, Laam, Meem",
        "Qaaf, Saad, Noon",
        "All 14 letters"
      ],
      correctIndex: 0,
      explanation: "The group 'Ḥayyun Ṭahur' are 2-letter names (حا, يا, طا, ها, را) having no second consonant, so they are prolonged for 2 counts only.",
      explanationBangla: "'হাইয়ুন ত্বাহুরা' (حَيٌّ طَهُرَ)-এর ৫টি হরফ (হা, ইয়া, তোয়া, হা, র) এর বানান দ্বি-অক্ষরিক হওয়ায় এদের মাত্র ২ হরকত টানতে হয়।"
    },
    {
      id: "q13_17",
      type: "multiple_choice",
      question: "Does the opening letter Alif (أَلِف) in (الم) receive any Madd?",
      questionBangla: "(الم) এর শুরুর 'আলিফ' (أَلِف) হরফটিতে কি কোনো মাদ্দ (টান) রয়েছে?",
      promptText: "أَلِف",
      options: [
        "NO; Alif has NO Madd whatsoever (0 counts) because its phonetic spelling (أَلِف) contains no letter of Madd",
        "Yes, 6 counts",
        "Yes, 2 counts",
        "Yes, 4 counts"
      ],
      correctIndex: 0,
      explanation: "The word ‘Alif’ consists of Hamzah, Lām with Kasrah, and Fā’ with Sukoon. There is no Madd letter in its body, so duration = 0.",
      explanationBangla: "না; 'আলিফ' (أَلِف) উচ্চারণে কোনো মাদ্দের হরফ না থাকায় এতে বিন্দুমাত্র কোনো টান নেই (০ হরকত)।"
    },
    {
      id: "q13_18",
      type: "multiple_choice",
      question: "What is Madd ‘Āriḍ li-s-Sukūn (الْمَدُّ الْعَارِضُ لِلسُّكُونِ)?",
      questionBangla: "মাদ্দে 'আরেদ্ব লিস্-সুকূন (الْمَدُّ الْعَارِضُ لِلسُّكُونِ) কাকে বলে?",
      promptText: "الْعَالَمِينَ ۝  /  الرَّحِيمِ ۝  /  نَسْتَعِينُ ۝",
      options: [
        "When a letter of Madd is followed by a letter that becomes SĀKIN TEMPORARILY due to pausing (Waqf) at the end of a word or verse",
        "When two Madd letters meet in one word",
        "When Hamzah is dropped",
        "When reading without breath"
      ],
      correctIndex: 0,
      explanation: "‘Āriḍ means temporary: pausing upon a word turns its final vowelled consonant into an accidental Sukūn after a Madd letter.",
      explanationBangla: "যখন মাদ্দের হরফের পরবর্তী হরফে ওয়াকফ (থামার) কারণে সাময়িক সুকূন বা জযম সৃষ্টি হয় (যেমন: আল-'আলামীন, আর-রাহীম)।"
    },
    {
      id: "q13_19",
      type: "multiple_choice",
      question: "What are the permissible durations when reciting Madd ‘Āriḍ li-s-Sukūn?",
      questionBangla: "মাদ্দে 'আরেদ্ব লিস্-সুকূনের ক্ষেত্রে কত কত হরকত টেনে থামার বিধান রয়েছে?",
      options: [
        "2, 4, or 6 Ḥarakāt (Qasr = 2, Tawassut = 4, Ishba‘ = 6), allowing flexibility to the reciter",
        "Strictly 6 counts only",
        "Strictly 2 counts only",
        "8 to 10 counts"
      ],
      correctIndex: 0,
      explanation: "Reciters have 3 authentic options: short (2 counts), medium (4 counts), or long (6 counts), provided consistency is maintained.",
      explanationBangla: "তিনটি স্তরই অনুমোদিত: ক্বসর (২ হরকত), তাওয়াস্সুত (৪ হরকত), অথবা ইশবা' (৬ হরকত)।"
    },
    {
      id: "q13_20",
      type: "multiple_choice",
      question: "In Surah Al-Fatihah, if you stop at the end of each Ayah (الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝), what Madd occurs at each pause?",
      questionBangla: "সূরা ফাতিহার প্রতিটি আয়াত শেষে ওয়াকফ করার সময় কোন মাদ্দটি গঠিত হয়?",
      promptText: "الرَّحِيمِ ۝  /  الدِّينِ ۝",
      options: [
        "Madd ‘Āriḍ li-s-Sukūn (2, 4, or 6 counts on each pause)",
        "Madd Lazim",
        "Madd Muttaṣil",
        "Madd Badal"
      ],
      correctIndex: 0,
      explanation: "At the end of each verse, the final vowelled letter takes an accidental Sukoon after a Madd Yā’, creating Madd ‘Āriḍ li-s-Sukūn.",
      explanationBangla: "প্রতিটি আয়াত শেষে মাদ্দের ইয়ার পর সাময়িক সুকূনে থামায় মাদ্দে 'আরেদ্ব লিস্-সুকূন (২, ৪ বা ৬ হরকত) কার্যকর হয়।"
    },
    {
      id: "q13_21",
      type: "multiple_choice",
      question: "What is Madd Ṣilah Kubrā (مَدُّ الصِّلَةِ الْكُبْرَى)?",
      questionBangla: "মাদ্দে সিলায়ে কুবরা (দীর্ঘ সংযোগ মাদ্দ) কী?",
      promptText: "وَمَا يُغْنِي عَنْهُ مَالُهُۥٓ إِذَا تَرَدَّىٰ",
      options: [
        "When the pronoun Hā’ (ـهُ / ـهِ) between two vowelled letters is followed immediately by a HAMZATUL QAT‘ (ء) at the start of the next word",
        "When pronoun Haa is followed by a heavy letter",
        "When stopping on pronoun Haa",
        "A 6-count Madd on Waw"
      ],
      correctIndex: 0,
      explanation: "If the letter following pronoun Hā’ is a Hamzah, the Silah extends to 4 or 5 counts, behaving exactly like Madd Munfaṣil.",
      explanationBangla: "যখন দুই হরকতের মাঝে থাকা সর্বনাম 'হা'-এর ঠিক পরবর্তী শব্দে হামযাতুল ক্বাত' (ء) আসে, তখন তাকে মাদ্দে মুনফাসিলের মতো ৪-৫ হরকত টানতে হয়।"
    },
    {
      id: "q13_22",
      type: "multiple_choice",
      question: "How is Madd Ṣilah Kubrā visually distinguished from Madd Ṣilah Ṣughrā in the Quranic script?",
      questionBangla: "মুসহাফে মাদ্দে সিলায়ে কুবরা এবং সিলায়ে সুগরার লিপির মধ্যে পার্থক্য কী?",
      options: [
        "A wavy Madd sign (~) is placed ABOVE the small subscript Wāw (ۥٓ) or small subscript Yā’ (ۦٓ)",
        "The Hā is printed in red",
        "There is a Sukoon on Hā",
        "Two dots are added"
      ],
      correctIndex: 0,
      explanation: "The wavy Madd emblem (~) is added on top of the small Waw or Yaa to signify extension to 4-5 counts.",
      explanationBangla: "ছোট উল্টানো ওয়াও বা ইয়ার মাথার ওপরে অতিরিক্ত একটি ঢেউ খেলানো মাদ্দ চিহ্ন (~) মুদ্রিত থাকে।"
    },
    {
      id: "q13_23",
      type: "multiple_choice",
      question: "In the word (الْحَاقَّةُ), what is the exact classification and count of the Madd?",
      questionBangla: "(الْحَاقَّةُ) শব্দে বিদ্যমান মাদ্দের সুনির্দিষ্ট প্রকার ও মাত্রা কত?",
      promptText: "الْحَاقَّةُ",
      options: [
        "Madd Lāzim Kalimī Muthaqqal, prolonged strictly for 6 full counts",
        "Madd Muttaṣil for 4 counts",
        "Madd Munfasil for 2 counts",
        "Madd ‘Arid for 2 counts"
      ],
      correctIndex: 0,
      explanation: "Alif is followed by a doubled Qāf with Shaddah inside a word, mandating 6 counts of Madd Lāzim Kalimī Muthaqqal.",
      explanationBangla: "মাদ্দের আলিফের পর তাশদীদযুক্ত ক্বাফ আসায় এটি মাদ্দে লাযিম কালিমী মুছাক্বাল এবং এর টান পূর্ণ ৬ হরকত।"
    },
    {
      id: "q13_24",
      type: "multiple_choice",
      question: "In the verse (قُلْ أَتُحَاجُّونِّي فِي اللَّهِ), how many 6-count Madd Lāzim instances occur in (أَتُحَاجُّونِّي)?",
      questionBangla: "(أَتُحَاجُّونِّي) একক শব্দটিতে ৬ হরকতের কতটি মাদ্দে লাযিম বিদ্যমান?",
      promptText: "أَتُحَاجُّونِّي",
      options: [
        "TWO instances: Alif before Jīm Mushaddadah (6 counts), and Wāw before Nūn Mushaddadah (6 counts)",
        "Only one instance",
        "Three instances",
        "Zero"
      ],
      correctIndex: 0,
      explanation: "Both Alif (before Jīm with Shaddah) and Wāw (before Nūn with Shaddah) are independent 6-count Madd Lāzims within one word!",
      explanationBangla: "দুটি ৬ হরকতের মাদ্দে লাযিম রয়েছে: তাশদীদযুক্ত জীমের পূর্বে আলিফে (৬ হরকত) এবং তাশদীদযুক্ত নূনের পূর্বে ওয়াও-তে (৬ হরকত)!"
    },
    {
      id: "q13_25",
      type: "multiple_choice",
      question: "What is the rule regarding letter ‘Ayn (عَيْن) in opening formulas like (كهيعص) and (حم عسق)?",
      questionBangla: "হুরুফে মুক্বাত্ত্বা'আত (كهيعص) এবং (عسق) এর 'আইন' (عَيْن) হরফে মাদ্দের বিধান কী?",
      promptText: "كهيعص  /  عسق",
      options: [
        "Permissible to recite with either 4 or 6 counts (Tawassuṭ or Ṭūl), because its middle letter is a Letter of LĪN (Yā’ preceded by Fatḥah), with 6 preferred",
        "Strictly 2 counts only",
        "Strictly zero counts",
        "10 counts"
      ],
      correctIndex: 0,
      explanation: "Spelled ‘A-Y-N’, the Yā’ is a Leen letter (preceded by Fathah on ‘Ayn); scholars permit both 4 and 6 counts, with 6 being most prominent.",
      explanationBangla: "'আইন' বানানে লীন হরফ (যবরের পর সাকিন ইয়া) থাকায় এতে ৪ অথবা ৬ হরকত উভয়ভাবে পড়ার সুযোগ রয়েছে, তবে ৬ হরকত উত্তম।"
    },
    {
      id: "q13_26",
      type: "multiple_choice",
      question: "In the phrase (سِيٓءَ بِهِمْ), what type of Madd is on (سِيٓءَ)?",
      questionBangla: "(سِيٓءَ بِهِمْ) বাক্যাংশে 'সী-আ' শব্দে কোন মাদ্দ রয়েছে?",
      promptText: "سِيٓءَ",
      options: [
        "Madd Muttaṣil (Yā’ of Madd followed by Hamzah in the same word, 4-5 counts)",
        "Madd Munfasil",
        "Madd Badal",
        "Madd Lazim"
      ],
      correctIndex: 0,
      explanation: "Yā’ is followed by Hamzah inside the same single word, forming an authentic Madd Muttaṣil.",
      explanationBangla: "একই শব্দের ভেতর মাদ্দের ইয়ার পর হামযাহ আসায় এটি মাদ্দে মুত্তাসিল (৪ বা ৫ হরকত)।"
    },
    {
      id: "q13_27",
      type: "multiple_choice",
      question: "In the phrase (يَا أَيُّهَا), what type of Madd is present?",
      questionBangla: "(يَا أَيُّهَا) বাক্যাংশে কোন প্রকারের মাদ্দ বিদ্যমান?",
      promptText: "يَا أَيُّهَا",
      options: [
        "Madd Munfaṣil (Detached Madd) because the vocative particle 'Yā' is grammatically separate from 'Ayyuhā', despite being drawn connected in script",
        "Madd Muttaṣil",
        "Madd Lazim",
        "Madd Badal"
      ],
      correctIndex: 0,
      explanation: "Though connected in calligraphy (ياأيها), 'Yā' is an independent preposition and 'Ayyuhā' is a noun; this is Madd Munfaṣil.",
      explanationBangla: "যদিও লিপিতে একসাথে লেখা হয়, কিন্তু ব্যাকরণগতভাবে 'ইয়া' ও 'আইয়্যুহা' দুটি পৃথক শব্দ হওয়ায় এটি মাদ্দে মুনফাসিল (৪-৫ হরকত)।"
    },
    {
      id: "q13_28",
      type: "multiple_choice",
      question: "In (قُلْ أَرَأَيْتُمْ إِنْ أَهْلَكَنِيَ اللَّهُ وَمَن مَّعِيَ أَوْ رَحِمَنَا فَمَن يُجِيرُ الْكَافِرِينَ مِنْ عَذَابٍ أَلِيمٍ ۝), what Madd is at the end of the Ayah on (أَلِيمٍ)?",
      questionBangla: "আয়াত শেষে (أَلِيمٍ ۝) শব্দে ওয়াকফ করলে কোন মাদ্দ হয়?",
      promptText: "أَلِيمٍ ۝",
      options: ["Madd ‘Āriḍ li-s-Sukūn (2, 4, or 6 counts)", "Madd Muttaṣil", "Madd Lazim", "Madd ‘Iwad"],
      correctIndex: 0,
      explanation: "Stopping on the final consonant turns it into an accidental Sukoon after Madd Yā’, creating Madd ‘Āriḍ li-s-Sukūn.",
      explanationBangla: "মাদ্দের ইয়ার পর সাময়িক সুকূনে থামার কারণে এটি মাদ্দে 'আরেদ্ব লিস্-সুকূন (২, ৪ বা ৬ হরকত)।"
    },
    {
      id: "q13_29",
      type: "multiple_choice",
      question: "What is the ranking of Madd types by STRENGTH from strongest to weakest?",
      questionBangla: "শক্তিমত্তা ও মর্যাদার বিচারে মাদ্দের ৫টি রূপের ক্রমানুযায়ী সঠিক ক্রম (সবচেয়ে শক্তিশালী থেকে দুর্বল) কোনটি?",
      options: [
        "1. Lāzim (Strongest); 2. Muttaṣil; 3. ‘Āriḍ li-s-Sukūn; 4. Munfaṣil; 5. Badal (Weakest)",
        "1. Badal; 2. Munfasil; 3. Muttasil; 4. Lazim",
        "1. Munfasil; 2. Muttasil; 3. Lazim; 4. Badal",
        "All Madd types are identical in strength"
      ],
      correctIndex: 0,
      explanation: "The famous rule states: أقوى المدود لازم فمتصل فعارض فذو انفصال فبدل (Lāzim is strongest, Badal is weakest).",
      explanationBangla: "বিখ্যাত মূলনীতি: সবচেয়ে শক্তিশালী মাদ্দে লাযিম, তারপর মুত্তাসিল, তারপর আরেদ্ব, তারপর মুনফাসিল এবং সর্বশেষ বাদাল।"
    },
    {
      id: "q13_30",
      type: "multiple_choice",
      question: "In the word (طسم - Ṭā-Sīn-Mīm), what is the duration of the letter Sīn (سِينْ)?",
      questionBangla: "হুরুফে মুক্বাত্ত্বা'আত (طسم) এর 'সীন' (سِينْ) হরফটি কত হরকত প্রলম্বিত করতে হবে?",
      promptText: "طسم (سِينْ)",
      options: [
        "6 full counts (Madd Lāzim Ḥarfī Muthaqqal, because its ending Nūn merges with Shaddah into Mīm)",
        "2 counts",
        "4 counts",
        "Zero counts"
      ],
      correctIndex: 0,
      explanation: "‘Sīn’ ends in Nūn Sakin which assimilates with Idgham into Mīm, making it Ḥarfī Muthaqqal sustained for 6 counts.",
      explanationBangla: "'সীন'-এর শেষ নূন সাকিন মীমে তাশদীদের সাথে একীভূত হওয়ায় এটি পূর্ণ ৬ হরকত মাদ্দে লাযিম হরফী মুছাক্বাল।"
    },
    {
      id: "q13_31",
      type: "multiple_choice",
      question: "In (طسم), what is the duration of the initial letter Ṭā’ (طَا)?",
      questionBangla: "(طسم) এর শুরুর 'তোয়া' (طَا) কত হরকত টানা হবে?",
      promptText: "طَا",
      options: [
        "Exactly 2 counts (Madd Aṣlī Ḥarfī, from the letters of حَيٌّ طَهُرَ)",
        "6 counts",
        "4 counts",
        "Zero counts"
      ],
      correctIndex: 0,
      explanation: "Ṭā’ is from the 2-letter group (طا); it has no Sukūn after its Alif, so it receives strictly 2 counts of Madd.",
      explanationBangla: "'তোয়া' হরফটি 'হাইয়ুন ত্বাহুরা' দলের অন্তর্ভুক্ত হওয়ায় এতে কোনো সাকিন নেই, তাই ঠিক ২ হরকত টানা হবে।"
    },
    {
      id: "q13_32",
      type: "multiple_choice",
      question: "In (يَسْتَفْتُونَكَ قُلِ اللَّهُ يُفْتِيكُمْ فِي الْكَلَالَةِ), what type of Madd is on (فِي) in continuous reading?",
      questionBangla: "ধারাবাহিক তিলাওয়াতে 'ফী' (فِي الْكَلَالَةِ) শব্দে কোন মাদ্দ কার্যকর হয়?",
      promptText: "فِي الْكَلَالَةِ",
      options: [
        "The Madd Yā’ is completely DROPPED in pronunciation due to Iltiqā’ as-Sākinayn (collision with the Sakin Lām of Al-Kalālah)",
        "It is prolonged for 6 counts",
        "It is prolonged for 2 counts",
        "It becomes a Hamzah"
      ],
      correctIndex: 0,
      explanation: "When a Madd letter meets an upcoming Sakin, the Madd letter is dropped in speech to resolve colliding Sakins: 'Fil-kalālah'.",
      explanationBangla: "পরবর্তী লাম সাকিনের সাথে দুই সাকিনের মিলন (ইলতিকায়ে সাকিনাইন) ঘটায় মাদ্দের ইয়াটি মুখে উচ্চারণে সম্পূর্ণ বিলুপ্ত হয়ে যায়: 'ফিল-কালালাহ্'।"
    },
    {
      id: "q13_33",
      type: "multiple_choice",
      question: "In (وَقَالَا الْحَمْدُ لِلَّهِ), what happens to the dual Alif of (وَقَالَا) in continuous reading?",
      questionBangla: "(وَقَالَا الْحَمْدُ لِلَّهِ) আয়াতে 'ক্বালা' শব্দের দ্বিবচন নির্দেশক শেষ আলিফ মাদ্দটির ক্ষেত্রে কী ঘটে?",
      promptText: "وَقَالَا الْحَمْدُ",
      options: [
        "The Alif is dropped phonetically in continuous flow to avoid two colliding Sakins: 'Wa qālal-ḥamdu'",
        "It is held for 6 counts",
        "It becomes a Baa",
        "Both letters are deleted"
      ],
      correctIndex: 0,
      explanation: "The Alif drops in continuous recitation: 'Wa-qālal-ḥamdu'. (If pausing on 'Wa-qālā', the 2-count Alif returns).",
      explanationBangla: "মিলিয়ে পড়ার সময় দুই সাকিনের কারণে আলিফ বিলুপ্ত হয়ে 'ওয়া ক্বা-লাল্ হামদু' উচ্চারিত হয়; তবে ওয়াকফ করলে আলিফের ২ হরকত ফিরে আসে।"
    },
    {
      id: "q13_34",
      type: "multiple_choice",
      question: "In (صٓ ۚ وَالْقُرْآنِ ذِي الذِّكْرِ), what is the classification of the Madd on (صٓ)?",
      questionBangla: "সূরা সোয়াদের শুরুতে (صٓ) হরফটিতে কোন মাদ্দ রয়েছে?",
      promptText: "صٓ",
      options: [
        "Madd Lāzim Ḥarfī Mukhaffaf (6 counts on Ṣād-Alif-Dāl, with Qalqalah on final Dāl)",
        "Madd Muttaṣil",
        "Madd Badal",
        "Zero Madd"
      ],
      correctIndex: 0,
      explanation: "Spelled 'Ṣ-A-D', the middle Alif is followed by an un-doubled Sakin Dāl, producing 6 counts of Ḥarfī Mukhaffaf.",
      explanationBangla: "'সোয়াদ' হরফের বানান ৩ হরফের এবং শেষে সাকিন দাল আসায় ৬ হরকত মাদ্দে লাযিম হরফী মুখাফ্ফাফ হবে।"
    },
    {
      id: "q13_35",
      type: "multiple_choice",
      question: "Why must reciters maintain strict proportionality across identical Madd categories during one reading session?",
      questionBangla: "একই তিলাওয়াত অধিবেশনে সমগোত্রীয় মাদ্দগুলোর ক্ষেত্রে কেন সমান পরিমাপ বা আনুপাতিক সামঞ্জস্য রক্ষা করা ওয়াজিব?",
      options: [
        "Because Tajweed discipline dictates that identical causes must have identical lengths (e.g. if reading Munfaṣil at 4 counts, all Munfaṣils must be 4)",
        "To finish faster",
        "Because the Quran requires variety",
        "It is not required"
      ],
      correctIndex: 0,
      explanation: "The universal Tajweed law states: 'وَاللَّفْظُ فِي نَظِيرِهِ كَمِثْلِهِ' (the pronunciation of similar items must match identically).",
      explanationBangla: "তাজবীদের মূলনীতি হলো: সমজাতীয় মাদ্দগুলো হুবহু একই মাপে পড়তে হবে; একটি ৪ হরকত টানলে সেই তিলাওয়াতের বাকি সবগুলোকেই ৪ হরকত টানতে হবে।"
    }
  ]
};
