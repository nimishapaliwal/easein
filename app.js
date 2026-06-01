const languageCodes = languages.map((language) => language.code);
const fallbackLanguage = "en";
const languageStorageKey = "easein-language";
const bookmarkStorageKey = "easein-bookmarks";

const uiText = {
  en: {
    documentTitle: "EaseIn | Practice Everyday Conversations",
    metaDescription: "Step-by-step flash cards for everyday interactions, from ordering food to navigating travel.",
    mainNavigation: "Main navigation",
    homeAria: "EaseIn home",
    navActivities: "Activities",
    navHow: "How it works",
    navAccessibility: "Accessibility",
    languageLabel: "Language",
    languageAria: "Choose language",
    heroEyebrow: "Practice before you go",
    heroTitle: "Feel ready for everyday conversations.",
    heroDescription: "Simple flash cards guide you through what to do, what to say, and what the other person might say next.",
    browseActivities: "Browse activities",
    tryExample: "Try an example",
    exampleCardAria: "Example phrase card",
    miniCardLabel: "Your first flight guide",
    miniCardPhrase: "\"Could I please have a glass of water?\"",
    miniCardTip: "A polite request can be short and clear.",
    categoryStripAria: "Activity categories",
    activitiesEyebrow: "Activity library",
    activitiesTitle: "Choose a situation to practice",
    filterActivitiesAria: "Filter activities",
    searchActivities: "Search activities",
    searchPlaceholder: "Search, for example: coffee or metro",
    categoriesAria: "Categories",
    allCategories: "All",
    activitiesFound: "{count} {item} found",
    activitySingular: "activity",
    activityPlural: "activities",
    minutes: "{count} min",
    practiceNow: "Practice now",
    emptyTitle: "No matching activity found",
    emptyMessage: "Try another search term or choose a different category.",
    clearFilters: "Clear filters",
    stepsEyebrow: "How it works",
    stepsTitle: "Practice in three gentle steps",
    stepOneTitle: "Pick a situation",
    stepOneText: "Find the interaction you want to feel more prepared for.",
    stepTwoTitle: "Review the script",
    stepTwoText: "Learn one action and one helpful phrase on each card.",
    stepThreeTitle: "Go with confidence",
    stepThreeText: "Restart the cards anytime until the steps feel familiar.",
    accessibilityEyebrow: "Designed for ease",
    accessibilityTitle: "Simple words. Clear controls.",
    accessibilityText: "EaseIn uses short practical scripts, readable layouts, and keyboard-friendly navigation. Every activity prepares you for both your request and a likely response.",
    footerText: "Practice real-life conversations at your own pace.",
    closeActivity: "Close activity",
    previousCardAria: "Previous card",
    nextCardAria: "Next card",
    cardProgress: "Card {current} of {total}",
    complete: "Complete",
    stepProgress: "Step {current}",
    youCanSay: "You can say",
    youMayHear: "You may hear",
    practiceComplete: "Practice complete",
    completionTitle: "Wonderful work!",
    completionMessage: "You practiced the full situation from start to finish. That is real progress.",
    donts: "Don'ts",
    dos: "Do's",
    restart: "Restart",
    previous: "Previous",
    next: "Next",
    finished: "Finished",
    close: "Close",
    bookmarkedActivities: "Bookmarked activities",
    bookmarkedEmpty: "Saved activities will appear here.",
    saveActivity: "Save",
    savedActivity: "Saved",
    saveBookmarkAria: "Save activity",
    removeBookmarkAria: "Remove saved activity"
  },
  hi: {
    documentTitle: "EaseIn | रोज़मर्रा की बातचीत का अभ्यास",
    metaDescription: "भोजन ऑर्डर करने से लेकर यात्रा तक, रोज़मर्रा की बातचीत के लिए चरण-दर-चरण फ्लैश कार्ड।",
    mainNavigation: "मुख्य नेविगेशन",
    homeAria: "EaseIn होम",
    navActivities: "गतिविधियाँ",
    navHow: "कैसे काम करता है",
    navAccessibility: "सुलभता",
    languageLabel: "भाषा",
    languageAria: "भाषा चुनें",
    heroEyebrow: "जाने से पहले अभ्यास करें",
    heroTitle: "रोज़मर्रा की बातचीत के लिए तैयार महसूस करें।",
    heroDescription: "सरल फ्लैश कार्ड बताते हैं कि क्या करना है, क्या कहना है, और सामने वाला आगे क्या कह सकता है।",
    browseActivities: "गतिविधियाँ देखें",
    tryExample: "उदाहरण आज़माएँ",
    exampleCardAria: "उदाहरण वाक्य कार्ड",
    miniCardLabel: "आपकी पहली उड़ान गाइड",
    miniCardPhrase: "\"क्या मुझे कृपया एक गिलास पानी मिल सकता है?\"",
    miniCardTip: "विनम्र अनुरोध छोटा और स्पष्ट हो सकता है।",
    categoryStripAria: "गतिविधि श्रेणियाँ",
    activitiesEyebrow: "गतिविधि लाइब्रेरी",
    activitiesTitle: "अभ्यास के लिए स्थिति चुनें",
    filterActivitiesAria: "गतिविधियाँ फ़िल्टर करें",
    searchActivities: "गतिविधियाँ खोजें",
    searchPlaceholder: "खोजें, जैसे: कॉफ़ी या मेट्रो",
    categoriesAria: "श्रेणियाँ",
    allCategories: "सभी",
    activitiesFound: "{count} {item} मिलीं",
    activitySingular: "गतिविधि",
    activityPlural: "गतिविधियाँ",
    minutes: "{count} मिनट",
    practiceNow: "अभी अभ्यास करें",
    emptyTitle: "कोई मिलती-जुलती गतिविधि नहीं मिली",
    emptyMessage: "दूसरा खोज शब्द आज़माएँ या अलग श्रेणी चुनें।",
    clearFilters: "फ़िल्टर साफ़ करें",
    stepsEyebrow: "कैसे काम करता है",
    stepsTitle: "तीन आसान चरणों में अभ्यास करें",
    stepOneTitle: "स्थिति चुनें",
    stepOneText: "वह बातचीत चुनें जिसके लिए आप अधिक तैयार महसूस करना चाहते हैं।",
    stepTwoTitle: "स्क्रिप्ट देखें",
    stepTwoText: "हर कार्ड पर एक काम और एक उपयोगी वाक्य सीखें।",
    stepThreeTitle: "आत्मविश्वास के साथ जाएँ",
    stepThreeText: "जब तक चरण परिचित न लगें, कार्ड कभी भी फिर से शुरू करें।",
    accessibilityEyebrow: "आसानी के लिए बनाया गया",
    accessibilityTitle: "सरल शब्द। स्पष्ट नियंत्रण।",
    accessibilityText: "EaseIn छोटे व्यावहारिक स्क्रिप्ट, पढ़ने योग्य लेआउट और कीबोर्ड-अनुकूल नेविगेशन का उपयोग करता है। हर गतिविधि आपको अनुरोध और संभावित उत्तर दोनों के लिए तैयार करती है।",
    footerText: "वास्तविक जीवन की बातचीत का अभ्यास अपनी गति से करें।",
    closeActivity: "गतिविधि बंद करें",
    previousCardAria: "पिछला कार्ड",
    nextCardAria: "अगला कार्ड",
    cardProgress: "कार्ड {current} / {total}",
    complete: "पूरा",
    stepProgress: "चरण {current}",
    youCanSay: "आप कह सकते हैं",
    youMayHear: "आप सुन सकते हैं",
    practiceComplete: "अभ्यास पूरा",
    completionTitle: "बहुत अच्छा!",
    completionMessage: "आपने पूरी स्थिति शुरू से अंत तक अभ्यास की। यह सचमुच प्रगति है।",
    donts: "क्या न करें",
    dos: "क्या करें",
    restart: "फिर से शुरू करें",
    previous: "पिछला",
    next: "अगला",
    finished: "समाप्त",
    close: "बंद करें"
  },
  mr: {
    documentTitle: "EaseIn | रोजच्या संभाषणांचा सराव",
    metaDescription: "अन्न ऑर्डर करण्यापासून प्रवासापर्यंत रोजच्या संवादांसाठी टप्प्याटप्प्याचे फ्लॅश कार्ड.",
    mainNavigation: "मुख्य नेव्हिगेशन",
    homeAria: "EaseIn होम",
    navActivities: "क्रिया",
    navHow: "कसे काम करते",
    navAccessibility: "सुलभता",
    languageLabel: "भाषा",
    languageAria: "भाषा निवडा",
    heroEyebrow: "जाण्यापूर्वी सराव करा",
    heroTitle: "रोजच्या संभाषणांसाठी तयार वाटू द्या.",
    heroDescription: "सरल फ्लॅश कार्ड काय करायचे, काय म्हणायचे आणि समोरची व्यक्ती पुढे काय म्हणू शकते हे दाखवतात.",
    browseActivities: "क्रिया पाहा",
    tryExample: "उदाहरण वापरून पाहा",
    exampleCardAria: "उदाहरण वाक्य कार्ड",
    miniCardLabel: "तुमच्या पहिल्या उड्डाणाची मार्गदर्शिका",
    miniCardPhrase: "\"मला कृपया एक ग्लास पाणी मिळेल का?\"",
    miniCardTip: "नम्र विनंती छोटी आणि स्पष्ट असू शकते.",
    categoryStripAria: "क्रिया श्रेणी",
    activitiesEyebrow: "क्रिया संग्रह",
    activitiesTitle: "सरावासाठी प्रसंग निवडा",
    filterActivitiesAria: "क्रिया फिल्टर करा",
    searchActivities: "क्रिया शोधा",
    searchPlaceholder: "शोधा, उदाहरणार्थ: कॉफी किंवा मेट्रो",
    categoriesAria: "श्रेणी",
    allCategories: "सर्व",
    activitiesFound: "{count} {item} सापडल्या",
    activitySingular: "क्रिया",
    activityPlural: "क्रिया",
    minutes: "{count} मिनिटे",
    practiceNow: "आता सराव करा",
    emptyTitle: "जुळणारी क्रिया सापडली नाही",
    emptyMessage: "दुसरा शोध शब्द वापरा किंवा वेगळी श्रेणी निवडा.",
    clearFilters: "फिल्टर साफ करा",
    stepsEyebrow: "कसे काम करते",
    stepsTitle: "तीन सोप्या टप्प्यांत सराव करा",
    stepOneTitle: "प्रसंग निवडा",
    stepOneText: "ज्या संवादासाठी तुम्हाला अधिक तयार वाटायचे आहे तो निवडा.",
    stepTwoTitle: "स्क्रिप्ट पाहा",
    stepTwoText: "प्रत्येक कार्डवर एक कृती आणि एक उपयोगी वाक्य शिका.",
    stepThreeTitle: "आत्मविश्वासाने पुढे जा",
    stepThreeText: "टप्पे परिचित वाटेपर्यंत कार्ड कधीही पुन्हा सुरू करा.",
    accessibilityEyebrow: "सोपेपणासाठी तयार",
    accessibilityTitle: "सोपे शब्द. स्पष्ट नियंत्रण.",
    accessibilityText: "EaseIn लहान व्यावहारिक स्क्रिप्ट, वाचण्यास सोपे लेआउट आणि कीबोर्ड-अनुकूल नेव्हिगेशन वापरते. प्रत्येक क्रिया तुम्हाला तुमच्या विनंतीसाठी आणि संभाव्य उत्तरासाठी तयार करते.",
    footerText: "खऱ्या आयुष्यातील संभाषणांचा तुमच्या गतीने सराव करा.",
    closeActivity: "क्रिया बंद करा",
    previousCardAria: "मागील कार्ड",
    nextCardAria: "पुढील कार्ड",
    cardProgress: "कार्ड {current} / {total}",
    complete: "पूर्ण",
    stepProgress: "टप्पा {current}",
    youCanSay: "तुम्ही म्हणू शकता",
    youMayHear: "तुम्हाला ऐकू येऊ शकते",
    practiceComplete: "सराव पूर्ण",
    completionTitle: "छान काम!",
    completionMessage: "तुम्ही संपूर्ण प्रसंग सुरुवातीपासून शेवटपर्यंत सरावला. ही खरी प्रगती आहे.",
    donts: "करू नका",
    dos: "करा",
    restart: "पुन्हा सुरू करा",
    previous: "मागील",
    next: "पुढील",
    finished: "समाप्त",
    close: "बंद करा"
  },
  ta: {
    documentTitle: "EaseIn | அன்றாட உரையாடல் பயிற்சி",
    metaDescription: "உணவு ஆர்டர் செய்வதிலிருந்து பயணம் வரை அன்றாட உரையாடல்களுக்கான படிப்படியான ஃபிளாஷ் கார்டுகள்.",
    mainNavigation: "முக்கிய வழிசெலுத்தல்",
    homeAria: "EaseIn முகப்பு",
    navActivities: "செயல்கள்",
    navHow: "இது எப்படி செயல்படுகிறது",
    navAccessibility: "அணுகல்தன்மை",
    languageLabel: "மொழி",
    languageAria: "மொழியைத் தேர்வு செய்யுங்கள்",
    heroEyebrow: "செல்வதற்கு முன் பயிற்சி செய்யுங்கள்",
    heroTitle: "அன்றாட உரையாடல்களுக்கு தயார் என உணருங்கள்.",
    heroDescription: "என்ன செய்ய வேண்டும், என்ன சொல்ல வேண்டும், அடுத்தவர் என்ன சொல்லலாம் என்பதைக் காட்டும் எளிய ஃபிளாஷ் கார்டுகள்.",
    browseActivities: "செயல்களைப் பாருங்கள்",
    tryExample: "ஒரு உதாரணம் முயற்சிக்கவும்",
    exampleCardAria: "உதாரண சொற்றொடர் அட்டை",
    miniCardLabel: "உங்கள் முதல் விமானப் பயண வழிகாட்டி",
    miniCardPhrase: "\"தயவுசெய்து எனக்கு ஒரு கண்ணாடி தண்ணீர் கிடைக்குமா?\"",
    miniCardTip: "மரியாதையான கோரிக்கை குறுகியதும் தெளிவானதும் ஆகலாம்.",
    categoryStripAria: "செயல் வகைகள்",
    activitiesEyebrow: "செயல் நூலகம்",
    activitiesTitle: "பயிற்சிக்கான சூழலைத் தேர்வு செய்யுங்கள்",
    filterActivitiesAria: "செயல்களை வடிகட்டுங்கள்",
    searchActivities: "செயல்களைத் தேடுங்கள்",
    searchPlaceholder: "தேடுங்கள், உதாரணம்: காபி அல்லது மெட்ரோ",
    categoriesAria: "வகைகள்",
    allCategories: "அனைத்தும்",
    activitiesFound: "{count} {item} கிடைத்தன",
    activitySingular: "செயல்",
    activityPlural: "செயல்கள்",
    minutes: "{count} நிமிடம்",
    practiceNow: "இப்போது பயிற்சி செய்யுங்கள்",
    emptyTitle: "பொருந்தும் செயல் இல்லை",
    emptyMessage: "வேறு தேடல் சொல்லை முயற்சிக்கவும் அல்லது வேறு வகையைத் தேர்வு செய்யவும்.",
    clearFilters: "வடிகட்டிகளை நீக்குங்கள்",
    stepsEyebrow: "இது எப்படி செயல்படுகிறது",
    stepsTitle: "மூன்று எளிய படிகளில் பயிற்சி செய்யுங்கள்",
    stepOneTitle: "ஒரு சூழலைத் தேர்வு செய்யுங்கள்",
    stepOneText: "நீங்கள் தயாராக இருக்க விரும்பும் உரையாடலைத் தேர்வு செய்யுங்கள்.",
    stepTwoTitle: "ஸ்கிரிப்டைப் பாருங்கள்",
    stepTwoText: "ஒவ்வொரு அட்டையிலும் ஒரு செயலும் ஒரு பயனுள்ள சொற்றொடரும் கற்றுக்கொள்ளுங்கள்.",
    stepThreeTitle: "நம்பிக்கையுடன் செல்லுங்கள்",
    stepThreeText: "படிகள் பரிச்சயமாகும் வரை அட்டைகளை எப்போது வேண்டுமானாலும் மீண்டும் தொடங்குங்கள்.",
    accessibilityEyebrow: "எளிமைக்காக வடிவமைக்கப்பட்டது",
    accessibilityTitle: "எளிய சொற்கள். தெளிவான கட்டுப்பாடுகள்.",
    accessibilityText: "EaseIn குறுகிய நடைமுறை ஸ்கிரிப்ட்கள், படிக்க எளிய அமைப்புகள், விசைப்பலகை நட்பு வழிசெலுத்தல் ஆகியவற்றைப் பயன்படுத்துகிறது. ஒவ்வொரு செயலும் உங்கள் கோரிக்கைக்கும் சாத்தியமான பதிலுக்கும் தயார் செய்கிறது.",
    footerText: "உண்மை வாழ்க்கை உரையாடல்களை உங்கள் வேகத்தில் பயிற்சி செய்யுங்கள்.",
    closeActivity: "செயலை மூடுங்கள்",
    previousCardAria: "முந்தைய அட்டை",
    nextCardAria: "அடுத்த அட்டை",
    cardProgress: "அட்டை {current} / {total}",
    complete: "முடிந்தது",
    stepProgress: "படி {current}",
    youCanSay: "நீங்கள் சொல்லலாம்",
    youMayHear: "நீங்கள் கேட்கலாம்",
    practiceComplete: "பயிற்சி முடிந்தது",
    completionTitle: "அற்புதமான வேலை!",
    completionMessage: "நீங்கள் முழு சூழலையும் தொடக்கம் முதல் முடிவு வரை பயிற்சி செய்தீர்கள். அது உண்மையான முன்னேற்றம்.",
    donts: "செய்யக் கூடாதவை",
    dos: "செய்ய வேண்டியவை",
    restart: "மீண்டும் தொடங்கு",
    previous: "முந்தைய",
    next: "அடுத்தது",
    finished: "முடிந்தது",
    close: "மூடு"
  },
  bn: {
    documentTitle: "EaseIn | দৈনন্দিন কথোপকথনের অনুশীলন",
    metaDescription: "খাবার অর্ডার করা থেকে ভ্রমণ পর্যন্ত দৈনন্দিন কথোপকথনের জন্য ধাপে ধাপে ফ্ল্যাশ কার্ড।",
    mainNavigation: "প্রধান নেভিগেশন",
    homeAria: "EaseIn হোম",
    navActivities: "কার্যক্রম",
    navHow: "কীভাবে কাজ করে",
    navAccessibility: "অ্যাক্সেসিবিলিটি",
    languageLabel: "ভাষা",
    languageAria: "ভাষা নির্বাচন করুন",
    heroEyebrow: "যাওয়ার আগে অনুশীলন করুন",
    heroTitle: "দৈনন্দিন কথোপকথনের জন্য প্রস্তুত অনুভব করুন।",
    heroDescription: "সহজ ফ্ল্যাশ কার্ড আপনাকে কী করতে হবে, কী বলতে হবে, এবং অন্য ব্যক্তি পরেরবার কী বলতে পারেন তা দেখায়।",
    browseActivities: "কার্যক্রম দেখুন",
    tryExample: "একটি উদাহরণ চেষ্টা করুন",
    exampleCardAria: "উদাহরণ বাক্য কার্ড",
    miniCardLabel: "আপনার প্রথম বিমানযাত্রার গাইড",
    miniCardPhrase: "\"আমি কি দয়া করে এক গ্লাস পানি পেতে পারি?\"",
    miniCardTip: "ভদ্র অনুরোধ ছোট এবং পরিষ্কার হতে পারে।",
    categoryStripAria: "কার্যক্রমের বিভাগ",
    activitiesEyebrow: "কার্যক্রম লাইব্রেরি",
    activitiesTitle: "অনুশীলনের জন্য একটি পরিস্থিতি বেছে নিন",
    filterActivitiesAria: "কার্যক্রম ফিল্টার করুন",
    searchActivities: "কার্যক্রম খুঁজুন",
    searchPlaceholder: "খুঁজুন, যেমন: কফি বা মেট্রো",
    categoriesAria: "বিভাগ",
    allCategories: "সব",
    activitiesFound: "{count}টি {item} পাওয়া গেছে",
    activitySingular: "কার্যক্রম",
    activityPlural: "কার্যক্রম",
    minutes: "{count} মিনিট",
    practiceNow: "এখন অনুশীলন করুন",
    emptyTitle: "মিল থাকা কোনো কার্যক্রম পাওয়া যায়নি",
    emptyMessage: "অন্য অনুসন্ধান শব্দ চেষ্টা করুন বা ভিন্ন বিভাগ বেছে নিন।",
    clearFilters: "ফিল্টার পরিষ্কার করুন",
    stepsEyebrow: "কীভাবে কাজ করে",
    stepsTitle: "তিনটি সহজ ধাপে অনুশীলন করুন",
    stepOneTitle: "পরিস্থিতি বেছে নিন",
    stepOneText: "যে কথোপকথনের জন্য আপনি আরও প্রস্তুত হতে চান তা খুঁজুন।",
    stepTwoTitle: "স্ক্রিপ্ট দেখুন",
    stepTwoText: "প্রতিটি কার্ডে একটি কাজ এবং একটি সহায়ক বাক্য শিখুন।",
    stepThreeTitle: "আত্মবিশ্বাস নিয়ে এগিয়ে যান",
    stepThreeText: "ধাপগুলো পরিচিত না হওয়া পর্যন্ত যেকোনো সময় কার্ডগুলো আবার শুরু করুন।",
    accessibilityEyebrow: "সহজতার জন্য তৈরি",
    accessibilityTitle: "সহজ শব্দ। পরিষ্কার নিয়ন্ত্রণ।",
    accessibilityText: "EaseIn ছোট ব্যবহারিক স্ক্রিপ্ট, পড়ার মতো লেআউট এবং কীবোর্ড-বান্ধব নেভিগেশন ব্যবহার করে। প্রতিটি কার্যক্রম আপনাকে আপনার অনুরোধ এবং সম্ভাব্য উত্তরের জন্য প্রস্তুত করে।",
    footerText: "বাস্তব জীবনের কথোপকথন নিজের গতিতে অনুশীলন করুন।",
    closeActivity: "কার্যক্রম বন্ধ করুন",
    previousCardAria: "আগের কার্ড",
    nextCardAria: "পরের কার্ড",
    cardProgress: "কার্ড {current} / {total}",
    complete: "সম্পূর্ণ",
    stepProgress: "ধাপ {current}",
    youCanSay: "আপনি বলতে পারেন",
    youMayHear: "আপনি শুনতে পারেন",
    practiceComplete: "অনুশীলন সম্পূর্ণ",
    completionTitle: "দারুণ কাজ!",
    completionMessage: "আপনি পুরো পরিস্থিতিটি শুরু থেকে শেষ পর্যন্ত অনুশীলন করেছেন। এটি সত্যিকারের অগ্রগতি।",
    donts: "যা করবেন না",
    dos: "যা করবেন",
    restart: "আবার শুরু করুন",
    previous: "আগের",
    next: "পরের",
    finished: "শেষ",
    close: "বন্ধ করুন"
  },
  te: {
    documentTitle: "EaseIn | రోజువారీ సంభాషణల సాధన",
    metaDescription: "ఆహారం ఆర్డర్ చేయడం నుంచి ప్రయాణం వరకు రోజువారీ సంభాషణల కోసం దశలవారీ ఫ్లాష్ కార్డులు.",
    mainNavigation: "ప్రధాన నావిగేషన్",
    homeAria: "EaseIn హోమ్",
    navActivities: "కార్యకలాపాలు",
    navHow: "ఇది ఎలా పనిచేస్తుంది",
    navAccessibility: "ప్రాప్యత",
    languageLabel: "భాష",
    languageAria: "భాషను ఎంచుకోండి",
    heroEyebrow: "వెళ్లే ముందు సాధన చేయండి",
    heroTitle: "రోజువారీ సంభాషణలకు సిద్ధంగా అనిపించుకోండి.",
    heroDescription: "ఏం చేయాలి, ఏం చెప్పాలి, ఎదుటివారు తర్వాత ఏమి చెప్పవచ్చు అన్నది సరళమైన ఫ్లాష్ కార్డులు చూపిస్తాయి.",
    browseActivities: "కార్యకలాపాలు చూడండి",
    tryExample: "ఒక ఉదాహరణ ప్రయత్నించండి",
    exampleCardAria: "ఉదాహరణ వాక్య కార్డ్",
    miniCardLabel: "మీ మొదటి విమాన ప్రయాణ మార్గదర్శకం",
    miniCardPhrase: "\"దయచేసి నాకు ఒక గ్లాస్ నీళ్లు ఇస్తారా?\"",
    miniCardTip: "మర్యాదైన అభ్యర్థన చిన్నగా, స్పష్టంగా ఉండవచ్చు.",
    categoryStripAria: "కార్యకలాపాల వర్గాలు",
    activitiesEyebrow: "కార్యకలాపాల లైబ్రరీ",
    activitiesTitle: "సాధన చేయడానికి ఒక పరిస్థితిని ఎంచుకోండి",
    filterActivitiesAria: "కార్యకలాపాలను ఫిల్టర్ చేయండి",
    searchActivities: "కార్యకలాపాలు వెతకండి",
    searchPlaceholder: "వెతకండి, ఉదాహరణకు: కాఫీ లేదా మెట్రో",
    categoriesAria: "వర్గాలు",
    allCategories: "అన్నీ",
    activitiesFound: "{count} {item} దొరికాయి",
    activitySingular: "కార్యకలాపం",
    activityPlural: "కార్యకలాపాలు",
    minutes: "{count} నిమిషాలు",
    practiceNow: "ఇప్పుడే సాధన చేయండి",
    emptyTitle: "సరిపోలే కార్యకలాపం దొరకలేదు",
    emptyMessage: "మరో శోధన పదం ప్రయత్నించండి లేదా వేరే వర్గం ఎంచుకోండి.",
    clearFilters: "ఫిల్టర్లు తీసివేయండి",
    stepsEyebrow: "ఇది ఎలా పనిచేస్తుంది",
    stepsTitle: "మూడు సులభ దశల్లో సాధన చేయండి",
    stepOneTitle: "పరిస్థితిని ఎంచుకోండి",
    stepOneText: "మీరు మరింత సిద్ధంగా అనిపించుకోవాలనుకునే సంభాషణను ఎంచుకోండి.",
    stepTwoTitle: "స్క్రిప్ట్ చూడండి",
    stepTwoText: "ప్రతి కార్డ్‌లో ఒక చర్య మరియు ఒక ఉపయోగకరమైన వాక్యం నేర్చుకోండి.",
    stepThreeTitle: "నమ్మకంగా ముందుకు వెళ్లండి",
    stepThreeText: "దశలు పరిచయం అయ్యే వరకు కార్డులను ఎప్పుడైనా మళ్లీ ప్రారంభించండి.",
    accessibilityEyebrow: "సులభత కోసం రూపొందించబడింది",
    accessibilityTitle: "సులభమైన పదాలు. స్పష్టమైన నియంత్రణలు.",
    accessibilityText: "EaseIn చిన్న ప్రాక్టికల్ స్క్రిప్టులు, చదవడానికి సులభమైన లేఅవుట్లు, కీబోర్డ్‌కు అనుకూలమైన నావిగేషన్‌ను ఉపయోగిస్తుంది. ప్రతి కార్యకలాపం మీ అభ్యర్థనకు మరియు సాధ్యమైన సమాధానానికి మిమ్మల్ని సిద్ధం చేస్తుంది.",
    footerText: "నిజ జీవిత సంభాషణలను మీ వేగంలో సాధన చేయండి.",
    closeActivity: "కార్యకలాపాన్ని మూసివేయండి",
    previousCardAria: "మునుపటి కార్డ్",
    nextCardAria: "తదుపరి కార్డ్",
    cardProgress: "కార్డ్ {current} / {total}",
    complete: "పూర్తి",
    stepProgress: "దశ {current}",
    youCanSay: "మీరు చెప్పవచ్చు",
    youMayHear: "మీరు వినవచ్చు",
    practiceComplete: "సాధన పూర్తయింది",
    completionTitle: "అద్భుతమైన పని!",
    completionMessage: "మీరు మొత్తం పరిస్థితిని మొదటి నుంచి చివరి వరకు సాధన చేశారు. ఇది నిజమైన పురోగతి.",
    donts: "చేయకూడనివి",
    dos: "చేయాల్సినవి",
    restart: "మళ్లీ ప్రారంభించండి",
    previous: "మునుపటి",
    next: "తదుపరి",
    finished: "ముగిసింది",
    close: "మూసివేయండి"
  }
};

