import { Quiz } from "./types";

export const quizLevel6: Quiz = {
  id: "q6",
  levelId: 6,
  title: "Level 6: Shaddah (Tashdīd) & Consonant Doubling Master Challenge",
  titleBangla: "লেভেল ৬: তাশদীদ, দ্বিত্ব ব্যঞ্জনধ্বনি ও নবরাহর কঠিন পরীক্ষা",
  description: "Dissect the structural anatomy of doubled consonants, Tashdeed with vowels/Tanween, Ghunnah Mushaddadah, and stopping on doubled letters.",
  descriptionBangla: "তাশদীদের অভ্যন্তরীণ রূপ (সাকিন + মুতাহাররিক), ওয়াজিব গুন্নাহ, তাশদীদযুক্ত হরফে ওয়াকফ এবং ওয়াও-ইয়াতে নবরাহ্ এর সঠিক প্রয়োগ যাচাই করুন।",
  passingScore: 70,
  questions: [
    {
      id: "q6_1",
      type: "multiple_choice",
      question: "What is the structural composition of ANY letter carrying a Shaddah (ّ)?",
      questionBangla: "তাশদীদ (ّ) যুক্ত যে কোনো হরফের অভ্যন্তরীণ গঠন কাঠামো কী রূপ?",
      promptText: "ـّ",
      options: [
        "It consists of TWO identical letters merged together: the first is Sākin (unvowelled) and the second is Mutaharrik (vowelled)",
        "Two letters with vowels",
        "A letter with an extra long Madd",
        "A silent consonant"
      ],
      correctIndex: 0,
      explanation: "A Mushaddad letter is structurally two letters: the first carries Sukūn and the second carries a Harakah (الأول ساكن والثاني متحرك).",
      explanationBangla: "তাশদীদযুক্ত হরফ মূলত দুটি একই হরফের সংমিশ্রণ: যার প্রথমটি সাকিন (জযমযুক্ত) এবং দ্বিতীয়টি হরকতযুক্ত।"
    },
    {
      id: "q6_2",
      type: "multiple_choice",
      question: "From which Arabic letter was the 3-toothed Shaddah symbol (ّ) historically derived?",
      questionBangla: "তাশদীদ (ّ) এর ৩ দাঁতওয়ালা চিহ্নটি ঐতিহাসিকভাবে কোন আরবি হরফের মাথা থেকে সংগৃহীত?",
      options: [
        "From the initial tooth head of the letter Shīn (ش), representing 'Shaddah' (strength/reinforcement)",
        "From Sīn",
        "From Thā’",
        "From Bā’"
      ],
      correctIndex: 0,
      explanation: "Al-Khalil ibn Ahmad al-Farahidi derived the Tashdeed mark from the head of the letter Shīn (شديد / شدة).",
      explanationBangla: "আরবি ভাষাবিদ আল-খালিল ইবনে আহমদ 'শাদ্দাহ্' বা 'শাদীদ' (তীব্র) শব্দের শীন (ش) হরফের মাথা থেকে এই চিহ্নটি উদ্ভাবন করেন।"
    },
    {
      id: "q6_3",
      type: "multiple_choice",
      question: "What mandatory rule applies when the letters Nūn or Mīm carry a Shaddah (نّ / مّ)?",
      questionBangla: "নূন বা মীম হরফের ওপর তাশদীদ আসলে (نّ বা مّ) কোন নিয়মটি পালন করা ওয়াজিব?",
      promptText: "إِنَّ  /  ثُمَّ",
      options: [
        "Ghunnah Mushaddadah: an obligatory 2-count nasal resonance from the Khaishoom (ওয়াজিব গুন্নাহ)",
        "Qalqalah",
        "Complete silence",
        "A 6-count Madd"
      ],
      correctIndex: 0,
      explanation: "Whenever Nūn or Mīm has a Shaddah, it is obligatory to hold the sound with a full 2-count nasal Ghunnah (Ghunnah Akmal).",
      explanationBangla: "নূন বা মীমে তাশদীদ হলে তাকে 'ওয়াজিব গুন্নাহ' বলে এবং নাকের বাঁশি থেকে পূর্ণ ২ মাত্রা সুর ধরে রেখে আদায় করতে হয়।"
    },
    {
      id: "q6_4",
      type: "multiple_choice",
      question: "In the word (إِنَّ), how is the word disassembled into its raw phonetic components?",
      questionBangla: "(إِنَّ) শব্দটিকে তার মৌলিক ধ্বনি উপাদানে বিশ্লেষণ করলে কী দাঁড়ায়?",
      promptText: "إِنَّ",
      options: [
        "Hamzah with Kasrah + Nūn Sākinah + Nūn with Fatḥah (إِ + نْ + نَ)",
        "Hamzah + Nūn with Fathah only",
        "Hamzah with Sukoon + Nūn",
        "Hamzah + two Alifs"
      ],
      correctIndex: 0,
      explanation: "The Tashdeed splits into: Hamzah with Kasrah + Nūn Sakin (held with Ghunnah) + Nūn with Fathah: 'In-na'.",
      explanationBangla: "এটি ভেঙে লিখলে হয়: যেরযুক্ত হামযাহ + সাকিন নূন (গুন্নাহসহ) + যবরযুক্ত নূন (إِ + نْ + نَ)।"
    },
    {
      id: "q6_5",
      type: "multiple_choice",
      question: "In the word (ثُمَّ), how is the Mīm Mushaddadah executed?",
      questionBangla: "(ثُمَّ) শব্দে তাশদীদযুক্ত মীম কীভাবে আদায় করা হয়?",
      promptText: "ثُمَّ",
      options: [
        "Close the lips firmly for 2 counts while vibrating the nasal cavity (Ghunnah) before releasing with Fatḥah",
        "Pronounce it as quick single Mīm",
        "Drop the Mīm",
        "Whisper the Mīm"
      ],
      correctIndex: 0,
      explanation: "The two lips close, holding the sound in the Khaishoom for two counts before releasing the vowel: 'Thum-ma'.",
      explanationBangla: "দুই ঠোঁট বন্ধ রেখে নাক দিয়ে ২ হরকত পরিমাণ ওয়াজিব গুন্নাহ ধরে রাখার পর যবরের সাথে মুক্ত করতে হয়: 'ছুম্মা'।"
    },
    {
      id: "q6_6",
      type: "multiple_choice",
      question: "When a letter carries BOTH a Shaddah and a Kasrah in standard typesetting, where is the Kasrah usually placed?",
      questionBangla: "মুদ্রিত আরবি লিপিতে তাশদীদের সাথে যের আসলে যের চিহ্নটি সাধারণত কোথায় বসানো হয়?",
      promptText: "ـِّ",
      options: [
        "Directly beneath the Shaddah teeth (above the letter, but below the Shaddah), or underneath the letter itself",
        "To the right of the letter",
        "Inside the letter's belly",
        "On the following letter"
      ],
      correctIndex: 0,
      explanation: "In many Arabic fonts, a stroke sitting immediately underneath the Shaddah symbol is a Kasrah, NOT a Fathah.",
      explanationBangla: "অনেক আরবি ফন্টে তাশদীদের খাঁজের ঠিক নিচে থাকা দাগটি আসলে যের (কাসরাহ্), যা হরফের ওপর থাকলেও তাশদীদের নিচে থাকে।"
    },
    {
      id: "q6_7",
      type: "multiple_choice",
      question: "When stopping (Waqf) on a word ending with a Mushaddad letter (e.g. الْحَقُّ), how is it recited?",
      questionBangla: "তাশদীদযুক্ত হরফে ওয়াকফ করলে (যেমন: الْحَقُّ) তা কীভাবে তিলাওয়াত করতে হবে?",
      promptText: "الْحَقُّ",
      options: [
        "You must stop with firmness (Nabrah / holding the double weight of the letter) so the listener knows it is two letters, not one",
        "You pronounce it like a normal single letter with Sukoon",
        "You pronounce its Dammah completely",
        "You must never stop on a Mushaddad letter"
      ],
      correctIndex: 0,
      explanation: "Stopping on a Mushaddad letter requires holding the letter for two beats with weight and accentuation (Waqf bi-Tashdeed).",
      explanationBangla: "তাশদীদযুক্ত হরফে থামার সময় হরফের দ্বিগুণ ওজন বজায় রেখে চাপ দিয়ে (নবরাহসহ) সাকিন করতে হয় যাতে দুটি হরফের অস্তিত্ব স্পষ্ট থাকে।"
    },
    {
      id: "q6_8",
      type: "multiple_choice",
      question: "In the phrase (تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ), what special rank of Qalqalah occurs when stopping on (وَتَبَّ)?",
      questionBangla: "সূরা লাহাবের ১ম আয়াতে (وَتَبَّ) শব্দে ওয়াকফ করার সময় কোন সর্বোচ্চ স্তরের কলকলাহ কার্যকর হয়?",
      promptText: "وَتَبَّ",
      options: [
        "Qalqalah Akbar (the highest and strongest rank of Qalqalah) because the Qalqalah letter carries a Shaddah",
        "Qalqalah Sughra",
        "Qalqalah Kubra",
        "No Qalqalah at all"
      ],
      correctIndex: 0,
      explanation: "Stopping on a Mushaddad Qalqalah letter produces Qalqalah Akbar: the first Bā’ is held firmly before releasing the explosive echo.",
      explanationBangla: "তাশদীদযুক্ত কলকলাহর হরফে ওয়াকফ করায় এটি কলকলায়ে আকবার (সর্বোচ্চ শক্তিশালী কলকলাহ্) হিসেবে সজোরে বাউন্স করবে।"
    },
    {
      id: "q6_9",
      type: "multiple_choice",
      question: "In the word (إِيَّاكَ), what letter carries the Shaddah?",
      questionBangla: "(إِيَّاكَ) শব্দে কোন হরফটির ওপর তাশদীদ রয়েছে?",
      promptText: "إِيَّاكَ",
      options: ["Yā’ (يّ)", "Alif", "Kāf", "Hamzah"],
      correctIndex: 0,
      explanation: "The Yā’ carries the Shaddah with Fathah followed by Alif: 'Iyyāka' (not 'Iyāka').",
      explanationBangla: "ইয়া (يّ) হরফের ওপর তাশদীদ রয়েছে: 'ইয়্যা-কা' (তাশদীদ ছাড়া পড়লে অর্থ মারাত্মক বিকৃত হয়ে যায়)।"
    },
    {
      id: "q6_10",
      type: "multiple_choice",
      question: "What is the consequence of omitting the Shaddah in (إِيَّاكَ نَعْبُدُ)?",
      questionBangla: "(إِيَّاكَ نَعْبُدُ) তিলাওয়াতে ইয়া-এর তাশদীদ ছেড়ে হালকা করে 'ইয়া-কা' পড়লে কী ভয়াবহ পরিণতি হয়?",
      options: [
        "A catastrophic semantic distortion (Laḥn Jalī) that alters divine worship, which invalidates the prayer",
        "A minor stylistic blemish",
        "It makes recitation easier",
        "No change in meaning"
      ],
      correctIndex: 0,
      explanation: "‘Iyyāka’ means 'You alone we worship'. Dropping the Shaddah to 'Iyāka' can mean 'the sunlight', destroying Islamic Tawheed.",
      explanationBangla: "তাশদীদ ছাড়া 'ইয়াকা' পড়লে অর্থ হতে পারে 'সূর্যের আলো'; ফলে এটি মারাত্মক লাহনে জলী এবং এতে সালাত বাতিল হয়ে যায়।"
    },
    {
      id: "q6_11",
      type: "multiple_choice",
      question: "What is 'Nabrah' (نَبْرَةٌ) when applied to Mushaddad Wāw or Yā’ (e.g. عَدُوٌّ or حَيَّ)?",
      questionBangla: "তাশদীদযুক্ত ওয়াও বা ইয়া হরফে (যেমন: عَدُوٌّ বা حَيَّ) 'নবরাহ্' (চাপ সৃষ্টি) কেন প্রয়োগ করা হয়?",
      promptText: "عَدُوٌّ  /  حَيَّ",
      options: [
        "A slight vocal surge/accent on the letter to distinguish it as an energetic doubled consonant rather than a lazy long Madd vowel",
        "A sudden cough",
        "A 6-count elongation",
        "A pitch change to high treble"
      ],
      correctIndex: 0,
      explanation: "Nabrah applies deliberate acoustic pressure on doubled Waw or Yaa so they are clearly recognized as consonants, not Madd letters.",
      explanationBangla: "নবরাহ হলো কণ্ঠের সামান্য চাপ প্রয়োগ করা যাতে তাশদীদযুক্ত ওয়াও বা ইয়া অলস মাদ্দের হরফের মতো না শুনিয়ে বলিষ্ঠ ব্যঞ্জনবর্ণ হিসেবে স্পষ্ট হয়।"
    },
    {
      id: "q6_12",
      type: "multiple_choice",
      question: "In the word (الصَّلَاةَ), why does the letter Ṣād (ص) carry a Shaddah?",
      questionBangla: "(الصَّلَاةَ) শব্দে সোয়াদ (ص) হরফের ওপর কেন তাশদীদ এসেছে?",
      promptText: "الصَّلَاةَ",
      options: [
        "Because Ṣād is a Solar letter (Ḥarf Shamsī); the preceding Lām of the definite article is assimilated directly into it",
        "Because it is the beginning of the Quran",
        "Because it has a Fathah",
        "Because of a Sukoon error"
      ],
      correctIndex: 0,
      explanation: "In Arabic, the Solar letters absorb the preceding 'Al-' definite article, doubling the solar consonant with a Shaddah.",
      explanationBangla: "কারণ সোয়াদ একটি শামসিয়্যাহ্ (সৌর) হরফ; ফলে আলিফ-লামের লামটি বিলুপ্ত হয়ে সোয়াদে তাশদীদ সৃষ্টি করেছে।"
    },
    {
      id: "q6_13",
      type: "multiple_choice",
      question: "How many Shaddahs are in the verse (إِنَّ رَبَّكَ هُوَ الْفَصْلُ)?",
      questionBangla: "(إِنَّ رَبَّكَ هُوَ الْفَصْلُ) বাক্যাংশে কতটি তাশদীদ রয়েছে?",
      promptText: "إِنَّ رَبَّكَ",
      options: ["Two: on Nūn of (إِنَّ) and Bā’ of (رَبَّكَ)", "Only one", "Three", "Four"],
      correctIndex: 0,
      explanation: "There are 2 Mushaddad letters: Nūn in ‘Inna’ and Bā’ in ‘Rabbaka’.",
      explanationBangla: "দুটি হরফে তাশদীদ রয়েছে: 'ইন্না'র নূন এবং 'রব্বাকা'র বা।"
    },
    {
      id: "q6_14",
      type: "multiple_choice",
      question: "What happens when Shaddah is combined with Tanwīn (e.g. كُلًّا)?",
      questionBangla: "যখন তাশদীদের সাথে তানবীন যুক্ত হয় (যেমন: كُلًّا), তখন উচ্চারণ কীভাবে সম্পন্ন হয়?",
      promptText: "كُلًّا",
      options: [
        "The letter is first doubled with muscular weight on its baseline, and then released into the nasal Tanwīn sound",
        "The Shaddah is ignored",
        "The Tanween is ignored",
        "Both become silent"
      ],
      correctIndex: 0,
      explanation: "First, the Lām is doubled firmly ('Kul-la'), then the Tanween completes as 'Kullan' (or 'Kullā' upon stopping).",
      explanationBangla: "প্রথমে লামকে শক্তভাবে তাশদীদের সাথে দ্বিত্ব করতে হবে ('কুল্ল'), তারপর তানবীনের উচ্চারণ 'কুল্লান্' (ওয়াকফে 'কুল্লা') করতে হবে।"
    },
    {
      id: "q6_15",
      type: "multiple_choice",
      question: "In the word (مُدَّتْ), what is the phonetic breakdown of the letter Dāl with Shaddah?",
      questionBangla: "(مُدَّتْ) শব্দে তাশদীদযুক্ত দাল হরফটির সঠিক বিভাজন কী?",
      promptText: "مُدَّتْ",
      options: [
        "Dāl Sākinah + Dāl with Fatḥah (دْ + دَ)",
        "Dāl with Dammah + Dāl with Kasrah",
        "Dāl + Tā’",
        "Single Dāl"
      ],
      correctIndex: 0,
      explanation: "The word is decomposed as: Mīm (ُ) + Dāl (ْ) + Dāl (َ) + Tā’ (ْ) -> 'Mud-dat'.",
      explanationBangla: "শব্দটি বিশ্লেষিত হয়: মীমে পেশ + সাকিন দাল + যবরযুক্ত দাল + সাকিন তা = 'মুদ্দাত্'।"
    },
    {
      id: "q6_16",
      type: "multiple_choice",
      question: "In the phrase (مِّن مَّالِ اللَّهِ), how many consecutive letters carry Shaddah?",
      questionBangla: "(مِّن مَّالِ اللَّهِ) বাক্যাংশে কতটি হরফে ধারাবাহিক তাশদীদ রয়েছে?",
      promptText: "مِّن مَّالِ اللَّهِ",
      options: [
        "Two: the Mīm of (مَّالِ) due to Idgham, and the Lām of (اللَّهِ)",
        "Zero",
        "Five",
        "One"
      ],
      correctIndex: 0,
      explanation: "The Nun Sakin assimilates into Meem creating a Mushaddad Meem, and the Lam of Lafz al-Jalalah carries Shaddah.",
      explanationBangla: "নূন সাকিন মীমে ইদগাম হয়ে মীমে তাশদীদ সৃষ্টি হয়েছে, এবং পরবর্তী আল্লাহ শব্দের লামে তাশদীদ রয়েছে।"
    },
    {
      id: "q6_17",
      type: "multiple_choice",
      question: "Why does the letter Rā’ with a Shaddah and Fatḥah (e.g. الرَّحْمَٰنِ) get pronounced as HEAVY (Mufakhkham)?",
      questionBangla: "(الرَّحْمَٰنِ) শব্দে তাশদীদ ও যবরযুক্ত র (رَّ) কেন মোটা বা ভারী (তাফখীম) হয়?",
      promptText: "الرَّحْمَٰنِ",
      options: [
        "Because in doubled letters, the ruling follows the vowel of the second letter (which has a Fatḥah = heavy)",
        "Because Alif is next to it",
        "Rā is always heavy in every situation",
        "Because it is in the Quran"
      ],
      correctIndex: 0,
      explanation: "When a letter is doubled, its heaviness or lightness is determined by the active vowel on the second component.",
      explanationBangla: "তাশদীদযুক্ত হরফে দ্বিতীয় হরকতযুক্ত হরফের হরকত (এখানে যবর) অনুযায়ী র-এর তাফখীম (ভারী হওয়া) নির্ধারিত হয়।"
    },
    {
      id: "q6_18",
      type: "multiple_choice",
      question: "What is the ruling if Rā’ carries a Shaddah with a Kasrah (e.g. مِنْ شَرِّ)?",
      questionBangla: "তাশদীদের সাথে যেরযুক্ত র (যেমন: مِنْ شَرِّ) এর ক্ষেত্রে তাজবীদের বিধান কী?",
      promptText: "مِنْ شَرِّ",
      options: [
        "It must be recited as LIGHT (Muraqqaq) because the vowel is Kasrah",
        "It must be recited as heavy",
        "It is silent",
        "It must be whispered"
      ],
      correctIndex: 0,
      explanation: "Because the active vowel on the doubled Rā’ is a Kasrah, it is recited with Tarqeeq (light and thin).",
      explanationBangla: "যেহেতু তাশদীদযুক্ত র-এর সাথে যের (কাসরাহ্) রয়েছে, তাই একে পাতলা ও হালকা (তারক্বীক্ব) করে পড়তে হবে।"
    },
    {
      id: "q6_19",
      type: "multiple_choice",
      question: "In the word (عَمَّ), what happens to the vowel at the end?",
      questionBangla: "(عَمَّ) শব্দে শেষে কী রয়েছে এবং কীভাবে আদায় করতে হবে?",
      promptText: "عَمَّ",
      options: [
        "A Mushaddad Mīm with 2 counts of Ghunnah, followed by a 1-count short Fatḥah",
        "A long 6-count Madd",
        "A Sukoon on ‘Ayn",
        "A Tanween"
      ],
      correctIndex: 0,
      explanation: "Pronounced with 2 counts of Ghunnah on the Meem, followed strictly by 1 short count of Fathah ('‘Am-ma', without stretching).",
      explanationBangla: "মীমে ২ হরকত ওয়াজিব গুন্নাহ করার পর যবরকে না টেনে মাত্র ১ হরকতে সমাপ্ত করতে হবে: 'আম্মা'।"
    },
    {
      id: "q6_20",
      type: "multiple_choice",
      question: "In (الصَّاخَّةُ), how many letters carrying Shaddah are in the word?",
      questionBangla: "(الصَّاخَّةُ) শব্দটিতে কতটি তাশদীদযুক্ত হরফ রয়েছে?",
      promptText: "الصَّاخَّةُ",
      options: [
        "Two: Ṣād (صَّ) and Khā’ (خَّ)",
        "Only one",
        "Three",
        "Zero"
      ],
      correctIndex: 0,
      explanation: "Both Ṣād and Khā’ carry Shaddah. Notice that Khā’ carries Shaddah after a Madd letter, causing Madd Lāzim!",
      explanationBangla: "দুটি হরফে তাশদীদ রয়েছে: সোয়াদ (صَّ) এবং খা (خَّ); মাদ্দের হরফের পর তাশদীদযুক্ত খা আসায় এটি মাদ্দ লাযিম হয়।"
    },
    {
      id: "q6_21",
      type: "multiple_choice",
      question: "What is the common error when reciting a doubled letter like Kāf in (يُدْرِككُّمُ)?",
      questionBangla: "(يُدْرِككُّمُ) শব্দে তাশদীদযুক্ত বা জোড়া কাফ আদায়ের সময় সাধারণ ত্রুটি কোনটি?",
      options: [
        "Allowing excessive breath (Hams) on the first Sakin component, which breaks the seamless fusion of the Shaddah",
        "Making the letter too loud",
        "Saying it like a Baa",
        "Adding a long Madd"
      ],
      correctIndex: 0,
      explanation: "When letters of Shiddah are doubled, the first part is held without releasing breath until the second part is pronounced.",
      explanationBangla: "তাশদীদ অবস্থায় প্রথম অংশে বাতাস বের করে ফেললে তাশদীদের সংযোগ ভেঙে যায়; তাই পূর্ণ আটকে রেখে দ্বিতীয় কাফে ছাড়তে হয়।"
    },
    {
      id: "q6_22",
      type: "multiple_choice",
      question: "In the word (الضَّالِّينَ), which two letters carry a Shaddah?",
      questionBangla: "(الضَّالِّينَ) শব্দটিতে কোন দুটি হরফের ওপর তাশদীদ রয়েছে?",
      promptText: "الضَّالِّينَ",
      options: [
        "Ḍād (ضَّ) and Lām (لِّ)",
        "Only Ḍād",
        "Only Lām",
        "Yā’ and Nūn"
      ],
      correctIndex: 0,
      explanation: "First, the Solar letter Ḍād has Shaddah; then following the Madd Alif, the Lām carries a Shaddah with Kasrah.",
      explanationBangla: "প্রথমটি সৌর হরফ দোয়াদ (ضَّ) এবং দ্বিতীয়টি মাদ্দের আলিফের পরবর্তী লাম (لِّ)।"
    },
    {
      id: "q6_23",
      type: "multiple_choice",
      question: "What is the Tajweed rule when stopping on the word (مُسْتَقِرٌّ)?",
      questionBangla: "(مُسْتَقِرٌّ) শব্দে ওয়াকফ করলে শেষের তাশদীদযুক্ত র-তে কীভাবে থামতে হবে?",
      promptText: "مُسْتَقِرٌّ",
      options: [
        "Stop on the doubled Rā’ with firmness and weight (Waqf bi-Tashdeed), keeping it light (Muraqqaq)",
        "Drop the Tanween and make it a single light Ra",
        "Make it bounce with Qalqalah",
        "Stop with Madd ‘Iwad"
      ],
      correctIndex: 0,
      explanation: "The Tanween drops, but the doubled status of Rā’ is preserved by stopping with weight and Tarqeeq.",
      explanationBangla: "তানবীন বাদ গেলেও তাশদীদের গুরুত্ব বোঝাতে চাপ দিয়ে পাতলা র-এর ওপর সাকিন করে থামতে হবে।"
    },
    {
      id: "q6_24",
      type: "multiple_choice",
      question: "In the word (سِجِّيلٍ), what Harakah is paired with the Shaddah on Jīm?",
      questionBangla: "(سِجِّيلٍ) শব্দে জীমের তাশদীদের সাথে কোন হরকতটি রয়েছে?",
      promptText: "سِجِّيلٍ",
      options: ["Kasrah (ِ)", "Fathah (َ)", "Dammah (ُ)", "Sukoon (ْ)"],
      correctIndex: 0,
      explanation: "The letter Jīm carries a Shaddah paired with a Kasrah: 'Sij-jeel'.",
      explanationBangla: "জীম হরফে তাশদীদের সাথে যের (কাসরাহ্) রয়েছে: 'সিজ্জীল'।"
    },
    {
      id: "q6_25",
      type: "multiple_choice",
      question: "What is the acoustic duration of a Mushaddad letter compared to a single Mutaharrik letter?",
      questionBangla: "একটি সাধারণ একক হরকতযুক্ত হরফের তুলনায় তাশদীদযুক্ত হরফের সময়কাল কতটুকু?",
      options: [
        "Approximately double the duration of a single consonant due to holding the Sakin component first",
        "Four times longer",
        "Exactly the same duration",
        "Ten times longer"
      ],
      correctIndex: 0,
      explanation: "Because a Mushaddad consonant represents two full letters, its phonetic articulation takes approximately twice as long.",
      explanationBangla: "যেহেতু তাশদীদযুক্ত হরফ দুটি পূর্ণ হরফের সমষ্টি, তাই উচ্চারণে এটি সাধারণ হরফের প্রায় দ্বিগুণ সময় নেয়।"
    },
    {
      id: "q6_26",
      type: "multiple_choice",
      question: "In (أَيُّهَا), which letter carries the Shaddah?",
      questionBangla: "(أَيُّهَا) শব্দে কোন হরফের ওপর তাশদীদ রয়েছে?",
      promptText: "أَيُّهَا",
      options: ["Yā’ with Ḍammah (يُّ)", "Alif", "Hā’", "None"],
      correctIndex: 0,
      explanation: "The letter Yā’ carries a Shaddah paired with a Dammah: 'Ay-yu-hā'.",
      explanationBangla: "ইয়া হরফে তাশদীদের সাথে পেশ রয়েছে: 'আইয়্যুহা'।"
    },
    {
      id: "q6_27",
      type: "multiple_choice",
      question: "In (الْحَجُّ أَشْهُرٌ), if you pause on (الْحَجُّ), what rule applies to the final Jīm?",
      questionBangla: "(الْحَجُّ) শব্দে ওয়াকফ করলে শেষ জীম হরফে কোন নিয়মটি প্রযোজ্য?",
      promptText: "الْحَجُّ",
      options: [
        "Qalqalah Akbar: hold the double Jīm firmly, then release with an echoing bounce",
        "Ghunnah",
        "It becomes a silent letter",
        "Madd Tabee‘i"
      ],
      correctIndex: 0,
      explanation: "Stopping on a doubled Qalqalah letter like Jīm requires holding the first part, then releasing the supreme Qalqalah Akbar.",
      explanationBangla: "তাশদীদযুক্ত জীম কলকলাহর হরফ হওয়ায় এতে শক্তিশালী কলকলায়ে আকবার কার্যকর হবে।"
    },
    {
      id: "q6_28",
      type: "multiple_choice",
      question: "What prevents (نُوحِيهَا) from having a Shaddah?",
      questionBangla: "(نُوحِيهَا) শব্দটিতে কেন কোনো তাশদীদ নেই?",
      promptText: "نُوحِيهَا",
      options: [
        "Because it consists of single consonants flowing seamlessly into prolonged Madd letters, with no consonant collisions",
        "Because it is in the Quran",
        "Because all letters are light",
        "Because of Kasrah"
      ],
      correctIndex: 0,
      explanation: "Every consonant in Nu-hee-ha is a standalone single letter followed by an open Madd vowel, with no doubling.",
      explanationBangla: "কারণ এর প্রতিটি হরফই স্বতন্ত্র একক ব্যঞ্জনধ্বনি যা মাদ্দের হরফের সাথে প্রবাহিত হয়েছে, কোনো দ্বিত্ব হরফ নেই।"
    },
    {
      id: "q6_29",
      type: "multiple_choice",
      question: "In the word (مُذَّكِرٍ), which letter carries the Shaddah?",
      questionBangla: "(مُذَّكِرٍ) শব্দে কোন হরফে তাশদীদ রয়েছে?",
      promptText: "مُذَّكِرٍ",
      options: ["Dhāl (ذَّ)", "Mīm", "Kāf", "Rā’"],
      correctIndex: 0,
      explanation: "The letter Dhāl carries the Shaddah with Fathah: 'Mudh-dhakir'.",
      explanationBangla: "যাল (ذَّ) হরফের ওপর তাশদীদ ও যবর রয়েছে: 'মুয্যাকির'।"
    },
    {
      id: "q6_30",
      type: "multiple_choice",
      question: "In the phrase (قُل لَّا أَقُولُ), why does the second Lām carry a Shaddah?",
      questionBangla: "(قُل لَّا أَقُولُ) বাক্যাংশে দ্বিতীয় লামে কেন তাশদীদ এসেছে?",
      promptText: "قُل لَّا",
      options: [
        "Because the first Sakin Lām of (قُلْ) merges completely into the second Lām of (لَا) in an Idghām Mithlayn (identical assimilation)",
        "Because Laa is an emphatic word",
        "Because Qaf has a Dammah",
        "By printing accident"
      ],
      correctIndex: 0,
      explanation: "Two identical letters meet (Lām Sakin into vowelled Lām), producing obligatory Idghām Mithlayn marked by a Shaddah.",
      explanationBangla: "প্রথম সাকিন লাম পরবর্তী হরকতযুক্ত লামে সম্পূর্ণ একীভূত (ইদগামে মিছলাইন) হওয়ায় দ্বিতীয় লামে তাশদীদ বসেছে।"
    },
    {
      id: "q6_31",
      type: "multiple_choice",
      question: "In the verse (فَلَمَّا ذَهَبَ عَنْ إِبْرَاهِيمَ الرَّوْعُ), how many letters of Ghunnah Mushaddadah are there?",
      questionBangla: "এই আয়াতাংশে ওয়াজিব গুন্নাহর (তাশদীদযুক্ত নূন বা মীম) কতটি হরফ রয়েছে?",
      promptText: "فَلَمَّا ذَهَبَ عَنْ إِبْرَاهِيمَ الرَّوْعُ",
      options: [
        "One: the Mīm in (فَلَمَّا)",
        "Two",
        "Three",
        "Zero"
      ],
      correctIndex: 0,
      explanation: "Only the Mīm in (فَلَمَّا) carries a Shaddah; the Nūn in (عَنْ) is Sakin followed by Hamzah (Izhar).",
      explanationBangla: "শুধুমাত্র 'ফালাম্মা' (فَلَمَّا) শব্দের মীম হরফটিতে তাশদীদ থাকায় এখানে একটিমাত্র ওয়াজিব গুন্নাহ রয়েছে।"
    },
    {
      id: "q6_32",
      type: "multiple_choice",
      question: "When reading (مِن بَعْدِ), does the Bā’ take a Shaddah?",
      questionBangla: "(مِن بَعْدِ) বাক্যাংশে ইক্বলাবের পর বা (ب) হরফে কি তাশদীদ হয়?",
      promptText: "مِنۢ بَعْدِ",
      options: [
        "NO; in Iqlāb, the Nūn turns into a gentle Mīm without doubling, so Bā’ never receives a Shaddah",
        "Yes, always",
        "Only when stopping",
        "Only in Egyptian copies"
      ],
      correctIndex: 0,
      explanation: "Iqlab is an incomplete transformation with hidden Ghunnah; the following Ba does NOT carry a Shaddah.",
      explanationBangla: "না; ইক্বলাবে নূন সাকিন হালকা মীমে রূপান্তরিত হয়, তাই পরবর্তী বা-তে কখনোই তাশদীদ হয় না।"
    },
    {
      id: "q6_33",
      type: "multiple_choice",
      question: "In (أَشِدَّاءُ عَلَى الْكُفَّارِ), how many letters carry a Shaddah?",
      questionBangla: "(أَشِدَّاءُ عَلَى الْكُفَّارِ) বাক্যাংশে কতটি হরফের ওপর তাশদীদ রয়েছে?",
      promptText: "أَشِدَّاءُ عَلَى الْكُفَّارِ",
      options: [
        "Two: Dāl in (أَشِدَّاءُ) and Fā’ in (الْكُفَّارِ)",
        "Only one",
        "Three",
        "Four"
      ],
      correctIndex: 0,
      explanation: "There are two Mushaddad consonants: Dāl (دَّ) and Fā’ (فَّ).",
      explanationBangla: "দুটি হরফে তাশদীদ রয়েছে: 'আশিদ্দা-উ' এর দাল এবং 'আল-কুফ্ফার' এর ফা।"
    },
    {
      id: "q6_34",
      type: "multiple_choice",
      question: "What is the acoustic effect of Shaddah on the throat letter Ḥā’ in (الرَّحْمَٰنِ الرَّحِيمِ)?",
      questionBangla: "(الرَّحْمَٰنِ الرَّحِيمِ) শব্দে হা-এর পূর্বে র-এর তাশদীদ কীভাবে আদায় হয়?",
      options: [
        "The Rā’ is doubled with a smooth roll without multiple excessive trills, leading cleanly into the Sakin Ḥā’",
        "The Ra trills 20 times like an engine",
        "The Ra is swallowed",
        "The Ha becomes heavy"
      ],
      correctIndex: 0,
      explanation: "Doubled Rā’ must avoid excessive trilling (Takreer); the tongue tip strikes once firmly with heavy resonance.",
      explanationBangla: "তাশদীদযুক্ত র উচ্চারণে অতিরিক্ত কম্পন (তাক্বরীর) পরিহার করে জিহ্বার পিঠ একবার দৃঢ়ভাবে ঠেকিয়ে মোটা করতে হয়।"
    },
    {
      id: "q6_35",
      type: "multiple_choice",
      question: "Why is Shaddah considered one of the highest priorities in recitation accuracy?",
      questionBangla: "তিলাওয়াতের বিশুদ্ধতায় তাশদীদকে কেন সর্বোচ্চ অগ্রাধিকারযোগ্য বিষয় হিসেবে গণ্য করা হয়?",
      options: [
        "Because omitting a Shaddah literally deletes an entire Quranic letter, which is an intolerable textual corruption",
        "Because it makes the words rhyme",
        "Because it is written in black ink",
        "Because it speeds up reading"
      ],
      correctIndex: 0,
      explanation: "Dropping a Shaddah eliminates a consonant from the Quran; adding a false Shaddah inserts an unauthorized letter.",
      explanationBangla: "কারণ একটি তাশদীদ বাদ দেওয়া মানে আল্লাহর কালাম থেকে একটি আস্ত হরফ মুছে ফেলা, যা কুরআন বিকৃতির নামান্তর।"
    }
  ]
};
