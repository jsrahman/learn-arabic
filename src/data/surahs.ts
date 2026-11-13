export interface Verse {
  number: number;
  arabic: string;
  transliteration: string;
  translationEn: string;
  translationBn: string;
  tajweedRule?: string;
  audioUrl?: string; // High quality reciter audio URL
}

export interface Surah {
  number: number;
  nameArabic: string;
  nameTransliterated: string;
  nameEn: string;
  nameBn: string;
  meaningEn: string;
  meaningBn: string;
  versesCount: number;
  revelationType: "Meccan" | "Medinan";
  verses: Verse[];
}

export const SHORT_SURAHS: Surah[] = [
  {
    number: 1,
    nameArabic: "الفَاتِحَة",
    nameTransliterated: "Al-Fātiḥah",
    nameEn: "The Opening",
    nameBn: "আল-ফাতিহা (সূচনা)",
    meaningEn: "The Opening of the Quran",
    meaningBn: "কুরআনের উন্মোচনকারী অধ্যায়",
    versesCount: 7,
    revelationType: "Meccan",
    verses: [
      {
        number: 1,
        arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        transliteration: "Bismillāhir-Raḥmānir-Raḥīm",
        translationEn: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
        translationBn: "পরম করুণাময় ও অসীম দয়ালু আল্লাহর নামে (শুরু করছি)।",
        tajweedRule: "Light Lam in 'Bismillah' due to preceding Kasrah.",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001001.mp3",
      },
      {
        number: 2,
        arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        transliteration: "Al-ḥamdu lillāhi Rabbil-‘ālamīn",
        translationEn: "[All] praise is [due] to Allah, Lord of the worlds.",
        translationBn: "সমস্ত প্রশংসা বিশ্বজগতের প্রতিপালক আল্লাহর জন্য।",
        tajweedRule: "Clean throat Ḥā’ in 'Al-Ḥamdu'.",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001002.mp3",
      },
      {
        number: 3,
        arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
        transliteration: "Ar-Raḥmānir-Raḥīm",
        translationEn: "The Entirely Merciful, the Especially Merciful.",
        translationBn: "যিনি পরম করুণাময় ও অসীম দয়ালু।",
        tajweedRule: "Heavy Ra with Shaddah; Madd on final syllable.",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001003.mp3",
      },
      {
        number: 4,
        arabic: "مَالِكِ يَوْمِ الدِّينِ",
        transliteration: "Māliki Yawmid-Dīn",
        translationEn: "Sovereign of the Day of Recompense.",
        translationBn: "যিনি বিচার দিবসের অধিপতি।",
        tajweedRule: "Gentle Madd on Māliki (2 counts).",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001004.mp3",
      },
      {
        number: 5,
        arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        transliteration: "Iyyāka na‘budu wa-iyyāka nasta‘īn",
        translationEn: "It is You we worship and You we ask for help.",
        translationBn: "আমরা কেবল আপনারই ইবাদত করি এবং কেবল আপনারই সাহায্য প্রার্থনা করি।",
        tajweedRule: "Firm Shaddah on Yaa in 'Iyyāka'.",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001005.mp3",
      },
      {
        number: 6,
        arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        transliteration: "Ihdinaṣ-Ṣirāṭal-Mustaqīm",
        translationEn: "Guide us to the straight path.",
        translationBn: "আমাদের সরল ও সঠিক পথ প্রদর্শন করুন।",
        tajweedRule: "Heavy Ṣād and Ṭā’ in 'Aṣ-Ṣirāṭa'.",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001006.mp3",
      },
      {
        number: 7,
        arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        transliteration: "Ṣirāṭal-ladhīna an‘amta ‘alayhim ghayril-maghḍūbi ‘alayhim wa-laḍ-ḍāllīn",
        translationEn: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
        translationBn: "তাদের পথ, যাদের আপনি পুরস্কৃত করেছেন; তাদের নয়, যারা ক্রোধে পতিত হয়েছে এবং যারা পথভ্রষ্ট হয়েছে।",
        tajweedRule: "Madd Lazim (6 full counts) on 'Wa-laḍ-Ḍāllīn' with heavy Ḍād.",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/001007.mp3",
      },
    ],
  },
  {
    number: 112,
    nameArabic: "الإِخْلَاص",
    nameTransliterated: "Al-Ikhlāṣ",
    nameEn: "The Sincerity",
    nameBn: "আল-ইখলাস (একনিষ্ঠতা)",
    meaningEn: "Purity of Faith / Monotheism",
    meaningBn: "খাঁটি তাওহীদ ও বিশ্বাসের অধ্যায়",
    versesCount: 4,
    revelationType: "Meccan",
    verses: [
      {
        number: 1,
        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        transliteration: "Qul Huwal-Lāhu Aḥad",
        translationEn: "Say, 'He is Allah, [who is] One.'",
        translationBn: "বলুন, তিনিই আল্লাহ, যিনি একক।",
        tajweedRule: "Qalqalah on stopping at 'Aḥad'.",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/112001.mp3",
      },
      {
        number: 2,
        arabic: "اللَّهُ الصَّمَدُ",
        transliteration: "Allāhuṣ-Ṣamad",
        translationEn: "Allah, the Eternal Refuge.",
        translationBn: "আল্লাহ কারো মুখাপেক্ষী নন, সকলেই তাঁর মুখাপেক্ষী।",
        tajweedRule: "Heavy Ṣād and Qalqalah on stopping at 'Ṣamad'.",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/112002.mp3",
      },
      {
        number: 3,
        arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        transliteration: "Lam yalid wa lam yūlad",
        translationEn: "He neither begets nor is born,",
        translationBn: "তিনি কাউকে জন্ম দেননি এবং তাঁকেও জন্ম দেওয়া হয়নি,",
        tajweedRule: "Two crisp Qalqalah bounces on 'yalid' and 'yūlad'.",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/112003.mp3",
      },
      {
        number: 4,
        arabic: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        transliteration: "Wa lam yakul-lahū kufuwan aḥad",
        translationEn: "Nor is there to Him any equivalent.",
        translationBn: "এবং তাঁর সমতুল্য কেউই নেই।",
        tajweedRule: "Idgham of Noon into Lam ('yakul-lahu') and final Qalqalah on 'aḥad'.",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/112004.mp3",
      },
    ],
  },
  {
    number: 113,
    nameArabic: "الفَلَق",
    nameTransliterated: "Al-Falaq",
    nameEn: "The Daybreak",
    nameBn: "আল-ফালাক (ঊষা)",
    meaningEn: "The Rising Dawn",
    meaningBn: "ভোরের আলো",
    versesCount: 5,
    revelationType: "Meccan",
    verses: [
      {
        number: 1,
        arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
        transliteration: "Qul a‘ūdhu bi-Rabbil-falaq",
        translationEn: "Say, 'I seek refuge in the Lord of daybreak.'",
        translationBn: "বলুন, আমি আশ্রয় প্রার্থনা করছি ভোরের প্রতিপালকের নিকট।",
        tajweedRule: "Deep Qaf with Qalqalah on 'Falaq'.",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/113001.mp3",
      },
      {
        number: 2,
        arabic: "مِن شَرِّ مَا خَلَقَ",
        transliteration: "Min sharri mā khalaq",
        translationEn: "From the evil of that which He created,",
        translationBn: "তিনি যা সৃষ্টি করেছেন তার অনিষ্ট হতে,",
        tajweedRule: "Ikhfa on 'min sharri' (nasal hide) and Qalqalah on 'khalaq'.",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/113002.mp3",
      },
      {
        number: 3,
        arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
        transliteration: "Wa min sharri ghāsiqin idhā waqab",
        translationEn: "And from the evil of darkness when it settles,",
        translationBn: "এবং অন্ধকার রাতের অনিষ্ট হতে যখন তা নিবিড় হয়,",
        tajweedRule: "Qalqalah on 'waqab' (Baa).",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/113003.mp3",
      },
      {
        number: 4,
        arabic: "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
        transliteration: "Wa min sharrin-naffāthāti fīl-‘uqad",
        translationEn: "And from the evil of the blowers in knots,",
        translationBn: "এবং গ্রন্থিতে ফুৎকারকারিণীদের অনিষ্ট হতে,",
        tajweedRule: "Ghunnah on 'an-Naffāthāti' and Qalqalah on 'Al-‘Uqad'.",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/113004.mp3",
      },
      {
        number: 5,
        arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
        transliteration: "Wa min sharri ḥāsidin idhā ḥasad",
        translationEn: "And from the evil of an envier when he envies.",
        translationBn: "এবং হিংসুকের অনিষ্ট হতে যখন সে হিংসা করে।",
        tajweedRule: "Qalqalah on stopping at 'ḥasad'.",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/113005.mp3",
      },
    ],
  },
  {
    number: 114,
    nameArabic: "النَّاس",
    nameTransliterated: "An-Nās",
    nameEn: "Mankind",
    nameBn: "আন-নাস (মানবজাতি)",
    meaningEn: "The People",
    meaningBn: "সমগ্র মানবজাতি",
    versesCount: 6,
    revelationType: "Meccan",
    verses: [
      {
        number: 1,
        arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
        transliteration: "Qul a‘ūdhu bi-Rabbin-nās",
        translationEn: "Say, 'I seek refuge in the Lord of mankind,'",
        translationBn: "বলুন, আমি আশ্রয় প্রার্থনা করছি মানুষের প্রতিপালকের নিকট,",
        tajweedRule: "Long Ghunnah on Noon with Shaddah in 'An-Nās'.",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/114001.mp3",
      },
      {
        number: 2,
        arabic: "مَلِكِ النَّاسِ",
        transliteration: "Malikin-nās",
        translationEn: "The Sovereign of mankind,",
        translationBn: "মানুষের প্রকৃত অধিপতির নিকট,",
        tajweedRule: "Ghunnah on 'An-Nās'.",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/114002.mp3",
      },
      {
        number: 3,
        arabic: "إِلَٰهِ النَّاسِ",
        transliteration: "Ilāhin-nās",
        translationEn: "The God of mankind,",
        translationBn: "মানুষের উপাস্যের নিকট,",
        tajweedRule: "Madd on 'Ilāhi' and Ghunnah on 'An-Nās'.",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/114003.mp3",
      },
      {
        number: 4,
        arabic: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
        transliteration: "Min sharril-waswāsil-khannās",
        translationEn: "From the evil of the retreating whisperer -",
        translationBn: "আত্মগোপনকারী কুমন্ত্রণাদাতার অনিষ্ট হতে -",
        tajweedRule: "Ghunnah on 'Al-Khannās'.",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/114004.mp3",
      },
      {
        number: 5,
        arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
        transliteration: "Alladhī yuwaswisu fī ṣudūrin-nās",
        translationEn: "Who whispers [evil] into the breasts of mankind -",
        translationBn: "যে মানুষের অন্তরে কুমন্ত্রণা দেয় -",
        tajweedRule: "Heavy Ṣād in 'Ṣudūr' and Ghunnah on 'An-Nās'.",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/114005.mp3",
      },
      {
        number: 6,
        arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ",
        transliteration: "Minal-jinnati wan-nās",
        translationEn: "From among the jinn and mankind.",
        translationBn: "জিন ও মানবজাতির মধ্য হতে।",
        tajweedRule: "Two powerful Ghunnah nasalizations on 'Al-Jinnati' and 'Wan-Nās'.",
        audioUrl: "https://everyayah.com/data/Alafasy_128kbps/114006.mp3",
      },
    ],
  },
];