const bookmarkUiText = {
  hi: {
    bookmarkedActivities: "बुकमार्क की गई गतिविधियाँ",
    bookmarkedEmpty: "सहेजी गई गतिविधियाँ यहाँ दिखाई देंगी।",
    saveActivity: "सहेजें",
    savedActivity: "सहेजा गया",
    saveBookmarkAria: "गतिविधि सहेजें",
    removeBookmarkAria: "सहेजी गई गतिविधि हटाएँ"
  },
  mr: {
    bookmarkedActivities: "बुकमार्क केलेल्या क्रिया",
    bookmarkedEmpty: "जतन केलेल्या क्रिया येथे दिसतील.",
    saveActivity: "जतन करा",
    savedActivity: "जतन केले",
    saveBookmarkAria: "क्रिया जतन करा",
    removeBookmarkAria: "जतन केलेली क्रिया काढा"
  },
  ta: {
    bookmarkedActivities: "சேமித்த செயல்கள்",
    bookmarkedEmpty: "சேமித்த செயல்கள் இங்கே தோன்றும்.",
    saveActivity: "சேமி",
    savedActivity: "சேமித்தது",
    saveBookmarkAria: "செயலை சேமி",
    removeBookmarkAria: "சேமித்த செயலை அகற்று"
  },
  bn: {
    bookmarkedActivities: "বুকমার্ক করা কার্যক্রম",
    bookmarkedEmpty: "সংরক্ষিত কার্যক্রম এখানে দেখা যাবে।",
    saveActivity: "সংরক্ষণ করুন",
    savedActivity: "সংরক্ষিত",
    saveBookmarkAria: "কার্যক্রম সংরক্ষণ করুন",
    removeBookmarkAria: "সংরক্ষিত কার্যক্রম সরান"
  },
  te: {
    bookmarkedActivities: "బుక్‌మార్క్ చేసిన కార్యకలాపాలు",
    bookmarkedEmpty: "సేవ్ చేసిన కార్యకలాపాలు ఇక్కడ కనిపిస్తాయి.",
    saveActivity: "సేవ్ చేయండి",
    savedActivity: "సేవ్ అయింది",
    saveBookmarkAria: "కార్యకలాపాన్ని సేవ్ చేయండి",
    removeBookmarkAria: "సేవ్ చేసిన కార్యకలాపాన్ని తీసివేయండి"
  }
};

