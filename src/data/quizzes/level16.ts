import { Quiz } from "./types";

export const quizLevel16: Quiz = {
  id: "q16",
  levelId: 16,
  title: "Level 16: Waqf (Stopping Rules), Ibtidā’ & Recitation Mastery",
  titleBangla: "লেভেল ১৬: ওয়াকফ (থামার নিয়ম), ইবতিদা ও কুরআনীয় চিহ্নের সর্বোচ্চ পরীক্ষা",
  description: "Master the 4 categories of Waqf (Tāmm, Kāfī, Ḥasan, Qabīḥ), Quranic stopping symbols (مـ, لا, ج, صلي, قلي, ∴ ∴), Rawm & Ishmām, and Saktah pauses.",
  descriptionBangla: "ওয়াকফের চার রূপ (তাম, কাফী, হাসান, ক্ববীহ্), মুসহাফের বিরামচিহ্ন, রওম ও ইশমামের রহস্য এবং হাফস রেওয়ায়েতের ৪টি ওয়াজিব সাকতাহ্ পরীক্ষা।",
  passingScore: 70,
  questions: [
    {
      id: "q16_1",
      type: "multiple_choice",
      question: "What is Waqf (الْوَقْفُ) in Tajweed terminology?",
      questionBangla: "তাজবীদ শাস্ত্রের পারিভাষিক সংজ্ঞায় ওয়াকফ (الْوَقْفُ) বলতে কী বোঝায়?",
      options: [
        "Cutting off the sound on a word for a duration of breath with the intention of resuming recitation",
        "Stopping forever without reading again",
        "Holding the breath without breathing",
        "A pause to swallow saliva"
      ],
      correctIndex: 0,
      explanation: "Waqf is cutting the voice at the end of a word for a moment to breathe, intending to continue reading.",
      explanationBangla: "ওয়াকফ হলো তিলাওয়াত চালিয়ে যাওয়ার উদ্দেশ্যে স্বাভাবিক শ্বাস গ্রহণের সময়কাল পর্যন্ত কোনো শব্দের শেষে আওয়াজ বন্ধ করা।"
    },
    {
      id: "q16_2",
      type: "multiple_choice",
      question: "What is Sakt (السَّكْتُ - the short pause) and how does it differ from Waqf?",
      questionBangla: "সাক্ত বা সাকতাহ্ (السَّكْتُ) কী এবং এটি ওয়াকফ থেকে কীভাবে পৃথক?",
      options: [
        "Cutting off the sound for approximately 2 counts WITHOUT taking a breath, intending to resume recitation immediately",
        "Taking a very deep breath",
        "Stopping for 10 seconds",
        "Closing the Quran"
      ],
      correctIndex: 0,
      explanation: "Sakt is a short silence (approx 2 counts) strictly WITHOUT breathing, bridging into the next word.",
      explanationBangla: "শ্বাস গ্রহণ না করে প্রায় ২ হরকত পরিমাণ সময় আওয়াজ বন্ধ রেখে সাথে সাথে পরবর্তী শব্দে চলে যাওয়াকে সাকতাহ্ বলে।"
    },
    {
      id: "q16_3",
      type: "multiple_choice",
      question: "What is Qat‘ (الْقَطْعُ - termination) in Tajweed?",
      questionBangla: "তাজবীদ শাস্ত্রে ক্বাত' (الْقَطْعُ) বলতে কী বোঝায়?",
      options: [
        "Concluding the entire recitation session completely and leaving the Quran (only permitted at a complete Ayah)",
        "Pausing to take a breath",
        "Skipping an Ayah",
        "Reading very loudly"
      ],
      correctIndex: 0,
      explanation: "Qat‘ is ending recitation entirely. It is strictly forbidden to do Qat‘ in the middle of a verse or unfinished thought.",
      explanationBangla: "ক্বাত' হলো তিলাওয়াত অধিবেশন সম্পূর্ণ সমাপ্ত করে অন্য কাজে চলে যাওয়া; এটি কেবল পূর্ণাঙ্গ আয়াত শেষেই বৈধ।"
    },
    {
      id: "q16_4",
      type: "multiple_choice",
      question: "What are the FOUR major theological/grammatical categories of Waqf?",
      questionBangla: "অর্থ ও ব্যাকরণগত দিক থেকে ওয়াকফের ৪টি প্রধান বিভাগ কী কী?",
      options: [
        "1. Waqf Tāmm (Complete); 2. Waqf Kāfī (Sufficient); 3. Waqf Ḥasan (Good); 4. Waqf Qabīḥ (Reprehensible / Forbidden)",
        "Short, Medium, Long, Extra",
        "Fathah, Kasrah, Dammah, Sukoon",
        "Izhar, Idgham, Iqlab, Ikhfa"
      ],
      correctIndex: 0,
      explanation: "The 4 categories reflect semantic completeness: Tāmm (totally independent), Kāfī (independent syntax, related theme), Ḥasan (complete sense), and Qabīḥ (ruined sense).",
      explanationBangla: "১. ওয়াকফে তাম (পূর্ণাঙ্গ); ২. ওয়াকফে কাফী (যথেষ্ট); ৩. ওয়াকফে হাসান (উত্তম); ৪. ওয়াকফে ক্ববীহ্ (গর্হিত বা নিষিদ্ধ)।"
    },
    {
      id: "q16_5",
      type: "multiple_choice",
      question: "What is Waqf Qabīḥ (الْوَقْفُ الْقَبِيحُ - Reprehensible Stop)?",
      questionBangla: "ওয়াকফে ক্ববীহ্ (الْوَقْفُ الْقَبِيحُ - গর্হিত থামা) কাকে বলে?",
      options: [
        "Stopping on a word that produces an incomplete, corrupt, or blasphemous meaning (e.g. stopping on لَا إِلَٰهَ without saying إِلَّا اللَّهُ)",
        "Stopping at the end of a Surah",
        "Stopping to take a breath at Ayah end",
        "Stopping on a Madd letter"
      ],
      correctIndex: 0,
      explanation: "Waqf Qabeeh ruins meaning or creates theological blasphemy (e.g. stopping on 'There is no God' without completing 'except Allah').",
      explanationBangla: "এমন স্থানে থামা যা বাক্যার্থকে বিকৃত বা কুফরিতে পরিণত করে (যেমন: 'লা ইলাহা' [কোনো উপাস্য নেই] বলে থেমে যাওয়া এবং 'ইল্লাল্লাহ' না বলা)।"
    },
    {
      id: "q16_6",
      type: "multiple_choice",
      question: "What does the Quranic symbol (مـ) with a horizontal baseline tail indicate?",
      questionBangla: "মুসহাফের লাইনের সাথে অনুভূমিকভাবে থাকা ছোট মীম (مـ) প্রতীকটি কী নির্দেশ করে?",
      promptText: "مـ",
      options: [
        "Waqf Lāzim (الْوَقْفُ اللَّازِمُ - Compulsory Stop): you MUST stop to prevent grave distortion of meaning",
        "Iqlab with Baa",
        "Madd Lazim",
        "It is forbidden to stop"
      ],
      correctIndex: 0,
      explanation: "A horizontal baseline Mīm (مـ) denotes a mandatory stop (Waqf Lāzim); continuing would fuse conflicting ideas.",
      explanationBangla: "ওয়াকফে লাযিম (বাধ্যতামূলক থামা): এখানে থামা আবশ্যক, মিলিয়ে পড়লে অর্থের মারাত্মক বিকৃতি ঘটবে।"
    },
    {
      id: "q16_7",
      type: "multiple_choice",
      question: "What does the symbol (لا) in the Holy Quran indicate?",
      questionBangla: "পবিত্র কুরআনে (لا) প্রতীকটি কী নির্দেশ করে?",
      promptText: "لا",
      options: [
        "Waqf Mamnū‘ (الْوَقْفُ الْمَمْنُوعُ - Prohibited Stop): do NOT stop here because the meaning is deeply interconnected with what follows",
        "Mandatory stop",
        "Read backwards",
        "Double the vowel"
      ],
      correctIndex: 0,
      explanation: "‘Lā’ stands for 'Do not stop' (لا تقف); stopping cuts off an incomplete grammatical clause.",
      explanationBangla: "ওয়াকফে মামনূ' (নিষিদ্ধ থামা): 'এখানে থামবেন না'; কারণ পরবর্তী অংশের সাথে অর্থ ও ব্যাকরণ অবিচ্ছেদ্যভাবে যুক্ত।"
    },
    {
      id: "q16_8",
      type: "multiple_choice",
      question: "What does the symbol (ج) indicate in the Holy Quran?",
      questionBangla: "পবিত্র কুরআনে জীম (ج) প্রতীকটি কী নির্দেশ করে?",
      promptText: "ج",
      options: [
        "Waqf Jā’iz (الْوَقْفُ الْجَائِزُ - Permissible Stop): stopping and continuing are both EQUALLY permissible",
        "Mandatory stop",
        "Prohibited stop",
        "A 6-count Madd"
      ],
      correctIndex: 0,
      explanation: "Jīm signifies 'Jā’iz' (permissible): the reader has full liberty to stop or continue with equal validity.",
      explanationBangla: "ওয়াকফে জায়েয (অনুমোদিত থামা): থামা এবং মিলিয়ে পড়া উভয়টিই সমানভাবে বৈধ ও অনুমোদিত।"
    },
    {
      id: "q16_9",
      type: "multiple_choice",
      question: "What does the symbol (صلى) indicate in the Holy Quran?",
      questionBangla: "পবিত্র কুরআনে (صلى) প্রতীকটি কী নির্দেশ করে?",
      promptText: "صلى",
      options: [
        "Al-Waṣl Awlā (الْوَصْلُ أَوْلَى): continuing without stopping is PREFERRED, although stopping is permissible",
        "Stopping is preferred",
        "Mandatory stop",
        "A Sajdah verse"
      ],
      correctIndex: 0,
      explanation: "‘Ṣalā’ is an abbreviation of 'Al-Waṣlu Awlā' (connecting is better/preferred).",
      explanationBangla: "'আল-ওয়াস্লু আওলা' (মিলিয়ে পড়া উত্তম): থামা বৈধ হলেও না থেমে মিলিয়ে পড়ে যাওয়া অধিক পছন্দনীয়।"
    },
    {
      id: "q16_10",
      type: "multiple_choice",
      question: "What does the symbol (قلى) indicate in the Holy Quran?",
      questionBangla: "পবিত্র কুরআনে (قلى) প্রতীকটি কী নির্দেশ করে?",
      promptText: "قلى",
      options: [
        "Al-Waqf Awlā (الْوَقْفُ أَوْلَى): STOPPING is PREFERRED, although continuing is permissible",
        "Continuing is preferred",
        "Prohibited to stop",
        "Silent letter"
      ],
      correctIndex: 0,
      explanation: "‘Qalā’ is an abbreviation of 'Al-Waqfu Awlā' (stopping is better/preferred).",
      explanationBangla: "'আল-ওয়াক্বফু আওলা' (থামা উত্তম): মিলিয়ে পড়া বৈধ হলেও থেমে যাওয়া অধিক পছন্দনীয়।"
    },
    {
      id: "q16_11",
      type: "multiple_choice",
      question: "What does the Embracing Stop symbol (تَعَانُقُ الْوَقْفِ / ∴ ∴ - two triplets of dots) indicate?",
      questionBangla: "মুআ'নাক্বাহ্ বা দুটি ত্রিবিন্দু (∴ ∴) প্রতীক কুরআনে কী নির্দেশ করে?",
      promptText: "لَا رَيْبَ ۛ فِيهِ ۛ هُدًى",
      options: [
        "You may stop at ONE of the two positions, but NOT at both (and not omitting both)",
        "You must stop at both places",
        "You must not stop at either",
        "A 10-count Madd"
      ],
      correctIndex: 0,
      explanation: "‘Ta‘ānuq al-Waqf’ (as in Baqarah Ayah 2: 'Lā rayba ۛ feehi ۛ'): stop at the first OR the second, never at both.",
      explanationBangla: "পরস্পর আলিঙ্গনকারী থামা: দুটি স্থানের যে কোনো একটিতে থামবেন, কিন্তু কখনোই উভয়টিতে থামবেন না।"
    },
    {
      id: "q16_12",
      type: "multiple_choice",
      question: "How many OBLIGATORY Saktah (pause without breath) locations exist in the narration of Ḥafṣ ‘an ‘Āṣim?",
      questionBangla: "হাফস 'আন 'আসিম রেওয়ায়েতে গোটা কুরআনে মোট কতটি ওয়াজিব সাকতাহ্ (দম না ফেলে বিরতি) রয়েছে?",
      options: [
        "Exactly FOUR locations: Surah Al-Kahf: 1-2, Surah Yasin: 52, Surah Al-Qiyamah: 27, and Surah Al-Mutaffifin: 14",
        "Two locations",
        "Six locations",
        "Ten locations"
      ],
      correctIndex: 0,
      explanation: "Hafs has 4 obligatory pauses without breath: 1. ‘Iwajā ۜ Qayyimā; 2. Marqadinā ۜ Hādhā; 3. Man ۜ Rāq; 4. Bal ۜ Rāna.",
      explanationBangla: "হাফস রেওয়ায়েতে মোট ৪টি ওয়াজিব সাকতাহ্ রয়েছে: ১. কাহাফ (عِوَجًا ۜ قَيِّمًا); ২. ইয়াসীন (مَّرْقَدِنَا ۜ هَٰذَا); ৩. ক্বিয়ামাহ (مَنْ ۜ رَاقٍ); ৪. মুত্বাফ্ফিফীন (بَلْ ۜ رَانَ)।"
    },
    {
      id: "q16_13",
      type: "multiple_choice",
      question: "In Surah Al-Qiyamah: 27 (وَقِيلَ مَنْ ۜ رَاقٍ), why is Idghām FORBIDDEN between Nūn and Rā’?",
      questionBangla: "সূরা ক্বিয়ামাহর ২৭ নম্বর আয়াতে (مَنْ ۜ رَاقٍ) নূন ও র-এর মাঝে স্বাভাবিক ইদগাম করা কেন নিষিদ্ধ?",
      promptText: "مَنْ ۜ رَاقٍ",
      options: [
        "Because the obligatory SAKTAH (breathless pause on Nūn) separates the two words, preventing the phonetic collision required for Idghām",
        "Because Raa is light",
        "Because of an error",
        "Because Man is a question"
      ],
      correctIndex: 0,
      explanation: "The silent pause (Saktah) breaks the continuous vocalization; without vocal contact, Idghām cannot take place.",
      explanationBangla: "কারণ ওয়াজিব সাকতাহ্ (দম ছাড়া বিরতি) শব্দ দুটিকে বিচ্ছিন্ন করে দেয়; বিরতির কারণে ইদগাম হওয়া সম্পূর্ণ অসম্ভব।"
    },
    {
      id: "q16_14",
      type: "multiple_choice",
      question: "In Surah Al-Mutaffifin: 14 (كَلَّا بَلْ ۜ رَانَ عَلَىٰ قُلُوبِهِم), how is (بَلْ ۜ رَانَ) recited?",
      questionBangla: "সূরা মুত্বাফ্ফিফীনের ১৪ নম্বর আয়াতে (بَلْ ۜ رَانَ) কীভাবে তিলাওয়াত করতে হবে?",
      promptText: "بَلْ ۜ رَانَ",
      options: [
        "Stop the voice cleanly on the Lām Sākinah for ~2 counts WITHOUT breathing, then articulate 'Rāna' without Idghām",
        "‘Bar-rāna’ with complete Idgham",
        "Take a deep breath between them",
        "Pronounce with a whistle"
      ],
      correctIndex: 0,
      explanation: "Pronounce Lām with Sukūn, pause for 2 counts with held breath, then begin 'Rāna': 'Bal ... rāna' (no Idgham into Rā’).",
      explanationBangla: "লামে সাকিন করে দম না ফেলে প্রায় ২ হরকত আওয়াজ বন্ধ রেখে তারপর 'রানা' বলতে হবে (ইদগাম ছাড়া)।"
    },
    {
      id: "q16_15",
      type: "multiple_choice",
      question: "What is the golden rule of stopping on words ending with Tā’ Marbūṭah (ة / ـة)?",
      questionBangla: "তা মারবূতাহ (ة / ـة) বিশিষ্ট শব্দের শেষে ওয়াকফ করার বিশ্বজনীন নিয়ম কী?",
      promptText: "الْجَنَّةِ  /  الصَّلَاةَ  /  الْقَارِعَةُ",
      options: [
        "It ALWAYS transforms into an unvowelled Hā’ with Sukūn (هْ) regardless of whether it carried Fatḥah, Kasrah, Ḍammah, or Tanwīn",
        "It always becomes a Taa with Sukoon",
        "It becomes an Alif Madd",
        "It stays with its vowel"
      ],
      correctIndex: 0,
      explanation: "Upon stopping, Tā’ Marbūṭah loses its dots and sound, becoming an authentic soft Hā’ with Sukūn: 'Al-Jannah', 'Aṣ-Ṣalāh'.",
      explanationBangla: "যবর, যের, পেশ বা তানবীন যাই থাকুক না কেন, থামার সময় তা মারবূতাহ সর্বদা সাকিনযুক্ত 'হা' (هْ)-তে রূপান্তরিত হয়ে যায়।"
    },
    {
      id: "q16_16",
      type: "multiple_choice",
      question: "How does stopping on Tā’ Maftūḥah (ت / open Tā’, e.g. جَنَّات / بِنْت) differ from Tā’ Marbūṭah?",
      questionBangla: "খোলা তা (ت / তা মাফতূহাহ্) বিশিষ্ট শব্দে ওয়াকফ করা তা মারবূতাহ থেকে কীভাবে পৃথক?",
      promptText: "جَنَّاتٍ  /  بِنْتٌ",
      options: [
        "Tā’ Maftūḥah REMAINS a crisp Tā’ with Sukūn and whispered breath (Hams): 'Jannāt', 'Bint', NEVER turning into a Hā’",
        "It turns into a Haa",
        "It turns into an Alif",
        "It is silent"
      ],
      correctIndex: 0,
      explanation: "Open Tā’ (ت) retains its identity upon pause, releasing with subtle breath (Hams): 'Jannāt'.",
      explanationBangla: "খোলা তা (ت) থামার সময় কখনোই 'হা' হয় না, বরং মৃদু বাতাসসহ (হামস) খাঁটি সাকিন তা হিসেবে বহাল থাকে: 'জান্নাত্'।"
    },
    {
      id: "q16_17",
      type: "multiple_choice",
      question: "What is Rawm (الرَّوْمُ) in the science of Waqf?",
      questionBangla: "ওয়াকফের বিজ্ঞানে রওম (الرَّوْمُ) কাকে বলে?",
      options: [
        "Pronouncing roughly ONE-THIRD of the vowel (weakened acoustic volume) audible only to a close listener, permissible on Kasrah and Ḍammah",
        "Pronouncing with full volume",
        "Shouting the vowel",
        "Whispering through the nose"
      ],
      correctIndex: 0,
      explanation: "Rawm is vocalizing a subtle fraction (approx 1/3) of the vowel so nearby listeners detect its original grammatical inflection.",
      explanationBangla: "রওম হলো ওয়াকফকালীন হরকতের এক-তৃতীয়াংশ ক্ষীণ আওয়াজে উচ্চারণ করা যা কেবল নিকটবর্তী শ্রোতা শুনতে পায় (যের ও পেশে বৈধ)।"
    },
    {
      id: "q16_18",
      type: "multiple_choice",
      question: "What is Ishmām (الْإِشْمَامُ) in the science of Waqf?",
      questionBangla: "ওয়াকফের বিজ্ঞানে ইশমাম (الْإِشْمَامُ) কাকে বলে?",
      options: [
        "Silently rounding both lips forward into a circle IMMEDIATELY after sounding the Sakin consonant, indicating a Ḍammah purely for the eyes with ZERO sound",
        "Making a loud buzzing sound",
        "Adding a 6-count Madd",
        "Dropping the lower jaw"
      ],
      correctIndex: 0,
      explanation: "Ishmām is a visual cue: circling the lips forward in silence right after the Sukūn to visually signal that the paused word ended in Dammah.",
      explanationBangla: "ইশমাম হলো শেষ হরফটি সাকিন করার সাথে সাথেই কোনো শব্দ না করে কেবল দুই ঠোঁট গোল করে পেশের ইঙ্গিত দেওয়া (কেবল চক্ষুষ্মানদের জন্য)।"
    },
    {
      id: "q16_19",
      type: "multiple_choice",
      question: "Can Rawm or Ishmām EVER be performed on a word ending with a Fatḥah (َ)?",
      questionBangla: "যবর বা ফাতহাহ (َ) বিশিষ্ট হরফে ওয়াকফ করার সময় কি কখনো রওম বা ইশমাম করা যায়?",
      options: [
        "NEVER; Fatḥah is too light and rapid; it vanishes instantly into pure Sukūn (لَا رَوْمَ وَلَا إِشْمَامَ فِي الْمَفْتُوحِ)",
        "Yes, always",
        "Only in Surah Yasin",
        "Only for elderly readers"
      ],
      correctIndex: 0,
      explanation: "Because Fathah is light and opens outward, it cannot be divided into Rawm nor signaled by lip rounding in Ishmām.",
      explanationBangla: "কখনোই নয়; যবর অত্যন্ত হালকা হওয়ায় এটি থামার সাথে সাথে খাঁটি সুকূনে পরিণত হয়, এতে রওম বা ইশমাম সম্পূর্ণ নিষিদ্ধ।"
    },
    {
      id: "q16_20",
      type: "multiple_choice",
      question: "In Surah Yusuf: 11, what unique recitation technique occurs on the word (لَا تَأْمَنَّا)?",
      questionBangla: "সূরা ইউসুফের ১১ নম্বর আয়াতে (لَا تَأْمَنَّا) শব্দটিতে কোন বিরল তাজবীদ কৌশল প্রয়োগ করা ওয়াজিব?",
      promptText: "لَا تَأْمَ۫نَّا",
      options: [
        "Either Ishmām (circling lips forward during the Ghunnah of Nūn) OR Ikhtilās (hiding 2/3 of the Dammah on the first Nūn)",
        "Reading with a loud cough",
        "Reading with 10 counts of Madd",
        "Deleting the word"
      ],
      correctIndex: 0,
      explanation: "The word was originally 'Lā ta’manunā'. Hafs recites it with either Ishmām during the Ghunnah or Ikhtilās of the Dammah.",
      explanationBangla: "মূল শব্দ ছিল 'লা তা'মানুনা'; এতে গুন্নাহ চলাকালীন ঠোঁট গোল করে ইশমাম অথবা দ্রুত পেশের একাংশ উচ্চারণ করে ইখতিলাস করতে হয়।"
    },
    {
      id: "q16_21",
      type: "multiple_choice",
      question: "What is Ibtidā’ (الِابْتِدَاءُ) in Tajweed?",
      questionBangla: "তাজবীদ শাস্ত্রে ইবতিদা (الِابْتِدَاءُ) বলতে কী বোঝায়?",
      options: [
        "Resuming recitation after a pause or breath; it MUST be made from a grammatically and semantically sound position",
        "Beginning the call to prayer",
        "Closing the eyes",
        "Reading the table of contents"
      ],
      correctIndex: 0,
      explanation: "Ibtidā’ is initiating speech after a pause. It is vital to start from a word that conveys an accurate, dignified Islamic meaning.",
      explanationBangla: "বিরতি বা দম ফেলার পর পুনরায় তিলাওয়াত শুরু করাকে ইবতিদা বলে; এটি অবশ্যই অর্থবহ ও বিশুদ্ধ স্থান থেকে শুরু করতে হয়।"
    },
    {
      id: "q16_22",
      type: "multiple_choice",
      question: "What is Ibtidā’ Qabīḥ (الِابْتِدَاءُ الْقَبِيحُ - Reprehensible Start)?",
      questionBangla: "ইবতিদায়ে ক্ববীহ্ (গর্হিত বা নিষিদ্ধভাবে শুরু করা) কোনটি?",
      options: [
        "Starting recitation from a phrase that conveys a blasphemous meaning (e.g. beginning with 'Allah is poor' or 'The Messiah is the son of God' without attributing it to disbelievers)",
        "Starting with Bismillah",
        "Starting on a long Ayah",
        "Starting from Surah Al-Fatihah"
      ],
      correctIndex: 0,
      explanation: "Starting where divine majesty is insulted (e.g. beginning on اتَّخَذَ اللَّهُ وَلَدًا without the context of false claims) is a terrible sin.",
      explanationBangla: "আল্লাহর শানে অবমাননাকর অর্থ সৃষ্টি করে এমন স্থান থেকে তিলাওয়াত শুরু করা (যেমন: উদ্ধৃতি ছাড়া 'আল্লাহর সন্তান আছে' বলা) চরম গুনাহ।"
    },
    {
      id: "q16_23",
      type: "multiple_choice",
      question: "What should a reciter do if breath runs out in the middle of a long verse at an awkward place?",
      questionBangla: "একটি দীর্ঘ আয়াতের মাঝে অপ্রত্যাশিতভাবে তিলাওয়াতকারীর দম শেষ হয়ে গেলে তার কী করা উচিত?",
      options: [
        "Stop naturally on the last word, and then BACKTRACK a few words to a sound semantic junction before resuming (الْوَقْفُ الِاضْطِرَارِيُّ)",
        "Gasp loudly and keep going",
        "Skip to the next Surah",
        "Start shouting"
      ],
      correctIndex: 0,
      explanation: "This is Waqf Iḍṭirārī (compelled pause): stop peacefully, then re-anchor your start a few words back to preserve continuous meaning.",
      explanationBangla: "এটিকে ওয়াকফে ইদ্বত্বিরারী বলে: শান্তভাবে থেমে গিয়ে অর্থ ঠিক রাখার জন্য কয়েক শব্দ পেছন থেকে পুনরায় শুরু করতে হয়।"
    },
    {
      id: "q16_24",
      type: "multiple_choice",
      question: "How do you stop on a word ending with a double Kasrah or double Ḍammah (e.g. غَفُورٌ رَّحِيمٌ)?",
      questionBangla: "দুই পেশ বা দুই যেরযুক্ত শব্দে (যেমন: غَفُورٌ رَّحِيمٌ) ওয়াকফ করার নিয়ম কী?",
      promptText: "غَفُورٌ  /  رَّحِيمٌ",
      options: [
        "The Tanwīn is completely deleted and the final consonant takes a pure Sukūn (e.g. 'Ghafoor', 'Raḥeem')",
        "It becomes a 2-count Alif",
        "The Nun is doubled",
        "It is read with a whistle"
      ],
      correctIndex: 0,
      explanation: "Tanween drops completely, and the letter settles into pure Sukūn (with potential Madd ‘Āriḍ li-s-Sukūn).",
      explanationBangla: "তানবীন সম্পূর্ণ বাদ দিয়ে শেষ হরফটিকে খাঁটি সুকূন বা জযমের সাথে থামতে হয় ('গফূর', 'রাহীম')।"
    },
    {
      id: "q16_25",
      type: "multiple_choice",
      question: "How do you stop on a word ending with a double Fatḥah on a standard letter (e.g. سَمِيعًا)?",
      questionBangla: "সাধারণ হরফে দুই যবরযুক্ত শব্দে (যেমন: سَمِيعًا) ওয়াকফ করার নিয়ম কী?",
      promptText: "سَمِيعًا",
      options: [
        "Convert the Tanwīn into a 2-count Alif of elongation known as Madd ‘Iwaḍ ('Samee‘ā')",
        "Stop with Sukoon: 'Samee‘'",
        "Stop with Nun: 'Samee‘an'",
        "It is forbidden to stop"
      ],
      correctIndex: 0,
      explanation: "Stopping on double Fathah replaces the nunation with a 2-count Madd ‘Iwaḍ Alif.",
      explanationBangla: "দুই যবরে থামলে তানবীনের বদলে ২ হরকত দীর্ঘ আলিফ মাদ্দ 'ইওয়াদ পড়ে 'সামী'আ' থামতে হয়।"
    },
    {
      id: "q16_26",
      type: "multiple_choice",
      question: "In the verse (إِنَّمَا يَسْتَجِيبُ الَّذِينَ يَسْمَعُونَ ۘ وَالْمَوْتَىٰ يَبْعَثُهُمُ اللَّهُ), why is there a mandatory stop (مـ) after (يَسْمَعُونَ)?",
      questionBangla: "এই আয়াতে 'ইয়াস্মা'ঊন' (يَسْمَعُونَ ۘ) শব্দের পর কেন বাধ্যতামূলক ওয়াকফে লাযিম (مـ) দেওয়া হয়েছে?",
      promptText: "يَسْمَعُونَ ۘ وَالْمَوْتَىٰ",
      options: [
        "Because continuing would falsely make 'the dead' the subject who hears ('Only those hear who listen AND the dead'), which ruins the theological distinction",
        "Because the verse is too long",
        "Because of a Sukoon",
        "By accident"
      ],
      correctIndex: 0,
      explanation: "If you do not stop, it sounds like the dead also hear with the living, corrupting the Quranic metaphor.",
      explanationBangla: "কারণ না থামলে অর্থ হয়ে যাবে 'তারাই শোনে যারা জীবিত এবং মৃতরাও শোনে'; ফলে জীবিত ও মৃতের গভীর পার্থক্য নষ্ট হয়ে ঈমানি অর্থ বিকৃত হবে।"
    },
    {
      id: "q16_27",
      type: "multiple_choice",
      question: "What is Sajdah at-Tilāwah (سَجْدَةُ التِّلَاوَةِ - Prostration of Recitation)?",
      questionBangla: "কুরআন তিলাওয়াতে সিজদায়ে তিলাওয়াত (سَجْدَةُ التِّلَاوَةِ) কী?",
      promptText: "۩",
      options: [
        "An act of worship where the reciter and listener prostrate to Allah upon reciting or hearing any of the 14/15 specific Sajdah verses in the Quran, marked with (۩)",
        "A pause to stretch the arms",
        "A 6-count Madd on all letters",
        "Stopping the recitation for the day"
      ],
      correctIndex: 0,
      explanation: "The Quran marks specific verses with an arch/dome (۩); reciting or hearing them makes single prostration (Sajdah) Sunnah/Wajib.",
      explanationBangla: "কুরআনে গম্বুজ চিহ্নযুক্ত (۩) নির্দিষ্ট ১৪টি আয়াতে পৌঁছালে তিলাওয়াতকারী ও শ্রোতার ওপর বিনম্র সিজদা আদায় করা সুন্নাতে মুয়াক্কাদাহ/ওয়াজিব।"
    },
    {
      id: "q16_28",
      type: "multiple_choice",
      question: "In the word (عِوَجًا ۜ قَيِّمًا) at the beginning of Surah Al-Kahf, what occurs between the two words?",
      questionBangla: "সূরা কাহাফের শুরুতে (عِوَجًا ۜ قَيِّمًا) শব্দদ্বয়ের মাঝে কী নিয়ম কার্যকর?",
      promptText: "عِوَجًا ۜ قَيِّمًا",
      options: [
        "An obligatory SAKTAH: stop on ‘Iwajā for approx 2 counts WITHOUT taking a breath, then begin 'Qayyimā'",
        "Idgham with Ghunnah",
        "Take a massive deep breath",
        "Skip the second word"
      ],
      correctIndex: 0,
      explanation: "Hafs requires a breathless pause (Saktah) to prevent listeners thinking 'crooked' and 'straight' modify the same noun.",
      explanationBangla: "হাফস রেওয়ায়েতে দম না ফেলে প্রায় ২ হরকত বিরতি (সাকতাহ্) দেওয়া ওয়াজিব যাতে 'বক্র' ও 'সরল' পরস্পরবিরোধী অর্থ তৈরি না করে।"
    },
    {
      id: "q16_29",
      type: "multiple_choice",
      question: "In Surah Yasin: 52 (قَالُوا يَا وَيْلَنَا مَن بَعَثَنَا مِن مَّرْقَدِنَا ۜ هَٰذَا مَا وَعَدَ الرَّحْمَٰنُ), why is Saktah performed after (مَّرْقَدِنَا)?",
      questionBangla: "সূরা ইয়াসীনের ৫২ নম্বর আয়াতে (مَّرْقَدِنَا ۜ هَٰذَا) শব্দদ্বয়ের মাঝে কেন সাকতাহ্ আদায় করা হয়?",
      promptText: "مَّرْقَدِنَا ۜ هَٰذَا",
      options: [
        "To clearly separate the speech of the disbelievers ('Who raised us from our sleeping place?') from the reply of the angels/believers ('This is what the Most Merciful promised')",
        "Because Marqadina is hard to pronounce",
        "Because of a Madd",
        "To drink water"
      ],
      correctIndex: 0,
      explanation: "The Saktah separates the lament of the disbelievers from the glorious proclamation of the angels.",
      explanationBangla: "কাফিরদের আক্ষেপমূলক বাক্য থেকে ফেরেশতা বা মুমিনদের জবাব পৃথক করার জন্য এই দমবিহীন সাকতাহ্ রাখা হয়েছে।"
    },
    {
      id: "q16_30",
      type: "multiple_choice",
      question: "How do you stop on a word ending with a heavy letter carrying Sukūn upon pause (e.g. الْفَلَقِ)?",
      questionBangla: "(الْفَلَقِ) শব্দে ওয়াকফ করার সময় শেষ হরফের ভারী ভাব ও কলকলাহর সমন্বয় কীভাবে হয়?",
      promptText: "الْفَلَقِ",
      options: [
        "Elevate the back of the tongue for Qāf, stop breath and sound completely, then release with a thick, heavy Qalqalah Kubrā",
        "Make it light like Kaaf",
        "Drop the Qaf",
        "Whisper the bounce"
      ],
      correctIndex: 0,
      explanation: "The Qāf must retain full Isti‘lā’ elevation throughout the pause and explosive Qalqalah Kubrā rebound.",
      explanationBangla: "ক্বাফের গভীর ভারী মাখরাজ অক্ষুণ্ণ রেখে মুখ ভরে গম্ভীর বাউন্সের সাথে কলকলায়ে কুবরা দিয়ে থামতে হবে।"
    },
    {
      id: "q16_31",
      type: "multiple_choice",
      question: "What is the rule when stopping on an Ayah ending with Hamzah carrying Dammatayn (e.g. جَزَاءٌ)?",
      questionBangla: "(جَزَاءٌ) শব্দে আয়াত শেষে ওয়াকফ করলে কীভাবে পড়তে হয়?",
      promptText: "جَزَاءٌ",
      options: [
        "Madd Muttaṣil is prolonged for 4, 5, or 6 counts, stopping on the Hamzah with a crisp Sakin catch and ZERO Madd ‘Iwaḍ",
        "Stop with Madd ‘Iwad: 'Jazā’ā'",
        "Drop the Hamzah",
        "Add a Nun"
      ],
      correctIndex: 0,
      explanation: "Because the vowel is Dammatayn, it drops into pure Sukūn on the Hamzah; only Fathatayn yields Madd ‘Iwaḍ.",
      explanationBangla: "দুই পেশ থাকায় কোনো মাদ্দ 'ইওয়াদ হবে না; ৪-৫ বা ৬ হরকত মাদ্দে মুত্তাসিল টেনে হামযাহতে স্পষ্ট সাকিন দিয়ে থামতে হবে।"
    },
    {
      id: "q16_32",
      type: "multiple_choice",
      question: "What is the rule when stopping on an Ayah ending with Hamzah carrying Fatḥatayn (e.g. جَزَاءً)?",
      questionBangla: "(جَزَاءً) শব্দে আয়াত শেষে ওয়াকফ করলে কীভাবে পড়তে হয়?",
      promptText: "جَزَاءً",
      options: [
        "Stop with Madd ‘Iwaḍ: elongate the Hamzah for a 2-count Alif ('Jazā’ā')",
        "Stop with Sukoon on Hamzah",
        "Stop with a whisper",
        "Stop with Tanween"
      ],
      correctIndex: 0,
      explanation: "Double Fathah on Hamzah converts upon pause into a 2-count Alif of Madd ‘Iwaḍ: 'Jazā’ā'.",
      explanationBangla: "দুই যবর থাকায় ওয়াকফকালে তানবীন বাদ গিয়ে ২ হরকত মাদ্দ 'ইওয়াদসহ 'জাযা-আ' থামতে হবে।"
    },
    {
      id: "q16_33",
      type: "multiple_choice",
      question: "In the verse (إِنَّ اللَّهَ لَا يَسْتَحْيِي أَن يَضْرِبَ مَثَلًا مَّا بَعُوضَةً فَمَا فَوْقَهَا), why is it FORBIDDEN to stop on (لَا يَسْتَحْيِي)?",
      questionBangla: "সূরা আল-বাকারার ২৬ নম্বর আয়াতে (إِنَّ اللَّهَ لَا يَسْتَحْيِي) পর্যন্ত পড়ে থেমে যাওয়া কেন মারাত্মক গর্হিত (ওয়াকফে ক্ববীহ্)?",
      promptText: "إِنَّ اللَّهَ لَا يَسْتَحْيِي",
      options: [
        "Because it yields a blasphemous meaning ('Indeed Allah is not ashamed...') without stating what He is not ashamed of (creating a mosquito)",
        "Because the verse is in the 1st Juz",
        "Because of a Madd",
        "Because of a Sukoon"
      ],
      correctIndex: 0,
      explanation: "Stopping there attributes an unbefitting, incomplete sentence to Allah; the verse must continue to complete the sense.",
      explanationBangla: "কারণ এখানে থামলে আল্লাহর শানে একটি অসমাপ্ত ও গর্হিত বাক্য তৈরি হয়; মশার উপমা দেওয়া যে লজ্জা করেন না তা পূর্ণ বলা আবশ্যক।"
    },
    {
      id: "q16_34",
      type: "multiple_choice",
      question: "What does Ali ibn Abi Talib (RA) famously say when defining Tajweed?",
      questionBangla: "হযরত আলী (রা.) তাজবীদের সংজ্ঞায় কী ঐতিহাসিক বাণী উচ্চারণ করেছিলেন?",
      options: [
        "التَّجْوِيدُ هُوَ تَحْسِينُ الْحُرُوفِ وَمَعْرِفَةُ الْوُقُوفِ ('Tajweed is perfecting the letters and mastering the stops')",
        "Tajweed is reading fast",
        "Tajweed is singing",
        "Tajweed is reading without thinking"
      ],
      correctIndex: 0,
      explanation: "Sayyiduna Ali declared: 'Tajweed is the perfection of the letters and the profound mastery of where to stop'.",
      explanationBangla: "হযরত আলী (রা.) বলেন: 'তাজবীদ হলো প্রতিটি হরফ সুন্দর বিশুদ্ধভাবে আদায় করা এবং ওয়াকফের (থামার) স্থানগুলো নিখুঁতভাবে জানা'।"
    },
    {
      id: "q16_35",
      type: "multiple_choice",
      question: "Having mastered all 16 levels of QuranPath, what is the ultimate standard for reciting the Holy Quran?",
      questionBangla: "কুরআনপাথের ১৬টি স্তর সফলভাবে অতিক্রম করার পর কুরআন তিলাওয়াতের সর্বোচ্চ আদর্শ মানদণ্ড কী?",
      options: [
        "Reciting with Tartīl: authentic Makharij, rigorous Tajweed rules, contemplative pacing, and deep reverence for the words of Allah",
        "Speed-reading to finish in one hour",
        "Reading without Tajweed",
        "Only reading silent translations"
      ],
      correctIndex: 0,
      explanation: "As Allah commanded: 'وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا' — reciting with measured clarity, perfected phonetics, and reverence.",
      explanationBangla: "মহান আল্লাহর নির্দেশ: 'কুরআন তিলাওয়াত করুন ধীরস্থিরভাবে, বিশুদ্ধ তাজবীদ ও গভীর অনুধ্যানের সাথে' (তারতীল)।"
    }
  ]
};
