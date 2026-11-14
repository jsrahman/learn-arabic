import { Quiz } from "./types";

export const quizLevel10: Quiz = {
  id: "q10",
  levelId: 10,
  title: "Level 10: Nūn Sākinah & Tanwīn: Idghām & Ikhfā’ Master Challenge",
  titleBangla: "লেভেল ১০: নূন সাকিন ও তানবীন: ইদগাম ও ইখফায়ে হাক্বীক্বীর কঠিন পরীক্ষা",
  description: "Master Idgham with and without Ghunnah (يَرْمَلُونَ), Complete (Kamil) vs Incomplete (Naqis) Idgham, and all 15 letters of Ikhfa Haqiqi with dynamic heaviness.",
  descriptionBangla: "ইদগামের ৬ হরফ (يَنْمُو ও ل ر), কামিল বনাম নাকিছ ইদগাম এবং ইখফায়ে হাক্বীক্বীর ১৫ হরফে ভারী ও হালকা গুন্নাহর পুঙ্খানুপুঙ্খ পরীক্ষা।",
  passingScore: 70,
  questions: [
    {
      id: "q10_1",
      type: "multiple_choice",
      question: "What is the mnemonic word gathering all 6 letters of Idghām (الْإِدْغَامُ)?",
      questionBangla: "ইদগামের (মিলিয়ে পড়ার) ৬টি হরফ কোন একক স্মরণিকায় সংকলিত?",
      options: [
        "يَرْمَلُونَ (Yarmalūn — Yā’, Rā’, Mīm, Lām, Wāw, Nūn)",
        "قُطْبُ جَدٍّ",
        "خُصَّ ضَغْطٍ قِظْ",
        "أَخِي هَاكَ عِلْمًا"
      ],
      correctIndex: 0,
      explanation: "The 6 letters of Idghām are gathered in the single word 'Yarmalūn' (يَرْمَلُونَ).",
      explanationBangla: "ইদগামের ৬টি হরফ সংকলিত হয়েছে 'ইয়ারমালূন' (يَرْمَلُونَ) শব্দে: ইয়া, র, মীম, লাম, ওয়াও, নূন।"
    },
    {
      id: "q10_2",
      type: "multiple_choice",
      question: "Which 4 letters produce Idghām WITH Ghunnah (إدغام بغنة)?",
      questionBangla: "কোন ৪টি হরফে গুন্নাহসহ ইদগাম (ইদগামে বা-গুন্নাহ) হয়?",
      options: [
        "ي - ن - م - و (assembled in the word يَـنْـمُـو / Yanmū)",
        "ل and ر",
        "ص, ض, ط, ظ",
        "ق and ك"
      ],
      correctIndex: 0,
      explanation: "When Nūn Sakin or Tanween meets any of the 4 letters of Yanmū (يَنْمُو), it merges with 2 counts of nasal Ghunnah.",
      explanationBangla: "নূন সাকিন বা তানবীনের পর 'ইয়ানমূ' (يَنْمُو)-র ৪ হরফের (ইয়া, নূন, মীম, ওয়াও) কোনোটি আসলে ২ হরকত গুন্নাহসহ মিলিয়ে পড়তে হয়।"
    },
    {
      id: "q10_3",
      type: "multiple_choice",
      question: "Which 2 letters produce Idghām WITHOUT Ghunnah (إدغام بغير غنة)?",
      questionBangla: "কোন ২টি হরফে কোনো গুন্নাহ ছাড়া সরাসরি ইদগাম (ইদগামে বেলা-গুন্নাহ) হয়?",
      options: [
        "Lām (ل) and Rā’ (ر)",
        "Yā’ and Wāw",
        "Nūn and Mīm",
        "Bā’ and Tā’"
      ],
      correctIndex: 0,
      explanation: "With Lām and Rā’, the Nun sound dissolves completely without any remaining nasal buzz (complete assimilation).",
      explanationBangla: "লাম (ل) এবং র (ر) হরফে কোনো প্রকার গুন্নাহ ছাড়া নূন সাকিন বা তানবীন সম্পূর্ণরূপে একীভূত হয়ে যায়।"
    },
    {
      id: "q10_4",
      type: "multiple_choice",
      question: "What is the crucial difference between Complete Idghām (Idghām Kāmil) and Incomplete Idghām (Idghām Nāqiṣ)?",
      questionBangla: "কামিল (পূর্ণ) ইদগাম এবং নাকিছ (অপূর্ণ) ইদগামের মধ্যকার মৌলিক তফাত কী?",
      options: [
        "In Kāmil, both the letter AND its Ghunnah disappear completely (in ل and ر, and ن and م); in Nāqiṣ, the letter merges but its Ghunnah remains in the nose (in و and ي)",
        "Kamil is fast, Naqis is slow",
        "Naqis is forbidden",
        "Kamil is only in Surah Al-Baqarah"
      ],
      correctIndex: 0,
      explanation: "In Idghām Nāqiṣ (with Wāw and Yā’), the body of the Nūn merges into the letter, but its nasal Ghunnah trait is left behind in the nose.",
      explanationBangla: "কামিলে হরফ ও তার গুন্নাহ উভয়ই বিলুপ্ত হয় (লাম, র, নূন, মীমে); আর নাকিছে হরফের সত্তা বিলীন হলেও তার গুন্নাহর গুণটি নাকে অবশিষ্ট থাকে (ওয়াও ও ইয়াতে)।"
    },
    {
      id: "q10_5",
      type: "multiple_choice",
      question: "How does the Uthmani Quran visually distinguish Complete Idghām from Incomplete Idghām in script?",
      questionBangla: "উসমানি মুসহাফে কামিল ইদগাম ও নাকিছ ইদগামের লিপির পার্থক্য কীভাবে দৃশ্যমান করা হয়েছে?",
      options: [
        "In Complete Idghām (ل, ر, م, ن), the following letter carries a visible SHADDAH (ّ); in Incomplete Idghām (و, ي), the following letter has NO Shaddah",
        "Complete Idgham is colored red",
        "Incomplete Idgham has a Sukoon on the second letter",
        "There is no visual difference"
      ],
      correctIndex: 0,
      explanation: "The presence of a Shaddah indicates complete fusion (Kāmil); absence of Shaddah on Waw/Yaa signals incomplete fusion (Nāqiṣ).",
      explanationBangla: "কামিল ইদগামে পরবর্তী হরফে তাশদীদ (ّ) থাকে; আর নাকিছ ইদগামে (ওয়াও ও ইয়ার ওপর) কোনো তাশদীদ থাকে না।"
    },
    {
      id: "q10_6",
      type: "multiple_choice",
      question: "In the phrase (مَن يَقُولُ), how is the word recited?",
      questionBangla: "(مَن يَقُولُ) বাক্যাংশটি কীভাবে বিশুদ্ধভাবে তিলাওয়াত করতে হবে?",
      promptText: "مَن يَقُولُ",
      options: [
        "‘May-yaqūlu’ with 2 counts of nasal Ghunnah vibrating in the Khaishoom (Idghām Nāqiṣ bi-Ghunnah)",
        "‘Man-yaqūlu’ with clear Nun",
        "‘Mā-yaqūlu’ without Ghunnah",
        "‘Mib-baqūlu’"
      ],
      correctIndex: 0,
      explanation: "The tongue does NOT hit the gum of Nūn; the sound glides into Yā’ while half the acoustic energy resonates in the nasal cavity for 2 counts.",
      explanationBangla: "জিহ্বা নূনের মাখরাজে না ছুঁয়ে ইয়ার দিকে ঝুঁকে ২ হরকত পরিমাণ নাকের বাঁশিতে গুন্নাহ ধরে রেখে 'মাইঁ-ইয়াক্বূলু' পড়তে হবে।"
    },
    {
      id: "q10_7",
      type: "multiple_choice",
      question: "In the phrase (مِن وَلِيٍّ), how is it pronounced?",
      questionBangla: "(مِن وَلِيٍّ) বাক্যাংশটি কীভাবে তিলাওয়াত করতে হবে?",
      promptText: "مِن وَلِيٍّ",
      options: [
        "‘Miw-waliyyin’ with rounded lips and nasal Ghunnah held for 2 counts",
        "‘Min-waliyyin’ with sharp Nun",
        "‘Maw-waliyyin’",
        "‘Mil-waliyyin’"
      ],
      correctIndex: 0,
      explanation: "Idghām bi-Ghunnah into Wāw: the lips round into Wāw while holding the 2-count nasal resonance from the Khaishoom.",
      explanationBangla: "ওয়াও-তে গুন্নাহসহ ইদগাম: ঠোঁট গোল করে ওয়াও-এর আবহে ২ মাত্রা নাকের গুন্নাহ সহযোগে 'মিউঁ-ওয়ালিইয়িন্' পড়তে হয়।"
    },
    {
      id: "q10_8",
      type: "multiple_choice",
      question: "In the phrase (مِن لَّدُنْهُ), what rule applies to the Nūn Sākinah?",
      questionBangla: "(مِن لَّدُنْهُ) বাক্যাংশে নূন সাকিনে কোন তাজবীদ নিয়ম কার্যকর?",
      promptText: "مِن لَّدُنْهُ",
      options: [
        "Idghām Kāmil without Ghunnah: 'Mil-ladunhu' with complete conversion into Lām",
        "Idgham bi-Ghunnah",
        "Izhar Halqi",
        "Ikhfa"
      ],
      correctIndex: 0,
      explanation: "The Nūn merges totally into Lām with zero nasal sound: 'Mil-ladunhu'.",
      explanationBangla: "কোনো গুন্নাহ ছাড়া নূন সম্পূর্ণরূপে লামে একীভূত হয়ে 'মিল্-লাদুনহু' হবে।"
    },
    {
      id: "q10_9",
      type: "multiple_choice",
      question: "In the phrase (مِّن رَّبِّهِمْ), what rule applies?",
      questionBangla: "(مِّن رَّبِّهِمْ) বাক্যাংশে কোন নিয়মটি কার্যকর?",
      promptText: "مِّن رَّبِّهِمْ",
      options: [
        "Idghām Kāmil without Ghunnah into the heavy letter Rā’: 'Mir-rabbihim'",
        "Izhar",
        "Idgham with Ghunnah",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "The Nūn vanishes entirely into the heavy doubled Rā’ without nasal sound: 'Mir-rabbihim'.",
      explanationBangla: "নূন কোনো গুন্নাহ ছাড়া সরাসরি তাশদীদযুক্ত ভারী র-এর সাথে মিশে 'মির-রব্বিহিম' হবে।"
    },
    {
      id: "q10_10",
      type: "multiple_choice",
      question: "In the phrase (مِّن مَّاءٍ), what type of Idghām occurs?",
      questionBangla: "(مِّن مَّاءٍ) বাক্যাংশে কোন প্রকারের ইদগাম ঘটে?",
      promptText: "مِّن مَّاءٍ",
      options: [
        "Idghām Kāmil with Ghunnah (complete assimilation into Mīm with 2 counts of Ghunnah)",
        "Idgham Naqis",
        "Idgham without Ghunnah",
        "Izhar"
      ],
      correctIndex: 0,
      explanation: "The Nūn transforms completely into Mīm (sharing the Shaddah), while maintaining its authentic 2 counts of Ghunnah: 'Mim-mā’'.",
      explanationBangla: "নূন পুরোপুরি মীমে পরিণত হয় এবং তাশদীদের সাথে ২ হরকত গুন্নাহসহ 'মিম-মা-ইন্' হয়।"
    },
    {
      id: "q10_11",
      type: "multiple_choice",
      question: "What is Ikhfā’ Ḥaqīqī (الْإِخْفَاءُ الْحَقِيقِيُّ) linguistically and technically?",
      questionBangla: "ইখফায়ে হাক্বীক্বী (الْإِخْفَاءُ الْحَقِيقِيُّ) এর শাব্দিক ও পারিভাষিক অর্থ কী?",
      options: [
        "Linguistically 'concealment'; technically pronouncing Nūn Sākinah between Iẓhār and Idghām, stripped of Shaddah, with 2 counts of Ghunnah",
        "Deleting the letter completely",
        "Shouting the letter",
        "Turning it into an Alif"
      ],
      correctIndex: 0,
      explanation: "Ikhfā’ means concealment: hiding the tongue contact of Nūn while sustaining its nasal Ghunnah for 2 counts at the doorstep of the next letter.",
      explanationBangla: "ইখফা মানে গোপন করা: নূন সাকিনকে ইযহার ও ইদগামের মাঝামাঝি অবস্থায় তাশদীদহীন রেখে পরবর্তী হরফের নিকটবর্তী হয়ে ২ হরকত গুন্নাহ করা।"
    },
    {
      id: "q10_12",
      type: "multiple_choice",
      question: "How many letters produce Ikhfā’ Ḥaqīqī?",
      questionBangla: "ইখফায়ে হাক্বীক্বীর হরফ মোট কতটি?",
      options: ["15 letters", "12 letters", "17 letters", "6 letters"],
      correctIndex: 0,
      explanation: "There are exactly 15 letters of Ikhfā’ (the remaining letters after subtracting the 6 of Halq, 6 of Yarmaloon, and 1 of Baa).",
      explanationBangla: "ইখফায়ে হাক্বীক্বীর হরফ মোট ১৫টি (ইযহারের ৬টি, ইদগামের ৬টি ও ইক্বলাবের ১টি বাদে অবশিষ্ট ১৫টি হরফ)।"
    },
    {
      id: "q10_13",
      type: "multiple_choice",
      question: "Which classical poetic line collects the initial letters of all 15 Ikhfā’ letters?",
      questionBangla: "কোন বিখ্যাত কাব্যচরণে ইখফার ১৫টি হরফের প্রতিটি আদ্যক্ষর সংকলিত হয়েছে?",
      options: [
        "صِفْ ذَا ثَنَا كَمْ جَادَ شَخْصٌ قَدْ سَمَا دُمْ طَيِّبًا زِدْ فِي تُقًى ضَعْ ظَالِمًا",
        "خُصَّ ضَغْطٍ قِظْ",
        "أَخِي هَاكَ عِلْمًا",
        "قُطْبُ جَدٍّ"
      ],
      correctIndex: 0,
      explanation: "The first letter of each word in this verse provides the 15 letters: ص, ذ, ث, ك, ج, ش, ق, س, د, ط, ز, ف, ت, ض, ظ.",
      explanationBangla: "এই কবিতার প্রতিটি শব্দের প্রথম হরফ মিলে ১৫টি হরফ গঠিত: সোয়াদ, যাল, সা, কাফ, জীম, শীন, ক্বাফ, সীন, দাল, তোয়া, যা, ফা, তা, দোয়াদ, জোয়া।"
    },
    {
      id: "q10_14",
      type: "multiple_choice",
      question: "How many of the 15 Ikhfā’ letters produce a HEAVY (Mufakhkhamah) Ghunnah?",
      questionBangla: "ইখফার ১৫টি হরফের মধ্যে কতটি হরফে ভারী বা মোটা (মুফাখ্খামাহ্) গুন্নাহ হয়?",
      options: [
        "Exactly 5 letters: Ṣād (ص), Ḍād (ض), Ṭā’ (ط), Ẓā’ (ظ), and Qāf (ق)",
        "All 15 letters",
        "Only 2 letters",
        "7 letters"
      ],
      correctIndex: 0,
      explanation: "The 5 heavy letters among the 15 Ikhfā’ letters are the Isti‘lā’ consonants (ص, ض, ط, ظ, ق), creating thick, heavy Ghunnah.",
      explanationBangla: "ঠিক ৫টি হরফে ভারী গুন্নাহ হয়: সোয়াদ, দোয়াদ, তোয়া, জোয়া এবং ক্বাফ।"
    },
    {
      id: "q10_15",
      type: "multiple_choice",
      question: "How many of the 15 Ikhfā’ letters produce a LIGHT (Muraqqaqah) Ghunnah?",
      questionBangla: "ইখফার ১৫টি হরফের মধ্যে কতটি হরফে পাতলা বা চিকন (মুরাক্কাক্বাহ্) গুন্নাহ হয়?",
      options: [
        "The remaining 10 letters: ت, ث, ج, د, ذ, ز, س, ش, ف, ك",
        "5 letters",
        "12 letters",
        "Zero"
      ],
      correctIndex: 0,
      explanation: "The 10 light letters of Istifal maintain a flat tongue and delicate, thin nasal resonance during the 2-count Ghunnah.",
      explanationBangla: "অবশিষ্ট ১০টি হরফে গুন্নাহ পাতলা ও হালকা হয়: তা, সা, জীম, দাল, যাল, যা, সীন, শীন, ফা, কাফ।"
    },
    {
      id: "q10_16",
      type: "multiple_choice",
      question: "What is the physical position of the tongue during authentic Ikhfā’ Ḥaqīqī?",
      questionBangla: "বিশুদ্ধ ইখফায়ে হাক্বীক্বী আদায়কালে জিহ্বার শারীরিক অবস্থান কেমন হওয়া আবশ্যক?",
      options: [
        "The tongue does NOT touch the gum of Nūn; it hovers directly near the articulation point of the FOLLOWING letter, preparing for its release",
        "The tongue presses tightly on the Nūn point",
        "The tongue sticks out of the mouth",
        "The tongue touches the throat"
      ],
      correctIndex: 0,
      explanation: "The hallmark of true Ikhfa is avoiding contact at the Makhraj of Nūn, positioning the tongue near the upcoming letter during Ghunnah.",
      explanationBangla: "প্রকৃত ইখফায় জিহ্বা নূনের মাখরাজে না লেগে শূন্যে ভাসে এবং পরবর্তী হরফটি উচ্চারণের জন্য তার মাখরাজের অতি নিকটে অবস্থান নেয়।"
    },
    {
      id: "q10_17",
      type: "multiple_choice",
      question: "In the word (كُنتُمْ), what rule applies to both instances of Nūn?",
      questionBangla: "(كُنتُمْ) শব্দটিতে নূন সাকিনে কোন নিয়ম প্রযোজ্য?",
      promptText: "كُنتُمْ",
      options: [
        "Ikhfā’ Ḥaqīqī with light Ghunnah inside a single word because Tā’ (ت) follows",
        "Izhar",
        "Idgham",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "The Sakin Nun is followed by Tā’ in the same word, requiring concealed light Ghunnah: 'Kuntum'.",
      explanationBangla: "একই শব্দের ভেতর নূন সাকিনের পর তা (ت) আসায় পাতলা সুরে ইখফায়ে হাক্বীক্বী হবে: 'কুনতুম্'।"
    },
    {
      id: "q10_18",
      type: "multiple_choice",
      question: "In the phrase (مِن شَرِّ), what rule applies to the Nūn Sākinah?",
      questionBangla: "(مِن شَرِّ) বাক্যাংশে নূন সাকিনের হুকুম কী?",
      promptText: "مِن شَرِّ",
      options: [
        "Ikhfā’ Ḥaqīqī with light Ghunnah because Shīn (ش) is a light letter",
        "Izhar Halqi",
        "Idgham without Ghunnah",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Shīn is one of the 10 light letters of Ikhfā’; the Ghunnah is sustained softly for 2 counts: 'Min shar-ri'.",
      explanationBangla: "শীন ইখফার পাতলা হরফ হওয়ায় এখানে ২ মাত্রা পাতলা গুন্নাহসহ ইখফা হবে: 'মিন শাররি'।"
    },
    {
      id: "q10_19",
      type: "multiple_choice",
      question: "In the word (عَنصِلَاتِهِمْ / عَن صَلَاتِهِمْ), why is the Ghunnah recited as HEAVY?",
      questionBangla: "(عَن صَلَاتِهِمْ) বাক্যাংশে গুন্নাহটি কেন ভারী মোটা সুরে পড়তে হয়?",
      promptText: "عَن صَلَاتِهِمْ",
      options: [
        "Because Ṣād (ص) is a heavy letter of Isti‘lā’ and Iṭbāq; the tongue elevates in preparation for it",
        "Because Ayn is heavy",
        "Because Lam is heavy",
        "Because of plural ending"
      ],
      correctIndex: 0,
      explanation: "The tongue elevates at the back in readiness for Ṣād, imbuing the 2-count nasal Ghunnah with thick heaviness.",
      explanationBangla: "পরবর্তী হরফ সোয়াদ (ص) মোটা হরফ হওয়ায় জিহ্বার গোড়া তালুর দিকে উঠে গিয়ে গুন্নাহকে ভারী করে।"
    },
    {
      id: "q10_20",
      type: "multiple_choice",
      question: "In the phrase (مِن دُونِ), what rule applies?",
      questionBangla: "(مِن دُونِ) বাক্যাংশে নূনে কোন নিয়ম প্রযোজ্য?",
      promptText: "مِن دُونِ",
      options: [
        "Ikhfā’ Ḥaqīqī with light Ghunnah because Dāl (د) is a light letter",
        "Idgham bi-Ghunnah",
        "Izhar Halqi",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Dāl is a light letter of Istifal; the Ghunnah is kept thin and delicate.",
      explanationBangla: "দাল পাতলা হরফ হওয়ায় গুন্নাহটি হালকা ও চিকন সুরে আদায় হবে: 'মিন দূনি'।"
    },
    {
      id: "q10_21",
      type: "multiple_choice",
      question: "In (أَندَادًا), can Ikhfā’ Ḥaqīqī occur inside a single word?",
      questionBangla: "(أَندَادًا) শব্দে ইখফায়ে হাক্বীক্বী কি এক শব্দের মধ্যে সংঘটিত হয়েছে?",
      promptText: "أَندَادًا",
      options: [
        "Yes, Ikhfā’ occurs both inside a single word (e.g. أَندَادًا, كُنتُمْ, الْإِنسَانُ) and across two words",
        "No, Ikhfa is strictly between two words",
        "It is not Ikhfa",
        "Only in verbs"
      ],
      correctIndex: 0,
      explanation: "Unlike Idghām, Ikhfā’ occurs freely both inside one word and across word boundaries.",
      explanationBangla: "হ্যাঁ, ইদগামের বিপরীতভাবে ইখফা এক শব্দের মাঝেও হয় (যেমন: আন্দাদান, কুনতুম, আল-ইনসান) এবং দুই শব্দের মাঝেও হয়।"
    },
    {
      id: "q10_22",
      type: "multiple_choice",
      question: "In the phrase (مَن ذَا الَّذِي), what rule applies to (مَن ذَا)?",
      questionBangla: "(مَن ذَا الَّذِي) বাক্যাংশে 'মান্ যা' অংশে কোন নিয়ম প্রযোজ্য?",
      promptText: "مَن ذَا",
      options: [
        "Ikhfā’ Ḥaqīqī with light Ghunnah because Dhāl (ذ) is a light dental letter",
        "Idgham",
        "Izhar Halqi",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Dhāl is one of the 15 Ikhfa letters; the Nun sound is concealed with light Ghunnah: 'Man dhal-ladhee'.",
      explanationBangla: "যাল (ذ) ইখফার হরফ হওয়ায় নূনকে গোপন করে পাতলা সুরে ২ হরকত গুন্নাহ করতে হবে।"
    },
    {
      id: "q10_23",
      type: "multiple_choice",
      question: "In the phrase (كِتَابٌ كَرِيمٌ), what rule governs the Tanwīn?",
      questionBangla: "(كِتَابٌ كَرِيمٌ) শব্দদ্বয়ে তানবীনের ওপর কোন নিয়ম কার্যকর?",
      promptText: "كِتَابٌ كَرِيمٌ",
      options: [
        "Ikhfā’ Ḥaqīqī with light Ghunnah because Kāf (ك) follows",
        "Izhar Halqi",
        "Idgham without Ghunnah",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Tanween meets Kāf, which is a light letter of Ikhfa; the Nun sound is hidden with soft Ghunnah.",
      explanationBangla: "তানবীনের পর কাফ (ك) আসায় হালকা ও পাতলা সুরে ইখফায়ে হাক্বীক্বী হবে।"
    },
    {
      id: "q10_24",
      type: "multiple_choice",
      question: "In the phrase (فَتْحٌ قَرِيبٌ), what rule governs the Tanwīn?",
      questionBangla: "(فَتْحٌ قَرِيبٌ) বাক্যাংশে তানবীনের ওপর কোন নিয়ম প্রযোজ্য?",
      promptText: "فَتْحٌ قَرِيبٌ",
      options: [
        "Ikhfā’ Ḥaqīqī with HEAVY Ghunnah because Qāf (ق) is an elevated letter of Isti‘lā’",
        "Light Ikhfa",
        "Izhar Halqi",
        "Idgham bi-Ghunnah"
      ],
      correctIndex: 0,
      explanation: "Qāf mandates heavy Ghunnah; the oral cavity resonates with a thick, elevated nasal timbre.",
      explanationBangla: "ক্বাফ (ق) মোটা হরফ হওয়ায় এখানে ইখফার গুন্নাহটি মুখ ভরে ভারী ও মোটা করে আদায় করতে হবে।"
    },
    {
      id: "q10_25",
      type: "multiple_choice",
      question: "What is the common error when non-native students recite Ikhfā’ before Fā’ (ف) in words like (أَنفُسَهُمْ)?",
      questionBangla: "(أَنفُسَهُمْ) শব্দে ফা (ف)-এর পূর্বে ইখফা করার সময় শিক্ষার্থীরা সাধারণত কোন ভুলটি করে?",
      promptText: "أَنفُسَهُمْ",
      options: [
        "Closing the lips completely, turning it into a Mīm ('Amfusahum') instead of touching the top teeth to the bottom lip",
        "Making the Ghunnah too quiet",
        "Dropping the Faa",
        "Saying it with Qalqalah"
      ],
      correctIndex: 0,
      explanation: "Fā’ requires upper teeth touching lower lip; many students wrongly close both lips, corrupting the sound into a Meem.",
      explanationBangla: "ফা-এর মাখরাজ (দাঁত ও নিচের ঠোঁট) ব্যবহার না করে উভয় ঠোঁট বন্ধ করে একে মীমের মতো 'আম্ফুসাহুম' বানিয়ে ফেলা মারাত্মক ভুল।"
    },
    {
      id: "q10_26",
      type: "multiple_choice",
      question: "What is the consequence of allowing the tongue to strike the gum line during Ikhfā’ (e.g. pronouncing (أَنتُمْ) as 'An-tum')?",
      questionBangla: "ইখফা করার সময় জিহ্বার ডগা যদি মাড়িতে লেগে যায় (যেমন: 'আন্-তুম' বলা হয়), তবে কী তাজবীদ ত্রুটি ঘটবে?",
      options: [
        "It destroys the Ikhfā’ and turns it into Iẓhār, because Ikhfā’ strictly requires concealing the tongue contact",
        "It improves the Tajweed",
        "It creates a long Madd",
        "It turns it into Idgham"
      ],
      correctIndex: 0,
      explanation: "Striking the gum ridge creates a clear Nūn (Izhar); Ikhfa demands that the tongue stays detached from the Nūn's dental point.",
      explanationBangla: "জিহ্বার ডগা মাড়িতে লাগামাত্রই নূন স্পষ্ট হয়ে ইযহার হয়ে যায়; ফলে ইখফা সম্পূর্ণ ধ্বংস হয়ে নিয়ম লঙ্ঘিত হয়।"
    },
    {
      id: "q10_27",
      type: "multiple_choice",
      question: "In (أَشْتَاتًا لِّيُرَوْا), what rule governs the Tanwīn?",
      questionBangla: "(أَشْتَاتًا لِّيُرَوْا) বাক্যাংশে তানবীনের হুকুম কী?",
      promptText: "أَشْتَاتًا لِّيُرَوْا",
      options: [
        "Idghām without Ghunnah: 'Ashtātal-liyuraw' with complete assimilation into Lām",
        "Idgham bi-Ghunnah",
        "Izhar Halqi",
        "Ikhfa Haqiqi"
      ],
      correctIndex: 0,
      explanation: "Lām is an Idgham letter without Ghunnah; the Tanween merges totally without nasal resonance.",
      explanationBangla: "লাম হরফে কোনো গুন্নাহ ছাড়া পূর্ণ ইদগাম হওয়ায় তানবীন সরাসরি লামে মিশে 'আশ্তা-তাল্-লিউরাও' হবে।"
    },
    {
      id: "q10_28",
      type: "multiple_choice",
      question: "In (مَن وَجَدَ), what rule applies to the Nūn?",
      questionBangla: "(مَن وَجَدَ) বাক্যাংশে নূনে কোন নিয়ম কার্যকর?",
      promptText: "مَن وَجَدَ",
      options: [
        "Idghām Nāqiṣ bi-Ghunnah (incomplete merging into Wāw with 2 counts of Ghunnah)",
        "Izhar",
        "Idgham without Ghunnah",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Wāw is an incomplete Idghām letter with Ghunnah; the voice splits between the lips and nasal cavity.",
      explanationBangla: "ওয়াও-তে গুন্নাহসহ অপূর্ণ ইদগাম হবে এবং ২ হরকত গুন্নাহ সহযোগে 'মাউঁ-ওয়াজাদা' পড়তে হবে।"
    },
    {
      id: "q10_29",
      type: "multiple_choice",
      question: "In the phrase (صِرَاطًا مُّسْتَقِيمًا), what rule applies to the Tanwīn on (صِرَاطًا)?",
      questionBangla: "(صِرَاطًا مُّسْتَقِيمًا) শব্দে প্রথম তানবীনে কোন নিয়ম কার্যকর?",
      promptText: "صِرَاطًا مُّسْتَقِيمًا",
      options: [
        "Idghām bi-Ghunnah into the Mīm ('Ṣirāṭam-Mustaqīmā')",
        "Izhar Halqi",
        "Ikhfa Haqiqi",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Mīm is one of the letters of Yanmū; the Tanween merges with a full 2 counts of Ghunnah into the Mīm.",
      explanationBangla: "মীম হরফে গুন্নাহসহ ইদগাম হওয়ায় তানবীনটি মীমে মিশে 'সিরাত্বাম্-মুসতাক্বীমা' হিসেবে গুন্নাহসহ আদায় হবে।"
    },
    {
      id: "q10_30",
      type: "multiple_choice",
      question: "In (أَندَادًا تُحِبُّونَهُمْ), what rule governs the Tanwīn on (أَندَادًا)?",
      questionBangla: "(أَندَادًا تُحِبُّونَهُمْ) বাক্যাংশে তানবীনের ওপর কোন নিয়ম প্রযোজ্য?",
      promptText: "أَندَادًا تُحِبُّونَهُمْ",
      options: [
        "Ikhfā’ Ḥaqīqī with light Ghunnah because Tā’ (ت) follows",
        "Idgham",
        "Izhar",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Tanween is followed by Tā’, mandating Ikhfa Haqiqi with a soft 2-count nasal resonance.",
      explanationBangla: "তানবীনের পর তা (ت) আসায় হালকা পাতলা সুরে ইখফায়ে হাক্বীক্বী আদায় করতে হবে।"
    },
    {
      id: "q10_31",
      type: "multiple_choice",
      question: "In (يَوْمَئِذٍ نَّاعِمَةٌ), what rule applies to the Tanwīn on (يَوْمَئِذٍ)?",
      questionBangla: "(يَوْمَئِذٍ نَّاعِمَةٌ) শব্দে তানবীনে কোন নিয়ম প্রযোজ্য?",
      promptText: "يَوْمَئِذٍ نَّاعِمَةٌ",
      options: [
        "Idghām bi-Ghunnah into Nūn with 2 counts of nasal resonance",
        "Izhar Halqi",
        "Ikhfa Haqiqi",
        "Idgham without Ghunnah"
      ],
      correctIndex: 0,
      explanation: "Nūn is one of the Yanmū letters; the Tanween merges with a 2-count Ghunnah into the vowelled Nūn.",
      explanationBangla: "নূন হরফে গুন্নাহসহ ইদগাম হওয়ায় তানবীন পরবর্তী নূনে প্রবেশ করে ২ হরকত গুন্নাহ সৃষ্টি করে।"
    },
    {
      id: "q10_32",
      type: "multiple_choice",
      question: "In the word (الْإِنسَانَ), what rule governs the Nūn Sākinah?",
      questionBangla: "(الْإِنسَانَ) শব্দে নূন সাকিনে কোন তাজবীদ নিয়ম কার্যকর?",
      promptText: "الْإِنسَانَ",
      options: [
        "Ikhfā’ Ḥaqīqī with light Ghunnah inside the word because Sīn (س) follows",
        "Izhar Halqi",
        "Idgham",
        "Iqlab"
      ],
      correctIndex: 0,
      explanation: "Sīn is a light letter of Ikhfā’; the Nūn sound is hidden inside the word with gentle Ghunnah: 'Al-Insān'.",
      explanationBangla: "সীন ইখফার পাতলা হরফ হওয়ায় এক শব্দের ভেতর নূনকে গোপন করে পাতলা গুন্নাহসহ 'আল-ইন্ সান' পড়তে হবে।"
    },
    {
      id: "q10_33",
      type: "multiple_choice",
      question: "In (مِنْهُمْ) vs (مِنكُم), what is the difference in rule for the two Nūns?",
      questionBangla: "(مِنْهُمْ) এবং (مِنكُم) এ দুটি নূন সাকিনের নিয়মের মধ্যে পার্থক্য কী?",
      promptText: "مِنْهُمْ  /  مِنكُم",
      options: [
        "In (مِنْهُمْ) it is Iẓhār Ḥalqī (Hā’ is a throat letter); in (مِنكُم) it is Ikhfā’ Ḥaqīqī (Kāf is an Ikhfa letter)",
        "Both are Izhar",
        "Both are Ikhfa",
        "Both are Idgham"
      ],
      correctIndex: 0,
      explanation: "Hā’ is from the throat (Izhar = no Ghunnah); Kāf is an Ikhfa letter (Ikhfa = 2 counts of hidden Ghunnah).",
      explanationBangla: "'মিন্হুম'-এ হা থাকায় ইযহারে হলক্বী (গুন্নাহ নেই); আর 'মিনকুম'-এ কাফ থাকায় ইখফায়ে হাক্বীক্বী (২ হরকত গুন্নাহ)।"
    },
    {
      id: "q10_34",
      type: "multiple_choice",
      question: "What is the duration of Ghunnah in both Idghām bi-Ghunnah and Ikhfā’ Ḥaqīqī?",
      questionBangla: "ইদগামে বা-গুন্নাহ এবং ইখফায়ে হাক্বীক্বী উভয়ের ক্ষেত্রেই গুন্নাহর পরিমাণ কতটুকু?",
      options: [
        "Exactly 2 counts (Ḥarakatān), equal to the time of a natural Madd",
        "1 count only",
        "6 counts",
        "Instantaneous"
      ],
      correctIndex: 0,
      explanation: "All complete Ghunnahs in Tajweed are sustained for exactly 2 counts (the measure of two vowels / opening two fingers).",
      explanationBangla: "তাজবীদের সকল পূর্ণাঙ্গ গুন্নাহর আদর্শ পরিমাণ হলো ঠিক ২ হরকত বা ১ আলিফ পরিমাণ সময়।"
    },
    {
      id: "q10_35",
      type: "multiple_choice",
      question: "In the verse (وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ), identify the two Idghām instances in order:",
      questionBangla: "এই আয়াতাংশে দুটি ইদগাম ক্রমানুসারে চিহ্নিত করুন:",
      promptText: "وَمَن يَعْمَلْ  ...  خَيْرًا يَرَهُ",
      options: [
        "Both are Idghām bi-Ghunnah into the letter Yā’: (وَمَن يَعْمَلْ) and (خَيْرًا يَرَهُ)",
        "First is Izhar, second is Idgham",
        "First is Idgham without Ghunnah",
        "Both are Ikhfa"
      ],
      correctIndex: 0,
      explanation: "Both (مَن يَعْمَلْ) and (خَيْرًا يَرَهُ) feature Nūn Sakin / Tanween followed by Yā’, creating two Idghām bi-Ghunnahs.",
      explanationBangla: "উভয় স্থানেই নূন সাকিন ও তানবীনের পর ইয়া (ي) আসায় দুটিই গুন্নাহসহ ইদগাম: 'ওয়ামাইঁ-ইয়া'মাল' এবং 'খইরাইঁ-ইয়ারহ্'।"
    }
  ]
};