Object.entries(bookmarkUiText).forEach(([language, labels]) => {
  Object.assign(uiText[language], labels);
});

const state = {
  category: "all",
  search: "",
  language: getInitialLanguage(),
  bookmarks: loadBookmarks(),
  activeDeck: null,
  cardIndex: 0,
  completed: false,
  triggerElement: null
};

const elements = {
  metaDescription: document.querySelector("#meta-description"),
  mainNav: document.querySelector("#main-nav"),
  navActivities: document.querySelector("#nav-activities"),
  navHow: document.querySelector("#nav-how"),
  navAccessibility: document.querySelector("#nav-accessibility"),
  languageLabel: document.querySelector("#language-label"),
  languageSelect: document.querySelector("#language-select"),
  heroEyebrow: document.querySelector("#hero-eyebrow"),
  heroTitle: document.querySelector("#hero-title"),
  heroDescription: document.querySelector("#hero-description"),
  browseActivities: document.querySelector("#browse-activities"),
  featuredButton: document.querySelector("#featured-button"),
  heroCard: document.querySelector(".hero-card"),
  miniCardLabel: document.querySelector("#mini-card-label"),
  miniCardPhrase: document.querySelector("#mini-card-phrase"),
  miniCardTip: document.querySelector("#mini-card-tip"),
  categoryStrip: document.querySelector("#category-strip"),
  activitiesEyebrow: document.querySelector("#activities-eyebrow"),
  activitiesTitle: document.querySelector("#activities-title"),
  activityFilters: document.querySelector("#activity-filters"),
  bookmarksSection: document.querySelector("#bookmarks-section"),
  bookmarksTitle: document.querySelector("#bookmarks-title"),
  bookmarksEmpty: document.querySelector("#bookmarks-empty"),
  bookmarksGrid: document.querySelector("#bookmarks-grid"),
  activityGrid: document.querySelector("#activity-grid"),
  categoryFilters: document.querySelector("#category-filters"),
  resultCount: document.querySelector("#result-count"),
  emptyState: document.querySelector("#empty-state"),
  emptyTitle: document.querySelector("#empty-title"),
  emptyMessage: document.querySelector("#empty-message"),
  searchLabel: document.querySelector("#search-label"),
  searchInput: document.querySelector("#search-input"),
  clearFilters: document.querySelector("#clear-filters"),
  stepsEyebrow: document.querySelector("#steps-eyebrow"),
  stepsTitle: document.querySelector("#steps-title"),
  stepOneTitle: document.querySelector("#step-one-title"),
  stepOneText: document.querySelector("#step-one-text"),
  stepTwoTitle: document.querySelector("#step-two-title"),
  stepTwoText: document.querySelector("#step-two-text"),
  stepThreeTitle: document.querySelector("#step-three-title"),
  stepThreeText: document.querySelector("#step-three-text"),
  accessibilityEyebrow: document.querySelector("#accessibility-eyebrow"),
  accessibilityTitle: document.querySelector("#accessibility-title"),
  accessibilityText: document.querySelector("#accessibility-text"),
  footerText: document.querySelector("#footer-text"),
  viewer: document.querySelector("#deck-viewer"),
  viewerBookmark: document.querySelector("#viewer-bookmark"),
  closeViewer: document.querySelector("#close-viewer"),
  deckCategory: document.querySelector("#deck-category"),
  deckTitle: document.querySelector("#deck-title"),
  deckDescription: document.querySelector("#deck-description"),
  cardProgress: document.querySelector("#card-progress"),
  progressBar: document.querySelector("#progress-bar"),
  viewerScroll: document.querySelector(".viewer-scroll"),
  flashCard: document.querySelector("#flash-card"),
  cardStep: document.querySelector("#card-step"),
  cardTitle: document.querySelector("#card-title"),
  cardInstruction: document.querySelector("#card-instruction"),
  phraseLabel: document.querySelector("#phrase-label"),
  phraseBox: document.querySelector("#phrase-box"),
  cardPhrase: document.querySelector("#card-phrase"),
  responseLabel: document.querySelector("#response-label"),
  responseBox: document.querySelector("#response-box"),
  cardResponse: document.querySelector("#card-response"),
  cardTip: document.querySelector("#card-tip"),
  completion: document.querySelector("#completion"),
  completionKicker: document.querySelector(".completion-kicker"),
  completionTitle: document.querySelector("#completion-title"),
  completionMessage: document.querySelector("#completion-message"),
  quickReference: document.querySelector("#quick-reference"),
  quickReferenceTitle: document.querySelector("#quick-reference-title"),
  referenceDontsTitle: document.querySelector("#reference-donts-title"),
  referenceDosTitle: document.querySelector("#reference-dos-title"),
  referenceDonts: document.querySelector("#reference-donts"),
  referenceDos: document.querySelector("#reference-dos"),
  sidePreviousCard: document.querySelector("#side-previous-card"),
  sideNextCard: document.querySelector("#side-next-card"),
  previousCard: document.querySelector("#previous-card"),
  nextCard: document.querySelector("#next-card"),
  restartCard: document.querySelector("#restart-card")
};

