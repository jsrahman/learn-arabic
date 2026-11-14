import { Quiz } from "./types";

export const quizLevel2: Quiz = {
  id: "q2",
  levelId: 2,
  title: "Level 2: Makhārij al-Ḥurūf (17 Articulation Points) Challenge",
  titleBangla: "লেভেল ২: মাখারিজুল হুরুফ (১৭টি উচ্চারণ স্থান) কঠিন পরীক্ষা",
  description: "Demonstrate deep knowledge of the 5 general areas, 17 specific vocal tract exit points, and phonological anatomy of Arabic sounds.",
  descriptionBangla: "আরবি ধ্বনি উচ্চারণের ৫টি প্রধান অঞ্চল, ১৭টি সুনির্দিষ্ট মাখরাজ এবং অঙ্গসংস্থানগত উচ্চারণস্থান নিখুঁতভাবে যাচাই করুন।",
  passingScore: 70,
  questions: [
    {
      id: "q2_1",
      type: "multiple_choice",
      question: "According to Imam Ibn al-Jazari, how many specific articulation points (Makhārij Khāṣṣah) exist in Arabic?",
      questionBangla: "ইমাম ইবনুল জাযারী (রহ.) এর মতে আরবি বর্ণমালায় মোট কতটি সুনির্দিষ্ট মাখরাজ রয়েছে?",
      options: ["14 points", "16 points", "17 points", "19 points"],
      correctIndex: 2,
      explanation: "The predominant view adopted by Ibn al-Jazari and Al-Khalil ibn Ahmad is that there are 17 specific articulation points.",
      explanationBangla: "ইমাম ইবনুল জাযারী এবং আল-খালিল ইবনে আহমদের গ্রহণযোগ্য মতানুসারে মাখরাজ মোট ১৭টি।"
    },
    {
      id: "q2_2",
      type: "multiple_choice",
      question: "What are the 5 major general regions (Al-Makhārij al-‘Āmmah) of the human vocal tract?",
      questionBangla: "মানব শরীরের ৫টি সাধারণ প্রধান উচ্চারণ অঞ্চল (মাখারিজ আম্মাহ্) কোনগুলো?",
      options: [
        "Al-Jawf (Oral Cavity), Al-Halq (Throat), Al-Lisan (Tongue), Ash-Shafatan (Lips), Al-Khaishoom (Nasal Cavity)",
        "Throat, Larynx, Teeth, Tongue, Chest",
        "Vocal cords, Palate, Teeth, Lips, Lungs",
        "Tongue, Teeth, Uvula, Epiglottis, Nose"
      ],
      correctIndex: 0,
      explanation: "The 5 general areas contain all 17 specific points: Al-Jawf, Al-Halq, Al-Lisan, Ash-Shafatan, and Al-Khaishoom.",
      explanationBangla: "৫টি মূল অঞ্চল হলো: আল-জওফ (মুখ ও কণ্ঠের শূন্যস্থান), আল-হলক্ব (কণ্ঠনালী), আল-লিসান (জিহ্বা), আশ-শাফাতান (দুই ঠোঁট), এবং আল-খাইশূম (নাক বা নাসারন্ধ্র)।"
    },
    {
      id: "q2_3",
      type: "multiple_choice",
      question: "Which letters originate from Al-Jawf (the open cavity of the mouth and throat)?",
      questionBangla: "আল-জওফ (কণ্ঠ ও মুখের খালি জায়গা) থেকে কোন হরফগুলো উচ্চারিত হয়?",
      options: [
        "The three letters of Madd: Alif preceded by Fathah, Waw preceded by Dammah, Yaa preceded by Kasrah",
        "Hamzah and Haa",
        "Baa, Meem, and Waw",
        "Qaaf and Kaaf"
      ],
      correctIndex: 0,
      explanation: "Al-Jawf is the estimated articulation point for the 3 prolonged Madd letters (حروف المد الثلاثة).",
      explanationBangla: "আল-জওফ হলো তিনটি মাদ্দের হরফের (আলিফ, ওয়াও, ইয়া) অনির্দিষ্ট মুক্ত উচ্চারণস্থান।"
    },
    {
      id: "q2_4",
      type: "audio_match",
      question: "Listen to this sound. Which throat region does this letter belong to: Deepest (Aqṣā), Middle (Wasaṭ), or Closest (Adnā)?",
      questionBangla: "উচ্চারণটি শুনুন। এটি কণ্ঠনালীর কোন স্থান থেকে উচ্চারিত: গভীরতম (আকসা), মধ্যভাগ (ওয়াসাত), নাকি উপরিভাগ (আদনা)?",
      audioPrompt: "عين",
      audioUrl: "/audio/alphabet/ayn.mp3",
      options: ["Aqṣā al-Ḥalq (Deepest throat)", "Wasaṭ al-Ḥalq (Middle throat)", "Adnā al-Ḥalq (Closest throat)", "Al-Jawf (Oral cavity)"],
      correctIndex: 1,
      explanation: "‘Ayn (ع) and Ḥā’ (ح) originate from Wasaṭ al-Ḥalq (the middle of the throat, level with the epiglottis).",
      explanationBangla: "আইন (ع) এবং হা (ح) কণ্ঠনালীর মধ্যভাগ (ওয়াসাতুল হলক্ব) থেকে উচ্চারিত হয়।"
    },
    {
      id: "q2_5",
      type: "multiple_choice",
      question: "Which two letters originate from Aqṣā al-Ḥalq (the deepest part of the throat, near the vocal cords)?",
      questionBangla: "কণ্ঠনালীর শেষভাগ বা গভীরতম অংশ (আকসা আল-হলক্ব) থেকে কোন দুটি হরফ উচ্চারিত হয়?",
      promptText: "ء  /  هـ",
      options: ["Hamzah (ء) and Hā’ (هـ)", "‘Ayn (ع) and Ḥā’ (ح)", "Ghayn (غ) and Khā’ (خ)", "Qāf (ق) and Kāf (ك)"],
      correctIndex: 0,
      explanation: "Aqṣā al-Ḥalq produces Hamzah (ء) and Hā’ (هـ) right at the level of the vocal cords.",
      explanationBangla: "কণ্ঠনালীর নিম্নাংশ (আকসায়ে হলক্ব) থেকে হামযাহ (ء) এবং হা (هـ) উচ্চারিত হয়।"
    },
    {
      id: "q2_6",
      type: "multiple_choice",
      question: "Which two letters originate from Adnā al-Ḥalq (the closest part of the throat, nearest to the mouth)?",
      questionBangla: "কণ্ঠনালীর ওপরের অংশ বা মুখের নিকটতম অংশ (আদনা আল-হলক্ব) থেকে কোন দুটি হরফ বের হয়?",
      promptText: "غ  /  خ",
      options: ["Ghayn (غ) and Khā’ (خ)", "‘Ayn (ع) and Ḥā’ (ح)", "Qāf (ق) and Kāf (ك)", "Jīm (ج) and Shīn (ش)"],
      correctIndex: 0,
      explanation: "Adnā al-Ḥalq is the upper throat region producing Ghayn (غ) and Khā’ (خ).",
      explanationBangla: "কণ্ঠনালীর ওপরের প্রান্ত থেকে গাইন (غ) এবং খা (خ) উচ্চারিত হয়।"
    },
    {
      id: "q2_7",
      type: "multiple_choice",
      question: "Where is the articulation point of Qāf (ق)?",
      questionBangla: "ক্বাফ (ق) হরফের সুনির্দিষ্ট মাখরাজ কোনটি?",
      promptText: "ق",
      options: [
        "Extreme back of the tongue raised against the soft uvular palate",
        "Back of the tongue raised against the hard palate",
        "Middle of the tongue against the roof of the mouth",
        "Tip of the tongue touching the front incisors"
      ],
      correctIndex: 0,
      explanation: "Qāf (ق) is articulated from the utmost back of the tongue touching the soft palate (Lahāt/Uvula area).",
      explanationBangla: "জিহ্বার গোড়ার একেবারে শেষ অংশ তার বরাবর ওপরের নরম তালুর সাথে লাগিয়ে ক্বাফ উচ্চারিত হয়।"
    },
    {
      id: "q2_8",
      type: "multiple_choice",
      question: "How does the articulation point of Kāf (ك) compare to Qāf (ق)?",
      questionBangla: "কাফ (ك) এর মাখরাজ ক্বাফ (ق) থেকে কীভাবে আলাদা?",
      promptText: "ك  /  ق",
      options: [
        "Kāf is slightly forward, contacting both the hard and soft palate",
        "Kāf is deeper down in the throat than Qāf",
        "Kāf is from the tip of the tongue",
        "Kāf is produced between the lips"
      ],
      correctIndex: 0,
      explanation: "Kāf (ك) is articulated just slightly forward of Qāf, where the hard and soft palates meet.",
      explanationBangla: "কাফ (ك) এর মাখরাজ ক্বাফের সামান্য সামনে, শক্ত ও নরম তালুর সংযোগস্থলে অবস্থিত।"
    },
    {
      id: "q2_9",
      type: "multiple_choice",
      question: "Which three letters originate from Wasaṭ al-Lisān (the middle of the tongue contacting the roof of the mouth)?",
      questionBangla: "জিহ্বার মধ্যভাগ ও তার বরাবর ওপরের তালু থেকে কোন তিনটি হরফ উচ্চারিত হয়?",
      promptText: "ج  -  ش  -  ي",
      options: [
        "Jīm (ج), Shīn (ش), and non-Madd Yā’ (ي)",
        "Qāf (ق), Kāf (ك), and Lām (ل)",
        "Ṭā’ (ط), Dāl (د), and Tā’ (ت)",
        "Ṣād (ص), Zāy (ز), and Sīn (س)"
      ],
      correctIndex: 0,
      explanation: "The middle of the tongue (شجر اللسان) produces Jīm, Shīn, and unprolonged Yā’ (collected in جيش).",
      explanationBangla: "জিহ্বার মধ্যভাগ ওপরের তালুর সাথে মিলিত হয়ে জীম (ج), শীন (ش) এবং হরকতযুক্ত ইয়া (ي) উচ্চারিত হয়।"
    },
    {
      id: "q2_10",
      type: "multiple_choice",
      question: "Where is the precise articulation point of Ḍād (ض)?",
      questionBangla: "দোয়াদ (ض) হরফের যথাযথ মাখরাজ কোনটি?",
      promptText: "ض",
      options: [
        "One or both edges (lateral sides) of the tongue pressing against the upper molars",
        "The very tip of the tongue against the bottom teeth",
        "The middle of the tongue pushed flat",
        "Both lips pressed tightly together"
      ],
      correctIndex: 0,
      explanation: "Ḍād (ض) is articulated from one or both edges of the tongue (Hāffat al-Lisān) contacting the upper molar teeth with elongation (Istiṭālah).",
      explanationBangla: "জিহ্বার গোড়ার এক বা উভয় পাশ ওপরের মাড়ির দাঁতের গোড়ার সাথে সংযোগ ঘটিয়ে দোয়াদ উচ্চারিত হয়।"
    },
    {
      id: "q2_11",
      type: "multiple_choice",
      question: "What is the articulation point of Lām (ل)?",
      questionBangla: "লাম (ل) হরফের মাখরাজ কোনটি?",
      promptText: "ل",
      options: [
        "From the nearest front edge of the tongue to its tip, touching the gum line of the upper anterior teeth",
        "Deep throat",
        "Underneath the bottom teeth",
        "Between both lips"
      ],
      correctIndex: 0,
      explanation: "Lām has the widest articulation surface, from the side edge of the tongue around to its tip against the upper gums.",
      explanationBangla: "জিহ্বার সামনের দিকের কিনারা থেকে আগা পর্যন্ত অংশ ওপরের দাঁতের মাড়ির সাথে লেগে লাম উচ্চারিত হয়।"
    },
    {
      id: "q2_12",
      type: "multiple_choice",
      question: "Where does Nūn (ن) exit from when pronounced with a vowel or clear Izhar?",
      questionBangla: "স্পষ্ট নূন (ن) হরফটি কোন স্থান থেকে উচ্চারিত হয়?",
      promptText: "ن",
      options: [
        "The tip of the tongue touching the gum line of the upper two front teeth, accompanied by nasal Ghunnah",
        "Between the lower front teeth",
        "The middle of the tongue",
        "Deep in the pharynx"
      ],
      correctIndex: 0,
      explanation: "Nūn is articulated from the tip of the tongue hitting the gum ridge of the upper front incisors, paired with its nasal partner from the Khaishoom.",
      explanationBangla: "জিহ্বার আগা তার বরাবর ওপরের তালু বা সামনের দুই দাঁতের মাড়ির সাথে লেগে নূন উচ্চারিত হয়, সাথে নাসিক্য গুন্নাহ থাকে।"
    },
    {
      id: "q2_13",
      type: "audio_match",
      question: "Listen to the vibration of Rā’ (ر). How does its tongue contact differ from Nūn?",
      questionBangla: "র (ر) এর স্পন্দন শুনুন। এর উচ্চারণ স্থান নূন থেকে কীভাবে সূক্ষ্মভাবে পৃথক?",
      audioPrompt: "راء",
      audioUrl: "/audio/alphabet/raa.mp3",
      options: [
        "Rā’ is slightly farther back into the top palate than Nūn, incorporating a slight tilt of the top surface of the tongue tip",
        "Rā’ is made with the throat, Nūn is with the teeth",
        "Rā’ uses the lips completely",
        "There is no anatomical difference"
      ],
      correctIndex: 0,
      explanation: "Rā’ is made from the tip of the tongue leaning slightly onto its back surface, just behind the Makhraj of Nūn.",
      explanationBangla: "র (ر) এর মাখরাজ নূনের সামান্য পেছনে জিহ্বার পিঠের আগা ওপরের তালুতে স্পর্শ করিয়ে উচ্চারিত হয়।"
    },
    {
      id: "q2_14",
      type: "multiple_choice",
      question: "Which triplet of letters is known as Al-Ḥurūf an-Naṭ‘iyyah (الْحُرُوفُ النَّطْعِيَّةُ)?",
      questionBangla: "নাতা'ইয়াহ (তালুর মাংসল খাঁজ থেকে উচ্চারিত) হরফ কোন তিনটি?",
      promptText: "ط  -  د  -  ت",
      options: [
        "Ṭā’ (ط), Dāl (د), and Tā’ (ت)",
        "Ṣād (ص), Zāy (ز), and Sīn (س)",
        "Ẓā’ (ظ), Dhāl (ذ), and Thā’ (ث)",
        "Jīm (ج), Shīn (ش), and Yā’ (ي)"
      ],
      correctIndex: 0,
      explanation: "Ṭā’, Dāl, and Tā’ originate from the tongue tip touching the gum ridge right at the base of the upper front incisors.",
      explanationBangla: "তোয়া (ط), দাল (د) এবং তা (ت) জিহ্বার ডগা ওপরের সামনের দুই দাঁতের গোড়ার সাথে লেগে উচ্চারিত হয়।"
    },
    {
      id: "q2_15",
      type: "multiple_choice",
      question: "Which triplet of letters is known as Al-Ḥurūf al-Asaliyyah (الْحُرُوفُ الْأَسَلِيَّةُ - whistling letters)?",
      questionBangla: "আসালিয়্যাহ (শিসযুক্ত তীক্ষ্ণ ধ্বনির হরফ) কোন তিনটি?",
      promptText: "ص  -  ز  -  س",
      options: [
        "Ṣād (ص), Zāy (ز), and Sīn (س)",
        "Thā’ (ث), Dhāl (ذ), and Ẓā’ (ظ)",
        "Bā’ (ب), Mīm (م), and Wāw (و)",
        "Qāf (ق), Kāf (ك), and Lām (ل)"
      ],
      correctIndex: 0,
      explanation: "Ṣād, Zāy, and Sīn are articulated from the tip of the tongue resting near the inner surface of the bottom incisors, sound passing through.",
      explanationBangla: "সোয়াদ (ص), যা (ز) এবং সীন (س) জিহ্বার ডগা নিচের সামনের দুই দাঁতের ভেতরের অংশে রেখে উচ্চারিত হয়।"
    },
    {
      id: "q2_16",
      type: "multiple_choice",
      question: "Which triplet of letters is known as Al-Ḥurūf al-Lithawiyyah (الْحُرُوفُ اللِّثَوِيَّةُ - dental letters)?",
      questionBangla: "লিছাওয়িয়্যাহ (দাঁতের কিনারার হরফ) কোন তিনটি?",
      promptText: "ظ  -  ذ  -  ث",
      options: [
        "Ẓā’ (ظ), Dhāl (ذ), and Thā’ (ث)",
        "Ṭā’ (ط), Dāl (د), and Tā’ (ت)",
        "Ṣād (ص), Zāy (ز), and Sīn (س)",
        "Hamzah (ء), Hā’ (هـ), and ‘Ayn (ع)"
      ],
      correctIndex: 0,
      explanation: "Ẓā’, Dhāl, and Thā’ are pronounced from the very tip of the tongue contacting the edge of the two top front incisors.",
      explanationBangla: "জোয়া (ظ), যাল (ذ) এবং সা (ث) জিহ্বার ডগা ওপরের সামনের দুই দাঁতের আগার সাথে লাগিয়ে উচ্চারিত হয়।"
    },
    {
      id: "q2_17",
      type: "multiple_choice",
      question: "What is the unique articulation point of Fā’ (ف)?",
      questionBangla: "ফা (ف) হরফের অনন্য মাখরাজ কোনটি?",
      promptText: "ف",
      options: [
        "The edges of the upper two front teeth resting on the wet inner belly of the bottom lip",
        "Both lips pressed tightly together",
        "The tip of the tongue touching the upper lip",
        "The soft palate"
      ],
      correctIndex: 0,
      explanation: "Fā’ is produced by placing the tips of the two upper front teeth against the wet inside part of the lower lip.",
      explanationBangla: "সামনের ওপরের দুই দাঁতের আগা নিচের ঠোঁটের ভেতরের আর্দ্র অংশের সাথে স্পর্শ করিয়ে ফা (ف) উচ্চারিত হয়।"
    },
    {
      id: "q2_18",
      type: "multiple_choice",
      question: "How do Bā’ (ب) and Mīm (م) differ mechanically in their lip closure?",
      questionBangla: "ঠোঁটের স্পর্শে বা (ب) এবং মীম (م) এর মধ্যে যান্ত্রিক পার্থক্য কী?",
      promptText: "ب  /  م",
      options: [
        "Bā’ compresses the wet inner surface of both lips with explosive force; Mīm closes the drier outer margin gently with nasal Ghunnah",
        "Bā’ is nasalized while Mīm is throat-based",
        "Mīm uses only the bottom lip while Bā’ uses the top",
        "They have the exact same acoustic execution without distinction"
      ],
      correctIndex: 0,
      explanation: "Bā’ closes firmly on the wet inner mucosal surface of the lips; Mīm closes naturally on the outer part accompanied by Ghunnah from the nose.",
      explanationBangla: "বা (ب) দুই ঠোঁটের ভেতরের ভেজা অংশ সজোরে চেপে উচ্চারিত হয়; মীম (م) ঠোঁটের বাইরের শুকনো অংশ মিলিয়ে নাসারন্ধ্রের গুন্নাহ সহযোগে উচ্চারিত হয়।"
    },
    {
      id: "q2_19",
      type: "multiple_choice",
      question: "How is unprolonged consonant Wāw (و) articulated from the lips?",
      questionBangla: "হরকতযুক্ত ব্যঞ্জনবর্ণ ওয়াও (و) ঠোঁট থেকে কীভাবে উচ্চারিত হয়?",
      promptText: "و",
      options: [
        "Incomplete closure of the lips by rounding them forward into a circular aperture",
        "Pressing the lips tightly shut",
        "Touching the tongue to the lips",
        "Breathing through open lips without rounding"
      ],
      correctIndex: 0,
      explanation: "Consonant Wāw is formed by rounding both lips forward into an open circle without complete closure.",
      explanationBangla: "উভয় ঠোঁটকে সামনে বাড়িয়ে গোলাকার ফাঁকা রেখে ওয়াও (و) উচ্চারিত হয়।"
    },
    {
      id: "q2_20",
      type: "multiple_choice",
      question: "What is Al-Khaishoom (الْخَيْشُومُ) and what sound originates exclusively from it?",
      questionBangla: "আল-খাইশূম (নাসিকা গহ্বর) কী এবং এখান থেকে এককভাবে কোন ধ্বনি উৎপন্ন হয়?",
      options: [
        "The nasal cavity connecting the nose to the pharynx; it produces Ghunnah (nasal resonance)",
        "The windpipe producing deep breath",
        "The voice box producing heavy letters",
        "The palate producing whistling sounds"
      ],
      correctIndex: 0,
      explanation: "Al-Khaishoom is the nasal passage opening into the pharynx, which is the dedicated source of the nasal sound Ghunnah.",
      explanationBangla: "আল-খাইশূম হলো নাকের ভেতরের ফাঁকা গহ্বর, যা থেকে সার্বক্ষণিক গুন্নাহর (নাসিক্য সুর) উৎপত্তি হয়।"
    },
    {
      id: "q2_21",
      type: "multiple_choice",
      question: "If a reciter pronounces Ṭā’ (ط) like English 'T', which articulation flaw has occurred?",
      questionBangla: "যদি কোনো তিলাওয়াতকারী তোয়া (ط) কে ইংরেজির 'T' বা 'ট' এর মতো উচ্চারণ করে, তবে কী মাখরাজগত ত্রুটি হয়েছে?",
      options: [
        "Failure to elevate the back of the tongue (Isti‘la) and enclose the sound against the palate (Iṭbāq)",
        "Using the lips instead of the tongue",
        "Adding too much breath",
        "Stopping the sound in the throat"
      ],
      correctIndex: 0,
      explanation: "Ṭā’ shares the same dental contact as Tā’ (ت), but requires raising the tongue body and cupping the palate (Iṭbāq) to create its deep resonance.",
      explanationBangla: "তোয়া (ط) ও তা (ت) এর দাঁতের গোড়া একই হলেও, তোয়া-তে জিহ্বার গোড়া ও পেট পুরো তালুর দিকে তুলে আওয়াজ ভারী ও আবদ্ধ (ইতবাক) করতে হয়।"
    },
    {
      id: "q2_22",
      type: "multiple_choice",
      question: "Which of the following errors is common when pronouncing Ḍād (ض)?",
      questionBangla: "দোয়াদ (ض) উচ্চারণে অধিকাংশ শিক্ষার্থীর সাধারণ ভুল কোনটি?",
      options: [
        "Pronouncing it as standard Dāl (দ) or twisting it into Ẓā’ (যো/জ্বা)",
        "Pronouncing it as Bā’",
        "Pronouncing it like Mīm",
        "Turning it into an Alif"
      ],
      correctIndex: 0,
      explanation: "Many confuse Ḍād by striking the front teeth like Dāl, or using the tongue tip like Ẓā’, instead of the side edges against upper molars.",
      explanationBangla: "সবচেয়ে বড় ভুল হলো জিহ্বার পাশ ব্যবহার না করে ডগা ব্যবহার করে একে সাধারণ 'দাল' বা 'জোয়া' এর মতো পড়া।"
    },
    {
      id: "q2_23",
      type: "multiple_choice",
      question: "Why are the letters ء, هـ, ع, ح, غ, and خ collectively called 'Ḥurūf al-Ḥalq' (حُرُوفُ الْحَلْقِ)?",
      questionBangla: "ء, هـ, ع, ح, غ, এবং خ হরফগুলোকে কেন 'হুরুফুল হলক্ব' (কণ্ঠনালীর হরফ) বলা হয়?",
      options: [
        "Because their specific articulation points all reside along the throat cavity",
        "Because they all sound like laughing",
        "Because they require swallowing air",
        "Because they cannot be pronounced with vowels"
      ],
      correctIndex: 0,
      explanation: "All 6 letters originate from the throat (Halq) across its three zones (deepest, middle, and closest).",
      explanationBangla: "কারণ এই ৬টি হরফের মাখরাজ কণ্ঠনালীর (হলক্ব) তিনটি অঞ্চল জুড়ে অবস্থিত।"
    },
    {
      id: "q2_24",
      type: "multiple_choice",
      question: "How many specific articulation points exist in the Tongue (Al-Lisān) alone?",
      questionBangla: "শুধুমাত্র জিহ্বার (আল-লিসান) মধ্যে কতটি সুনির্দিষ্ট মাখরাজ রয়েছে?",
      options: ["4 points", "8 points", "10 points", "12 points"],
      correctIndex: 2,
      explanation: "The tongue contains 10 specific articulation points (Makhārij) producing 18 distinct Arabic letters.",
      explanationBangla: "জিহ্বায় মোট ১০টি মাখরাজ রয়েছে যা থেকে ১৮টি আরবি হরফ বের হয়।"
    },
    {
      id: "q2_25",
      type: "audio_match",
      question: "Listen to the letter Ḥā’ (ح). Notice the pure mid-throat exhalation without raspiness.",
      questionBangla: "হা (ح) এর বিশুদ্ধ মধ্য-হলক্বের উচ্চারণ শুনুন। এটি খায়ের মতো কোনো কর্কশতা ছাড়া কীভাবে বের হচ্ছে লক্ষ্য করুন।",
      audioPrompt: "حاء",
      audioUrl: "/audio/alphabet/haa_throat.mp3",
      options: ["ح (Ḥā’ - mid throat)", "خ (Khā’ - upper throat rasp)", "هـ (Hā’ - deep vocal cords)", "ع (‘Ayn)"],
      correctIndex: 0,
      explanation: "Ḥā’ is clean and raspless from the mid-throat, whereas Khā’ has scrape from the upper throat.",
      explanationBangla: "হা (ح) মধ্য-হলক্ব থেকে পরিচ্ছন্ন বাতাসে বের হয়, কোনো ঘড়ঘড় বা কর্কশ ঘর্ষণ থাকে না।"
    },
    {
      id: "q2_26",
      type: "multiple_choice",
      question: "Which of the following letters has its articulation point distributed across BOTH the mouth and nasal cavity simultaneously?",
      questionBangla: "কোন হরফের উচ্চারণ একই সাথে মুখ এবং নাক (নাসিকা গহ্বর) উভয় অঙ্গের সংযোগে সম্পন্ন হয়?",
      options: ["Nūn (ن) and Mīm (م)", "Qāf and Kāf", "Lām and Rā’", "Alif and Yā’"],
      correctIndex: 0,
      explanation: "Both Nūn and Mīm have dual components: an oral touch (tongue for Nūn, lips for Mīm) and a nasal resonance (Khaishoom).",
      explanationBangla: "নূন ও মীম উভয় হরফে দুটি অংশ থাকে: একটি মুখের অংশ (জিহ্বা/ঠোঁট) এবং অপরটি নাকের গুন্নাহ্ অংশ।"
    },
    {
      id: "q2_27",
      type: "multiple_choice",
      question: "When pronouncing Sīn (س), Ṣād (ص), and Zāy (ز), where does the breath pass through?",
      questionBangla: "সীন, সোয়াদ এবং যা উচ্চারণের সময় শ্বাসবায়ু কোথা দিয়ে প্রবাহিত হয়?",
      options: [
        "Through the narrow corridor between the tongue tip and the inner gap of the front incisors",
        "Out of the nostrils exclusively",
        "Deep from the stomach",
        "Across the back molars"
      ],
      correctIndex: 0,
      explanation: "Sound channels through the narrow aperture between the upper and lower front teeth, producing a distinct whistle (Ṣafeer).",
      explanationBangla: "জিহ্বার ডগা ও ওপর-নিচের সামনের দাঁতের মধ্যবর্তী সংকীর্ণ ফাঁক দিয়ে তীব্র গতিতে বেরিয়ে শিস সৃষ্টি করে।"
    },
    {
      id: "q2_28",
      type: "multiple_choice",
      question: "What physical mechanism separates Ṣād (ص) from Sīn (س) at the same mouth point?",
      questionBangla: "একই মাখরাজ থেকে উচ্চারিত হওয়া সত্ত্বেও সোয়াদ (ص) ও সীন (س) এর মধ্যে শারীরিক পার্থক্য কী?",
      options: [
        "Ṣād has the back of the tongue raised and the center depressed (Iṭbāq), creating acoustic heaviness; Sīn keeps the tongue low (Istifāl)",
        "Ṣād touches the lips, Sīn does not",
        "Sīn uses the nose, Ṣād does not",
        "Ṣād is pronounced with vocal cords totally closed"
      ],
      correctIndex: 0,
      explanation: "Both touch the same dental spot, but Ṣād elevates the back and body of the tongue against the palate producing heavy resonance.",
      explanationBangla: "উভয়টির দাঁতের অবস্থান এক, কিন্তু সোয়াদ উচ্চারণে জিহ্বার গোড়া ও পিঠ তালুর দিকে উঁচিয়ে মোটা করা হয়।"
    },
    {
      id: "q2_29",
      type: "multiple_choice",
      question: "What is the classical Arabic method to pinpoint the exact Makhraj of any letter?",
      questionBangla: "যে কোনো আরবি হরফের সঠিক মাখরাজ নির্ণয় করার সনাতন বিশুদ্ধ পদ্ধতি কোনটি?",
      options: [
        "Place a Hamzah with a Fathah or Kasrah before it, put a Sukoon on the letter, and listen to where the sound arrests",
        "Shout the letter three times",
        "Pronounce it with a long Madd",
        "Whisper the letter backwards"
      ],
      correctIndex: 0,
      explanation: "Scholars say: introduce a vowelled Hamzah before the letter and make the letter Sakin (e.g. أَكْ, أَبْ, أَقْ); where the voice stops is its Makhraj.",
      explanationBangla: "পদ্ধতি হলো: হরফটির পূর্বে যবরযুক্ত হামযাহ এনে হরফটিতে জযম (সুকূন) দিয়ে থামুন (যেমন: আব্, আন্, আক্); যেখানে আওয়াজ আটকাবে সেটাই তার মাখরাজ।"
    },
    {
      id: "q2_30",
      type: "multiple_choice",
      question: "Which of the following letters has its articulation point closest to the throat among the tongue letters?",
      questionBangla: "জিহ্বার হরফগুলোর মধ্যে কণ্ঠনালীর সবচেয়ে নিকটে কোন হরফটির মাখরাজ?",
      promptText: "ق",
      options: ["Qāf (ق)", "Kāf (ك)", "Jīm (ج)", "Ḍād (ض)"],
      correctIndex: 0,
      explanation: "Qāf is at the very base of the tongue (Aqṣā al-Lisān), directly adjacent to the upper throat.",
      explanationBangla: "ক্বাফ (ق) জিহ্বার একেবারে গোড়ায় অবস্থিত, যা কণ্ঠনালীর সবচেয়ে নিকটবর্তী অংশ।"
    },
    {
      id: "q2_31",
      type: "multiple_choice",
      question: "Which letters originate from the lips (Ash-Shafatān) in total?",
      questionBangla: "দুই ঠোঁট (আশ-শাফাতান) থেকে মোট কতটি হরফ উচ্চারিত হয়?",
      options: ["Fā’ (ف), Bā’ (ب), Mīm (م), and Wāw (و)", "Only Bā’ and Mīm", "Bā’, Tā’, and Thā’", "All letters of Madd"],
      correctIndex: 0,
      explanation: "Four letters belong to the lips: Fā’ from one lip and teeth, while Bā’, Mīm, and Wāw use both lips.",
      explanationBangla: "ঠোঁটের মোট ৪টি হরফ: ফা (এক ঠোঁট ও দাঁত), এবং বা, মীম ও ওয়াও (উভয় ঠোঁট)।"
    },
    {
      id: "q2_32",
      type: "multiple_choice",
      question: "How many letters originate from Al-Halq (the throat) in total?",
      questionBangla: "কণ্ঠনালী (আল-হলক্ব) থেকে সর্বমোট কতটি হরফ উচ্চারিত হয়?",
      options: ["6 letters", "4 letters", "8 letters", "3 letters"],
      correctIndex: 0,
      explanation: "The throat contains 3 zones that produce exactly 6 letters: ء, هـ, ع, ح, غ, and خ.",
      explanationBangla: "কণ্ঠনালী থেকে মোট ৬টি হরফ বের হয়: হামযাহ, হা, আইন, হা, গাইন এবং খা।"
    },
    {
      id: "q2_33",
      type: "multiple_choice",
      question: "Which area is known as an 'approximate' or 'intangible' Makhraj (Makhraj Muqaddar)?",
      questionBangla: "কোন উচ্চারণ স্থানটিকে 'আনুমানিক বা অনির্দিষ্ট মাখরাজ' (মাখরাজ মুকাদ্দার) বলা হয়?",
      options: ["Al-Jawf (The open oral cavity)", "The teeth", "The lips", "The throat"],
      correctIndex: 0,
      explanation: "Al-Jawf has no specific collision point of cartilage or flesh; the sound resonates through the open air column until air ceases.",
      explanationBangla: "আল-জওফ (মুখের ভেতরের খালি জায়গা) কোনো নির্দিষ্ট অঙ্গের সাথে না লাগায় এটি অনির্দিষ্ট বা আনুমানিক মাখরাজ।"
    },
    {
      id: "q2_34",
      type: "multiple_choice",
      question: "What danger occurs when a non-Arab reciter articulates Dhāl (ذ) with the teeth clenched together?",
      questionBangla: "যখন কোনো তিলাওয়াতকারী দাঁত বন্ধ করে যাল (ذ) উচ্চারণ করে, তখন কী বিকৃতি ঘটে?",
      options: [
        "It mutates into the buzzing letter Zāy (ز)",
        "It becomes a silent letter",
        "It sounds like Qāf",
        "It turns into a long Madd"
      ],
      correctIndex: 0,
      explanation: "If the tongue tip does not project slightly to touch the top incisors, Dhāl becomes corrupted into the whistling Zāy.",
      explanationBangla: "জিহ্বার ডগা দাঁতের আগায় না ছুঁয়ে ভেতরে দাঁত বন্ধ রাখলে যাল (ذ) বিকৃত হয়ে শিসযুক্ত যা (ز) হয়ে যায়।"
    },
    {
      id: "q2_35",
      type: "multiple_choice",
      question: "Why is mastering Makhārij considered the mandatory foundation of Quran recitation?",
      questionBangla: "মাখরাজ আয়ত্ত করাকে কুরআন তিলাওয়াতের অলঙ্ঘনীয় ভিত্তি কেন গণ্য করা হয়?",
      options: [
        "Because confusing articulation changes letter identities, altering word meanings and corrupting divine revelation",
        "Because it makes speech sound faster",
        "Because it is required to memorize Surahs",
        "Because it makes text louder"
      ],
      correctIndex: 0,
      explanation: "Swapping an articulation point turns words into different words (e.g. قَلْب 'heart' vs كَلْب 'dog'), constituting a grave error (Laḥn Jalī).",
      explanationBangla: "মাখরাজের ভুল হরফ বদলে ফেলে এবং অর্থ সম্পূর্ণ বিকৃত করে দেয় (যেমন: ক্বলব 'অন্তর' থেকে কাল্ব 'কুকুর'), যা মারাত্মক অপরাধ (লাহনে জলী)।"
    }
  ]
};
