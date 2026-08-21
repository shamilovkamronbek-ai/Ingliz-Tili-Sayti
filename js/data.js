// ============ MA'LUMOTLAR BAZASI ============

const LESSONS = [
  {
    id: 1,
    title: "Present Simple (Hozirgi oddiy zamon)",
    icon: "⏰",
    tag: "Grammar",
    tagClass: "blue",
    desc: "Doimiy ishlar, odatlar va haqiqatlar haqida gapirish.",
    level: "Boshlang'ich",
    content: [
      {
        type: "text",
        html: `<p><b>Present Simple</b> — odatiy ish-harakatlar, haqiqatlar va rejalar haqida gapirish uchun ishlatiladi.</p>`
      },
      {
        type: "example",
        en: "I <u>work</u> every day.",
        uz: "Men har kuni ishlayman.",
        note: "Bitta fe'l ishlatiladi (I, you, we, they bilan)"
      },
      {
        type: "example",
        en: "She <u>works</u> at a hospital.",
        uz: "U kasalxonada ishlaydi.",
        note: "He, she, it bilan fe'lga <b>-s</b> qo'shiladi!"
      },
      {
        type: "example",
        en: "The sun <u>rises</u> in the east.",
        uz: "Quyosh sharqdan chiqadi.",
        note: "Haqiqatlar uchun ishlatiladi"
      },
      {
        type: "example",
        en: "They <u>don't</u> speak French.",
        uz: "Ular fransuzcha gapirishmaydi.",
        note: "Inkor: <b>do not (don't)</b> / <b>does not (doesn't)</b>"
      },
      {
        type: "tip",
        text: "He/She/It bilan fe'lga -s qo'shishni unutmang: <b>he goes, she plays, it works</b>. So'roq shaklda: <b>Does he go?</b>"
      },
      {
        type: "exercise",
        title: "To'g'ri shaklni tanlang",
        options: [
          { text: "She ___ English every day.", answer: "studies", choices: ["study", "studies", "studying"] },
          { text: "They ___ to school by bus.", answer: "go", choices: ["goes", "go", "going"] },
          { text: "___ he like coffee?", answer: "Does", choices: ["Do", "Does", "Is"] },
          { text: "I ___ watch TV in the morning.", answer: "don't", choices: ["don't", "doesn't", "not"] }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Past Simple (O'tgan oddiy zamon)",
    icon: "⏳",
    tag: "Grammar",
    tagClass: "blue",
    desc: "O'tmishda tugagan ishlar haqida gapirish.",
    level: "Boshlang'ich",
    content: [
      {
        type: "text",
        html: `<p><b>Past Simple</b> — o'tmishda bajarilgan va tugagan ishlar haqida gapirishda ishlatiladi. Muntazam fe'llarga <b>-ed</b> qo'shiladi.</p>`
      },
      {
        type: "example",
        en: "I <u>played</u> football yesterday.",
        uz: "Kecha men futbol o'ynadim.",
        note: "Muntazam fe'l: play → <b>played</b>"
      },
      {
        type: "example",
        en: "She <u>went</u> to London last year.",
        uz: "U o'tgan yili Londonga bordi.",
        note: "Noto'g'ri fe'l: go → <b>went</b> (yodlash kerak)"
      },
      {
        type: "example",
        en: "We <u>didn't</u> see the movie.",
        uz: "Biz filmni ko'rmadik.",
        note: "Inkor: <b>did not (didn't)</b> + fe'l 1-shaklda"
      },
      {
        type: "tip",
        text: "Keng tarqalgan noto'g'ri fe'llar: <b>go→went, see→saw, eat→ate, have→had, buy→bought</b>. Inkor va so'roqda DID ishlatiladi va fe'l oddiy shaklda qoladi."
      },
      {
        type: "exercise",
        title: "Past Simple ga o'zgartiring",
        options: [
          { text: "I ___ (eat) an apple yesterday.", answer: "ate", choices: ["eated", "ate", "eaten"] },
          { text: "She ___ (see) her friend last week.", answer: "saw", choices: ["seed", "saw", "seen"] },
          { text: "They ___ (not go) to the party.", answer: "didn't go", choices: ["didn't went", "didn't go", "don't go"] },
          { text: "We ___ (play) chess last night.", answer: "played", choices: ["play", "played", "playd"] }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Future (Kelasi zamon)",
    icon: "🔮",
    tag: "Grammar",
    tagClass: "blue",
    desc: "Kelajakdagi rejalar va bashoratlar.",
    level: "Boshlang'ich",
    content: [
      {
        type: "text",
        html: `<p>Kelasi zamon uchun <b>will</b> va <b>be going to</b> ishlatiladi.</p>`
      },
      {
        type: "example",
        en: "I <u>will call</u> you tomorrow.",
        uz: "Ertaga sizga qo'ng'iroq qilaman.",
        note: "<b>Will</b> — bir zumda qaror yoki bashorat"
      },
      {
        type: "example",
        en: "She <u>is going to</u> travel to Paris.",
        uz: "U Parijga sayohat qilmoqchi.",
        note: "<b>Be going to</b> — reja va niyat"
      },
      {
        type: "example",
        en: "It <u>will rain</u> soon.",
        uz: "Tez orada yomg'ir yog'adi.",
        note: "Bashorat uchun ham will"
      },
      {
        type: "tip",
        text: "Qisqa shakl: <b>I'll, she'll, we'll</b>. Inkor: <b>will not (won't)</b>. Savol: <b>Will you come?</b>"
      },
      {
        type: "exercise",
        title: "Will yoki going to?",
        options: [
          { text: "I think it ___ be sunny tomorrow.", answer: "will", choices: ["will", "is going to", "does"] },
          { text: "She ___ buy a new car. She has a plan.", answer: "is going to", choices: ["will", "is going to", "does"] },
          { text: "Don't worry! I ___ help you.", answer: "will", choices: ["will", "going", "am"] },
          { text: "They ___ visit us next month.", answer: "are going to", choices: ["will", "are going to", "is going to"] }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Present Continuous (Davomli zamon)",
    icon: "🔄",
    tag: "Grammar",
    tagClass: "blue",
    desc: "Ayni paytda sodir bo'layotgan ishlar.",
    level: "O'rta",
    content: [
      {
        type: "text",
        html: `<p><b>Present Continuous</b> — hozir, ayni shu daqiqada sodir bo'layotgan ish-harakatni ifodalaydi. Formula: <b>am/is/are + fe'l(-ing)</b>.</p>`
      },
      {
        type: "example",
        en: "I <u>am reading</u> a book now.",
        uz: "Hozir kitob o'qiyapman.",
        note: "I bilan <b>am</b> ishlatiladi"
      },
      {
        type: "example",
        en: "She <u>is cooking</u> dinner.",
        uz: "U kechki ovqat tayyorlayapti.",
        note: "He/She/It bilan <b>is</b>"
      },
      {
        type: "example",
        en: "They <u>are playing</u> football.",
        uz: "Ular futbol o'ynashyapti.",
        note: "We/You/They bilan <b>are</b>"
      },
      {
        type: "tip",
        text: "Inkor: <b>am not / isn't / aren't</b>. Savol: <b>Are you listening?</b>. Eslatma: fe'l oxiriga <b>-ing</b> qo'shiladi."
      },
      {
        type: "exercise",
        title: "Ing qo'shish",
        options: [
          { text: "Look! It ___ (rain) outside.", answer: "is raining", choices: ["is raining", "rains", "raining"] },
          { text: "We ___ (study) English now.", answer: "are studying", choices: ["is studying", "are studying", "studying"] },
          { text: "I ___ (watch) a movie right now.", answer: "am watching", choices: ["am watch", "am watching", "watch"] },
          { text: "He ___ (not work) at the moment.", answer: "isn't working", choices: ["isn't working", "don't work", "isn't work"] }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Question Words (So'roq so'zlari)",
    icon: "❓",
    tag: "Grammar",
    tagClass: "blue",
    desc: "Wh-so'zlari bilan so'roq yasash.",
    level: "O'rta",
    content: [
      {
        type: "text",
        html: `<p>So'roq so'zlari — ma'lumot so'rash uchun ishlatiladi: <b>What, Where, When, Why, Who, How</b>.</p>`
      },
      {
        type: "example",
        en: "<u>What</u> is your name?",
        uz: "Ismingiz nima? (narsa/buyum)"
      },
      {
        type: "example",
        en: "<u>Where</u> do you live?",
        uz: "Qayerda yashaysiz? (joy)"
      },
      {
        type: "example",
        en: "<u>When</u> does the train leave?",
        uz: "Poyezd qachon jo'naydi? (vaqt)"
      },
      {
        type: "example",
        en: "<u>Why</u> are you late?",
        uz: "Nega kechikdingiz? (sabab)"
      },
      {
        type: "tip",
        text: "<b>Who</b> — kim (shaxs), <b>How</b> — qanday (usul). Savol tartibi: <b>So'roq so'zi + yordamchi fe'l + ega + asosiy fe'l?</b>"
      },
      {
        type: "exercise",
        title: "To'g'ri so'roq so'zini tanlang",
        options: [
          { text: "___ is your birthday?", answer: "When", choices: ["What", "When", "Who"] },
          { text: "___ do you go to work? — By bus.", answer: "How", choices: ["How", "Why", "Where"] },
          { text: "___ is that man? — He is my father.", answer: "Who", choices: ["What", "When", "Who"] },
          { text: "___ are you sad? — Because I lost my phone.", answer: "Why", choices: ["How", "Why", "What"] }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Modal Verbs (Modal fe'llar)",
    icon: "🎯",
    tag: "Grammar",
    tagClass: "blue",
    desc: "Can, must, should bilan gapirish.",
    level: "O'rta",
    content: [
      {
        type: "text",
        html: `<p><b>Modal fe'llar</b>: <b>can</b> (qila olish), <b>must</b> (majburiyat), <b>should</b> (maslahat). Modal fe'ldan keyin fe'l oddiy shaklda keladi.</p>`
      },
      {
        type: "example",
        en: "I <u>can swim</u> very well.",
        uz: "Men juda yaxshi suza olaman.",
        note: "Qobiliyat"
      },
      {
        type: "example",
        en: "You <u>must</u> wear a seatbelt.",
        uz: "Xavfsizlik kamarini taqish kerak.",
        note: "Majburiyat"
      },
      {
        type: "example",
        en: "You <u>should</u> drink more water.",
        uz: "Ko'proq suv ichishingiz kerak (maslahat).",
        note: "Maslahat"
      },
      {
        type: "tip",
        text: "Modal fe'ldan keyin <b>to</b> ishlatilmaydi: <b>I can go</b> (can to go emas!). Inkor: <b>can't, mustn't, shouldn't</b>."
      },
      {
        type: "exercise",
        title: "To'g'ri modal fe'lni tanlang",
        options: [
          { text: "You ___ smoke here. It's forbidden.", answer: "mustn't", choices: ["mustn't", "can", "should"] },
          { text: "She ___ speak three languages.", answer: "can", choices: ["must", "can", "should"] },
          { text: "You ___ rest. You look tired.", answer: "should", choices: ["must", "can", "should"] },
          { text: "We ___ leave now, the bus is coming!", answer: "must", choices: ["must", "can", "should"] }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Present Perfect (Tugallangan zamon)",
    icon: "✅",
    tag: "Grammar",
    tagClass: "blue",
    desc: "O'tmishda sodir bo'lgan va hozirga aloqasi bor ishlar.",
    level: "Yuqori",
    content: [
      {
        type: "text",
        html: `<p><b>Present Perfect</b> — o'tmishda boshlanib hozirga ta'siri bor ishlar. Formula: <b>have/has + fe'l (3-shakl)</b>.</p>`
      },
      {
        type: "example",
        en: "I <u>have visited</u> London.",
        uz: "Men Londonda bo'lganman.",
        note: "Tajriba haqida"
      },
      {
        type: "example",
        en: "She <u>has lost</u> her keys.",
        uz: "U kalitlarini yo'qotdi (hali topilmadi).",
        note: "Hozirgi natija"
      },
      {
        type: "tip",
        text: "Marker so'zlar: <b>ever, never, already, yet, just</b>. I/you/we/they → <b>have</b>; he/she/it → <b>has</b>. Savol: <b>Have you ever...?</b>"
      },
      {
        type: "exercise",
        title: "Present Perfect hosil qiling",
        options: [
          { text: "I ___ (finish) my homework.", answer: "have finished", choices: ["have finished", "has finished", "finished"] },
          { text: "She ___ (never/be) to Japan.", answer: "has never been", choices: ["have never been", "has never been", "never has been"] },
          { text: "___ you ever ___ (eat) sushi?", answer: "Have ... eaten", choices: ["Have ... eaten", "Has ... eaten", "Did ... ate"] },
          { text: "They ___ just ___ (arrive).", answer: "have just arrived", choices: ["have just arrived", "has just arrived", "arrived just"] }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Prepositions (Predloglar)",
    icon: "📍",
    tag: "Grammar",
    tagClass: "blue",
    desc: "In, on, at — joy va vaqt predloglari.",
    level: "O'rta",
    content: [
      {
        type: "text",
        html: `<p>Joy va vaqt predloglari juda muhim: <b>in, on, at</b>.</p>`
      },
      {
        type: "example",
        en: "I wake up <u>at</u> 7 o'clock.",
        uz: "Soat 7 da uyg'onaman.",
        note: "<b>at</b> — aniq vaqt (7:00)"
      },
      {
        type: "example",
        en: "She was born <u>in</u> January.",
        uz: "U yanvarda tug'ilgan.",
        note: "<b>in</b> — oy, yil, fasl"
      },
      {
        type: "example",
        en: "The book is <u>on</u> the table.",
        uz: "Kitob stol ustida.",
        note: "<b>on</b> — yuza ustida"
      },
      {
        type: "tip",
        text: "Kunlar: <b>on Monday</b>. Shaharlar/mamlakatlar: <b>in Tashkent, in Uzbekistan</b>. Aniq vaqt: <b>at 5 pm</b>. Hafta oxiri: <b>at the weekend</b>."
      },
      {
        type: "exercise",
        title: "To'g'ri predlogni tanlang",
        options: [
          { text: "The meeting is ___ 9 am.", answer: "at", choices: ["at", "in", "on"] },
          { text: "I was born ___ 2005.", answer: "in", choices: ["at", "in", "on"] },
          { text: "We play football ___ Saturdays.", answer: "on", choices: ["at", "in", "on"] },
          { text: "My keys are ___ my bag.", answer: "in", choices: ["at", "on", "in"] }
        ]
      }
    ]
  }
];

// ============ LUG'AT (VOCABULARY) ============

const VOCAB_CATEGORIES = [
  { id: "greetings", name: "Salomlashish", icon: "👋" },
  { id: "family", name: "Oila", icon: "👨‍👩‍👧‍👦" },
  { id: "food", name: "Oziq-ovqat", icon: "🍎" },
  { id: "travel", name: "Sayohat", icon: "✈️" },
  { id: "work", name: "Ish va kasb", icon: "💼" },
  { id: "numbers", name: "Raqamlar", icon: "🔢" },
  { id: "days", name: "Kunlar va vaqt", icon: "📅" },
  { id: "emotions", name: "His-tuyg'ular", icon: "😊" }
];

const VOCABULARY = {
  greetings: [
    { en: "Hello", uz: "Salom", ipa: "/həˈləʊ/" },
    { en: "Good morning", uz: "Xayrli tong", ipa: "/ɡʊd ˈmɔːnɪŋ/" },
    { en: "Good night", uz: "Xayrli tun", ipa: "/ɡʊd naɪt/" },
    { en: "Thank you", uz: "Rahmat", ipa: "/θæŋk juː/" },
    { en: "You're welcome", uz: "Arzimaydi", ipa: "/jɔː ˈwelkəm/" },
    { en: "Nice to meet you", uz: "Tanishganimdan xursandman", ipa: "/naɪs tə miːt juː/" },
    { en: "How are you?", uz: "Qalaysiz?", ipa: "/haʊ ɑː juː/" },
    { en: "See you later", uz: "Keyinroq ko'rishamiz", ipa: "/siː juː ˈleɪtə/" }
  ],
  family: [
    { en: "Mother", uz: "Ona", ipa: "/ˈmʌðə/" },
    { en: "Father", uz: "Ota", ipa: "/ˈfɑːðə/" },
    { en: "Brother", uz: "Aka/uka", ipa: "/ˈbrʌðə/" },
    { en: "Sister", uz: "Opa/singil", ipa: "/ˈsɪstə/" },
    { en: "Grandmother", uz: "Buvi", ipa: "/ˈɡrænmʌðə/" },
    { en: "Grandfather", uz: "Bobo", ipa: "/ˈɡrænfɑːðə/" },
    { en: "Son", uz: "O'g'il", ipa: "/sʌn/" },
    { en: "Daughter", uz: "Qiz", ipa: "/ˈdɔːtə/" },
    { en: "Husband", uz: "Er", ipa: "/ˈhʌzbənd/" },
    { en: "Wife", uz: "Xotin", ipa: "/waɪf/" }
  ],
  food: [
    { en: "Bread", uz: "Non", ipa: "/bred/" },
    { en: "Milk", uz: "Sut", ipa: "/mɪlk/" },
    { en: "Apple", uz: "Olma", ipa: "/ˈæpl/" },
    { en: "Water", uz: "Suv", ipa: "/ˈwɔːtə/" },
    { en: "Meat", uz: "Go'sht", ipa: "/miːt/" },
    { en: "Egg", uz: "Tuxum", ipa: "/eɡ/" },
    { en: "Tea", uz: "Choy", ipa: "/tiː/" },
    { en: "Rice", uz: "Guruch", ipa: "/raɪs/" },
    { en: "Cheese", uz: "Pishloq", ipa: "/tʃiːz/" },
    { en: "Breakfast", uz: "Nonushta", ipa: "/ˈbrekfəst/" }
  ],
  travel: [
    { en: "Airport", uz: "Aeroport", ipa: "/ˈeəpɔːt/" },
    { en: "Ticket", uz: "Chipta", ipa: "/ˈtɪkɪt/" },
    { en: "Train", uz: "Poyezd", ipa: "/treɪn/" },
    { en: "Hotel", uz: "Mehmonxona", ipa: "/həʊˈtel/" },
    { en: "Passport", uz: "Pasport", ipa: "/ˈpɑːspɔːt/" },
    { en: "Map", uz: "Xarita", ipa: "/mæp/" },
    { en: "Baggage", uz: "Yuk", ipa: "/ˈbæɡɪdʒ/" },
    { en: "Tourist", uz: "Sayyoh", ipa: "/ˈtʊərɪst/" },
    { en: "Flight", uz: "Parvoz", ipa: "/flaɪt/" },
    { en: "Station", uz: "Stansiya", ipa: "/ˈsteɪʃn/" }
  ],
  work: [
    { en: "Doctor", uz: "Shifokor", ipa: "/ˈdɒktə/" },
    { en: "Teacher", uz: "O'qituvchi", ipa: "/ˈtiːtʃə/" },
    { en: "Engineer", uz: "Muhandis", ipa: "/ˌendʒɪˈnɪə/" },
    { en: "Businessman", uz: "Tadbirkor", ipa: "/ˈbɪznəsmæn/" },
    { en: "Office", uz: "Ofis", ipa: "/ˈɒfɪs/" },
    { en: "Salary", uz: "Ish haqi", ipa: "/ˈsæləri/" },
    { en: "Meeting", uz: "Uchrashuv", ipa: "/ˈmiːtɪŋ/" },
    { en: "Job", uz: "Ish (kasb)", ipa: "/dʒɒb/" },
    { en: "Colleague", uz: "Hamkasb", ipa: "/ˈkɒliːɡ/" },
    { en: "Company", uz: "Korxona", ipa: "/ˈkʌmpəni/" }
  ],
  numbers: [
    { en: "One", uz: "Bir", ipa: "/wʌn/" },
    { en: "Two", uz: "Ikki", ipa: "/tuː/" },
    { en: "Three", uz: "Uch", ipa: "/θriː/" },
    { en: "Four", uz: "To'rt", ipa: "/fɔː/" },
    { en: "Five", uz: "Besh", ipa: "/faɪv/" },
    { en: "Ten", uz: "O'n", ipa: "/ten/" },
    { en: "Twenty", uz: "Yigirma", ipa: "/ˈtwenti/" },
    { en: "Hundred", uz: "Yuz", ipa: "/ˈhʌndrəd/" },
    { en: "Thousand", uz: "Ming", ipa: "/ˈθaʊzənd/" },
    { en: "Million", uz: "Million", ipa: "/ˈmɪljən/" }
  ],
  days: [
    { en: "Monday", uz: "Dushanba", ipa: "/ˈmʌndeɪ/" },
    { en: "Tuesday", uz: "Seshanba", ipa: "/ˈtjuːzdeɪ/" },
    { en: "Wednesday", uz: "Chorshanba", ipa: "/ˈwenzdeɪ/" },
    { en: "Thursday", uz: "Payshanba", ipa: "/ˈθɜːzdeɪ/" },
    { en: "Friday", uz: "Juma", ipa: "/ˈfraɪdeɪ/" },
    { en: "Saturday", uz: "Shanba", ipa: "/ˈsætədeɪ/" },
    { en: "Sunday", uz: "Yakshanba", ipa: "/ˈsʌndeɪ/" },
    { en: "Morning", uz: "Ertalab", ipa: "/ˈmɔːnɪŋ/" },
    { en: "Evening", uz: "Kechqurun", ipa: "/ˈiːvnɪŋ/" },
    { en: "Night", uz: "Tun", ipa: "/naɪt/" }
  ],
  emotions: [
    { en: "Happy", uz: "Baxtli", ipa: "/ˈhæpi/" },
    { en: "Sad", uz: "G'amgin", ipa: "/sæd/" },
    { en: "Angry", uz: "Jahldor", ipa: "/ˈæŋɡri/" },
    { en: "Tired", uz: "Charchagan", ipa: "/ˈtaɪəd/" },
    { en: "Excited", uz: "Hayajonlangan", ipa: "/ɪkˈsaɪtɪd/" },
    { en: "Nervous", uz: "Asabiy", ipa: "/ˈnɜːvəs/" },
    { en: "Surprised", uz: "Hayron qolgan", ipa: "/səˈpraɪzd/" },
    { en: "Bored", uz: "Zerikkan", ipa: "/bɔːd/" },
    { en: "Afraid", uz: "Qo'rqqan", ipa: "/əˈfreɪd/" },
    { en: "Proud", uz: "Faxrlanadigan", ipa: "/praʊd/" }
  ]
};

// ============ QO'SHIMCHA TESTLAR ============

const EXTRA_QUIZ = [
  { text: "What ___ your name?", answer: "is", choices: ["am", "is", "are"] },
  { text: "I ___ from Uzbekistan.", answer: "am", choices: ["am", "is", "are"] },
  { text: "She ___ a doctor.", answer: "is", choices: ["am", "is", "are"] },
  { text: "They ___ my friends.", answer: "are", choices: ["am", "is", "are"] },
  { text: "___ you like pizza?", answer: "Do", choices: ["Do", "Does", "Is"] },
  { text: "We ___ not watch TV.", answer: "do", choices: ["does", "do", "is"] },
  { text: "How many apples ___ there?", answer: "are", choices: ["is", "are", "am"] },
  { text: "The cat ___ sleeping.", answer: "is", choices: ["are", "am", "is"] },
  { text: "I ___ been to Paris twice.", answer: "have", choices: ["have", "has", "had"] },
  { text: "She ___ a new car last week.", answer: "bought", choices: ["buyed", "bought", "buys"] },
  { text: "We will ___ you at the airport.", answer: "meet", choices: ["meets", "meet", "meeting"] },
  { text: "This is ___ best movie I've seen.", answer: "the", choices: ["a", "the", "an"] }
];

// Kun so'zi
const WORD_OF_DAY = [
  { word: "Serendipity", uz: "Kutilmagan baxtli tasodif", ipa: "/ˌserənˈdɪpəti/", example: "Finding this book was pure serendipity." },
  { word: "Illuminate", uz: "Yoritmoq, tushuntirmoq", ipa: "/ɪˈluːmɪneɪt/", example: "The teacher's words illuminated the topic." },
  { word: "Perseverance", uz: "Qat'iyat, sabr", ipa: "/ˌpɜːsɪˈvɪərəns/", example: "Success requires perseverance." },
  { word: "Ambition", uz: "Shoirilik, intilish", ipa: "/æmˈbɪʃn/", example: "Her ambition is to become a pilot." },
  { word: "Curiosity", uz: "Qiziqish, bilimga chanqoqlik", ipa: "/ˌkjʊəriˈɒsəti/", example: "Curiosity drives learning." },
  { word: "Brilliant", uz: "Zo'r, ajoyib", ipa: "/ˈbrɪliənt/", example: "That's a brilliant idea!" },
  { word: "Generous", uz: "Saxiy", ipa: "/ˈdʒenərəs/", example: "He is very generous with his time." },
  { word: "Courage", uz: "Jasorat", ipa: "/ˈkʌrɪdʒ/", example: "It takes courage to speak in public." },
  { word: "Effortless", uz: "Oson, bemalol", ipa: "/ˈefətləs/", example: "Her dance looked effortless." },
  { word: "Harmony", uz: "Uyg'unlik", ipa: "/ˈhɑːməni/", example: "They live in perfect harmony." }
];

// Motivatston iqtiboslar
const QUOTES = [
  "The best way to predict the future is to create it.",
  "Learning a language is a journey, not a destination.",
  "Practice makes perfect.",
  "Every expert was once a beginner.",
  "Small steps every day lead to big results.",
  "Mistakes are proof that you are trying.",
  "Language is the road map of a culture.",
  "Do something today that your future self will thank you for."
];