function getInitialLanguage() {
  const savedLanguage = readSavedLanguage();
  if (savedLanguage) {
    return savedLanguage;
  }

  const browserLanguages = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language];

  const matchingLanguage = browserLanguages
    .filter(Boolean)
    .map((language) => language.toLowerCase().split("-")[0])
    .find((language) => languageCodes.includes(language));

  return matchingLanguage || fallbackLanguage;
}

function readSavedLanguage() {
  try {
    const savedLanguage = localStorage.getItem(languageStorageKey);
    return languageCodes.includes(savedLanguage) ? savedLanguage : "";
  } catch (error) {
    return "";
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem(languageStorageKey, language);
  } catch (error) {
    // Ignore storage failures and keep the in-memory language selection.
  }
}

function loadBookmarks() {
  try {
    const savedBookmarks = JSON.parse(localStorage.getItem(bookmarkStorageKey) || "[]");
    const validDeckIds = new Set(activityDecks.map((deck) => deck.id));
    return new Set(savedBookmarks.filter((deckId) => validDeckIds.has(deckId)));
  } catch (error) {
    return new Set();
  }
}

function saveBookmarks() {
  try {
    localStorage.setItem(bookmarkStorageKey, JSON.stringify([...state.bookmarks]));
  } catch (error) {
    // Ignore storage failures and keep bookmarks available for this session.
  }
}

