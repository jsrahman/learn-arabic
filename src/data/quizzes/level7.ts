import { Quiz } from "./types";

export const quizLevel7: Quiz = {
  id: "q7",
  levelId: 7,
  title: "Level 7: Madd Aṣlī (Natural Prolongation) & Līn Letters Challenge",
  titleBangla: "লেভেল ৭: মাদ্দে আসলী (স্বাভাবিক মাদ্দ) ও হরফে লীন পরীক্ষা",
  description: "Master the 3 Madd letters, the word نُوحِيهَا, Madd Badal, Madd ‘Iwad, Madd Silah Sughra, and the unique acoustic dynamics of Leen letters.",
  descriptionBangla: "মাদ্দের ৩টি হরফ (نُوحِيهَا), মাদ্দে বাদাল, মাদ্দে সিলাহ সুগরা এবং লীন হরফের চলমান ও ওয়াকফকালীন সূক্ষ্ম সুরের নিয়ম আয়ত্ত করুন।",
  passingScore: 70,
  questions: [
    {
      id: "q7_1",
      type: "multiple_choice",
      question: "What are the 3 letters of Madd (حُرُوفُ الْمَدِّ) and their mandatory preceding vowel conditions?",
      questionBangla: "মাদ্দের তিনটি হরফ কী কী এবং তাদের পূর্বে কোন কোন আবশ্যকীয় হরকত থাকতে হয়?",
      options: [
        "Alif Sākinah preceded by Fatḥah, Wāw Sākinah preceded by Ḍammah, and Yā’ Sākinah preceded by Kasrah",
        "Alif, Waw, Yaa with any vowel",
        "Alif with Fathah, Waw with Kasrah, Yaa with Dammah",
        "Nun, Meem, and Laam"
      ],
      correctIndex: 0,
      explanation: "The 3 Madd conditions are: Alif preceded by Fathah, Waw Sakinah preceded by Dammah, and Yaa Sakinah preceded by Kasrah.",
      explanationBangla: "মাদ্দের ৩ শর্ত: যবরের পর খালি আলিফ, পেশের পর জযমযুক্ত ওয়াও এবং যেরের পর জযমযুক্ত ইয়া।"
    },
    {
      id: "q7_2",
      type: "multiple_choice",
      question: "Which single Quranic word unites all three letters of Madd with their matching preceding vowels?",
      questionBangla: "কুরআনের কোন একক শব্দটিতে মাদ্দের তিনটি হরফই তাদের যথাযথ পূর্ববর্তী হরকতসহ একত্রে বিদ্যমান?",
      promptText: "نُوحِيهَا",
      options: [
        "نُوحِيهَا (Nūḥīhā) — Wāw with Dammah, Yā’ with Kasrah, Alif with Fathah",
        "الْحَمْدُ لِلَّهِ",
        "إِيَّاكَ نَعْبُدُ",
        "مَالِكِ يَوْمِ"
      ],
      correctIndex: 0,
      explanation: "‘Nūḥīhā’ contains: Wāw preceded by Dammah (نُـو), Yā’ preceded by Kasrah (حِـي), and Alif preceded by Fathah (هَـا).",
      explanationBangla: "'নূহীহা' (نُوحِيهَا) শব্দে পেশের পর ওয়াও (نُو), যেরের পর ইয়া (حِي), এবং যবরের পর আলিফ (هَا) একত্রিত রয়েছে।"
    },
    {
      id: "q7_3",
      type: "multiple_choice",
      question: "What is the exact standard duration of Madd Aṣlī (Natural Madd)?",
      questionBangla: "মাদ্দে আসলী বা মাদ্দে ত্বরয়ীর আদর্শ পরিমাপ কতটুকু?",
      options: [
        "Exactly 2 Ḥarakāt (2 counts / 1 Alif)",
        "4 to 5 counts",
        "6 counts",
        "1 count"
      ],
      correctIndex: 0,
      explanation: "Madd Asli is naturally sustained for precisely 2 counts (Harakataan), neither rushed nor inflated.",
      explanationBangla: "মাদ্দে আসলির স্বাভাবিক টান হলো ঠিক ২ হরকত (বা ১ আলিফ পরিমাণ), যা কম বা বেশি করা নিষিদ্ধ।"
    },
    {
      id: "q7_4",
      type: "multiple_choice",
      question: "What are the two Letters of Līn (حَرْفَا اللِّينِ) and their strict phonetic condition?",
      questionBangla: "লীন (নরমভাবে পড়ার) দুটি হরফ কী কী এবং তাদের আবশ্যকীয় ধ্বনিগত শর্ত কী?",
      promptText: "ـَوْ   /   ـَيْ",
      options: [
        "Wāw Sākinah (وْ) and Yā’ Sākinah (يْ) preceded strictly by a FATḤAH (e.g. خَوْف / بَيْت)",
        "Waw with Dammah and Yaa with Kasrah",
        "Alif and Hamzah",
        "Any letter with Sukoon"
      ],
      correctIndex: 0,
      explanation: "Letters of Leen are unvowelled Waw and Yaa preceded specifically by a Fathah (open vowel).",
      explanationBangla: "লীন হরফ দুটি হলো: যবরের পর জযমযুক্ত ওয়াও (وْ) এবং যবরের পর জযমযুক্ত ইয়া (يْ) (যেমন: খওফ্ ও বাইত্)।"
    },
    {
      id: "q7_5",
      type: "multiple_choice",
      question: "During continuous recitation without stopping, how long are the Letters of Līn prolonged?",
      questionBangla: "ওয়াকফ না করে ধারাবাহিক তিলাওয়াত চালিয়ে যাওয়ার সময় লীন হরফ কতটুকু লম্বা করতে হয়?",
      promptText: "فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ الَّذِي",
      options: [
        "They receive NO elongation beyond their natural soft glide (less than 2 counts), flowing smoothly into the next letter",
        "They must be stretched for 6 counts",
        "They are held with Ghunnah",
        "They are completely silent"
      ],
      correctIndex: 0,
      explanation: "In continuous speech, Leen letters are not prolonged; they simply exhibit a gentle, effortless diphthong glide.",
      explanationBangla: "মিলিয়ে পড়ার সময় লীন হরফে কোনো টান নেই; স্বাভাবিক কোমল উচ্চারণে পরবর্তী হরফে চলে যেতে হয়।"
    },
    {
      id: "q7_6",
      type: "multiple_choice",
      question: "When you STOP (Waqf) upon a word containing a Letter of Līn before the final consonant (e.g. خَوْفٍ / قُرَيْشٍ), what rule occurs?",
      questionBangla: "শেষ হরফের পূর্বে লীন হরফযুক্ত শব্দে (যেমন: خَوْفٍ বা قُرَيْشٍ) ওয়াকফ করলে কোন মাদ্দ কার্যকর হয়?",
      promptText: "خَوْفٍ  /  قُرَيْشٍ",
      options: [
        "Madd al-Līn al-‘Āriḍ: permissible elongation of 2, 4, or 6 counts (القصر، التوسط، الإشباع)",
        "Compulsory 6 counts only",
        "Zero prolongation",
        "It becomes a silent stop"
      ],
      correctIndex: 0,
      explanation: "Stopping upon a Leen word permits 2, 4, or 6 counts of elongation to settle the temporary Sukoon.",
      explanationBangla: "থামার কারণে মাদ্দে লীন কার্যকর হয় এবং একে ২, ৪ বা ৬ হরকত পর্যন্ত দীর্ঘ করার সুযোগ সৃষ্টি হয়।"
    },
    {
      id: "q7_7",
      type: "multiple_choice",
      question: "What is Madd Badal (مَدُّ الْبَدَلِ)?",
      questionBangla: "মাদ্দে বাদাল (مَدُّ الْبَدَلِ) কাকে বলে?",
      promptText: "ءَامَنُوا  /  إِيمَانًا  /  أُوتُوا",
      options: [
        "A Madd letter preceded by a Hamzah in the same word (e.g. ءَامَنُوا, أُوتُوا, إِيمَانًا), prolonged for 2 counts in Ḥafṣ",
        "A Madd letter followed by a Shaddah",
        "A Madd letter dropped at the end",
        "A Madd in poetry"
      ],
      correctIndex: 0,
      explanation: "Madd Badal occurs when Hamzah precedes a Madd letter, historically substituting a second Sakin Hamzah (e.g. أأمنوا -> ءَامَنُوا). Sustained for 2 counts.",
      explanationBangla: "হামযাহর পর মাদ্দের হরফ আসলে তাকে মাদ্দে বাদাল বলে (যেমন: আ-মানূ, ঈ-মানা, ঊ-তূ); হাফস রেওয়ায়েতে এটি ২ হরকত লম্বা হয়।"
    },
    {
      id: "q7_8",
      type: "multiple_choice",
      question: "What is Madd Ṣilah Ṣughrā (مَدُّ الصِّلَةِ الصُّغْرَى)?",
      questionBangla: "মাদ্দে সিলায়ে সুগরা (স্বাভাবিক সংযোগ মাদ্দ) কী?",
      promptText: "إِنَّهُۥ كَانَ  /  بِهِۦ بَصِيرًا",
      options: [
        "Elongating the pronoun Hā’ (ـهُ / ـهِ) by 2 counts when it sits between two vowelled letters and is NOT followed by Hamzah",
        "Elongating a letter with Shaddah",
        "Stopping on a pronoun with breath",
        "Adding a 6-count Madd before every word"
      ],
      correctIndex: 0,
      explanation: "When pronoun Hā’ sits between two Mutaharrik letters and the next letter is not Hamzah, it is prolonged by 2 counts in continuous reading.",
      explanationBangla: "সর্বনাম 'হা' (ـهُ / ـهِ) যখন দুই হরকতযুক্ত হরফের মাঝখানে আসে এবং পরবর্তী হরফ হামযাহ না হয়, তখন একে মিলিয়ে পড়ার সময় ২ হরকত টানতে হয়।"
    },
    {
      id: "q7_9",
      type: "multiple_choice",
      question: "In the Quranic script, how is Madd Ṣilah Ṣughrā visually marked after the pronoun Hā’?",
      questionBangla: "উসমানি মুসহাফে মাদ্দে সিলায়ে সুগরা নির্দেশ করার জন্য সর্বনাম হা-এর পর কোন প্রতীক আঁকা থাকে?",
      promptText: "إِنَّهُۥ  /  بِهِۦ",
      options: [
        "A miniature subscript Wāw (ۥ) after Dammah, or a miniature subscript Yā’ (ۦ) after Kasrah",
        "A red exclamation mark",
        "A small Sukoon",
        "A circle above the letter"
      ],
      correctIndex: 0,
      explanation: "The Mushaf prints a small inverted Wāw (ۥ) or small tail-less Yā’ (ۦ) following the pronoun Hā’.",
      explanationBangla: "পেশের পর ছোট উল্টানো ওয়াও (ۥ) এবং যেরের পর ছোট ইয়া (ۦ) দিয়ে মুসহাফে এই মাদ্দের প্রতীক দেওয়া থাকে।"
    },
    {
      id: "q7_10",
      type: "multiple_choice",
      question: "What happens to Madd Ṣilah Ṣughrā if you STOP directly on the pronoun Hā’ (e.g. إِنَّهُ)?",
      questionBangla: "যদি সর্বনাম হা-এর ওপর সরাসরি ওয়াকফ (থামা) করা হয় (যেমন: إِنَّهُ), তবে সিলাহর কী হবে?",
      promptText: "إِنَّهُ",
      options: [
        "The prolongation vanishes completely; you stop with a pure Sukūn on the Hā’ ('Innah')",
        "It stretches to 6 counts",
        "It becomes an Alif",
        "It remains a 2-count Madd"
      ],
      correctIndex: 0,
      explanation: "Silah exists strictly in continuous reading (Waslan). On pause (Waqfan), it disappears and the Hā’ is pronounced Sakin.",
      explanationBangla: "সিলাহ কেবল মিলিয়ে পড়ার সময় কার্যকর হয়; কিন্তু ওয়াকফ করলে টান সম্পূর্ণ বিলুপ্ত হয়ে সাকিন হা ('ইন্নাহ্') হয়ে যায়।"
    },
    {
      id: "q7_11",
      type: "multiple_choice",
      question: "In the word (قَالَ), what letter produces the 2-count Madd?",
      questionBangla: "(قَالَ) শব্দে কোন হরফটি ২ হরকত মাদ্দের সৃষ্টি করেছে?",
      promptText: "قَالَ",
      options: ["The unvowelled Alif preceded by Qāf with Fatḥah", "The Qāf itself", "The Lām", "A hidden Hamzah"],
      correctIndex: 0,
      explanation: "Qāf carries Fathah, immediately followed by a blank Alif, producing Madd Asli: 'Qā-la'.",
      explanationBangla: "ক্বাফ হরফে যবরের পর খালি আলিফ আসায় এটি ২ হরকত মাদ্দে আসলী সৃষ্টি করেছে: 'ক্বা-লা'।"
    },
    {
      id: "q7_12",
      type: "multiple_choice",
      question: "In the word (يَقُولُ), what letter produces the 2-count Madd?",
      questionBangla: "(يَقُولُ) শব্দে কোন হরফটি মাদ্দ তৈরি করেছে?",
      promptText: "يَقُولُ",
      options: ["The unvowelled Wāw preceded by Qāf with Ḍammah", "The first Yaa", "The ending Lam", "The Fathah on Yaa"],
      correctIndex: 0,
      explanation: "Qāf carries Dammah, followed by a Sakin Waw, creating natural 2-count prolongation: 'Ya-qū-lu'.",
      explanationBangla: "ক্বাফের ওপর পেশের পর জযমযুক্ত ওয়াও আসায় মাদ্দে আসলী হয়েছে: 'ইয়াক্বূ-লু'।"
    },
    {
      id: "q7_13",
      type: "multiple_choice",
      question: "In the word (قِيلَ), what letter produces the 2-count Madd?",
      questionBangla: "(قِيلَ) শব্দে কোন হরফটি মাদ্দ তৈরি করেছে?",
      promptText: "قِيلَ",
      options: ["The unvowelled Yā’ preceded by Qāf with Kasrah", "The Lam", "The Qaf alone", "An Alif"],
      correctIndex: 0,
      explanation: "Qāf carries Kasrah, followed by a Sakin Yā’, producing the 2-count natural vowel: 'Qī-la'.",
      explanationBangla: "ক্বাফ হরফে যেরের পর জযমযুক্ত ইয়া আসায় ২ হরকত মাদ্দে আসলী গঠিত হয়েছে: 'ক্বী-লা'।"
    },
    {
      id: "q7_14",
      type: "multiple_choice",
      question: "Why does the Wāw in (يَوْمِ) NOT act as a letter of Madd?",
      questionBangla: "(يَوْمِ) শব্দে ওয়াও হরফটি কেন মাদ্দের হরফ নয়?",
      promptText: "يَوْمِ",
      options: [
        "Because it is preceded by a FATḤAH (on Yā’), not a Ḍammah; therefore it is a Letter of Līn",
        "Because Waw is at the end",
        "Because it is in the Quran",
        "Because Yaa has a Kasrah"
      ],
      correctIndex: 0,
      explanation: "To be a Madd letter, Waw must be preceded by Dammah. Since Yā’ has Fathah, this Waw is a Letter of Leen.",
      explanationBangla: "মাদ্দ হতে হলে ওয়াও-এর পূর্বে পেশ থাকা আবশ্যক; কিন্তু এখানে যবর থাকায় এটি মাদ্দ নয় বরং 'হরফে লীন'।"
    },
    {
      id: "q7_15",
      type: "multiple_choice",
      question: "Why does the Yā’ in (بَيْتٍ) NOT act as a letter of Madd?",
      questionBangla: "(بَيْتٍ) শব্দে ইয়া হরফটি কেন মাদ্দের হরফ নয়?",
      promptText: "بَيْتٍ",
      options: [
        "Because it is preceded by a FATḤAH (on Bā’), not a Kasrah; therefore it is a Letter of Līn",
        "Because Baa is a heavy letter",
        "Because Yaa has a Shaddah",
        "Because Taa has Tanween"
      ],
      correctIndex: 0,
      explanation: "A Madd Yā’ requires a preceding Kasrah. Preceded by Fathah, it becomes a Letter of Leen ('Bayt').",
      explanationBangla: "মাদ্দ হতে হলে ইয়ার পূর্বে যের থাকা শর্ত; কিন্তু এখানে বা হরফে যবর থাকায় এটি 'হরফে লীন'।"
    },
    {
      id: "q7_16",
      type: "multiple_choice",
      question: "What is the common error when non-native reciters articulate Madd Aṣlī?",
      questionBangla: "মাদ্দে আসলী পড়ার সময় অনেক শিক্ষার্থীর সবচেয়ে সাধারণ ভুল কোনটি?",
      options: [
        "Either clipping it short to 1 count (swallowing it) or inflating it excessively to 3 or 4 counts without justification",
        "Whispering the Madd",
        "Adding a Qalqalah",
        "Turning it into an ‘Ayn"
      ],
      correctIndex: 0,
      explanation: "Madd Asli must be disciplined strictly at 2 counts, avoiding both vowel-clipping and gratuitous over-stretching.",
      explanationBangla: "প্রধান ভুল হলো ২ হরকতের বদলে ১ হরকতে দ্রুত ছেড়ে দেওয়া, অথবা অযথা ৩-৪ হরকত পর্যন্ত অতিরিক্ত টেনে ফেলা।"
    },
    {
      id: "q7_17",
      type: "multiple_choice",
      question: "In the word (هَٰذَا), how many natural Madds are present?",
      questionBangla: "(هَٰذَا) শব্দে কতটি মাদ্দে আসলী রয়েছে?",
      promptText: "هَٰذَا",
      options: ["Two: dagger Alif on Hā’ and full Alif on Dhāl", "Only one", "Three", "Zero"],
      correctIndex: 0,
      explanation: "Both syllables are prolonged for 2 counts: Hā’ has dagger Alif ('Hā'), and Dhāl has full written Alif ('dhā'). Total = 2.",
      explanationBangla: "দুটি মাদ্দ রয়েছে: হা-এর ওপর খাড়া আলিফ (হা-) এবং যালের পর পূর্ণ আলিফ (-যা); মোট দুটি ২ হরকতের মাদ্দ।"
    },
    {
      id: "q7_18",
      type: "multiple_choice",
      question: "In the word (أُوذِينَا), how many letters of Madd are there?",
      questionBangla: "(أُوذِينَا) শব্দটিতে কতটি মাদ্দের হরফ রয়েছে?",
      promptText: "أُوذِينَا",
      options: [
        "Three: Wāw after Hamzah (Badal), Yā’ after Dhāl, and Alif after Nūn",
        "Two",
        "One",
        "Four"
      ],
      correctIndex: 0,
      explanation: "Contains all 3 types: Hamzah + Waw (ū), Dhāl + Yā’ (dhī), and Nūn + Alif (nā).",
      explanationBangla: "তিনটি হরফই মাদ্দের: হামযাহর পর ওয়াও (ঊ-), যালের পর ইয়া (-যী-), এবং নূনের পর আলিফ (-না)।"
    },
    {
      id: "q7_19",
      type: "multiple_choice",
      question: "What is the rule when a Madd letter is followed immediately by a Hamzah or Sukūn?",
      questionBangla: "মাদ্দের হরফের ঠিক পরবর্তী হরফে যদি হামযাহ বা সুকূন আসে, তবে সেই মাদ্দটি কী হয়ে যায়?",
      options: [
        "It leaves the category of Madd Aṣlī (Natural) and becomes Madd Far‘ī (Secondary / extended prolongation)",
        "It becomes a silent letter",
        "It must be stopped immediately",
        "It becomes a Tanween"
      ],
      correctIndex: 0,
      explanation: "Madd Asli has no external cause (neither Hamzah nor Sukūn). If Hamzah or Sukūn follows, it becomes Madd Far‘ī.",
      explanationBangla: "মাদ্দে আসলির পর হামযাহ বা সুকূন আসলে তা আর সাধারণ মাদ্দ থাকে না, বরং দীর্ঘ মাদ্দে ফার'ঈ (শাখা মাদ্দ) তে রূপান্তরিত হয়।"
    },
    {
      id: "q7_20",
      type: "multiple_choice",
      question: "In the phrase (فِيهِ هُدًى), why does the pronoun Hā’ in (فِيهِ) NOT receive Madd Ṣilah?",
      questionBangla: "(فِيهِ هُدًى) বাক্যাংশে 'ফীহি' শব্দের হা-তে কেন মাদ্দে সিলাহ্ (টান) হয় না?",
      promptText: "فِيهِ هُدًى",
      options: [
        "Because the letter preceding it (the Yā’) is SĀKIN, and Madd Ṣilah strictly requires the Hā’ to be between two VOWELLED letters",
        "Because Fee is a preposition",
        "Because Huda starts with Haa",
        "It is a printing error"
      ],
      correctIndex: 0,
      explanation: "For Silah to apply, the pronoun must be flanked between two Mutaharrik letters. Here, Yā’ is Sakin, cancelling Silah.",
      explanationBangla: "সিলার শর্ত হলো হা-এর পূর্বাপর উভয় হরফ হরকতযুক্ত হতে হবে; এখানে ইয়া হরফটি সাকিন হওয়ায় সিলাহর টান বাতিল হয়েছে।"
    },
    {
      id: "q7_21",
      type: "multiple_choice",
      question: "What is the famous unique EXCEPTION in the entire Quran where pronoun Hā’ receives Madd Ṣilah DESPITE being preceded by a Sakin?",
      questionBangla: "গোটা কুরআনে কোন একমাত্র আয়াতে পূর্ববর্তী হরফ সাকিন হওয়া সত্ত্বেও ব্যতিক্রমীভাবে সর্বনাম হা-তে মাদ্দে সিলাহর টান দেওয়া ওয়াজিব?",
      promptText: "فِيهِۦ مُهَانًا",
      options: [
        "Surah Al-Furqan: 69 (وَيَخْلُدْ فِيهِۦ مُهَانًا — pronounced with 2 counts on 'feehee')",
        "Surah Al-Baqarah: 2",
        "Surah Yasin: 1",
        "Surah Al-Fatihah: 7"
      ],
      correctIndex: 0,
      explanation: "In Hafs, Surah Al-Furqan 69 is an authentic exception: 'Wa yakh-lud feehee muhānā' with a 2-count Silah on the Hā’.",
      explanationBangla: "সূরা আল-ফুরক্বানের ৬৯ নম্বর আয়াতের 'ফীহী মুহানা' (فِيهِۦ مُهَانًا) একমাত্র ব্যতিক্রম যেখানে সাকিনের পরেও হা-তে ২ হরকত সিলাহ টানা ওয়াজিব।"
    },
    {
      id: "q7_22",
      type: "multiple_choice",
      question: "In the word (الصَّيْفِ), what type of letter is the Yā’?",
      questionBangla: "(الصَّيْفِ) শব্দে ইয়া হরফটি কোন ধরনের হরফ?",
      promptText: "الصَّيْفِ",
      options: [
        "Letter of Līn (حَرْفُ لِينٍ) because it is a Sakin Yā’ preceded by Ṣād with Fatḥah",
        "Letter of Madd",
        "Mutaharrik consonant",
        "Hamzatul Wasl"
      ],
      correctIndex: 0,
      explanation: "The Yā’ carries Sukūn and is preceded by Fathah, classifying it as a Letter of Leen ('Aṣ-Ṣayf').",
      explanationBangla: "এটি একটি হরফে লীন, কারণ যবরের পর জযমযুক্ত ইয়া এসেছে ('আস-সইফ')।"
    },
    {
      id: "q7_23",
      type: "multiple_choice",
      question: "How is the word (قُرَيْشٍ) pronounced when stopping on it at the end of Ayah 1 of Surah Quraysh?",
      questionBangla: "সূরা কুরাইশের ১ম আয়াতের শেষে (قُرَيْشٍ) শব্দে ওয়াকফ করলে তা কীভাবে পড়তে হবে?",
      promptText: "لِإِيلَافِ قُرَيْشٍ",
      options: [
        "Stop on Shīn with Sukūn, elongating the Līn Yā’ for 2, 4, or 6 counts (Madd al-Līn)",
        "Stop with 1 count only without stretching",
        "Pronounce the Tanween in full",
        "Convert into an Alif"
      ],
      correctIndex: 0,
      explanation: "At the pause, the Tanween vanishes into Sukoon, allowing 2, 4, or 6 counts of Madd Leen on the Yā’.",
      explanationBangla: "ওয়াকফের সময় তানবীন বাদ দিয়ে শীনে সুকূন হবে এবং লীন ইয়া-কে ২, ৪ বা ৬ হরকত পর্যন্ত মাদ্দে লীন করে টানা যাবে।"
    },
    {
      id: "q7_24",
      type: "multiple_choice",
      question: "In the word (رَأَوْا), what type of letter is the final Wāw?",
      questionBangla: "(رَأَوْا) শব্দে শেষ ওয়াও হরফটি কোন ধরনের হরফ?",
      promptText: "رَأَوْا",
      options: [
        "Letter of Līn (preceded by Hamzah with Fatḥah)",
        "Letter of Madd",
        "A full Hamzah",
        "Silent letter"
      ],
      correctIndex: 0,
      explanation: "The Wāw is Sakin preceded by Fathah, making it a Letter of Leen ('Ra-’aw'). The trailing Alif is silent.",
      explanationBangla: "হামযাহর যবরের পর সাকিন ওয়াও আসায় এটি হরফে লীন ('রা-আও')।"
    },
    {
      id: "q7_25",
      type: "multiple_choice",
      question: "Why does the word (دَابَّةٍ) NOT have a simple Madd Aṣlī despite containing an Alif preceded by Fatḥah?",
      questionBangla: "(دَابَّةٍ) শব্দে যবরের পর আলিফ থাকা সত্ত্বেও এটি কেন সাধারণ মাদ্দে আসলী নয়?",
      promptText: "دَابَّةٍ",
      options: [
        "Because it is immediately followed by a letter carrying a Shaddah (permanent Sukūn), elevating it into Madd Lāzim (6 counts)",
        "Because Baa has a Kasrah",
        "Because Dāl is a heavy letter",
        "Because it has a Tanween"
      ],
      correctIndex: 0,
      explanation: "When a Madd letter is followed by a Shaddah, it triggers obligatory 6-count Madd Lāzim Kalimī Muthaqqal.",
      explanationBangla: "কারণ মাদ্দের আলিফের ঠিক পরেই তাশদীদযুক্ত হরফ (আসল সাকিন) আসায় এটি ৬ হরকতের অপরিহার্য মাদ্দ লাযিমে পরিণত হয়েছে।"
    },
    {
      id: "q7_26",
      type: "multiple_choice",
      question: "In the word (تَمْشِي), what type of Madd occurs at the end in continuous recitation?",
      questionBangla: "(تَمْشِي) শব্দে স্বাভাবিক তিলাওয়াতে শেষে কোন মাদ্দ হয়?",
      promptText: "تَمْشِي",
      options: ["Madd Aṣlī (2 counts on Yā’ preceded by Shīn with Kasrah)", "Madd Badal", "Madd Lazim", "Madd Leen"],
      correctIndex: 0,
      explanation: "The Yā’ is preceded by Kasrah, creating a standard 2-count natural Madd Asli: 'Tam-shee'.",
      explanationBangla: "শীনের যেরের পর খালি ইয়া আসায় এটি স্বাভাবিক ২ হরকতের মাদ্দে আসলী: 'তাম্শী'।"
    },
    {
      id: "q7_27",
      type: "multiple_choice",
      question: "What is the visual marker in the Quran indicating a letter of Madd that must be extended beyond the 2 counts of Madd Aṣlī?",
      questionBangla: "মুসহাফে মাদ্দের হরফকে স্বাভাবিক ২ হরকতের অতিরিক্ত টানার নির্দেশক প্রতীক কোনটি?",
      promptText: "ـٓ",
      options: [
        "The wavy Madd tide mark (علامة المد / ٓ) placed above the letter",
        "A double Sukoon",
        "A small circle",
        "A red underline"
      ],
      correctIndex: 0,
      explanation: "The wavy curved line (~ / علامة المد) signifies Madd Far‘ī requiring 4, 5, or 6 counts of elongation.",
      explanationBangla: "হরফের ওপরে থাকা ঢেউ খেলানো মাদ্দ চিহ্নটি (ٓ) অতিরিক্ত ৪, ৫ বা ৬ হরকত টানার আবশ্যকতা নির্দেশ করে।"
    },
    {
      id: "q7_28",
      type: "multiple_choice",
      question: "In the word (عَصَوْا وَّكَانُوا), what happens between the two Wāws?",
      questionBangla: "(عَصَوْا وَّكَانُوا) বাক্যাংশে দুটি ওয়াও হরফের মধ্যে কী ঘটে?",
      promptText: "عَصَوْا وَّكَانُوا",
      options: [
        "The first Wāw is a Letter of Līn; it merges completely into the second vowelled Wāw with Idghām Mithlayn",
        "Both are prolonged for 6 counts",
        "The first Waw is deleted",
        "They are read with Izhar"
      ],
      correctIndex: 0,
      explanation: "Because the first Wāw is a Leen letter (consonantal), it assimilates into the following vowelled Wāw with a Shaddah.",
      explanationBangla: "যেহেতু প্রথম ওয়াও-টি লীন হরফ (ব্যঞ্জনধ্বনি), তাই এটি পরবর্তী ওয়াও-এ তাশদীদের সাথে পূর্ণ ইদগাম মিছলাইন হয়।"
    },
    {
      id: "q7_29",
      type: "multiple_choice",
      question: "In (آمَنَ الرَّسُولُ), how many counts is the first syllable (آ) prolonged?",
      questionBangla: "(آمَنَ الرَّسُولُ) বাক্যে শুরুর 'আ-' (آ) অংশটিতে কত হরকত মাদ্দ দিতে হবে?",
      promptText: "آمَنَ",
      options: ["Exactly 2 counts (Madd Badal)", "4 counts", "6 counts", "1 count"],
      correctIndex: 0,
      explanation: "Madd Badal is prolonged for exactly 2 counts (Harakatan) in the narration of Hafs ‘an ‘Asim.",
      explanationBangla: "হাফস রেওয়ায়েতে মাদ্দে বাদাল ঠিক ২ হরকত (মাদ্দে আসলির সমান) লম্বা করে পড়তে হয়।"
    },
    {
      id: "q7_30",
      type: "multiple_choice",
      question: "What is the acoustic danger when reciting Madd with an open Alif (e.g. قَالَ)?",
      questionBangla: "আলিফ মাদ্দ পড়ার সময় (যেমন: قَالَ) কোন অপ্রীতিকর ধ্বনিগত বিকৃতি ঘটে যেতে পারে?",
      options: [
        "Allowing the airflow to leak into the nasal cavity (Ghunnah) instead of flowing purely out of the mouth",
        "Making the Alif too soft",
        "Stopping the voice",
        "Saying it like a Baa"
      ],
      correctIndex: 0,
      explanation: "Purity of Alif requires sound to exit 100% through the mouth; nasal resonance (Khaishoom leak) during Madd is an error.",
      explanationBangla: "সবচেয়ে বড় ত্রুটি হলো মুখ দিয়ে খাঁটি আওয়াজ বের না করে নাকের বাঁশিতে অনাকাঙ্ক্ষিত গুন্নাহর সুর ঢুকিয়ে দেওয়া।"
    },
    {
      id: "q7_31",
      type: "multiple_choice",
      question: "In the word (مُوسَىٰ), what are the two letters of Madd?",
      questionBangla: "(مُوسَىٰ) শব্দে বিদ্যমান দুটি মাদ্দের হরফ কী কী?",
      promptText: "مُوسَىٰ",
      options: [
        "Wāw Sakinah preceded by Mīm with Ḍammah, and Alif Maqṣūrah preceded by Sīn with Fatḥah",
        "Two Alifs",
        "Two Yā’s",
        "One Waw only"
      ],
      correctIndex: 0,
      explanation: "Both syllables contain 2-count natural Madds: Mīm has Waw Madd ('Mū-'), and Sīn has Alif Maqsurah ('-sā').",
      explanationBangla: "উভয় অংশে দুটি মাদ্দে আসলী রয়েছে: পেশের পর ওয়াও ('মূ-') এবং যবরের পর খাড়া আলিফ মাকসূরা ('-সা')।"
    },
    {
      id: "q7_32",
      type: "multiple_choice",
      question: "What is the term for a 2-count Madd formed when stopping on an accusative Tanwīn (e.g. عَلِيمًا)?",
      questionBangla: "দুই যবরের ওপর ওয়াকফ করার কারণে সৃষ্ট ২ হরকতের মাদ্দকে কী বলা হয়?",
      promptText: "عَلِيمًا",
      options: ["Madd ‘Iwaḍ (مَدُّ الْعِوَضِ - Compensation Madd)", "Madd Badal", "Madd Lazim", "Madd Leen"],
      correctIndex: 0,
      explanation: "It is called Madd ‘Iwaḍ because the Alif compensates for the lost Tanwīn sound.",
      explanationBangla: "এটিকে মাদ্দ 'ইওয়াদ (বিনিময় মাদ্দ) বলা হয় কারণ আলিফটি হারিয়ে যাওয়া তানবীনের নূনের ক্ষতিপূরণ হিসেবে কাজ করে।"
    },
    {
      id: "q7_33",
      type: "multiple_choice",
      question: "In the word (سَمِيعًا بَصِيرًا), how many Madd ‘Iwaḍ prolongations occur if you stop at the end of each word separately?",
      questionBangla: "(سَمِيعًا بَصِيرًا) শব্দ দুটিতে পৃথকভাবে ওয়াকফ করলে মোট কতটি মাদ্দ 'ইওয়াদ হবে?",
      options: ["Two (one for each word)", "Only one", "Three", "Zero"],
      correctIndex: 0,
      explanation: "Stopping on 'Samee‘ā' produces one Madd ‘Iwad; stopping on 'Baseerā' produces the second.",
      explanationBangla: "উভয় শব্দেই দুই যবর থাকায় প্রতিটিতে থামলে স্বতন্ত্রভাবে মাদ্দ 'ইওয়াদ হবে; মোট দুটি।"
    },
    {
      id: "q7_34",
      type: "multiple_choice",
      question: "Why does the Wāw in (هُوَ) NOT cause a Madd?",
      questionBangla: "(هُوَ) শব্দে ওয়াও হরফটি কেন মাদ্দ নয়?",
      promptText: "هُوَ",
      options: [
        "Because it is Mutaharrik (vowelled with a Fatḥah), and Madd requires the Wāw to be SĀKIN preceded by Ḍammah",
        "Because Hā has a Dammah",
        "Because it is a short word",
        "Because it is at the end"
      ],
      correctIndex: 0,
      explanation: "The Wāw carries an active Fathah ('Hu-wa'). A Madd letter must strictly be unvowelled (Sakin).",
      explanationBangla: "কারণ এখানে ওয়াও সাকিন নয় বরং যবরযুক্ত মুতাহাররিক হরফ ('হু-ওয়া'); মাদ্দ হতে হলে ওয়াও-কে অবশ্যই সাকিন হতে হবে।"
    },
    {
      id: "q7_35",
      type: "multiple_choice",
      question: "In the Quranic spelling (يَسْتَحْيِي), what does the second small Yā’ represent?",
      questionBangla: "(يَسْتَحْيِي) বানানে দ্বিতীয় ছোট ইয়া প্রতীকটি কী নির্দেশ করে?",
      promptText: "يَسْتَحْيِي",
      options: [
        "A full Madd letter Yā’ carrying Madd Aṣlī (2 counts), preserved in orthography",
        "A Sukoon",
        "A silent letter",
        "A Hamzah"
      ],
      correctIndex: 0,
      explanation: "The small subscript Yā’ is an authentic letter of Madd to be pronounced as a full 2-count 'Yastahyī'.",
      explanationBangla: "ছোট ইয়া চিহ্নটি একটি পূর্ণ মাদ্দে আসলির হরফ যা ২ হরকত টেনে 'ইয়াস্ তাহ্য়ী' পড়তে হয়।"
    }
  ]
};
