import { Quiz } from "./types";

export const quizLevel18: Quiz = {
  id: "q18",
  levelId: 18,
  title: "Level 18: Grand Quranic Recitation & Complete Khatm Mastery",
  titleBangla: "১৮তম স্তর: কুরআন খতম ও পূর্ণাঙ্গ তারতীল সনদ পরীক্ষা",
  description: "The ultimate 35-question capstone assessment testing full mastery of Makharij, Sifat, Madd systems, Tilawah Sajdahs, and Tartil recitation excellence.",
  descriptionBangla: "কুরআনের পূর্ণাঙ্গ মাখরাজ, সিফাত, মাদ্দ ব্যবস্থা, তিলাওয়াতে সিজদাহ এবং তারতীলের সর্বোচ্চ মানদণ্ডের ওপর ৩৫টি চূড়ান্ত পরীক্ষা।",
  passingScore: 70,
  questions: [
    {
      id: "q18-1",
      question: "What is the comprehensive definition of 'Tartīl' (التَّرْتِيل) according to ‘Ali ibn Abi Talib (رضي الله عنه)?",
      questionBangla: "হযরত আলী (রাযি.)-এর মতে 'তারতীল' (التَّرْتِيل)-এর সর্বশ্রেষ্ঠ সার্বিক সংজ্ঞা কী?",
      promptText: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
      audioPrompt: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
      options: [
        "Tartīl is the Tajweed (perfection) of the letters, and the knowledge of the stops (Al-Waqf)",
        "Reading as quickly as humanly possible",
        "Singing without following any rules",
        "Memorizing words without understanding their pronunciation"
      ],
      correctIndex: 0,
      explanation: "Ali ibn Abi Talib (رضي الله عنه) defined Tartīl concisely: 'التَّرْتِيلُ هُوَ تَجْوِيدُ الْحُرُوفِ وَمَعْرِفَةُ الْوُقُوفِ' — 'Tartīl is perfecting the pronunciation of letters and knowing where and how to stop properly.'",
      explanationBangla: "হযরত আলী (রাঃ) তারতীলের পরিচয় দিয়ে বলেছেন: 'হরফসমূহের বিশুদ্ধ উচ্চারণ (তাজবীদ) করা এবং ওয়াকফের স্থানসমূহ সঠিকভাবে জানা ও মানাই হলো তারতীল।'",
      ruleTag: "Definition of Tartīl",
    },
    {
      id: "q18-2",
      question: "How many Ayat as-Sajdah (verses of prostration) are universally recognized in the Holy Quran?",
      questionBangla: "পবিত্র কুরআনে সর্বসম্মতভাবে মোট কয়টি সিজদাহর আয়াত রয়েছে?",
      options: [
        "14 (or 15 according to Imam Ash-Shafi'i including the second Sajdah in Surah Al-Hajj)",
        "5 verses",
        "30 verses (one per Juz)",
        "114 verses"
      ],
      correctIndex: 0,
      explanation: "There are 14 universally agreed-upon Sajdah verses in the Quran (with a 15th counted by the Shafi'i and Hanbali madhhabs in Surah Al-Hajj verse 77).",
      explanationBangla: "পবিত্র কুরআনে সর্বসম্মতভাবে ১৪টি সিজদাহর আয়াত রয়েছে (ইমাম শাফেয়ী ও আহমদ ইবনে হাম্বল রহ. এর মতে সূরা হজ্জের দ্বিতীয় সিজদাহ সহ মোট ১৫টি)।",
      ruleTag: "Sajdah at-Tilawah",
    },
    {
      id: "q18-3",
      question: "What is the Sunnah invocation upon performing Sajdah at-Tilawah (prostration of recitation)?",
      questionBangla: "তিলাওয়াতে সিজদাহ আদায় করার সময় সুন্নাত দু'আ কোনটি?",
      options: [
        "سَجَدَ وَجْهِي لِلَّذِي خَلَقَهُ وَصَوَّرَهُ وَشَقَّ سَمْعَهُ وَبَصَرَهُ بِحَوْلِهِ وَقُوَّتِهِ",
        "Subhana Rabbiyal A'la 100 times",
        "Ayat al-Kursi",
        "Surah Al-Ikhlas"
      ],
      correctIndex: 0,
      explanation: "The Sunnah du'a narrated in at-Tirmidhi and Abu Dawud is: 'Sajada wajhiya lilladhī khalaqahu wa-ṣawwarahu wa-shaqqa sam‘ahu wa-baṣarahu bi-ḥawlihi wa-quwwatih' ('My face has prostrated to the One Who created it, formed it, and opened its hearing and sight by His might and power').",
      explanationBangla: "তিরমিযী ও আবু দাউদে বর্ণিত সুন্নাত দু'আ: 'সাজাদা ওয়াজহিয়া লিল্লাযী খালাক্বাহু ওয়া সাউওয়ারাহু ওয়া শাক্বক্বা সাম'আহু ওয়া বাসারাহু বি-হাওলিহী ওয়া কুউওয়াতিহ'।",
      ruleTag: "Sajdah at-Tilawah Du'a",
    },
    {
      id: "q18-4",
      question: "What are the three authentic pacing speeds (Marātib at-Tilāwah) of Quranic recitation?",
      questionBangla: "কুরআন তিলাওয়াতের গতি অনুসারে ৩টি বিশুদ্ধ স্তর (মারাতীবুত তিলাওয়াত) কী কী?",
      options: [
        "At-Taḥqīq (slowest educational pace), At-Tadwīr (medium balanced pace), and Al-Ḥadr (fastest pace with full Tajweed)",
        "Shouting, Whispering, and Silent",
        "Singing, Crying, and Speaking",
        "Morning, Afternoon, and Night"
      ],
      correctIndex: 0,
      explanation: "The three speeds are: 1) At-Taḥqīq (slow, measured pace for teaching and precision); 2) At-Tadwīr (moderate pace used in most congregational prayers); and 3) Al-Ḥadr (swift pace for Khatm while retaining all Tajweed rules without dropping vowels).",
      explanationBangla: "কুরআন পাঠের ৩টি স্বীকৃত গতি: ১) তাহক্বীক্ব (শিক্ষাদানের ধীর ও সুস্পষ্ট গতি), ২) তাদবীর (মধ্যম ও ভারসাম্যপূর্ণ গতি), এবং ৩) হদর (তাজবীদ অক্ষুণ্ণ রেখে দ্রুত পাঠের গতি)।",
      ruleTag: "Marātib at-Tilāwah",
    },
    {
      id: "q18-5",
      question: "What is 'Hadhr' (الْحَدْر) recitation, and what common pitfall must be avoided during it?",
      questionBangla: "'হদর' (الْحَدْر) পদ্ধতিতে তিলাওয়াতের পরিচয় কী এবং এখানে কোন ভুল থেকে সতর্ক থাকতে হয়?",
      options: [
        "A fast recitation pace; reciters must guard against swallowing Harakat, dropping Ghunnah, or clipping Madds below minimum counts",
        "Reading without Tajweed",
        "Stopping after every single letter",
        "Skipping verses"
      ],
      correctIndex: 0,
      explanation: "Hadhr is swift recitation used for reviewing memorization. The reciter must never eat vowels (Ikhtilas/Hadhaf), shrink Madd Tabee'i below 2 counts, or drop required Ghunnahs.",
      explanationBangla: "হদর হলো খতম বা রিভিশনের দ্রুত পাঠপদ্ধতি। এখানে দ্রুত পড়তে গিয়ে হরকত খেয়ে ফেলা, মাদ্দের সময় কমানো বা গুন্নাহ বাদ দেওয়া সম্পূর্ণ নিষিদ্ধ।",
      ruleTag: "Hadhr Precautions",
    },
    {
      id: "q18-6",
      question: "Which of the following describes the highest rank of Qalqalah in Hafs ‘an ‘Asim?",
      questionBangla: "হাফস রেওয়ায়েতে কলকলাহর সর্বোচ্চ স্তর কোনটি?",
      promptText: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ",
      audioPrompt: "وَتَبَّ",
      options: [
        "Qalqalah Akbar on a doubled consonant stopped upon (e.g., 'Wa-tabb')",
        "Qalqalah Sughra in the middle of a word",
        "Qalqalah Kubra on an un-doubled letter stopped upon",
        "No Qalqalah on doubled letters"
      ],
      correctIndex: 0,
      explanation: "Qalqalah Akbar (the supreme echo) occurs when stopping on a Mushaddad letter of Qutb Jad ('wa-tabb', 'al-ḥaqq'). The doubled letter is firmly pressed for 2 morae before releasing with explosive rebound.",
      explanationBangla: "তাশদীদযুক্ত কলকলাহ হরফে ওয়াকফ করলে কলকলায়ে আকবার হয় (যেমন: 'ওয়াতাব্ব'); হরফটিকে দুই অক্ষরের ওজন দিয়ে ধরে রেখে সজোরে বাউন্স করাতে হয়।",
      ruleTag: "Qalqalah Ranks",
    },
    {
      id: "q18-7",
      question: "What is the precise duration of Madd Lāzim (الْمَدُّ اللَّازِم) across all its categories?",
      questionBangla: "মাদ্দে লাযিমের সকল প্রকারে টানের নির্ধারিত অকাট্য পরিমাণ কত?",
      options: [
        "Strictly 6 Harakat (counts) — neither less nor more",
        "2 Harakat",
        "4 Harakat",
        "Reciter's personal choice"
      ],
      correctIndex: 0,
      explanation: "Madd Lāzim unanimously demands exactly 6 Harakat (counts) in every authentic transmission, whether Kilmi or Harfi, Muthaqqal or Mukhaffaf.",
      explanationBangla: "মাদ্দে লাযিমের সকল প্রকারে (ক্বিলমী ও হারফী, মুসাক্বক্বাল ও মুখাফফাফ) সর্বসম্মতভাবে নির্দিষ্ট ৬ হরকত টানতেই হবে; এতে কম-বেশি করা হারাম।",
      ruleTag: "Madd Lāzim",
    },
    {
      id: "q18-8",
      question: "When Madd Munfaṣil and Madd Muttaṣil are both recited in the Tariq of Shatibiyyah, what is their standard count?",
      questionBangla: "শাত্বিবিয়্যাহ সনদে মাদ্দে মুত্তাছিল ও মাদ্দে মুনফাছিলের প্রমিত টানের পরিমাণ কত?",
      options: [
        "4 or 5 Harakat, with 4 counts (Tawassuṭ) being the prevailing standard",
        "2 Harakat for both",
        "6 counts for Munfasil and 2 for Muttasil",
        "10 counts"
      ],
      correctIndex: 0,
      explanation: "In Tariq ash-Shatibiyyah, both Madd Muttasil and Madd Munfasil are prolonged for 4 or 5 Harakat, with 4 Harakat (Tawassuṭ) being the standard balanced path.",
      explanationBangla: "শাত্বিবিয়্যাহ পদ্ধতিতে মুত্তাছিল ও মুনফাছিল উভয়টিতে ৪ বা ৫ হরকত টানা যায়; তবে ৪ হরকত (তাওয়াসসুত্ব) হলো সবচেয়ে প্রচলিত ও প্রমিত ধারা।",
      ruleTag: "Madd Muttasil & Munfasil",
    },
    {
      id: "q18-9",
      question: "What is 'Waqf Qabīḥ' (الْوَقْفُ الْقَبِيحُ - Reprehensible Stop) and what is its consequence?",
      questionBangla: "'ওয়াকফে ক্ববীহ' (ঘৃণ্য/অনুপযুক্ত বিরতি) কাকে বলে এবং এতে কী করণীয়?",
      options: [
        "Stopping at a place where meaning is corrupt or insults Allah; it is forbidden unless forced by running out of breath, and reciter must backtrack",
        "Stopping at the end of an ayah",
        "Stopping at a comma",
        "A stop that rewards double XP"
      ],
      correctIndex: 0,
      explanation: "Waqf Qabīḥ alters meaning dangerously (e.g., stopping on 'Lā ilāha' without saying 'illā Allāh', or stopping on 'Fa-waylul-lil-muṣallīn' without continuing). Reciters must never stop intentionally here and must backtrack if forced by breath.",
      explanationBangla: "যেখানে থামলে ভুল বা আপত্তিকর অর্থ প্রকাশ পায় (যেমন: 'লা ইলাহা' বলে থেমে যাওয়া) তাকে ওয়াকফে ক্ববীহ বলে; ইচ্ছাকৃত এমন ওয়াকফ করা হারাম এবং দম শেষ হলে পূর্ব থেকে মিলিয়ে পড়তে হয়।",
      ruleTag: "Waqf Classifications",
    },
    {
      id: "q18-10",
      question: "What is 'Waqf Tāmm' (الْوَقْفُ التَّامُّ - Complete Stop)?",
      questionBangla: "'ওয়াকফে তাম' (পরিপূর্ণ বিরতি) বলতে কী বোঝায়?",
      options: [
        "Stopping on a word that is grammatically and semantically completely independent from what follows",
        "Stopping in the middle of a word",
        "Stopping only at the end of a Surah",
        "Stopping when you feel sleepy"
      ],
      correctIndex: 0,
      explanation: "Waqf Tāmm is stopping at a point where the sentence structure and topic are completely finished, with no grammatical attachment (Lafẓan) or thematic dependence (Ma'nan) on what follows (e.g., end of stories or completed rulings).",
      explanationBangla: "যে স্থানে পূর্ববর্তী বাক্যের ব্যাকরণ ও বিষয়বস্তু উভয় দিক থেকেই অর্থ সম্পূর্ণরূপে সমাপ্ত হয় এবং পরবর্তী বাক্যের সাথে কোনো تعلق থাকে না, তাকে ওয়াকফে তাম বলে।",
      ruleTag: "Waqf Tāmm",
    },
    {
      id: "q18-11",
      question: "What is 'Waqf Kāfī' (الْوَقْفُ الْكَافِي - Sufficient Stop)?",
      questionBangla: "'ওয়াকফে কাফী' (পর্যাপ্ত বিরতি) কাকে বলে?",
      options: [
        "Stopping on a word whose grammar is complete, but whose theme/topic continues in what follows",
        "Stopping after exactly 5 words",
        "Stopping on a letter with Sukoon",
        "Stopping with Ishmām"
      ],
      correctIndex: 0,
      explanation: "Waqf Kāfī is where the sentence is grammatically self-contained, but the meaning continues to develop the same overall subject matter.",
      explanationBangla: "যেখানে বাক্যটি ব্যাকরণগত দিক থেকে স্বয়ংসম্পূর্ণ, কিন্তু সামগ্রিক আলোচনার বিষয়বস্তু পরবর্তী বাক্যেও অব্যাহত থাকে, তাকে ওয়াকফে কাফী বলে।",
      ruleTag: "Waqf Kāfī",
    },
    {
      id: "q18-12",
      question: "What is 'Waqf Ḥasan' (الْوَقْفُ الْحَسَنُ - Good Stop)?",
      questionBangla: "'ওয়াকফে হাসান' (উত্তম বিরতি)-এর বৈশিষ্ট্য কী?",
      options: [
        "Stopping on a word that gives good meaning, but what follows is grammatically attached to it",
        "Stopping only on words of Jannah",
        "A stop made while smiling",
        "Stopping on the word 'Bismillah'"
      ],
      correctIndex: 0,
      explanation: "Waqf Ḥasan yields understandable meaning, but the subsequent word is grammatically bound to it (e.g., stopping on 'Al-Hamdu lillāh'). If stopped here in the middle of an ayah, one must backtrack unless it is the head of an ayah.",
      explanationBangla: "এমন স্থানে থামা যা বোধগম্য অর্থ দেয় কিন্তু পরবর্তী বাক্য ব্যাকরণগতভাবে তার সাথে সম্পর্কিত; আয়াতের মাঝখানে এমন স্থানে থামলে পূর্বের শব্দ থেকে মিলিয়ে শুরু করতে হয়।",
      ruleTag: "Waqf Ḥasan",
    },
    {
      id: "q18-13",
      question: "What is the Sunnah of the Prophet (ﷺ) regarding stopping at the ends of Ayahs (Ra’s al-Āyah)?",
      questionBangla: "আয়াতের সমাপ্তিতে (রা'সুল আয়াহ) ওয়াকফ করার ব্যাপারে রাসুলুল্লাহ (ﷺ)-এর সুন্নাত কী?",
      options: [
        "Stopping at the end of every single ayah, even if the grammatical meaning connects into the next ayah",
        "Always joining 3 ayahs together without stopping",
        "Never stopping at ayah ends",
        "Stopping only on odd-numbered ayahs"
      ],
      correctIndex: 0,
      explanation: "Umm Salamah (رضي الله عنها) narrated that the Prophet (ﷺ) used to pause at the end of each verse: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ' [pause], then 'الرَّحْمَٰنِ الرَّحِيمِ' [pause]. Stopping at verse ends is Sunnah Mutlaqah.",
      explanationBangla: "উম্মে সালামাহ (রাঃ) থেকে বর্ণিত, রাসুলুল্লাহ (ﷺ) প্রতিটি আয়াতের শেষে সুস্পষ্ট বিরতি দিয়ে পড়তেন। আয়াতের মাথায় ওয়াকফ করা একটি স্বতন্ত্র প্রতিষ্ঠিত সুন্নাত।",
      ruleTag: "Sunnah of Ra’s al-Āyah",
    },
    {
      id: "q18-14",
      question: "In the science of Sifāt, which 4 letters possess 'Iṭbāq' (adhesion of tongue to upper palate)?",
      questionBangla: "সিফাত শাস্ত্রে কোন ৪টি হরফে 'ইত্ববাক্ব' (জিহ্বা তালুর সাথে চেপে বসা) বৈশিষ্ট্য বিদ্যমান?",
      options: [
        "ص (Ṣād), ض (Ḍād), ط (Ṭā’), ظ (Ẓā’)",
        "خ (Khā’), غ (Ghayn), ق (Qāf), ك (Kāf)",
        "أ (Alif), ب (Bā’), ت (Tā’), ث (Thā’)",
        "ي (Yā’), ن (Nūn), م (Mīm), و (Wāw)"
      ],
      correctIndex: 0,
      explanation: "The 4 letters of Iṭbāq are Ṣād (ص), Ḍād (ض), Ṭā’ (ط), and Ẓā’ (ظ). They represent the strongest, deepest, and heaviest degree of Tafkheem in Arabic phonetics.",
      explanationBangla: "ইত্ববাক্বের ৪টি হরফ হলো: সোয়াদ (ص), দোয়াদ (ض), ত্বোয়া (ط) ও জোয়া (ظ)। এগুলো আরবি ভাষার সবচেয়ে শক্তিশালী ও ভারী উচ্চারণের হরফ।",
      ruleTag: "Sifāt: Iṭbāq",
    },
    {
      id: "q18-15",
      question: "Which letters are characterized by 'Hams' (audible breath flow: فحثه شخص سكت)?",
      questionBangla: "'হামস' (উচ্চারণকালে বাতাসের অবিরাম প্রবাহ) বৈশিষ্ট্যের হরফসমূহ কোনগুলো?",
      options: [
        "The 10 letters in the phrase: 'فَحَثَّهُ شَخْصٌ سَكَتَ' (Fā, Ḥā, Thā, Hā, Shīn, Khā, Ṣād, Sīn, Kāf, Tā)",
        "All letters of the throat",
        "All vowelled letters",
        "Only Noon and Meem"
      ],
      correctIndex: 0,
      explanation: "The letters of Hams allow natural breath to whisper through the vocal tract upon articulation. They are collected in the mnemonic 'فَحَثَّهُ شَخْصٌ سَكَتَ'.",
      explanationBangla: "হামসের ১০টি হরফ হলো: 'ফাহাসসাহু শাখসুন সাকাত' (ف ح ث هـ ش خ ص س ك ت); এগুলোর উচ্চারণে শ্বাসপ্রবাহ অব্যাহত থাকে।",
      ruleTag: "Sifāt: Hams",
    },
    {
      id: "q18-16",
      question: "What is 'Istiṭālah' (الِاسْتِطَالَةُ) and to which letter is it exclusively attributed?",
      questionBangla: "'ইসতিদ্বালাহ' (প্রসারণ) সিফাতটি কোন হরফের অনন্য একক বৈশিষ্ট্য?",
      options: [
        "Ḍād (ض) — prolonging the sound and pressure along the lateral edge of the tongue to the premolar",
        "Qāf (ق)",
        "Alif (ا)",
        "Lām (ل)"
      ],
      correctIndex: 0,
      explanation: "Istiṭālah belongs exclusively to Ḍād (ض). It is the sliding extension of the tongue edge against the upper molars from back to front until it reaches the makhraj of Lam.",
      explanationBangla: "ইসতিদ্বালাহ কেবল দোয়াদ (ض)-এর বৈশিষ্ট্য; মাখরাজ আদায়কালে জিহ্বার কিনারা মাড়ির দাঁত বরাবর পেছন থেকে সামনে দীর্ঘায়িত হওয়াকে ইসতিদ্বালাহ বলে।",
      ruleTag: "Sifāt: Istiṭālah",
    },
    {
      id: "q18-17",
      question: "What are the 3 letters of 'Ṣafīr' (Whistling sound)?",
      questionBangla: "'সাফীর' (হুইসল বা শিষ সদৃশ তীক্ষ্ণ ধ্বনি) কোন তিনটি হরফের বৈশিষ্ট্য?",
      options: [
        "ص (Ṣād), ز (Zāy), and س (Sīn)",
        "ط (Ṭā’), د (Dāl), and ت (Tā’)",
        "خ (Khā’), غ (Ghayn), and ق (Qāf)",
        "ب (Bā’), م (Mīm), and و (Wāw)"
      ],
      correctIndex: 0,
      explanation: "Ṣafīr is a sharp, resonant hissing sound produced between the tongue tip and the lower and upper incisors, present in Ṣād (ص), Zāy (ز), and Sīn (س).",
      explanationBangla: "সাফীরের হরফ ৩টি: সোয়াদ (ص), যা (ز) এবং সীন (س); এদের উচ্চারণে জিহ্বার ডগা ও দাঁতের ফাঁক দিয়ে তীক্ষ্ণ শিষের ন্যায় ধ্বনি বের হয়।",
      ruleTag: "Sifāt: Ṣafīr",
    },
    {
      id: "q18-18",
      question: "What is 'Inḥirāf' (الِانْحِرَافُ - Deflection) and which two letters carry it?",
      questionBangla: "'ইনহিরাফ' (কণ্ঠস্বরের দিক পরিবর্তন) কোন দুটি হরফের সিফাত?",
      options: [
        "Lām (ل) and Rā’ (ر)",
        "Nūn (ن) and Mīm (م)",
        "Alif (ا) and Yā’ (ي)",
        "Qāf (ق) and Kāf (ك)"
      ],
      correctIndex: 0,
      explanation: "Inḥirāf is the deflection of the sound stream from the tongue tip around its sides (in Lam) or from the sides back towards the tip (in Ra). Only Lam and Ra carry Inhiraf.",
      explanationBangla: "ইনহিরাফের হরফ দুটি: লাম (ل) এবং র (ر); এদের উচ্চারণে ধ্বনি মাখরাজের বাধা পেয়ে পার্শ্বদেশ বা ডগার দিকে বিচ্যুত হয়ে যায়।",
      ruleTag: "Sifāt: Inḥirāf",
    },
    {
      id: "q18-19",
      question: "What is 'Takrīr' (التَّكْرِيرُ - Trill) of Rā’ (ر), and why do scholars teach it?",
      questionBangla: "র (ر) হরফের 'তাকরীর' (জিহ্বার কম্পন) কেন শেখানো হয়?",
      options: [
        "It is taught so reciters learn to control and hide excessive trilling, allowing at most a single subtle tap",
        "It is taught so reciters vibrate the tongue 10 times loudly",
        "It is taught to turn Ra into Zay",
        "It is only for children"
      ],
      correctIndex: 0,
      explanation: "Ibn al-Jazari wrote: 'وَأَخْفِ تَكْرِيرًا إِذَا تُشَدَّدُ' ('Conceal Takreer, especially when doubled'). Takreer is taught to be controlled and prevented from rolling into multiple excessive 'r' sounds.",
      explanationBangla: "ইবনুল জাযারী (রহ.) বলেন: 'তাশদীদের সময় কম্পন গোপন রাখো।' অতিরিক্ত জিভের কম্পন রোধ করার কৌশল শেখার জন্যই এই সিফাতটি অধ্যয়ন করা হয়।",
      ruleTag: "Sifāt: Takrīr",
    },
    {
      id: "q18-20",
      question: "What is 'Tafash-shī' (التَّفَشِّي - Dispersion) and which letter possesses it?",
      questionBangla: "'তাফাশশী' (বাতাসের বিস্তৃতি) কোন হরফের একক বৈশিষ্ট্য?",
      options: [
        "Shīn (ش) — dispersion of breath throughout the mouth until it touches the upper palate",
        "Sīn (س)",
        "Thā’ (ث)",
        "Fā’ (ف)"
      ],
      correctIndex: 0,
      explanation: "Tafash-shī belongs exclusively to Shīn (ش). Upon articulation, the air spreads generously throughout the whole mouth cavity between tongue and palate.",
      explanationBangla: "তাফাশশী একমাত্র শীন (ش)-এর বৈশিষ্ট্য; এর উচ্চারণে মুখগহ্বরে বাতাস চারদিকে ছড়িয়ে পড়ে।",
      ruleTag: "Sifāt: Tafash-shī",
    },
    {
      id: "q18-21",
      question: "What are the 5 ranks of Ghunnah (مراتب الغنة) from strongest to weakest?",
      questionBangla: "তাজবীদে গুন্নাহর শক্তির ক্রমানুসারে ৫টি স্তর কী কী?",
      options: [
        "1) Mushaddad, 2) Mudgham, 3) Mukhfa, 4) Sakin Mudh-har, 5) Mutaharrik (Vowelled)",
        "1) Shouting, 2) Singing, 3) Speaking, 4) Whispering, 5) Silent",
        "1) Alif, 2) Waw, 3) Yaa, 4) Hamzah, 5) Ha",
        "All Ghunnahs are identical with no ranks"
      ],
      correctIndex: 0,
      explanation: "The 5 ranks of Ghunnah: 1) Mushaddad (نّ/مّ - most complete), 2) Idgham with Ghunnah (من يقول), 3) Ikhfa and Iqlab (أنتم/من بعد), 4) Izhar Sakin (أنعمت), and 5) Vowelled letters (نَ/مَ - base origin only).",
      explanationBangla: "গুন্নাহর ৫টি স্তর: ১) তাশদীদযুক্ত (সর্বাধিক পূর্ণ), ২) ইদগাম বাগুন্নাহ, ৩) ইখফা ও ইক্বলাব, ৪) সাকিন ইযহার, এবং ৫) সাধারণ হরকতযুক্ত হরফের মূল ধাতব অস্তিত্ব।",
      ruleTag: "Ghunnah Scales",
    },
    {
      id: "q18-22",
      question: "In Surah Al-Baqarah (2:284), if you stop upon 'فَيَغْفِرُ لِمَن يَشَاءُ وَيُعَذِّبُ مَن يَشَاءُ', what is the state of the final Ra and Ba in Hafs?",
      questionBangla: "সূরা বাকারার ২৮৪ আয়াতে 'ফাইয়াগফিরু' ও 'ইউ'আযযিবু'-তে থামলে র ও বা হরফের অবস্থা কী হয়?",
      promptText: "فَيَغْفِرُ لِمَن يَشَاءُ وَيُعَذِّبُ مَن يَشَاءُ",
      options: [
        "Both stop with Sukoon; Ra becomes light (Muraqqaq) or heavy depending on stopping, and Ba detonates with Qalqalah Kubra",
        "Both become silent",
        "Both are read with Imālah",
        "No stop is allowed"
      ],
      correctIndex: 0,
      explanation: "Upon Waqf, the final Dammah drops into Sukoon. The Ba in 'Yu'adh-dhibْ' exhibits strong Qalqalah Kubra; the Ra in 'Fa-yaghfirْ' is preceded by Kasrah, so it becomes Tarqeeq (light).",
      explanationBangla: "ওয়াকফের ফলে পেশ সাকিনে পরিণত হয়। 'ইউ'আযযিব্'-এর বা হরফে কলকলায়ে কুবরা হয় এবং 'ফাইয়াগফির'-এর র হরফ যেরের পর সাকিন হওয়ায় বারীক (চিকন) হয়।",
      ruleTag: "Advanced Waqf Application",
    },
    {
      id: "q18-23",
      question: "What is 'Madd al-Badal' (مَدُّ الْبَدَلِ) and how many counts does Hafs assign to it?",
      questionBangla: "'মাদ্দে বাদল' (বিকল্প মাদ্দ) কাকে বলে এবং হাফসে এতে কত হরকত টানতে হয়?",
      promptText: "آمَنَ • أُوتِيَ • إِيمَانًا",
      audioPrompt: "آمَنَ الرَّسُولُ",
      options: [
        "Every Hamzah followed by a letter of Madd (e.g., 'Āmana', 'Ūtiya', 'Īmānā'); assigned strictly 2 Harakat",
        "6 Harakat",
        "4 Harakat",
        "No prolongation"
      ],
      correctIndex: 0,
      explanation: "Madd Badal is when the Hamzah precedes the Madd letter (replacing an original second Hamzah Sakinah). In the narration of Hafs ‘an ‘Asim, it is read strictly with natural 2 Harakat (Qasr).",
      explanationBangla: "হামযার পর মাদ্দের হরফ আসলে মাদ্দে বাদল হয় (যেমন: আ-মানা, ঈমানান, ঊতিয়া)। হাফস রেওয়ায়েতে এতে নির্দিষ্টভাবে ২ হরকত (ক্বসর) টানতে হয়।",
      ruleTag: "Madd al-Badal",
    },
    {
      id: "q18-24",
      question: "What is 'Madd ‘Āriḍ li-s-Sukūn' (مَدٌّ عَارِضٌ لِلسُّكُونِ) upon Waqf and what are its allowed counts?",
      questionBangla: "ওয়াকফকালীন 'মাদ্দে আরেয লিসসুকুন'-এ কয় হরকত টানা বৈধ?",
      promptText: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾",
      audioPrompt: "الْعَالَمِينَ",
      options: [
        "2, 4, or 6 Harakat (Qasr, Tawassut, or Tul), with consistency required across the recitation",
        "Only 2 Harakat",
        "Strictly 10 Harakat",
        "1 Harakah"
      ],
      correctIndex: 0,
      explanation: "When stopping causes an incidental Sukoon after a letter of Madd (e.g., 'Al-‘Ālamīnْ', 'Ar-Raḥīmْ'), reciters may choose 2, 4, or 6 Harakat, provided they maintain the same choice consistently throughout that session.",
      explanationBangla: "মাদ্দের হরফের পরের হরফে ওয়াকফজনিত কারণে অস্থায়ী সাকিন হলে মাদ্দে আরেয হয়; এতে ২, ৪ বা ৬ হরকত টানার অনুমতি আছে এবং একই বৈঠকে ধারাবাহিকতা বজায় রাখা সুন্নাত।",
      ruleTag: "Madd ‘Āriḍ li-s-Sukūn",
    },
    {
      id: "q18-25",
      question: "What is 'Madd al-Līn' (مَدُّ اللِّينِ) upon Waqf (e.g., 'خَوْفٍ' and 'الصَّيْفِ')?",
      questionBangla: "ওয়াকফের সময় 'মাদ্দে লীন' (যেমন: 'খওফ' ও 'সাইফ')-এর টানের পরিমাণ কত?",
      promptText: "فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ ﴿٣﴾ الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ ﴿٤﴾",
      audioPrompt: "مِّنْ خَوْفٍ",
      options: [
        "2, 4, or 6 Harakat upon stopping; in continuous recitation it has no Madd (only soft pronunciation)",
        "Always 6 Harakat in all cases",
        "Always 2 Harakat",
        "Forbidden to stop"
      ],
      correctIndex: 0,
      explanation: "When Waw or Yā preceded by Fathah is followed by an accidental Sukoon upon Waqf ('Khawfْ', 'Al-Baytْ'), it takes 2, 4, or 6 counts. When continuing into the next word, there is zero Madd.",
      explanationBangla: "যবরের পর ওয়াও বা ইয়া সাকিনের পর ওয়াকফজনিত কারণে সাকিন আসলে ২, ৪ বা ৬ হরকত টেনে থামা যায়; তবে মিলিয়ে পড়লে এতে কোনো মাদ্দ হয় না।",
      ruleTag: "Madd al-Līn",
    },
    {
      id: "q18-26",
      question: "What is the rule when two identical letters meet across words where the first is a letter of Madd (e.g., 'فِي يَوْمٍ' or 'عَصَوا وَّكَانُوا')?",
      questionBangla: "দুটি সমজাতীয় হরফ পাশাপাশি আসলে প্রথমটি মাদ্দের হরফ হলে (যেমন: 'ফী ইয়াওমিন', 'আ'সাও ওয়াকানু') বিধান কী?",
      promptText: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
      options: [
        "Izhar is mandatory: Idgham is strictly forbidden so the Madd vowel is not destroyed",
        "Complete Idgham with Ghunnah",
        "Iqlab",
        "Tashīl"
      ],
      correctIndex: 0,
      explanation: "To preserve the sacred elongation of Madd, merging a Madd letter into its identical successor is prohibited. The reciter must articulate 'Fī yawm' and '‘Aṣaw wa-kānū' with clear separation (Izhar).",
      explanationBangla: "মাদ্দের মর্যাদা রক্ষা করার জন্য মাদ্দের হরফকে তার সমজাতীয় হরফে ইদগাম করা হারাম; তাই 'ফী ইয়াওম' ও 'আ'সাও ওয়াকানু'-তে স্পষ্ট ইযহার করে পড়তে হয়।",
      ruleTag: "Tamkīn of Madd",
    },
    {
      id: "q18-27",
      question: "What is 'Madd at-Tamkīn' (مَدُّ التَّمْكِينِ) in words like 'حُيِّيتُم' or 'النَّبِيِّينَ'?",
      questionBangla: "'হুয়্যীতুম' বা 'আন-নাবিয়্যীন'-এর মতো শব্দে 'মাদ্দে তামকীন'-এর ভূমিকা কী?",
      promptText: "وَإِذَا حُيِّيتُم بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا",
      options: [
        "Ensuring the long Yā Maddiyah is clearly established and distinguished from the preceding Kasrah/Shaddah Yā",
        "Stopping with Qalqalah",
        "Lengthening to 8 counts",
        "Adding a Hamzah"
      ],
      correctIndex: 0,
      explanation: "Madd Tamkīn gives adequate room (Tamkīn) to the Madd letter so it does not get swallowed by the neighbouring doubled or identical consonant (e.g., 'Ḥuy-yī-tum', 'An-Nabiy-yī-na').",
      explanationBangla: "তাশদীদযুক্ত ইয়া-এর পর মাদ্দের ইয়া আসলে মাদ্দের উচ্চারণকে স্পষ্ট ও সুরক্ষিত করতে যথাযথ সময় ও যত্ন নেওয়াকে মাদ্দে তামকীন বলে।",
      ruleTag: "Madd at-Tamkīn",
    },
    {
      id: "q18-28",
      question: "What is 'Lahn Jaliyy' (الَّلَحْنُ الْجَلِيُّ - Obvious/Clear Error) and what is its Islamic legal ruling?",
      questionBangla: "'লাহনে জালী' (মারাত্মক প্রকাশ্য ভুল)-এর পরিচয় ও শরয়ী হুকুম কী?",
      options: [
        "A clear mistake that changes letters or vowels (e.g., reading Fathah instead of Dammah); it is strictly Ḥarām (forbidden) when done intentionally",
        "A minor defect in holding Ghunnah slightly too short",
        "A mistake that has no sin",
        "Reading in a quiet voice"
      ],
      correctIndex: 0,
      explanation: "Lahn Jaliyy changes the letter itself (e.g., replacing Ṭā with Tā) or alters a grammatical vowel (Harakah), potentially corrupting the divine meaning. Committing it intentionally or through negligence is sinful (Ḥarām).",
      explanationBangla: "হরফ বা হরকত পরিবর্তনজনিত মারাত্মক ভুল (যেমন: যেরের জায়গায় যবর পড়া, বা ত্বোয়া-কে তা পড়া); জেনে-শুনে বা অবহেলা করে এমন ভুল করা সর্বসম্মতভাবে হারাম।",
      ruleTag: "Lahn Jaliyy & Khafiyy",
    },
    {
      id: "q18-29",
      question: "What is 'Lahn Khafiyy' (الَّلَحْنُ الْخَفِيُّ - Hidden/Subtle Error)?",
      questionBangla: "'লাহনে খাফী' (সূক্ষ্ম অপূর্ণতা) বলতে কী বোঝায়?",
      options: [
        "Subtle defects known only to Tajweed scholars, such as slight inaccuracies in Ghunnah duration, Madd counts, or Tarqeeq angles; Makrūh",
        "Changing an ayah to another",
        "Pronouncing letters backwards",
        "Speaking during prayer"
      ],
      correctIndex: 0,
      explanation: "Lahn Khafiyy pertains to the aesthetic perfection of recitation (e.g., holding Ikhfa for 1.5 instead of 2 counts, or slight over-vibration of Ra). It does not alter meaning but deprives recitation of excellence.",
      explanationBangla: "তাজবীদ বিশারদদের নিকট ধরা পড়ে এমন সূক্ষ্ম অপূর্ণতা (যেমন: গুন্নাহর সময় সামান্য কম-বেশি হওয়া, বা মাদ্দে সামান্য কম টানা); এতে অর্থ নষ্ট হয় না তবে তিলাওয়াতের সৌন্দর্য ক্ষুণ্ণ হয়।",
      ruleTag: "Lahn Jaliyy & Khafiyy",
    },
    {
      id: "q18-30",
      question: "When concluding a complete recitation of the Holy Quran (Khatm al-Qur’ān), what is the Sunnah practice regarding Takbīr?",
      questionBangla: "কুরআন খতমের সময় শেষ দিকের সূরাগুলোতে তাকবীর পাঠ করার সুন্নাত নিয়ম কী?",
      options: [
        "Reciting 'Allāhu Akbar' (or with Tahlīl & Taḥmīd) between the final Surahs starting from Surah Ad-Duha to Surah An-Nas",
        "Saying Takbīr only once a year",
        "Stopping recitation permanently",
        "Reciting backwards"
      ],
      correctIndex: 0,
      explanation: "The Sunnah of the Makkan and standard Qurrā’ is reciting Takbīr ('Allāhu Akbar, Lā ilāha illallāhu wallāhu Akbar, wa-lillāhil-ḥamd') between the Surahs from Surah Aḍ-Ḍuḥā until the end of the Quran, marking the return of revelation.",
      explanationBangla: "সূরা দুহা থেকে সূরা নাস পর্যন্ত প্রতিটি সূরার মাঝে তাকবীর ('আল্লাহু আকবার' বা তাহলীল-তাহমীদ সহ) পাঠ করা মক্কী ও আন্তর্জাতিক ক্বারীগণের প্রতিষ্ঠিত সুন্নাত।",
      ruleTag: "Khatm al-Qur’ān Sunnah",
    },
    {
      id: "q18-31",
      question: "Immediately after finishing Surah An-Nās during a Khatm, what is the Sunnah practice known as 'Al-Ḥall wal-Murtaḥal' (الْحَالُّ الْمُرْتَحِلُ)?",
      questionBangla: "খতম শেষে সূরা নাসের পরপরই 'আল-হাল্লুল মুরতাহিল' হিসেবে কী পাঠ করা সুন্নাত?",
      options: [
        "Immediately reciting Surah Al-Fatiha and the first 5 verses of Surah Al-Baqarah to signify an unbroken journey of Quranic study",
        "Closing the Mus-haf forever",
        "Fasting for 40 days",
        "Reciting a poem"
      ],
      correctIndex: 0,
      explanation: "The Prophet (ﷺ) praised the reciter who is 'Al-Ḥall wal-Murtaḥal' (one who arrives at the journey's end and immediately embarks anew). Upon finishing An-Nas, the reciter immediately recites Al-Fatiha and 2:1-5.",
      explanationBangla: "রাসুলুল্লাহ (ﷺ) 'আল-হাল্লুল মুরতাহিল' (ভ্রমণ শেষ করেই পুনরায় নতুন যাত্রা শুরুকারী)-কে ভালোবাসতেন; তাই সূরা নাস শেষ করেই সূরা ফাতিহা ও বাকারার প্রথম ৫ আয়াত পাঠ করে পুনরায় কুরআন শুরু করা হয়।",
      ruleTag: "Al-Ḥall wal-Murtaḥal",
    },
    {
      id: "q18-32",
      question: "What is the spiritual purpose of beautifying one’s voice (Taḥsīn aṣ-Ṣawt) with the Quran?",
      questionBangla: "কুরআন তিলাওয়াতে কণ্ঠস্বরকে সুন্দর (তাহসীনুস সাওত) করার আধ্যাত্মিক উদ্দেশ্য কী?",
      options: [
        "To move the heart to deeper reflection (Tadabbur), humility (Khushū‘), and reverence for Allah’s divine speech, strictly within the boundaries of Tajweed",
        "To seek worldly fame and applause",
        "To show superiority over others",
        "To ignore Tajweed rules in favor of music"
      ],
      correctIndex: 0,
      explanation: "The Prophet (ﷺ) said: 'زَيِّنُوا الْقُرْآنَ بِأَصْوَاتِكُمْ' ('Beautify the Quran with your voices'). Sincere melodic beauty awakens emotional awe and contemplation, never breaking Tajweed rules.",
      explanationBangla: "রাসুলুল্লাহ (ﷺ) বলেছেন: 'তোমাদের কণ্ঠ দিয়ে কুরআনকে সুশোভিত করো।' তাজবীদের নিয়ম অক্ষুণ্ণ রেখে সুললিত তিলাওয়াত অন্তরে আল্লাহর ভীতি ও গভীর তাদাব্বুর জাগ্রত করে।",
      ruleTag: "Spiritual Etiquette of Tartīl",
    },
    {
      id: "q18-33",
      question: "Which iconic classical poem serves as the supreme foundation of Tajweed science studied across the Muslim world?",
      questionBangla: "মুসলিম বিশ্বে তাজবীদ শাস্ত্রের সর্বশ্রেষ্ঠ প্রামাণ্য মৌলিক কাব্যগ্রন্থ কোনটি?",
      options: [
        "Matn al-Jazariyyah (by Imam Muhammad ibn al-Jazari, d. 833 AH)",
        "Alfiyyah ibn Malik",
        "Qasidah Burdah",
        "Mu'allaqat"
      ],
      correctIndex: 0,
      explanation: "Imam Ibn al-Jazari's poetic masterpiece (Manẓūmat al-Muqaddimah al-Jazariyyah) is the universal pedagogical cornerstone for Makharij, Sifat, and all Tajweed sciences.",
      explanationBangla: "ইমাম মুহাম্মদ ইবনুল জাযারী (র.) রচিত 'মানযুমাতুল মুকাদ্দিমাহ আল-জাযারিয়্যাহ' হলো মাখরাজ, সিফাত ও তাজবীদের বিশ্বজনীন মূল প্রামাণ্য গ্রন্থ।",
      ruleTag: "Tajweed Heritage",
    },
    {
      id: "q18-34",
      question: "What is an 'Ijāzah with Sanad' (الإِجَازَةُ بِالسَّنَدِ) in Quranic recitation?",
      questionBangla: "কুরআন তিলাওয়াত শাস্ত্রে 'সনদসহ ইজাযাহ' বলতে কী বোঝায়?",
      options: [
        "An unbroken, authenticated chain of reciter-to-teacher transmission reaching directly back to the Prophet Muhammad (ﷺ)",
        "A printed certificate bought with money",
        "A degree in secular history",
        "A government passport"
      ],
      correctIndex: 0,
      explanation: "An Ijāzah is an unbroken golden chain (Sanad Muttasil) where a qualified master verifies a student's recitation from Al-Fatiha to An-Nas, granting permission to teach exactly as received from the Prophet (ﷺ).",
      explanationBangla: "ইজাযাহ হলো শিক্ষক-ছাত্রের অবিচ্ছিন্ন সোনালী সনদ যা ছাত্রের নির্ভুল তিলাওয়াত যাচাই শেষে রাসুলুল্লাহ (ﷺ) পর্যন্ত পরম্পরাযুক্ত বিশুদ্ধ পাঠের কর্তৃত্ব প্রদান করে।",
      ruleTag: "Ijāzah & Sanad Tradition",
    },
    {
      id: "q18-35",
      question: "What is the ultimate lifelong commitment of a true student of the Quran who reaches this capstone level?",
      questionBangla: "এই সর্বোচ্চ স্তরে পৌঁছানোর পর একজন প্রকৃত কুরআন শিক্ষার্থীর আজীবন অঙ্গীকার কী হওয়া উচিত?",
      options: [
        "To recite daily with Tartīl, reflect upon its meanings (Tadabbur), embody its noble ethics, and teach it sincerely for the pleasure of Allah",
        "To stop reading because the course is finished",
        "To boast about knowledge to people",
        "To focus only on theory without practical recitation"
      ],
      correctIndex: 0,
      explanation: "The journey with the Quran never ends. True mastery means daily recitation with Tartīl, applying its injunctions in daily character, and fulfilling the Prophet’s guidance: 'The best of you are those who learn the Quran and teach it.'",
      explanationBangla: "কুরআনের সাথে সম্পর্ক কখনো শেষ হয় না; প্রকৃত অর্জন হলো দৈনিক তারতীলের সাথে পাঠ করা, অর্থের গভীর উপলব্ধি ও আমলে তা বাস্তবায়ন করা এবং রাসুলুল্লাহ (ﷺ)-এর শ্রেষ্ঠত্বের সুসংবাদ অর্জনে আত্মনিয়োগ করা।",
      ruleTag: "Lifelong Quranic Devotion",
    },
  ],
};