function isBookmarked(deckId) {
  return state.bookmarks.has(deckId);
}

function toggleBookmark(deckId) {
  if (isBookmarked(deckId)) {
    state.bookmarks.delete(deckId);
  } else {
    state.bookmarks.add(deckId);
  }

  saveBookmarks();
  renderBookmarks();
  renderActivities();
  syncViewerBookmark();
}

function localized(value) {
  if (value === undefined || value === null) {
    return "";
  }

  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === "object") {
    return value[state.language] || value[fallbackLanguage] || "";
  }

  return value;
}

function t(key, params = {}) {
  const template = uiText[state.language][key] || uiText[fallbackLanguage][key] || "";
  return Object.entries(params).reduce(
    (text, [param, value]) => text.replaceAll(`{${param}}`, value),
    template
  );
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function categoryLabel(categoryId) {
  const category = activityCategories.find((item) => item.id === categoryId);
  return category ? localized(category.label) : categoryId;
}

function difficultyLabel(difficultyId) {
  return localized(difficultyLabels[difficultyId]) || difficultyId;
}

function tagsForSearch(deck) {
  const selectedTags = deck.tags[state.language];
  return selectedTags || deck.tags[fallbackLanguage] || [];
}

function renderLanguageOptions() {
  elements.languageSelect.innerHTML = languages
    .map(
      (language) => `
        <option value="${language.code}" ${language.code === state.language ? "selected" : ""}>
          ${language.label}
        </option>
      `
    )
    .join("");
}

function renderStaticText() {
  document.documentElement.lang = state.language;
  document.title = t("documentTitle");
  elements.metaDescription.setAttribute("content", t("metaDescription"));
  elements.mainNav.setAttribute("aria-label", t("mainNavigation"));
  document.querySelectorAll(".brand").forEach((brand) => {
    brand.setAttribute("aria-label", t("homeAria"));
  });
  elements.navActivities.textContent = t("navActivities");
  elements.navHow.textContent = t("navHow");
  elements.navAccessibility.textContent = t("navAccessibility");
  elements.languageLabel.textContent = t("languageLabel");
  elements.languageSelect.setAttribute("aria-label", t("languageAria"));
  elements.heroEyebrow.textContent = t("heroEyebrow");
  elements.heroTitle.textContent = t("heroTitle");
  elements.heroDescription.textContent = t("heroDescription");
  elements.browseActivities.textContent = t("browseActivities");
  elements.featuredButton.textContent = t("tryExample");
  elements.heroCard.setAttribute("aria-label", t("exampleCardAria"));
  elements.miniCardLabel.textContent = t("miniCardLabel");
  elements.miniCardPhrase.textContent = t("miniCardPhrase");
  elements.miniCardTip.textContent = t("miniCardTip");
  elements.categoryStrip.setAttribute("aria-label", t("categoryStripAria"));
  elements.activitiesEyebrow.textContent = t("activitiesEyebrow");
  elements.activitiesTitle.textContent = t("activitiesTitle");
  elements.activityFilters.setAttribute("aria-label", t("filterActivitiesAria"));
  elements.bookmarksTitle.textContent = t("bookmarkedActivities");
  elements.bookmarksEmpty.textContent = t("bookmarkedEmpty");
  elements.searchLabel.textContent = t("searchActivities");
  elements.searchInput.setAttribute("placeholder", t("searchPlaceholder"));
  elements.categoryFilters.setAttribute("aria-label", t("categoriesAria"));
  elements.emptyTitle.textContent = t("emptyTitle");
  elements.emptyMessage.textContent = t("emptyMessage");
  elements.clearFilters.textContent = t("clearFilters");
  elements.stepsEyebrow.textContent = t("stepsEyebrow");
  elements.stepsTitle.textContent = t("stepsTitle");
  elements.stepOneTitle.textContent = t("stepOneTitle");
  elements.stepOneText.textContent = t("stepOneText");
  elements.stepTwoTitle.textContent = t("stepTwoTitle");
  elements.stepTwoText.textContent = t("stepTwoText");
  elements.stepThreeTitle.textContent = t("stepThreeTitle");
  elements.stepThreeText.textContent = t("stepThreeText");
  elements.accessibilityEyebrow.textContent = t("accessibilityEyebrow");
  elements.accessibilityTitle.textContent = t("accessibilityTitle");
  elements.accessibilityText.textContent = t("accessibilityText");
  elements.footerText.textContent = t("footerText");
  elements.closeViewer.setAttribute("aria-label", t("closeActivity"));
  elements.sidePreviousCard.setAttribute("aria-label", t("previousCardAria"));
  elements.sideNextCard.setAttribute("aria-label", t("nextCardAria"));
  elements.phraseLabel.textContent = t("youCanSay");
  elements.responseLabel.textContent = t("youMayHear");
  elements.completionKicker.textContent = t("practiceComplete");
  elements.referenceDontsTitle.textContent = t("donts");
  elements.referenceDosTitle.textContent = t("dos");
  elements.restartCard.textContent = t("restart");
  elements.previousCard.textContent = t("previous");
}

function renderCategoryStrip() {
  elements.categoryStrip.innerHTML = activityCategories
    .map(
      (category, index) => `
        <div class="category-item">
          <span aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
          <strong>${escapeHtml(localized(category.label))}</strong>
        </div>
      `
    )
    .join("");
}

function filterOptions() {
  return [
    { id: "all", label: t("allCategories") },
    ...activityCategories.map((category) => ({
      id: category.id,
      label: localized(category.label)
    }))
  ];
}

function renderFilters() {
  elements.categoryFilters.innerHTML = filterOptions()
    .map(
      (category) => `
        <button
          class="filter-pill ${category.id === state.category ? "active" : ""}"
          type="button"
          data-category="${category.id}"
          aria-pressed="${category.id === state.category}"
        >
          ${escapeHtml(category.label)}
        </button>
      `
    )
    .join("");
}

function filteredDecks() {
  const query = state.search.toLowerCase().trim();

  return activityDecks.filter((deck) => {
    const matchesCategory = state.category === "all" || deck.category === state.category;
    const searchableText = [
      localized(deck.title),
      localized(deck.description),
      categoryLabel(deck.category),
      ...tagsForSearch(deck)
    ]
      .join(" ")
      .toLowerCase();

    return matchesCategory && (!query || searchableText.includes(query));
  });
}

function renderActivityCard(deck) {
  const saved = isBookmarked(deck.id);
  const bookmarkLabel = saved ? t("savedActivity") : t("saveActivity");
  const bookmarkAria = saved ? t("removeBookmarkAria") : t("saveBookmarkAria");

  return `
    <article class="activity-card">
      <div class="card-meta">
        <span class="category-badge">${escapeHtml(categoryLabel(deck.category))}</span>
        <span>${escapeHtml(t("minutes", { count: deck.estimatedMinutes }))}</span>
      </div>
      <h3>${escapeHtml(localized(deck.title))}</h3>
      <p>${escapeHtml(localized(deck.description))}</p>
      <div class="activity-actions">
        <button class="open-deck" type="button" data-deck-id="${deck.id}">
          ${escapeHtml(t("practiceNow"))}
        </button>
        <button
          class="bookmark-toggle ${saved ? "saved" : ""}"
          type="button"
          data-bookmark-id="${deck.id}"
          aria-pressed="${saved}"
          aria-label="${escapeHtml(bookmarkAria)}"
        >
          ${escapeHtml(bookmarkLabel)}
        </button>
      </div>
    </article>
  `;
}

function bookmarkedDecks() {
  return [...state.bookmarks]
    .map((deckId) => activityDecks.find((deck) => deck.id === deckId))
    .filter(Boolean);
}

function renderBookmarks() {
  const decks = bookmarkedDecks();
  elements.bookmarksGrid.innerHTML = decks.map(renderActivityCard).join("");
  elements.bookmarksEmpty.hidden = decks.length !== 0;
}

function renderActivities() {
  const decks = filteredDecks();
  const item = decks.length === 1 ? t("activitySingular") : t("activityPlural");
  elements.resultCount.textContent = t("activitiesFound", { count: decks.length, item });
  elements.emptyState.hidden = decks.length !== 0;

  elements.activityGrid.innerHTML = decks.map(renderActivityCard).join("");
}

function renderAll() {
  renderLanguageOptions();
  renderStaticText();
  renderCategoryStrip();
  renderFilters();
  renderBookmarks();
  renderActivities();

  if (state.activeDeck) {
    renderDeckHeader();
    renderCard();
  }
}

function renderDeckHeader() {
  if (!state.activeDeck) {
    return;
  }

  elements.deckCategory.textContent = [
    categoryLabel(state.activeDeck.category),
    difficultyLabel(state.activeDeck.difficulty),
    t("minutes", { count: state.activeDeck.estimatedMinutes })
  ].join(" | ");
  elements.deckTitle.textContent = localized(state.activeDeck.title);
  elements.deckDescription.textContent = localized(state.activeDeck.description);
  syncViewerBookmark();
}

function syncViewerBookmark() {
  if (!state.activeDeck) {
    elements.viewerBookmark.textContent = t("saveActivity");
    elements.viewerBookmark.classList.remove("saved");
    elements.viewerBookmark.setAttribute("aria-pressed", "false");
    elements.viewerBookmark.setAttribute("aria-label", t("saveBookmarkAria"));
    return;
  }

  const saved = isBookmarked(state.activeDeck.id);
  elements.viewerBookmark.textContent = saved ? t("savedActivity") : t("saveActivity");
  elements.viewerBookmark.classList.toggle("saved", saved);
  elements.viewerBookmark.setAttribute("aria-pressed", saved);
  elements.viewerBookmark.setAttribute(
    "aria-label",
    saved ? t("removeBookmarkAria") : t("saveBookmarkAria")
  );
}

function openDeck(deckId, triggerElement) {
  state.activeDeck = activityDecks.find((deck) => deck.id === deckId);
  state.cardIndex = 0;
  state.completed = false;
  state.triggerElement = triggerElement || document.activeElement;

  if (!state.activeDeck) {
    return;
  }

  renderDeckHeader();
  elements.viewer.hidden = false;
  document.body.classList.add("viewer-open");
  renderCard();
  elements.closeViewer.focus();
}

function closeDeck() {
  elements.viewer.hidden = true;
  document.body.classList.remove("viewer-open");
  state.activeDeck = null;
  state.completed = false;
  if (state.triggerElement) {
    state.triggerElement.focus();
  }
}

function setOptionalContent(container, contentElement, value) {
  const content = localized(value);
  container.hidden = !content;
  contentElement.textContent = content || "";
}

function renderList(element, items) {
  element.innerHTML = localized(items)
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
}

function renderQuickReference(deck, showReference) {
  const reference = deck.quickReference;
  elements.quickReference.hidden = !reference || !showReference;

  if (!reference || !showReference) {
    return;
  }

  elements.quickReferenceTitle.textContent = localized(reference.title);
  renderList(elements.referenceDonts, reference.donts);
  renderList(elements.referenceDos, reference.dos);
}

function renderCard() {
  const deck = state.activeDeck;
  if (!deck) {
    return;
  }

  if (state.completed) {
    elements.cardProgress.textContent = t("complete");
    elements.progressBar.style.width = "100%";
    elements.flashCard.hidden = true;
    elements.completion.hidden = false;
    elements.completionTitle.textContent = t("completionTitle");
    elements.completionMessage.textContent = t("completionMessage");
    renderQuickReference(deck, false);
    elements.viewerScroll.scrollTop = 0;
    elements.previousCard.disabled = false;
    elements.sidePreviousCard.disabled = false;
    elements.sideNextCard.disabled = true;
    elements.nextCard.disabled = false;
    elements.nextCard.textContent = t("close");
    return;
  }

  const card = deck.cards[state.cardIndex];
  const atLastCard = state.cardIndex === deck.cards.length - 1;

  elements.flashCard.hidden = false;
  elements.cardProgress.textContent = t("cardProgress", {
    current: state.cardIndex + 1,
    total: deck.cards.length
  });
  elements.progressBar.style.width = `${((state.cardIndex + 1) / deck.cards.length) * 100}%`;
  elements.cardStep.textContent = t("stepProgress", { current: state.cardIndex + 1 });
  elements.cardTitle.textContent = localized(card.title);
  elements.cardInstruction.textContent = localized(card.instruction);
  setOptionalContent(elements.phraseBox, elements.cardPhrase, card.phraseToSay);
  setOptionalContent(elements.responseBox, elements.cardResponse, card.likelyResponse);
  setOptionalContent(elements.cardTip, elements.cardTip, card.tip);
  elements.completion.hidden = true;
  renderQuickReference(deck, atLastCard);
  elements.viewerScroll.scrollTop = 0;
  elements.previousCard.disabled = state.cardIndex === 0;
  elements.sidePreviousCard.disabled = state.cardIndex === 0;
  elements.nextCard.disabled = false;
  elements.sideNextCard.disabled = atLastCard;
  elements.nextCard.textContent = atLastCard ? t("finished") : t("next");
}

function changeCard(offset) {
  if (state.completed) {
    if (offset < 0) {
      state.completed = false;
      renderCard();
      elements.flashCard.focus();
    }
    return;
  }

  const nextIndex = state.cardIndex + offset;
  if (!state.activeDeck || nextIndex < 0 || nextIndex >= state.activeDeck.cards.length) {
    return;
  }

  state.cardIndex = nextIndex;
  renderCard();
  elements.flashCard.focus();
}

function handleNextButton() {
  const deck = state.activeDeck;
  if (!deck) {
    return;
  }

  if (state.completed) {
    closeDeck();
    return;
  }

  const atLastCard = state.cardIndex === deck.cards.length - 1;
  if (atLastCard) {
    state.completed = true;
    renderCard();
    elements.completion.focus();
    return;
  }

  changeCard(1);
}

function keepFocusInViewer(event) {
  const focusableElements = [...elements.viewer.querySelectorAll("button:not([disabled])")];
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
}

elements.languageSelect.addEventListener("change", (event) => {
  state.language = event.target.value;
  saveLanguage(state.language);
  renderAll();
});

elements.categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) {
    return;
  }

  state.category = button.dataset.category;
  renderFilters();
  renderActivities();
});

