import { Quiz } from "./types";

export const quizLevel15: Quiz = {
  id: "q15",
  levelId: 15,
  title: "Level 15: Solar/Lunar Lam & Silent Quranic Letters Challenge",
  titleBangla: "লেভেল ১৫: লাম শামসিয়্যাহ, লাম ক্বামারিয়্যাহ ও উসমানি লিপির নীরব হরফ পরীক্ষা",
  description: "Master the 14 Solar vs 14 Lunar letters, circular vs rectangular zero signs, protective Alif, and dropped letters across word junctions.",
  descriptionBangla: "১৪টি সৌর ও ১৪টি চন্দ্র হরফ, গোলাকার শূন্য বনাম ডিম্বাকার শূন্য চিহ্ন, আলিফে বিকায়া এবং শব্দ সংযোগে উহ্য হরফের নিখুঁত বিধান পরীক্ষা।",
  passingScore: 70,
  questions: [
    {
      id: "q15_1",
      type: "multiple_choice",
      question: "How many Solar letters (Al-Ḥurūf ash-Shamsiyyah) and Lunar letters (Al-Ḥurūf al-Qamariyyah) exist in Arabic?",
      questionBangla: "আরবি বর্ণমালায় সৌর হরফ (শামসিয়্যাহ) এবং চন্দ্র হরফ (ক্বামারিয়্যাহ) ঠিক কতটি করে রয়েছে?",
      options: [
        "Exactly 14 Solar letters and 14 Lunar letters, dividing the 28 alphabet letters equally",
        "10 Solar and 18 Lunar",
        "12 Solar and 16 Lunar",
        "7 Solar and 21 Lunar"
      ],
      correctIndex: 0,
      explanation: "The 28 letters of the Arabic alphabet split precisely into 14 Solar letters and 14 Lunar letters.",
      explanationBangla: "আরবি ২৮টি হরফ ঠিক সমান দুই ভাগে বিভক্ত: ১৪টি শামসিয়্যাহ্ (সৌর) এবং ১৪টি ক্বামারিয়্যাহ্ (চন্দ্র) হরফ।"
    },
    {
      id: "q15_2",
      type: "multiple_choice",
      question: "Which mnemonic phrase gathers all 14 Lunar letters (Al-Ḥurūf al-Qamariyyah)?",
      questionBangla: "১৪টি চন্দ্র হরফ (লাম ক্বামারিয়্যাহ্) কোন বিখ্যাত স্মরণিকা বাক্যে সংকলিত?",
      options: [
        "اِبْغِ حَجَّكَ وَخَفْ عَقِيمَهُ (Ibghi Ḥajjaka wa Khaf ‘Aqīmahu)",
        "خُصَّ ضَغْطٍ قِظْ",
        "يَرْمَلُونَ",
        "قُطْبُ جَدٍّ"
      ],
      correctIndex: 0,
      explanation: "The 14 Lunar letters are: ء, ب, غ, ح, ج, ك, و, خ, ف, ع, ق, ي, م, هـ (ابغ حجك وخف عقيمه).",
      explanationBangla: "১৪টি ক্বামারিয়্যাহ হরফ সংকলিত হয়েছে: 'ইবগি হাজ্জাকা ওয়া খাফ 'আক্বীমাহু' (اِبْغِ حَجَّكَ وَخَفْ عَقِيمَهُ) বাক্যে।"
    },
    {
      id: "q15_3",
      type: "multiple_choice",
      question: "What happens to the letter Lām in the definite article (ال) when followed by a Lunar letter (Lām Qamariyyah)?",
      questionBangla: "চন্দ্র হরফের (লাম ক্বামারিয়্যাহ্) পূর্বে আলিফ-লামের লামটির উচ্চারণে কী ঘটে?",
      promptText: "ٱلْقَمَرُ  /  ٱلْكِتَابُ",
      options: [
        "The Lām is pronounced CLEARLY with Sukūn (Iẓhār Qamarī): 'Al-Qamaru', 'Al-Kitābu'",
        "The Lam is merged with Shaddah",
        "The Lam is dropped completely",
        "The Lam has a Kasrah"
      ],
      correctIndex: 0,
      explanation: "With Lunar letters, the Lām is articulated with clear Izhar and carries a visible Sukūn in the Mushaf: 'Al-Qamar'.",
      explanationBangla: "চন্দ্র হরফের পূর্বে লাম পরিষ্কার সুকূনের সাথে স্পষ্ট ইযহার (ইযহারে ক্বামারীয়াহ) হয়ে উচ্চারিত হয়: 'আল-ক্বমারু', 'আল-কিতাবু'।"
    },
    {
      id: "q15_4",
      type: "multiple_choice",
      question: "What happens to the letter Lām in the definite article (ال) when followed by a Solar letter (Lām Shamsiyyah)?",
      questionBangla: "সৌর হরফের (লাম শামসিয়্যাহ্) পূর্বে আলিফ-লামের লামটির ক্ষেত্রে কী ঘটে?",
      promptText: "ٱلشَّمْسُ  /  ٱلرَّحْمَٰنُ",
      options: [
        "The Lām ASSIMILATES completely (Idghām Shamsī) into the Solar letter, leaving the Lām unvowelled and placing a SHADDAH on the Solar letter",
        "The Lam is pronounced with a loud Sukoon",
        "The Solar letter becomes silent",
        "The Lam becomes an Alif"
      ],
      correctIndex: 0,
      explanation: "The Lām dissolves phonetically into the Solar consonant, marked in the Mushaf by a naked Lām and a Shaddah on the Solar letter: 'Ash-Shams'.",
      explanationBangla: "লাম হরফটি সম্পূর্ণরূপে সৌর হরফে বিলীন (ইদগামে শামসিয়্যাহ) হয়ে যায়, মুসহাফে লাম হরকতহীন থাকে এবং সৌর হরফে তাশদীদ বসে: 'আশ্-শাম্সু'।"
    },
    {
      id: "q15_5",
      type: "multiple_choice",
      question: "Why does the Arabic language assimilate Lām into the 14 Solar letters?",
      questionBangla: "আরবি ভাষা ১৪টি সৌর হরফের সাথে কেন লামকে একীভূত (ইদগাম) করে দেয়?",
      options: [
        "Because all 14 Solar letters originate from the TIP or blade of the tongue, sharing close proximity (Qurb) with the articulation point of Lām",
        "Because the Sun is hot",
        "Because Solar letters are vowels",
        "Because of ancient poetry"
      ],
      correctIndex: 0,
      explanation: "Lām is articulated from the edge/tip of the tongue. All 14 Solar letters are dental/alveolar tongue neighbors, prompting natural assimilation.",
      explanationBangla: "কারণ ১৪টি সৌর হরফের সবগুলোই জিহ্বার আগা ও দাঁতের সংযোগস্থল থেকে উৎপন্ন হয় যা লামের মাখরাজের অতি সন্নিকটে; নৈকট্যের কারণে ইদগাম ঘটে।"
    },
    {
      id: "q15_6",
      type: "multiple_choice",
      question: "In the word (وَٱلشَّمْسِ وَضُحَىٰهَا), how is (وَٱلشَّمْسِ) pronounced?",
      questionBangla: "(وَٱلشَّمْسِ) শব্দটিতে আলিফ ও লামের উচ্চারণ কেমন হয়?",
      promptText: "وَٱلشَّمْسِ",
      options: [
        "Both Hamzatul Waṣl AND Lām are completely silent; pronunciation leaps from Wāw directly into Shīn with Shaddah: 'Wash-shamsi'",
        "‘Wal-shamsi’ with clear Lam",
        "‘Wa al-shamsi’",
        "‘Wash-lamsi’"
      ],
      correctIndex: 0,
      explanation: "Hamzatul Wasl drops in continuous flow, and the Solar Lām assimilates into Shīn: 'Wash-shamsi'.",
      explanationBangla: "মিলিয়ে পড়ার কারণে হামযাতুল ওয়াসল বাদ যায় এবং সৌর হরফের কারণে লামও বিলুপ্ত হয়ে সরাসরি শীনকে ধরে: 'ওয়াশ্-শাম্সি'।"
    },
    {
      id: "q15_7",
      type: "multiple_choice",
      question: "In the word (وَٱلْقَمَرِ إِذَا تَلَىٰهَا), how is (وَٱلْقَمَرِ) pronounced?",
      questionBangla: "(وَٱلْقَمَرِ) শব্দটিতে আলিফ ও লামের উচ্চারণ কেমন হয়?",
      promptText: "وَٱلْقَمَرِ",
      options: [
        "Hamzatul Waṣl drops, but the Lām is pronounced clearly with Sukūn: 'Wal-qamari'",
        "‘Waq-qamari’",
        "‘Wa al-qamari’",
        "‘Wal-lamari’"
      ],
      correctIndex: 0,
      explanation: "Hamzatul Wasl drops, but Qāf is a Lunar letter, so the Lām is articulated with clear Izhar: 'Wal-qamari'.",
      explanationBangla: "হামযাতুল ওয়াসল বাদ গেলেও ক্বাফ চন্দ্র হরফ হওয়ায় লাম স্পষ্ট উচ্চারিত হয়ে 'ওয়াল্-ক্বমারি' হবে।"
    },
    {
      id: "q15_8",
      type: "multiple_choice",
      question: "What is the Circular Zero sign (الصِّفْرُ الْمُسْتَدِيرُ - ْ) in Quranic orthography?",
      questionBangla: "কুরআনীয় লিপিতে পূর্ণ বৃত্তাকার শূন্য চিহ্ন (الصِّفْرُ الْمُسْتَدِيرُ - ْ) কী নির্দেশ করে?",
      promptText: "أُوْلَٰئِكَ  /  مِاْئَةٍ  /  قَالُوٓاْ",
      options: [
        "The letter beneath it is ABSOLUTELY SILENT in both continuous reading and pause (زَائِدٌ لَا يُنْطَقُ وَصْلًا وَلَا وَقْفًا)",
        "The letter has a Sukoon",
        "The letter is prolonged for 6 counts",
        "The letter must be repeated twice"
      ],
      correctIndex: 0,
      explanation: "The circular zero (ْ) indicates an orthographic letter that is 100% silent in both continuous speech and pause (e.g. Waw in 'Ulā’ika').",
      explanationBangla: "গোলাকার শূন্য চিহ্নটি নির্দেশ করে যে এই হরফটি মিলিয়ে পড়ার সময় বা থামার সময় সর্বাবস্থায় সম্পূর্ণ অনুচ্চারিত বা নীরব থাকবে।"
    },
    {
      id: "q15_9",
      type: "multiple_choice",
      question: "In the word (أُوْلَٰئِكَ), what is the function of the Wāw carrying the circular zero?",
      questionBangla: "(أُوْلَٰئِكَ) শব্দে গোলাকার শূন্যযুক্ত ওয়াও হরফটির কাজ কী?",
      promptText: "أُوْلَٰئِكَ",
      options: [
        "It is completely silent; you leap directly from Hamzah with Ḍammah into Lām with dagger Alif: '’Ulā’ika' (NOT 'Oolā’ika')",
        "It is read as a long 'oo' sound",
        "It carries a Shaddah",
        "It carries a Kasrah"
      ],
      correctIndex: 0,
      explanation: "The Waw carries a circular zero; it is an orthographic artifact that is completely unpronounced: '’U-lā’ika'.",
      explanationBangla: "ওয়াও হরফের ওপর গোলাকার শূন্য থাকায় এটি সম্পূর্ণ নীরব; পেশযুক্ত হামযাহ থেকে সরাসরি লামে গিয়ে 'উলা-ইকা' উচ্চারিত হবে ('ঊলাইকা' নয়)।"
    },
    {
      id: "q15_10",
      type: "multiple_choice",
      question: "What is the Rectangular / Oval Zero sign (الصِّفْرُ الْمُسْتَطِيلُ - ۠) in Quranic orthography?",
      questionBangla: "কুরআনীয় লিপিতে খাড়া বা ডিম্বাকার শূন্য চিহ্ন (الصِّفْرُ الْمُسْتَطِيلُ - ۠) কী নির্দেশ করে?",
      promptText: "أَنَا۠  /  لَّٰكِنَّا۠",
      options: [
        "The Alif is pronounced as a 2-count Madd when STOPPING (Waqfan), but is completely DROPPED when continuing (Waṣlan)",
        "The letter is silent always",
        "The letter has a Shaddah",
        "The letter has a 6-count Madd"
      ],
      correctIndex: 0,
      explanation: "The rectangular zero (۠) indicates an Alif that exists ONLY on pause (as a 2-count Madd), but disappears during continuous speech.",
      explanationBangla: "ডিম্বাকার খাড়া শূন্য চিহ্ন নির্দেশ করে যে থামার (ওয়াকফ) সময় আলিফটি ২ হরকত মাদ্দ হবে, কিন্তু মিলিয়ে পড়ার সময় তা সম্পূর্ণ বিলুপ্ত হবে।"
    },
    {
      id: "q15_11",
      type: "multiple_choice",
      question: "How is the ubiquitous word (أَنَا۠ - 'I') pronounced in continuous reading vs stopping?",
      questionBangla: "কুরআনে বহুল ব্যবহৃত 'আনা' (أَنَا۠) শব্দটি মিলিয়ে পড়ার সময় এবং থামার সময় কীভাবে উচ্চারিত হয়?",
      promptText: "أَنَا۠ نَذِيرٌ",
      options: [
        "When continuing, Alif drops: 'Ana nadhīr'; when stopping upon it, Alif returns as a 2-count Madd: 'Anā'",
        "It is always 'Anā' with Madd",
        "It is always 'Ana' without Madd",
        "The Nun is dropped"
      ],
      correctIndex: 0,
      explanation: "In continuous recitation, the Alif vanishes ('Ana nadheer'); if pausing on 'Anā', the Alif is sustained for 2 counts.",
      explanationBangla: "মিলিয়ে পড়ার সময় আলিফ বাদ গিয়ে সাধারণ হরকত হিসেবে 'আনা নাযীর' হবে; আর ওয়াকফ করলে ২ হরকত মাদ্দ হয়ে 'আনা-' হবে।"
    },
    {
      id: "q15_12",
      type: "multiple_choice",
      question: "What are the famous 'Seven Alifs' (الْأَلِفَاتُ السَّبْعُ) in the Quran governed by the Rectangular Zero (۠)?",
      questionBangla: "কুরআনের যে 'সাতটি আলিফ' (الْأَلِفَاتُ السَّبْعُ)-এ ডিম্বাকার শূন্য রয়েছে এবং ওয়াকফে বহাল কিন্তু সংযোগে বাদ যায়, সেগুলো কী কী?",
      options: [
        "أَنَا۠, لَّٰكِنَّا۠ (Kahf), الظُّنُونَا۠, الرَّسُولَا۠, السَّبِيلَا۠ (Ahzab), قَوَارِيرَا۠ (1st in Insan), and سَلَاسِلَا۠ (Insan)",
        "All Alifs in Surah Al-Baqarah",
        "Seven Alifs in Surah Yasin",
        "Alifs with Fathah"
      ],
      correctIndex: 0,
      explanation: "The 7 specific words with rectangular zero are: Anā, Lākinna (Kahf), Adh-Dhunūnā, Ar-Rasūlā, As-Sabeelā (Aḥzāb), Qawāreerā, Salāsilā.",
      explanationBangla: "বিখ্যাত ৭টি শব্দ হলো: আনা, লা-কিন্না (কাহাফ), আয্-জুনূনা, আর-রাসূলা, আস-সাবীলা (আহযাব), ক্বাওয়ারীরা (১ম) এবং সালাসিলা (ইনসান)।"
    },
    {
      id: "q15_13",
      type: "multiple_choice",
      question: "In Surah Al-Kahf: 38 (لَّٰكِنَّا۠ هُوَ اللَّهُ رَبِّي), how is (لَّٰكِنَّا۠) pronounced in continuous reading?",
      questionBangla: "সূরা কাহাফের ৩৮ নম্বর আয়াতে (لَّٰكِنَّا۠ هُوَ) মিলিয়ে পড়ার সময় কীভাবে পড়তে হবে?",
      promptText: "لَّٰكِنَّا۠ هُوَ",
      options: [
        "‘Lākinna Huwal-Lāhu’ (with Ghunnah on Nūn, but the final Alif is DROPPED in speech)",
        "‘Lākinnā Huwal-Lāhu’ with a 2-count Madd",
        "‘Lākin Huwa’",
        "‘Lā Huwa’"
      ],
      correctIndex: 0,
      explanation: "The rectangular zero causes the final Alif to drop during continuous speech: 'Lākinna huwal-lāh'.",
      explanationBangla: "ডিম্বাকার শূন্যের কারণে মিলিয়ে পড়ার সময় শেষ আলিফ বাদ গিয়ে 'লা-কিন্না হুওয়াল্লাহু' উচ্চারিত হবে।"
    },
    {
      id: "q15_14",
      type: "multiple_choice",
      question: "What is the Protective Alif (أَلِفُ الْوِقَايَةِ / الْأَلِفُ الْفَارِقَةُ) found at the end of plural verbs like (قَالُواْ / كَتَبُواْ)?",
      questionBangla: "বহুবচনবাচক ক্রিয়াপদের শেষে যুক্ত অতিরিক্ত আলিফটিকে (যেমন: قَالُواْ বা كَتَبُواْ) কী বলা হয় এবং এর বিধান কী?",
      promptText: "قَالُواْ  /  كَتَبُواْ",
      options: [
        "The Differentiating Alif (Alif al-Fāriqah): an orthographic silent letter distinguishing plural Wāw al-Jamā‘ah from root Wāws; carries circular zero and is completely silent",
        "A Madd letter prolonged for 6 counts",
        "A Hamzatul Wasl",
        "A letter with Tanween"
      ],
      correctIndex: 0,
      explanation: "Alif al-Fariqah distinguishes plural Waw from authentic root Waw. It is marked with a circular zero and is 100% silent.",
      explanationBangla: "এটিকে 'আলিফুল ফারেক্বাহ্' বা পার্থক্যকারী আলিফ বলা হয়; এটি বহুবচনের ওয়াও নির্দেশ করতে কেবল বানানে বসে কিন্তু উচ্চারণে চিরকাল অনুচ্চারিত থাকে।"
    },
    {
      id: "q15_15",
      type: "multiple_choice",
      question: "In the word (مِاْئَةٍ - 'a hundred'), how is the word pronounced?",
      questionBangla: "(مِاْئَةٍ) শব্দটিতে আলিফের ওপর গোলাকার শূন্য থাকায় উচ্চারণ কী হবে?",
      promptText: "مِاْئَةٍ",
      options: [
        "‘Mi’atin’ (the Alif carrying the circular zero is completely silent; leap straight from Mīm with Kasrah into Hamzah)",
        "‘Mā’atin’",
        "‘Mee-atin’",
        "‘Maw-atin’"
      ],
      correctIndex: 0,
      explanation: "The written Alif has a circular zero; it is totally silent. The word is pronounced purely as 'Mi’atin'.",
      explanationBangla: "আলিফের ওপর গোলাকার শূন্য থাকায় আলিফটি সম্পূর্ণ নীরব; মীম যের 'মি' এর পর সরাসরি হামযাহ পড়ে 'মি'আতিন' বলতে হবে ('মা-আতিন' নয়)।"
    },
    {
      id: "q15_16",
      type: "multiple_choice",
      question: "In the word (مَلَإِيْهِ / مَلَإِيْهِمْ), what is the function of the Yā’ carrying a circular zero?",
      questionBangla: "(مَلَإِيْهِ) শব্দে গোলাকার শূন্যযুক্ত ইয়া হরফটির বিধান কী?",
      promptText: "مَلَإِيْهِ",
      options: [
        "It is completely silent in both continuous reading and pause; pronounce Hamzah with Kasrah directly into Hā’: 'Mala’ihi'",
        "It is a 6-count Madd",
        "It is a Qalqalah",
        "It is pronounced as 'Malaayeehi'"
      ],
      correctIndex: 0,
      explanation: "The Yā’ with circular zero is an orthographic silent chair; pronounce solely the Hamzah with Kasrah: 'Mala’ihi'.",
      explanationBangla: "গোলাকার শূন্যের কারণে ইয়া হরফটি সম্পূর্ণ নীরব; হামযাহ যের 'ই' সরাসরি হা-এর সাথে যুক্ত হয়ে 'মালা'ইহি' হবে।"
    },
    {
      id: "q15_17",
      type: "multiple_choice",
      question: "In the phrase (بِأَييِّكُمُ الْمَفْتُونُ) in Surah Al-Qalam: 6, why is one of the two Yā’s marked with a circular zero?",
      questionBangla: "সূরা ক্বলমের ৬ নম্বর আয়াতে (بِأَييِّكُمُ) শব্দে দুটি ইয়ার একটিতে কেন গোলাকার শূন্য দেওয়া হয়েছে?",
      promptText: "بِأَييِّكُمُ",
      options: [
        "To signify that only ONE Yā’ (the Mushaddadah) is pronounced: 'Bi’ayyikum', while the extra written Yā’ is completely silent",
        "Both Yā’s must be pronounced",
        "It creates a 10-count Madd",
        "It indicates a pause"
      ],
      correctIndex: 0,
      explanation: "Written with two Yā’s in Uthmani calligraphy, but the one with circular zero is silent; recited purely as 'Bi’ayyikum'.",
      explanationBangla: "উসমানি লিপিতে দুটি ইয়া লেখা হলেও গোলাকার শূন্যযুক্ত বাড়তি ইয়াটি সম্পূর্ণ নীরব এবং একটিমাত্র তাশদীদযুক্ত ইয়া দিয়ে 'বি'আইয়্যিকুম' পড়া হয়।"
    },
    {
      id: "q15_18",
      type: "multiple_choice",
      question: "In (وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْيْدٍ) in Surah Adh-Dhariyat: 47, how is (بِأَيْيْدٍ) pronounced?",
      questionBangla: "সূরা যারিয়াতের ৪৭ নম্বর আয়াতে (بِأَيْيْدٍ) শব্দটি কীভাবে উচ্চারিত হয়?",
      promptText: "بِأَيْيْدٍ",
      options: [
        "‘Bi’aydin’ (the second Yā’ carries a circular zero and is completely silent)",
        "‘Bi’ay-yideen’",
        "‘Bi’aadeen’",
        "‘Baydeen’"
      ],
      correctIndex: 0,
      explanation: "The second Yā’ has a circular zero (silent); the word is recited crisply as 'Bi’aydin'.",
      explanationBangla: "দ্বিতীয় ইয়া হরফে গোলাকার শূন্য থাকায় তা অনুচ্চারিত থাকে এবং শব্দটি 'বিআইদিন' হিসেবে তিলাওয়াত করা হয়।"
    },
    {
      id: "q15_19",
      type: "multiple_choice",
      question: "In the phrase (الَّذِينَ اتَّقَواْ), what happens to the final Alif of (اتَّقَواْ)?",
      questionBangla: "(اتَّقَواْ) শব্দের শেষ আলিফটির কী বিধান?",
      promptText: "اتَّقَواْ",
      options: [
        "It carries a circular zero and is completely silent; the word ends phonetically on the Leen Wāw: 'Itta-qaw'",
        "It is prolonged for 2 counts",
        "It becomes a Hamzah",
        "It is read as an Alif Madd"
      ],
      correctIndex: 0,
      explanation: "It is an Alif al-Fariqah carrying a circular zero; pronunciation ends cleanly on the Sakin Waw: 'Ittaqaw'.",
      explanationBangla: "এটি একটি আলিফুল ফারেক্বাহ যার ওপর গোলাকার শূন্য রয়েছে; ফলে উচ্চারণ সাকিন ওয়াও-তে গিয়ে 'ইত্তাক্বাও' শেষ হবে।"
    },
    {
      id: "q15_20",
      type: "multiple_choice",
      question: "In (أَفَإِن مَّاتَ أَوْ قُتِلَ), what is the function of the blank Alif in (أَفَإِين)?",
      questionBangla: "(أَفَإِين مَّاتَ) বানানে ফা এবং হামযাহর মাঝে থাকা শূন্যযুক্ত আলিফটির বিধান কী?",
      promptText: "أَفَإِيْن",
      options: [
        "The Alif carries a circular zero and is totally silent; leap directly from Fā’ with Fatḥah into Hamzah with Kasrah: '’Afa’im-māta'",
        "It is an Alif Madd prolonged for 6 counts",
        "It is read as 'Afā’in'",
        "It is a Hamzatul Wasl"
      ],
      correctIndex: 0,
      explanation: "The Alif is an archaic orthographic seat carrying circular zero; pronounced purely as '’Afa’in'.",
      explanationBangla: "আলিফটিতে গোলাকার শূন্য থাকায় এটি সম্পূর্ণ নীরব; যবরযুক্ত ফা থেকে সরাসরি যেরযুক্ত হামযাহ পড়ে 'আফা'ইম্-মাতা' বলতে হবে।"
    },
    {
      id: "q15_21",
      type: "multiple_choice",
      question: "Which of the following contains a Solar letter (Lām Shamsiyyah)?",
      questionBangla: "নিচের কোন শব্দে লাম শামসিয়্যাহ্ (সৌর হরফে ইদগাম) বিদ্যমান?",
      options: ["التَّوَّابُ (At-Tawwāb)", "الْقَمَرُ (Al-Qamar)", "الْحَمْدُ (Al-Ḥamd)", "الْكَوْثَرَ (Al-Kawthar)"],
      correctIndex: 0,
      explanation: "Tā’ (ت) is a Solar letter; the Lām assimilates completely with a Shaddah: 'At-Tawwāb'. (Q, H, K are Lunar).",
      explanationBangla: "তা (ت) একটি সৌর হরফ; ফলে লাম বিলুপ্ত হয়ে তা-তে তাশদীদসহ 'আত্তাওয়াব' উচ্চারিত হয়।"
    },
    {
      id: "q15_22",
      type: "multiple_choice",
      question: "Which of the following contains a Lunar letter (Lām Qamariyyah)?",
      questionBangla: "নিচের কোন শব্দে লাম ক্বামারিয়্যাহ্ (চন্দ্র হরফে স্পষ্ট লাম) বিদ্যমান?",
      options: ["الْفَجْرِ (Al-Fajr)", "النَّاسِ (An-Nās)", "الرَّحِيمِ (Ar-Raḥīm)", "الصَّبْرِ (Aṣ-Ṣabr)"],
      correctIndex: 0,
      explanation: "Fā’ (ف) is one of the 14 Lunar letters (ابغ حجك وخف عقيمه); the Lām is read clearly with Sukūn: 'Al-Fajr'.",
      explanationBangla: "ফা (ف) চন্দ্র হরফ হওয়ায় লাম স্পষ্ট সুকূনের সাথে 'আল-ফজর' উচ্চারিত হয়।"
    },
    {
      id: "q15_23",
      type: "multiple_choice",
      question: "In the word (النَّاسِ), why is there a Shaddah on the Nūn?",
      questionBangla: "(النَّاسِ) শব্দে নূন হরফের ওপর কেন তাশদীদ এসেছে?",
      promptText: "النَّاسِ",
      options: [
        "Because Nūn is a Solar letter; the Lām assimilates into it, and because Nūn carries a Shaddah, it mandates 2 counts of Ghunnah Mushaddadah",
        "Because of a Sukoon",
        "Because it is the last word",
        "By printing error"
      ],
      correctIndex: 0,
      explanation: "Nūn is Solar (Lām merges into Nūn); the resulting Mushaddad Nūn requires an obligatory 2-count Ghunnah.",
      explanationBangla: "নূন সৌর হরফ হওয়ায় লাম এতে ইদগাম হয়ে তাশদীদ সৃষ্টি করেছে এবং তাশদীদযুক্ত নূন হওয়ায় এতে ২ হরকত ওয়াজিব গুন্নাহ হবে।"
    },
    {
      id: "q15_24",
      type: "multiple_choice",
      question: "In the word (الضُّحَىٰ), what type of Lām is present?",
      questionBangla: "(الضُّحَىٰ) শব্দে কোন প্রকারের লাম রয়েছে?",
      promptText: "الضُّحَىٰ",
      options: [
        "Lām Shamsiyyah (assimilated into the heavy letter Ḍād: 'Aḍ-Ḍuḥā')",
        "Lām Qamariyyah",
        "Lām of Madd",
        "Silent Alif"
      ],
      correctIndex: 0,
      explanation: "Ḍād is a Solar letter; the Lām assimilates completely into the heavy Ḍād with Shaddah.",
      explanationBangla: "দোয়াদ একটি সৌর হরফ; ফলে লাম বিলুপ্ত হয়ে তাশদীদযুক্ত দোয়াদে মিশে 'আদ্ব-দ্বুহা' হবে।"
    },
    {
      id: "q15_25",
      type: "multiple_choice",
      question: "In (قُلْ أَعُوذُ بِرَبِّ النَّاسِ), how is (بِرَبِّ النَّاسِ) pronounced?",
      questionBangla: "(بِرَبِّ النَّاسِ) তিলাওয়াতকালে শব্দসংযোগ কীভাবে সম্পন্ন হয়?",
      promptText: "بِرَبِّ النَّاسِ",
      options: [
        "‘Birabbin-nāsi’ (the Bā’ with Kasrah glides directly into the Mushaddad Nūn; both Hamzatul Waṣl and Lām are silent)",
        "‘Birabbi al-nās’",
        "‘Birabbi lil-nās’",
        "‘Birab an-nās’"
      ],
      correctIndex: 0,
      explanation: "Hamzatul Wasl drops, Lām assimilates; Kasrah on Bā’ connects directly to the Mushaddad Nūn with Ghunnah: 'Birabbin-nās'.",
      explanationBangla: "হামযাতুল ওয়াসল ও লাম উভয়ই বিলুপ্ত হয়ে বা-এর যের সরাসরি তাশদীদযুক্ত নূনকে ধরে গুন্নাহসহ 'বিরাব্বিন্-না-স' হবে।"
    },
    {
      id: "q15_26",
      type: "multiple_choice",
      question: "In the word (الْكَوْثَرَ), why is the Lām pronounced with Sukūn?",
      questionBangla: "(الْكَوْثَرَ) শব্দে লাম কেন পরিষ্কার সুকূনের সাথে উচ্চারিত হয়?",
      promptText: "الْكَوْثَرَ",
      options: [
        "Because Kāf (ك) is a Lunar letter (Ḥarf Qamarī); it does not allow the Lām to assimilate",
        "Because Kawthar means abundance",
        "Because of Waw",
        "Because of Taa"
      ],
      correctIndex: 0,
      explanation: "Kāf belongs to the Lunar letters (اِبْغِ حَجَّكَ); hence, the Lām is preserved with pristine Izhar Qamari: 'Al-Kawthar'.",
      explanationBangla: "কাফ (ك) চন্দ্র হরফ হওয়ায় লাম এতে মিশে না, বরং স্পষ্ট সুকূনের সাথে 'আল-কাওছার' উচ্চারিত হয়।"
    },
    {
      id: "q15_27",
      type: "multiple_choice",
      question: "In the phrase (الذَّاكِرِينَ اللَّهَ), what type of Lām is in (الذَّاكِرِينَ)?",
      questionBangla: "(الذَّاكِرِينَ) শব্দে কোন প্রকারের লাম রয়েছে?",
      promptText: "الذَّاكِرِينَ",
      options: ["Lām Shamsiyyah (assimilated into Dhāl: 'Adh-Dhākirīna')", "Lām Qamariyyah", "Lām of Izhar", "Silent letter"],
      correctIndex: 0,
      explanation: "Dhāl is one of the 14 Solar letters; the Lām assimilates into it with a Shaddah: 'Adh-Dhākirīn'.",
      explanationBangla: "যাল (ذ) সৌর হরফ হওয়ায় লাম বিলুপ্ত হয়ে যাল-এ তাশদীদসহ 'আয্-যা-কিরীন' হবে।"
    },
    {
      id: "q15_28",
      type: "multiple_choice",
      question: "In the word (الْغَفُورُ), why is the Lām pronounced clearly?",
      questionBangla: "(الْغَفُورُ) শব্দে লাম কেন স্পষ্ট উচ্চারিত হয়?",
      promptText: "الْغَفُورُ",
      options: [
        "Because Ghayn (غ) is a Lunar letter (Ḥarf Qamarī)",
        "Because Ghayn is heavy",
        "Because of Dammah",
        "Because of Waw"
      ],
      correctIndex: 0,
      explanation: "Ghayn is in 'Ibghi Ḥajjaka'; the Lām is articulated with clear Izhar Qamari: 'Al-Ghafūr'.",
      explanationBangla: "গাইন চন্দ্র হরফ হওয়ায় লাম সুস্পষ্ট সুকূনসহ 'আল-গফূর' উচ্চারিত হয়।"
    },
    {
      id: "q15_29",
      type: "multiple_choice",
      question: "What is the status of the Alif in words like (ثَمُودَاْ) in Surah Al-Furqan, Al-Ankabut, and An-Najm?",
      questionBangla: "সূরা ফুরক্বান ও আনকাবূতে (ثَمُودَاْ) শব্দের শেষ আলিফটির বিধান কী?",
      promptText: "ثَمُودَاْ",
      options: [
        "It carries a circular zero and is completely silent in both continuous reading and pause: 'Thamūda' (never 'Thamūdā')",
        "It is prolonged for 6 counts",
        "It is an Alif of Tanween",
        "It is read as a Hamzah"
      ],
      correctIndex: 0,
      explanation: "The Alif carries a circular zero; in Hafs, you stop on Dāl with Sukoon: 'Thamūd', with zero prolongation.",
      explanationBangla: "আলিফের ওপর গোলাকার শূন্য থাকায় এটি সম্পূর্ণ নীরব; থামার সময়ও কোনো টান ছাড়া সাকিন দাল দিয়ে 'ছামূদ্' থামতে হয়।"
    },
    {
      id: "q15_30",
      type: "multiple_choice",
      question: "In Surah Al-Insan: 4, what are the two permissible ways to stop upon the word (سَلَاسِلَا۠)?",
      questionBangla: "সূরা আল-ইনসানের ৪ নম্বর আয়াতে (سَلَاسِلَا۠) শব্দে ওয়াকফ করার অনুমোদিত দুটি পদ্ধতি কী কী?",
      promptText: "سَلَاسِلَا۠",
      options: [
        "Either stop with a 2-count Alif: 'Salāsilā', OR stop with a Sukūn on the Lām: 'Salāsil' (both authentic in Ḥafṣ)",
        "Stop only with 6 counts",
        "Stop with a Hamzah",
        "It is forbidden to stop"
      ],
      correctIndex: 0,
      explanation: "In Hafs, stopping permits two options: with Alif ('Salāsilā') or with Sukoon ('Salāsil'). Continuous reading drops Alif.",
      explanationBangla: "হাফস রেওয়ায়েতে থামার সময় দুটি রূপই অনুমোদিত: আলিফ টেনে 'সালাসিলা' অথবা লামে সাকিন করে 'সালাসিল'। মিলিয়ে পড়লে আলিফ বাদ যাবে।"
    },
    {
      id: "q15_31",
      type: "multiple_choice",
      question: "In Surah Al-Insan: 15-16, how do you handle the second instance of (قَوَارِيرَاْ)?",
      questionBangla: "সূরা আল-ইনসানের ১৬ নম্বর আয়াতে দ্বিতীয় (قَوَارِيرَاْ) শব্দটির ক্ষেত্রে তাজবীদের বিধান কী?",
      promptText: "قَوَارِيرَاْ (الثانية)",
      options: [
        "It carries a CIRCULAR ZERO (ْ): completely silent in continuous reading and pause; stop on Rā’ with Sukūn: 'Qawāreer'",
        "It carries a rectangular zero and is prolonged for 6 counts",
        "It is identical to the first instance",
        "It must not be read"
      ],
      correctIndex: 0,
      explanation: "The second Qawāreerā has a circular zero; it is 100% silent in both Wasl and Waqf, stopping as 'Qawāreer'.",
      explanationBangla: "দ্বিতীয় ক্বাওয়ারীরা-তে পূর্ণ গোলাকার শূন্য থাকায় এটি সর্বাবস্থায় নীরব; থামার সময়ও কোনো টান ছাড়া সাকিন র দিয়ে 'ক্বাওয়ারীর' থামতে হয়।"
    },
    {
      id: "q15_32",
      type: "multiple_choice",
      question: "In the word (الظُّنُونَا۠) in Surah Al-Ahzab: 10, how is it recited when pausing?",
      questionBangla: "সূরা আহযাবের ১০ নম্বর আয়াতে (الظُّنُونَا۠) শব্দে ওয়াকফ করলে কীভাবে পড়তে হবে?",
      promptText: "الظُّنُونَا۠",
      options: [
        "Stop with a 2-count Madd on the Alif: 'Aḍ-Dhunūnā' (rectangular zero preserved on pause)",
        "Stop on Nun with Sukoon without Madd",
        "Stop with a Hamzah",
        "Delete the word"
      ],
      correctIndex: 0,
      explanation: "It carries a rectangular zero; upon pause, the Alif is restored as a full 2-count Madd: 'Aḍ-Dhunūnā'.",
      explanationBangla: "ডিম্বাকার শূন্যের কারণে ওয়াকফ করার সময় শেষ আলিফটি পূর্ণ ২ হরকত মাদ্দ হিসেবে বহাল থেকে 'আদ্ব্-যুনূনা-' উচ্চারিত হবে।"
    },
    {
      id: "q15_33",
      type: "multiple_choice",
      question: "In (وَتَوَلَّوْا وَّاسْتَغْنَى اللَّهُ), how is the word (وَاسْتَغْنَى) pronounced?",
      questionBangla: "(وَاسْتَغْنَى) শব্দ সংযোগে কীভাবে তিলাওয়াত করতে হবে?",
      promptText: "وَاسْتَغْنَى",
      options: [
        "Hamzatul Waṣl drops: 'Wastaghnā' (from Wāw directly to Sīn Sākinah)",
        "‘Wa istaghna’",
        "‘Waa-staghna’",
        "‘Wustaghna’"
      ],
      correctIndex: 0,
      explanation: "Hamzatul Wasl drops; pronunciation flows directly from Wāw with Fathah into Sīn Sakin: 'Wastaghnā'.",
      explanationBangla: "হামযাতুল ওয়াসল বাদ গিয়ে যবরযুক্ত ওয়াও সরাসরি সাকিন সীনকে ধরে 'ওয়াস্ তাগ্না' উচ্চারিত হবে।"
    },
    {
      id: "q15_34",
      type: "multiple_choice",
      question: "Which of the following letters is a Solar letter?",
      questionBangla: "নিচের কোন হরফটি একটি সৌর (শামসিয়্যাহ্) হরফ?",
      options: ["Zāy (ز)", "Jīm (ج)", "Khā’ (خ)", "‘Ayn (ع)"],
      correctIndex: 0,
      explanation: "Zāy (ز) is a Solar letter (الزَّكَاةُ -> 'Az-Zakāh'). Jīm, Khā’, and ‘Ayn are all Lunar letters.",
      explanationBangla: "যা (ز) একটি সৌর হরফ (যেমন: আয্-যাকাত); পক্ষান্তরে জীম, খা ও আইন হলো চন্দ্র হরফ।"
    },
    {
      id: "q15_35",
      type: "multiple_choice",
      question: "Why did the companions and scribes of the Prophet (PBUH) write orthographic silent letters in the Uthmani script?",
      questionBangla: "সাহাবায়ে কেরাম ও ওহী লেখকগণ কেন উসমানি লিপিতে এই নীরব হরফগুলো সংরক্ষণ করেছেন?",
      options: [
        "To preserve the authentic sacred orthography (Rasm ‘Uthmānī) exactly as penned by the Sahabah, using signs (zeroes) to guide phonetic delivery",
        "Because paper was cheap",
        "Because they made spelling mistakes",
        "To make children practice harder"
      ],
      correctIndex: 0,
      explanation: "Uthmani script is divinely preserved; the text is written with authentic historical orthography, accompanied by vowel signs for phonetics.",
      explanationBangla: "সাহাবাদের মূল ওহী লিপির (রসম উসমানি) পবিত্রতা ও অলঙ্ঘনীয়তা অক্ষুণ্ণ রাখার জন্য মূল বর্ণমালা অপরিবর্তিত রেখে চিহ্নের দ্বারা উচ্চারণ পথনির্দেশ করা হয়েছে।"
    }
  ]
};
