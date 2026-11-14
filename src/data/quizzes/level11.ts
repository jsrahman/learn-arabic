import { Quiz } from "./types";

export const quizLevel11: Quiz = {
  id: "q11",
  levelId: 11,
  title: "Level 11: Mīm Sākinah & Ghunnah Mushaddadah Master Challenge",
  titleBangla: "লেভেল ১১: মীম সাকিন ও ওয়াজিব গুন্নাহর গভীর পরীক্ষা",
  description: "Dissect the 3 rules of Meem Sakinah (Idgham Shafawi, Ikhfa Shafawi, Izhar Shafawi), the grave warning at Waw & Faa, and Ghunnah scales.",
  descriptionBangla: "মীম সাকিনের ৩ বিধান (ইদগামে শাফাবী, ইখফায়ে শাফাবী, ইযহারে শাফাবী), ওয়াও ও ফা-এর ক্ষেত্রে বিশেষ সতর্কতা এবং গুন্নাহর স্তরভেদ পরীক্ষা।",
  passingScore: 70,
  questions: [
    {
      id: "q11_1",
      type: "multiple_choice",
      question: "How many rules apply to Mīm Sākinah (الْمِيمُ السَّاكِنَةُ) when meeting the letters of the Arabic alphabet?",
      questionBangla: "আরবি বর্ণমালার হরফগুলোর মুখোমুখি হলে মীম সাকিনের মোট কয়টি বিধান কার্যকর হয়?",
      options: [
        "Exactly THREE rules: Idghām Shafawī (إدغام شفوي), Ikhfā’ Shafawī (إخفاء شفوي), and Iẓhār Shafawī (إظهار شفوي)",
        "Four rules",
        "Two rules",
        "Five rules"
      ],
      correctIndex: 0,
      explanation: "Mīm Sākinah has 3 rules: Idghām Shafawi (with Mīm), Ikhfā’ Shafawi (with Bā’), and Iẓhār Shafawi (with remaining 26 letters).",
      explanationBangla: "মীম সাকিনের ৩টি বিধান রয়েছে: ইদগামে শাফাবী (মীমের সাথে), ইখফায়ে শাফাবী (বা-এর সাথে), এবং ইযহারে শাফাবী (অবশিষ্ট ২৬ হরফের সাথে)।"
    },
    {
      id: "q11_2",
      type: "multiple_choice",
      question: "Why are the rules of Mīm Sākinah termed 'Shafawī' (شَفَوِيٌّ - labial)?",
      questionBangla: "মীম সাকিনের নিয়মগুলোকে কেন 'শাফাবী' বা ওষ্ঠীয় (ঠোঁট সম্পর্কিত) বলা হয়?",
      options: [
        "Because the articulation point of the letter Mīm is strictly Ash-Shafatān (the two lips)",
        "Because it was discovered by Imam Shafawi",
        "Because it requires blowing air",
        "Because of the throat"
      ],
      correctIndex: 0,
      explanation: "‘Shafawi’ derives from Shafah (lip); since Mīm is formed at the lips, all its relational Tajweed rules bear this title.",
      explanationBangla: "'শাফাহ্' অর্থ ঠোঁট; যেহেতু মীম হরফটির মূল মাখরাজ দুই ঠোঁট (আশ-শাফাতান), তাই এর তিনটি বিধানকেই 'শাফাবী' বলা হয়।"
    },
    {
      id: "q11_3",
      type: "multiple_choice",
      question: "What is Idghām Shafawī (also termed Idghām Mithlayn Ṣaghīr)?",
      questionBangla: "ইদগামে শাফাবী (বা ইদগামে মিছলাইনে সগীর) কাকে বলে?",
      promptText: "لَهُم مَّا  /  كُنتُم مُّؤْمِنِينَ",
      options: [
        "When Mīm Sākinah meets a vowelled Mīm (مْ + م), merging into a single doubled Mīm with 2 counts of Ghunnah",
        "When Meem meets Baa",
        "When Meem meets Noon",
        "When Meem has a Sukoon at the end of an Ayah"
      ],
      correctIndex: 0,
      explanation: "When Sakin Meem meets Mutaharrik Meem, they fuse into one Mushaddad Meem with a complete 2-count nasal Ghunnah.",
      explanationBangla: "মীম সাকিনের পর অপর একটি হরকতযুক্ত মীম আসলে উভয় মীম একীভূত হয়ে তাশদীদযুক্ত হয় এবং ২ হরকত গুন্নাহসহ উচ্চারিত হয়।"
    },
    {
      id: "q11_4",
      type: "multiple_choice",
      question: "In the phrase (لَهُم مَّا يَشَاءُونَ), how is it pronounced?",
      questionBangla: "(لَهُم مَّا يَشَاءُونَ) বাক্যাংশটি কীভাবে তিলাওয়াত করতে হবে?",
      promptText: "لَهُم مَّا",
      options: [
        "‘Lahum-mā’ with closed lips sustaining an obligatory 2-count Ghunnah before opening the vowel",
        "‘Lahum mā’ with a sharp pause between them",
        "‘Lahun-mā’",
        "‘Lahu-mā’"
      ],
      correctIndex: 0,
      explanation: "The two Meems merge completely with 2 counts of nasal resonance: 'Lahum-mā'.",
      explanationBangla: "উভয় মীম ঠোঁট বন্ধ রেখে ২ হরকত নাসিক্য গুন্নাহ সহযোগে 'লাহুম্-মা' হিসেবে একীভূত হয়ে উচ্চারিত হবে।"
    },
    {
      id: "q11_5",
      type: "multiple_choice",
      question: "What is Ikhfā’ Shafawī (الْإِخْفَاءُ الشَّفَوِيُّ)?",
      questionBangla: "ইখফায়ে শাফাবী (الْإِخْفَاءُ الشَّفَوِيُّ) কী?",
      promptText: "تَرْمِيهِم بِحِجَارَةٍ",
      options: [
        "When Mīm Sākinah is followed by the single letter Bā’ (ب), concealing the Mīm with gentle lip contact and 2 counts of Ghunnah",
        "When Meem meets Noon",
        "When Meem meets a heavy letter",
        "When Meem has two dots"
      ],
      correctIndex: 0,
      explanation: "Ikhfā’ Shafawi occurs strictly when Mīm Sākinah meets Bā’ (ب), holding a gentle 2-count nasal Ghunnah.",
      explanationBangla: "মীম সাকিনের পর বা (ب) হরফ আসলে ঠোঁট দুটি আলতোভাবে লাগিয়ে ২ হরকত গুন্নাহসহ মীম গোপন করাকে ইখফায়ে শাফাবী বলে।"
    },
    {
      id: "q11_6",
      type: "multiple_choice",
      question: "In (تَرْمِيهِم بِحِجَارَةٍ), how is the Mīm Sākinah recited?",
      questionBangla: "সূরা ফীলের (تَرْمِيهِم بِحِجَارَةٍ) আয়াতে মীম সাকিন কীভাবে আদায় করতে হবে?",
      promptText: "تَرْمِيهِم بِحِجَارَةٍ",
      options: [
        "‘Tarmeehim-biḥijārah’ with gentle lip contact and 2 counts of nasal Ghunnah on the Mīm before releasing into Bā’",
        "Clear Izhar without Ghunnah",
        "Double Baa without Meem",
        "Complete silence"
      ],
      correctIndex: 0,
      explanation: "Mīm meets Bā’, mandating Ikhfā’ Shafawi with 2 counts of nasal Ghunnah: 'Tarmeehim-biḥijārah'.",
      explanationBangla: "মীম সাকিনের পর বা আসায় ঠোঁট আলতোভাবে মিলিয়ে ২ মাত্রা গুন্নাহর সাথে 'তারমীহিম্-বিহিজারাহ্' পড়তে হবে।"
    },
    {
      id: "q11_7",
      type: "multiple_choice",
      question: "What is Iẓhār Shafawī (الْإِظْهَارُ الشَّفَوِيُّ)?",
      questionBangla: "ইযহারে শাফাবী (الْإِظْهَارُ الشَّفَوِيُّ) কাকে বলে?",
      options: [
        "Pronouncing Mīm Sākinah clearly from both lips without extra Ghunnah whenever followed by ANY of the remaining 26 letters",
        "Merging Meem into all letters",
        "Making Meem silent",
        "Adding a 6-count Madd"
      ],
      correctIndex: 0,
      explanation: "Whenever Sakin Meem meets any letter other than Mīm and Bā’ (26 letters), it must be articulated with pure Izhar Shafawi.",
      explanationBangla: "মীম ও বা ব্যতীত অবশিষ্ট ২৬টি হরফের যে কোনোটি মীম সাকিনের পর আসলে মীমকে কোনো অতিরিক্ত গুন্নাহ ছাড়া স্পষ্ট পড়াকে ইযহারে শাফাবী বলে।"
    },
    {
      id: "q11_8",
      type: "multiple_choice",
      question: "Which two letters carry the SEVEREST WARNING (Ashaddu Iẓhāran) against mistakenly concealing Mīm Sākinah?",
      questionBangla: "মীম সাকিন স্পষ্ট (ইযহার) করার ক্ষেত্রে কোন দুটি হরফের পূর্বে ইমাম আল-জাযারী সবচেয়ে কঠোর সতর্কতা উচ্চারণ করেছেন?",
      promptText: "و  /  ف",
      options: [
        "Wāw (و) and Fā’ (ف)",
        "Qāf and Kāf",
        "Alif and Yā’",
        "Hamzah and Hā’"
      ],
      correctIndex: 0,
      explanation: "Imam al-Jazari warned: 'وَاحْذَرْ لَدَى وَاوٍ وَفَا أَنْ تَخْتَفِي' because Mīm shares its Makhraj with Wāw and is very close to Fā’.",
      explanationBangla: "ওয়াও (و) এবং ফা (ف)-এর পূর্বে মীম সাকিন আসলে তা অনিচ্ছাকৃত ইখফা হয়ে যাওয়ার তীব্র ঝুঁকি থাকে, তাই এখানে সবচেয়ে স্পষ্ট ইযহার করতে হয়।"
    },
    {
      id: "q11_9",
      type: "multiple_choice",
      question: "Why is there an instinctive temptation to wrongly conceal (Ikhfā’) Mīm before Wāw (و) or Fā’ (ف)?",
      questionBangla: "ওয়াও বা ফা-এর পূর্বে মীম সাকিনকে ভুলবশত ইখফা বা গুন্নাহ করে ফেলার মনস্তাত্ত্বিক কারণ কী?",
      options: [
        "Because Mīm shares the exact same organ (the lips) with Wāw (Ittiḥād) and is right next to Fā’ (Qurb), so the tongue/lips naturally want to merge them",
        "Because Waw and Faa are heavy letters",
        "Because of an error in the printing press",
        "Because Waw is a vowel"
      ],
      correctIndex: 0,
      explanation: "Shared articulation with Wāw and proximity to Fā’ tempts the reciter to assimilate or conceal; conscious Izhar is required.",
      explanationBangla: "কারণ ওয়াও মীমের সমজাতীয় ওষ্ঠীয় হরফ এবং ফা অত্যন্ত নিকটবর্তী; ফলে অসাবধানতায় ঠোঁট এদের মিলিয়ে ফেলে, যা থেকে বাঁচা অপরিহার্য।"
    },
    {
      id: "q11_10",
      type: "multiple_choice",
      question: "In the verse (عَلَيْهِمْ وَلَا الضَّالِّينَ), how must the Mīm in (عَلَيْهِمْ) be recited before (وَلَا)?",
      questionBangla: "(عَلَيْهِمْ وَلَا الضَّالِّينَ) তিলাওয়াতে 'আলাইহিম্' এর মীম হরফটিকে 'ওয়ালা'র পূর্বে কীভাবে পড়তে হবে?",
      promptText: "عَلَيْهِمْ وَلَا",
      options: [
        "With sharp, decisive Iẓhār Shafawī: close the lips and release cleanly without dragging, merging, or nasalizing into the Wāw",
        "With a 2-count Ikhfa Ghunnah",
        "With Idgham into Waw",
        "By pausing for 2 seconds"
      ],
      correctIndex: 0,
      explanation: "Reciters must articulate the Meem crisply without dragging any nasal Ghunnah into the Wāw: '‘Alayhim walad-dālleen'.",
      explanationBangla: "মীম সাকিনের মাখরাজে দুই ঠোঁট সম্পূর্ণ বন্ধ করে কোনো গুন্নাহ বা ইখফা ব্যতিরেকে অত্যন্ত স্পষ্ট ইযহারে শাফাবী করতে হবে।"
    },
    {
      id: "q11_11",
      type: "multiple_choice",
      question: "In the word (هُمْ فِيهَا), what rule applies to the Mīm Sākinah?",
      questionBangla: "(هُمْ فِيهَا) বাক্যাংশে মীম সাকিনের ক্ষেত্রে কোন নিয়ম প্রযোজ্য?",
      promptText: "هُمْ فِيهَا",
      options: [
        "Firm Iẓhār Shafawī (closing lips completely on Mīm before opening teeth onto lip for Fā’)",
        "Ikhfa Shafawi",
        "Idgham Shafawi",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Mīm must be closed cleanly on the lips before articulating Fā’ with the upper teeth: 'Hum feehā'.",
      explanationBangla: "ফা-এর পূর্বে কঠোরভাবে সতর্কতার সাথে পরিষ্কার ইযহারে শাফাবী করতে হবে: 'হুম্ ফীহা'।"
    },
    {
      id: "q11_12",
      type: "multiple_choice",
      question: "Can Iẓhār Shafawī occur within a single word as well as across two words?",
      questionBangla: "ইযহারে শাফাবী কি এক শব্দের ভেতরেও হতে পারে নাকি কেবল দুই শব্দের মাঝে হয়?",
      promptText: "أَنْعَمْتَ  /  الْحَمْدُ",
      options: [
        "Yes, it occurs both within a single word (e.g. أَنْعَمْتَ, الْحَمْدُ, تَمْشُونَ) and across two words",
        "No, only between two words",
        "Only at the end of an Ayah",
        "Only in nouns"
      ],
      correctIndex: 0,
      explanation: "Izhar Shafawi occurs within one word (e.g. Al-Hamdu, An‘amta) and across words (e.g. Hum feeha).",
      explanationBangla: "হ্যাঁ, এটি এক শব্দের মাঝেও হয় (যেমন: আল-হামদু, আন্'আম্তা) এবং দুই শব্দের মাঝেও হয়।"
    },
    {
      id: "q11_13",
      type: "multiple_choice",
      question: "Can Idghām Shafawī (مْ + م) occur within a single word in the Quran?",
      questionBangla: "ইদগামে শাফাবী (মীম সাকিন + মীম) কি এক শব্দের ভেতরে সংঘটিত হতে পারে?",
      options: [
        "No, in the Quran it only occurs across TWO words, or in detached Quranic opening letters (Hurūf Muqaṭṭa‘ah like الم)",
        "Yes, in hundreds of single words",
        "Only in verbs",
        "Only in Surah Yasin"
      ],
      correctIndex: 0,
      explanation: "In single standard words, two Meems are written natively with a Shaddah; Idgham Shafawi is between two words or in Muqatta‘at.",
      explanationBangla: "একক শব্দে এটি সরাসরি তাশদীদযুক্ত মীম হিসেবে লেখা হয়; ফলে ইদগামে শাফাবী মূলত দুই শব্দের মিলনস্থলে বা হুরুফে মুক্বাত্ত্বা'আতে ঘটে।"
    },
    {
      id: "q11_14",
      type: "multiple_choice",
      question: "In the disjointed opening letters (الم - Alif-Lām-Mīm), what rule applies between the ending of Lām and beginning of Mīm?",
      questionBangla: "হুরুফে মুক্বাত্ত্বা'আত (الم) পড়ার সময় লামের শেষ ও মীমের শুরুর সংযোগে কোন নিয়মটি কার্যকর হয়?",
      promptText: "الم (لَامْ مِّيمْ)",
      options: [
        "Idghām Shafawī / Mithlayn with a full 2-count nasal Ghunnah between the Mīm Sākinah of Lām and the vowelled Mīm",
        "Izhar Halqi",
        "Ikhfa",
        "Qalqalah"
      ],
      correctIndex: 0,
      explanation: "‘Lām’ ends in a Sakin Mīm; the word ‘Mīm’ starts with a vowelled Mīm. Merging them produces Idghām Shafawi with 2 counts of Ghunnah.",
      explanationBangla: "'লাম্' শেষ হয় সাকিন মীমে এবং 'মীম' শুরু হয় হরকতযুক্ত মীমে; ফলে তাদের মাঝে ২ হরকত গুন্নাহসহ ইদগামে শাফাবী হয়।"
    },
    {
      id: "q11_15",
      type: "multiple_choice",
      question: "What is Ghunnah Mushaddadah (الْغُنَّةُ الْمُشَدَّدَةُ)?",
      questionBangla: "ওয়াজিব গুন্নাহ বা গুন্নাহে মুশাদ্দাদাহ্ (الْغُنَّةُ الْمُشَدَّدَةُ) কী?",
      promptText: "إِنَّ  /  عَمَّ",
      options: [
        "The obligatory 2-count nasal resonance that MUST be held whenever the letters Nūn or Mīm carry a Shaddah (نّ / مّ)",
        "A 6-count Madd on Alif",
        "A pause on the last word of a Surah",
        "A whistling sound"
      ],
      correctIndex: 0,
      explanation: "Whenever Nūn or Mīm has a Shaddah, holding the nasal vibration for 2 counts is an absolute obligation (Wājib).",
      explanationBangla: "নূন বা মীম হরফে তাশদীদ থাকলে নাসারন্ধ্রের মাধ্যমে ২ হরকত পরিমাণ গুন্নাহ ধরে রাখা ওয়াজিব।"
    },
    {
      id: "q11_16",
      type: "multiple_choice",
      question: "What are the 4 hierarchical ranks of Ghunnah (Marātib al-Ghunnah) from strongest to weakest?",
      questionBangla: "তাজবীদ শাস্ত্রে গুন্নাহর ৪টি মর্যাদাগত স্তর (মারাতীবুল গুন্নাহ্) শক্তিশালী থেকে দুর্বল ক্রমানুসারে কী কী?",
      options: [
        "1. Akmal (Mushaddad & Complete Idghām); 2. Kāmilah (Ikhfā’, Iqlāb, Incomplete Idghām); 3. Nāqiṣah (Sākin Nūn & Mīm in Iẓhār); 4. Anqaṣ (Mutaharrik vowelled Nūn & Mīm)",
        "1. Izhar; 2. Idgham; 3. Ikhfa; 4. Iqlab",
        "1. Fathah; 2. Dammah; 3. Kasrah; 4. Sukoon",
        "All Ghunnahs are identical with zero hierarchy"
      ],
      correctIndex: 0,
      explanation: "Scholars establish: Akmal (most complete on نّ and مّ), Kāmilah (full on Ikhfa/Iqlab), Nāqiṣah (intrinsic in Sakin letters), and Anqaṣ (in vowelled letters).",
      explanationBangla: "১. আকমাল (তাশদীদ ও পূর্ণ ইদগাম); ২. ক্বামিলাহ্ (ইখফা ও ইক্বলাব); ৩. নাকিসাহ্ (সাকিন হরফে ইযহার); ৪. আন্ক্বাস (হরকতযুক্ত হরফের অভ্যন্তরীণ সুর)।"
    },
    {
      id: "q11_17",
      type: "multiple_choice",
      question: "Does a single Mutaharrik Nūn or Mīm (e.g. نَ or مَ) contain Ghunnah?",
      questionBangla: "একটি সাধারণ যবরযুক্ত নূন বা মীম হরফেও (যেমন: نَ বা مَ) কি কোনো গুন্নাহ থাকে?",
      options: [
        "YES, Ghunnah is an intrinsic, inseparable composite trait (Ṣifah Lāzimah) of Nūn and Mīm, but in its shortest/lowest rank (Anqaṣ)",
        "NO, vowelled letters have zero Ghunnah",
        "Only when reading loudly",
        "Only in Egyptian recitations"
      ],
      correctIndex: 0,
      explanation: "Nūn and Mīm can never be articulated without nasal resonance; it is permanently built into their flesh and sound.",
      explanationBangla: "হ্যাঁ, গুন্নাহ নূন ও মীমের অবিচ্ছেদ্য সহজাত বৈশিষ্ট্য; হরকতযুক্ত অবস্থাতেও এর সর্বনিম্ন স্তর (আন্ক্বাস) সর্বদাই বিদ্যমান থাকে।"
    },
    {
      id: "q11_18",
      type: "multiple_choice",
      question: "In the word (أَمْتَارًا), what rule governs the Mīm Sākinah?",
      questionBangla: "(أَمْتَارًا) শব্দে মীম সাকিনের হুকুম কী?",
      promptText: "أَمْتَارًا",
      options: [
        "Iẓhār Shafawī (clear Mīm followed by Tā’)",
        "Ikhfa Shafawi",
        "Idgham Shafawi",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Tā’ is an Izhar Shafawi letter; the Meem is articulated cleanly from the lips without extra prolongation.",
      explanationBangla: "তা (ت) ইযহারে শাফাবীর হরফ হওয়ায় মীমকে কোনো অতিরিক্ত টান ছাড়া পরিষ্কার পড়তে হবে।"
    },
    {
      id: "q11_19",
      type: "multiple_choice",
      question: "In (أَمْ لَمْ تُنذِرْهُمْ), how many instances of Mīm Sākinah are present in this phrase?",
      questionBangla: "(أَمْ لَمْ تُنذِرْهُمْ) বাক্যাংশে কতটি মীম সাকিন রয়েছে?",
      promptText: "أَمْ لَمْ تُنذِرْهُمْ",
      options: [
        "Three instances: (أَمْ), (لَمْ), and ending of (تُنذِرْهُمْ) — all three governed by Iẓhār Shafawī",
        "Two instances",
        "One instance",
        "Four instances"
      ],
      correctIndex: 0,
      explanation: "There are 3 Sakin Meems: in ‘Am’ (before Lām), ‘Lam’ (before Tā’), and ‘tundhirhum’. All 3 are Izhar Shafawi.",
      explanationBangla: "মোট ৩টি মীম সাকিন রয়েছে: 'আম্', 'লাম্', এবং 'তুনযিরহুম'-এর শেষে; এবং তিনটিতেই ইযহারে শাফাবী প্রযোজ্য।"
    },
    {
      id: "q11_20",
      type: "multiple_choice",
      question: "In the phrase (يَعْتَصِم بِاللَّهِ), what rule applies to the Mīm Sākinah?",
      questionBangla: "(يَعْتَصِم بِاللَّهِ) বাক্যাংশে মীম সাকিনে কোন তাজবীদ নিয়ম কার্যকর?",
      promptText: "يَعْتَصِم بِاللَّهِ",
      options: [
        "Ikhfā’ Shafawī because it is followed by Bā’ (ب)",
        "Izhar Shafawi",
        "Idgham Shafawi",
        "Qalqalah"
      ],
      correctIndex: 0,
      explanation: "Mīm meets Bā’, mandating Ikhfā’ Shafawī with 2 counts of nasal Ghunnah.",
      explanationBangla: "মীম সাকিনের পর বা আসায় ২ হরকত গুন্নাহসহ ইখফায়ে শাফাবী করতে হবে: 'ইয়া'তাস্বিম্-ব иллюাহ'।"
    },
    {
      id: "q11_21",
      type: "multiple_choice",
      question: "In the word (أَمْوَاتٌ), why must special care be taken on the Mīm Sākinah?",
      questionBangla: "(أَمْوَاتٌ) শব্দে মীম সাকিন পড়ার সময় কেন বিশেষ সতর্কতা অবলম্বন করতে হয়?",
      promptText: "أَمْوَاتٌ",
      options: [
        "Because it is followed by Wāw (و), which risks slipping into an accidental Ikhfā’ due to shared lip articulation",
        "Because Mīm has a Fathah",
        "Because of Tanween",
        "Because Waw is a heavy letter"
      ],
      correctIndex: 0,
      explanation: "The reciter must firmly close the lips on Mīm and articulate clear Izhar Shafawi before forming the Wāw.",
      explanationBangla: "কারণ পরবর্তী হরফ ওয়াও হওয়ায় ঠোঁটের অসাবধানতায় মীম গোপন হয়ে যাওয়ার ভয় থাকে; তাই সচেতনভাবে ইযহার করতে হয়।"
    },
    {
      id: "q11_22",
      type: "multiple_choice",
      question: "What is the visual indicator in the Uthmani script that a Mīm Sākinah has Iẓhār Shafawī?",
      questionBangla: "উসমানি মুসহাফে মীম সাকিনে ইযহারে শাফাবী হওয়ার দৃশ্যমান চিহ্ন কোনটি?",
      options: [
        "A clear, visible Sukūn (head of Khā’ / ۡ) is printed directly ABOVE the Mīm",
        "The Meem has a Shaddah",
        "The Meem is completely naked with no mark above it",
        "A small dot is below"
      ],
      correctIndex: 0,
      explanation: "For Izhar Shafawi, the Sukūn is printed visibly above the Mīm; for Idgham or Ikhfa Shafawi, the Meem is left unvowelled (naked).",
      explanationBangla: "ইযহারে শাফাবীর ক্ষেত্রে মীমের মাথায় স্পষ্ট সুকূন (জযম) মুদ্রিত থাকে; আর ইদগাম বা ইখফায় মীম হরকতচিহ্নহীন থাকে।"
    },
    {
      id: "q11_23",
      type: "multiple_choice",
      question: "In the phrase (أَطْعَمَهُم مِّن جُوعٍ), what rule applies to the Mīm Sākinah in (أَطْعَمَهُم)?",
      questionBangla: "সূরা কুরাইশের (أَطْعَمَهُم مِّن جُوعٍ) আয়াতে মীম সাকিনের বিধান কী?",
      promptText: "أَطْعَمَهُم مِّن",
      options: [
        "Idghām Shafawī (Mīm Sākinah merges into the next Mīm with 2 counts of Ghunnah)",
        "Izhar Shafawi",
        "Ikhfa Shafawi",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Sakin Mīm meets vowelled Mīm, producing Idgham Shafawi with full nasal resonance.",
      explanationBangla: "মীম সাকিন পরবর্তী মীমে একীভূত হয়ে ২ হরকত গুন্নাহসহ ইদগামে শাফাবী হবে।"
    },
    {
      id: "q11_24",
      type: "multiple_choice",
      question: "In (وَآمَنَهُم مِّنْ خَوْفٍ), what rule applies to the Mīm Sākinah in (وَآمَنَهُم)?",
      questionBangla: "(وَآمَنَهُم مِّنْ خَوْفٍ) অংশে মীম সাকিনের হুকুম কী?",
      promptText: "وَآمَنَهُم مِّنْ",
      options: [
        "Idghām Shafawī with 2 counts of Ghunnah",
        "Izhar Shafawi",
        "Ikhfa Shafawi",
        "Idgham without Ghunnah"
      ],
      correctIndex: 0,
      explanation: "The Sakin Mīm merges into the vowelled Mīm with full 2-count Ghunnah.",
      explanationBangla: "সাকিন মীম পরবর্তী মীমে গুন্নাহসহ মিশে ইদগামে শাফাবী তৈরি করেছে।"
    },
    {
      id: "q11_25",
      type: "multiple_choice",
      question: "In the word (عَمَّ يَتَسَاءَلُونَ), what rule applies to the Mīm in (عَمَّ)?",
      questionBangla: "সূরা নাবার শুরুতে (عَمَّ) শব্দের মীম হরফে কোন নিয়ম প্রযোজ্য?",
      promptText: "عَمَّ",
      options: [
        "Ghunnah Mushaddadah (obligatory 2-count nasal Ghunnah on the doubled Mīm)",
        "Izhar Shafawi",
        "Ikhfa Shafawi",
        "Madd Lazim"
      ],
      correctIndex: 0,
      explanation: "Mīm carries a Shaddah, mandating 2 counts of Ghunnah Mushaddadah before vocalizing the Fathah.",
      explanationBangla: "মীমে তাশদীদ থাকায় ২ হরকত ওয়াজিব গুন্নাহ আদায় করে যবরের দিকে যেতে হবে: 'আম্মা'।"
    },
    {
      id: "q11_26",
      type: "multiple_choice",
      question: "In the word (الْجِنَّةِ), what rule applies to the Nūn?",
      questionBangla: "(الْجِنَّةِ) শব্দে নূন হরফে কোন তাজবীদ নিয়ম কার্যকর?",
      promptText: "الْجِنَّةِ",
      options: [
        "Ghunnah Mushaddadah (obligatory 2-count nasal resonance on the doubled Nūn)",
        "Izhar Halqi",
        "Ikhfa Haqiqi",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Nūn carries a Shaddah, making it obligatory to sustain the Ghunnah for 2 counts.",
      explanationBangla: "নূন হরফে তাশদীদ থাকায় এতে ২ হরকত ওয়াজিব গুন্নাহ (গুন্নাহে মুশাদ্দাদাহ্) প্রযোজ্য।"
    },
    {
      id: "q11_27",
      type: "multiple_choice",
      question: "In (أَلَمْ تَرَ كَيْفَ), what rule applies to the Mīm in (أَلَمْ)?",
      questionBangla: "(أَلَمْ تَرَ) বাক্যাংশে 'আলাম' এর মীম হরফে কোন নিয়ম প্রযোজ্য?",
      promptText: "أَلَمْ تَرَ",
      options: [
        "Iẓhār Shafawī (clear Mīm followed by Tā’)",
        "Ikhfa Shafawi",
        "Idgham Shafawi",
        "Ghunnah Mushaddadah"
      ],
      correctIndex: 0,
      explanation: "Tā’ is an Izhar Shafawi letter; the Mīm is pronounced crisp and clear from the lips.",
      explanationBangla: "তা (ت) ইযহারে শাফাবীর হরফ হওয়ায় মীমকে কোনো গুন্নাহ ছাড়া স্পষ্ট পড়তে হবে।"
    },
    {
      id: "q11_28",
      type: "multiple_choice",
      question: "In the word (كَيْدَهُمْ فِي تَضْلِيلٍ), what rule applies to the Mīm in (كَيْدَهُمْ)?",
      questionBangla: "(كَيْدَهُمْ فِي) বাক্যাংশে 'কায়দাহুম' এর মীমে কোন নিয়ম কার্যকর?",
      promptText: "كَيْدَهُمْ فِي",
      options: [
        "Firm Iẓhār Shafawī (preceding Fā’)",
        "Ikhfa Shafawi",
        "Idgham Shafawi",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "The reciter must be acutely vigilant to execute crisp Izhar Shafawi before Fā’.",
      explanationBangla: "ফা-এর পূর্বে সচেতনভাবে স্পষ্ট ও সুদৃঢ় ইযহারে শাফাবী করতে হবে।"
    },
    {
      id: "q11_29",
      type: "multiple_choice",
      question: "In the phrase (وَمَا هُم بِمُؤْمِنِينَ), what rule applies to (هُم بِمُؤْمِنِينَ)?",
      questionBangla: "(وَمَا هُم بِمُؤْمِنِينَ) বাক্যাংশে 'হুম্ বিমু'মিনীন' অংশে কোন নিয়ম প্রযোজ্য?",
      promptText: "هُم بِمُؤْمِنِينَ",
      options: [
        "Ikhfā’ Shafawī (Mīm Sākinah followed by Bā’ with 2 counts of Ghunnah)",
        "Izhar Shafawi",
        "Idgham Shafawi",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Sakin Mīm meets Bā’, mandating Ikhfā’ Shafawi with 2 counts of nasal resonance.",
      explanationBangla: "মীম সাকিনের পর বা আসায় ২ মাত্রা গুন্নাহসহ ইখফায়ে শাফাবী আদায় করতে হবে।"
    },
    {
      id: "q11_30",
      type: "multiple_choice",
      question: "How does Ikhfā’ Shafawī (مْ + ب) differ mechanically from Iqlāb (نْ / ً + ب)?",
      questionBangla: "ইখফায়ে শাফাবী (মীম সাকিন + বা) এবং ইক্বলাব (নূন সাকিন + বা) এর মধ্যকার প্রযুক্তিগত পার্থক্য কী?",
      options: [
        "In Ikhfā’ Shafawī, the letter was ORIGINALLY a Mīm; in Iqlāb, the letter was originally a Nūn or Tanwīn that was transformed into a Mīm",
        "They have different Ghunnah counts",
        "One is in the nose and one is in the throat",
        "There is no phonetic difference in acoustic output"
      ],
      correctIndex: 0,
      explanation: "Acoustically both result in a concealed Meem before Ba with Ghunnah; the distinction lies in the underlying lexical origin.",
      explanationBangla: "উচ্চারণের ফলশ্রুতি হুবহু এক (বা-এর পূর্বে মীম গোপন); তফাত হলো ইখফায়ে শাফাবীতে হরফটি জন্মগতভাবেই মীম, আর ইক্বলাবে তা নূন থেকে পরিবর্তিত মীম।"
    },
    {
      id: "q11_31",
      type: "multiple_choice",
      question: "In (أَلَمْ يَجِدْكَ), what rule governs the Mīm Sākinah?",
      questionBangla: "(أَلَمْ يَجِدْكَ) বাক্যাংশে মীম সাকিনের বিধান কী?",
      promptText: "أَلَمْ يَجِدْكَ",
      options: [
        "Iẓhār Shafawī (clear Mīm followed by Yā’)",
        "Idgham bi-Ghunnah",
        "Ikhfa Shafawi",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Yā’ is an Izhar Shafawi letter; the Mīm is articulated cleanly from the lips without extra Ghunnah.",
      explanationBangla: "ইয়া ইযহারে শাফাবীর হরফ হওয়ায় মীম পরিষ্কারভাবে উচ্চারিত হবে।"
    },
    {
      id: "q11_32",
      type: "multiple_choice",
      question: "In (وَوَجَدَكَ ضَالًّا فَهَدَىٰ), what rule applies to the Lām carrying Shaddah in (ضَالًّا)?",
      questionBangla: "(ضَالًّا) শব্দে তাশদীদযুক্ত লামে কোন নিয়মটি কার্যকর?",
      promptText: "ضَالًّا",
      options: [
        "A doubled consonant following a Madd letter, causing Madd Lāzim (6 counts), followed by Tanween",
        "Ghunnah Mushaddadah",
        "Ikhfa Shafawi",
        "Izhar Halqi"
      ],
      correctIndex: 0,
      explanation: "The Shaddah on Lām creates an obligatory 6-count Madd Lazim on the preceding Alif, followed by Tanween.",
      explanationBangla: "লামের ওপর তাশদীদের কারণে পূর্ববর্তী মাদ্দের আলিফে ৬ হরকত মাদ্দ লাযিম সৃষ্টি হয়েছে।"
    },
    {
      id: "q11_33",
      type: "multiple_choice",
      question: "In the phrase (أَمْ خَلَقُوا), what rule applies to the Mīm?",
      questionBangla: "(أَمْ خَلَقُوا) বাক্যাংশে মীম সাকিনের বিধান কী?",
      promptText: "أَمْ خَلَقُوا",
      options: ["Iẓhār Shafawī (followed by Khā’)", "Ikhfa Shafawi", "Idgham", "Iqlab"],
      correctIndex: 0,
      explanation: "Khā’ is an Izhar Shafawi letter; the Mīm is recited crisp and clear.",
      explanationBangla: "খা ইযহারে শাফাবীর হরফ হওয়ায় মীম পরিষ্কার উচ্চারিত হবে।"
    },
    {
      id: "q11_34",
      type: "multiple_choice",
      question: "In (ذَٰلِكُمْ خَيْرٌ لَّكُمْ), how many instances of Mīm Sākinah are present?",
      questionBangla: "(ذَٰلِكُمْ خَيْرٌ لَّكُمْ) বাক্যাংশে কতটি মীম সাকিন রয়েছে?",
      promptText: "ذَٰلِكُمْ خَيْرٌ لَّكُمْ",
      options: [
        "Two instances: in (ذَٰلِكُمْ) and in (لَّكُمْ)",
        "Only one",
        "Three",
        "Zero"
      ],
      correctIndex: 0,
      explanation: "There are 2 Sakin Meems: in ‘Dhālikum’ (Izhar Shafawi before Khā’) and in ‘lakum’ at the pause.",
      explanationBangla: "দুটি মীম সাকিন রয়েছে: 'যালিকুম'-এর শেষে এবং 'লাকুম'-এর শেষে।"
    },
    {
      id: "q11_35",
      type: "multiple_choice",
      question: "Why does Tajweed forbid keeping the lips totally parted during Ikhfā’ Shafawī?",
      questionBangla: "ইখফায়ে শাফাবী আদায়কালে দুই ঠোঁটের মাঝে ফাঁকা রাখা কেন নিষিদ্ধ?",
      options: [
        "Because Mīm is an exclusively labial letter; keeping lips wide open eliminates the Mīm completely and corrupts the recitation",
        "Because it looks unusual",
        "Because it makes the sound loud",
        "Because of breathing"
      ],
      correctIndex: 0,
      explanation: "Scholars emphasize gentle lip contact (Ilsaaq bila Kazz); leaving a wide gap deletes the letter Mīm.",
      explanationBangla: "কারণ মীম ঠোঁটের হরফ; ঠোঁট আলাদা রাখলে মীমের অস্তিত্বই মুছে যায়, তাই কোমল স্পর্শে ঠোঁট মিলিয়ে রাখা আবশ্যক।"
    }
  ]
};