elements.searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderActivities();
});

function handleActivityCardClick(event) {
  const bookmarkButton = event.target.closest("[data-bookmark-id]");
  if (bookmarkButton) {
    toggleBookmark(bookmarkButton.dataset.bookmarkId);
    return;
  }

  const button = event.target.closest("[data-deck-id]");
  if (button) {
    openDeck(button.dataset.deckId, button);
  }
}

elements.activityGrid.addEventListener("click", handleActivityCardClick);
elements.bookmarksGrid.addEventListener("click", handleActivityCardClick);

elements.featuredButton.addEventListener("click", (event) => {
  openDeck("airplane-water", event.currentTarget);
});

elements.clearFilters.addEventListener("click", () => {
  state.category = "all";
  state.search = "";
  elements.searchInput.value = "";
  renderFilters();
  renderActivities();
  elements.searchInput.focus();
});

elements.closeViewer.addEventListener("click", closeDeck);
elements.viewerBookmark.addEventListener("click", () => {
  if (state.activeDeck) {
    toggleBookmark(state.activeDeck.id);
  }
});
elements.viewer.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-close-viewer")) {
    closeDeck();
  }
});

elements.previousCard.addEventListener("click", () => changeCard(-1));
elements.nextCard.addEventListener("click", handleNextButton);
elements.sidePreviousCard.addEventListener("click", () => changeCard(-1));
elements.sideNextCard.addEventListener("click", () => changeCard(1));
elements.restartCard.addEventListener("click", () => {
  state.cardIndex = 0;
  state.completed = false;
  renderCard();
  elements.flashCard.focus();
});

document.addEventListener("keydown", (event) => {
  if (!state.activeDeck) {
    return;
  }

  if (event.key === "Escape") {
    closeDeck();
  } else if (event.key === "ArrowRight") {
    changeCard(1);
  } else if (event.key === "ArrowLeft") {
    changeCard(-1);
  } else if (event.key === "Tab") {
    keepFocusInViewer(event);
  }
});

renderAll();
