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
  },
  {
    id: 9,
    title: "Conditionals (Shart gaplar)",
    icon: "🔀",
    tag: "Murakkab",
    tagClass: "red",
    desc: "Zero, First, Second, Third conditional — shartli gaplar tuzish.",
    level: "Yuqori",
    content: [
      {
        type: "text",
        html: `<p><b>Conditional</b> — shartli gaplar 4 xil bo'ladi. Har birining o'z qoidalari bor.</p>`
      },
      {
        type: "example",
        en: "<b>Zero:</b> If you heat water to 100°C, it <u>boils</u>.",
        uz: "Suvni 100°C ga qizdirsangiz, u qaynaydi.",
        note: "Haqiqatlar uchun: If + Present, Present"
      },
      {
        type: "example",
        en: "<b>First:</b> If it <u>rains</u> tomorrow, I <u>will stay</u> home.",
        uz: "Agar ertaga yomg'ir yog'sa, men uyda qolaman.",
        note: "Kelajak: If + Present, will + fe'l"
      },
      {
        type: "example",
        en: "<b>Second:</b> If I <u>had</u> more money, I <u>would travel</u> the world.",
        uz: "Ko'proq pulim bo'lsa, men dunyoni sayohat qilardim.",
        note: "Haqiqatga zid: If + Past, would + fe'l"
      },
      {
        type: "example",
        en: "<b>Third:</b> If she <u>had studied</u>, she <u>would have passed</u>.",
        uz: "U o'qiganida, imtihondan o'tgan bo'lardi.",
        note: "O'tmish uchun: If + Past Perfect, would have + V3"
      },
      {
        type: "tip",
        text: "Xotirada saqlang: <b>Zero</b>=haqiqat, <b>First</b>=kelajak, <b>Second</b>=taxmin, <b>Third</b>=o'tmishga afsus. Second conditionaldagi <b>were</b>: If I were you..."
      },
      {
        type: "exercise",
        title: "To'g'ri conditional shaklini tanlang",
        options: [
          { text: "If I ___ rich, I would buy a car.", answer: "were", choices: ["am", "were", "will be"] },
          { text: "If you heat ice, it ___.", answer: "melts", choices: ["melt", "melts", "will melt"] },
          { text: "If he ___ harder, he would have succeeded.", answer: "had worked", choices: ["worked", "had worked", "works"] },
          { text: "If it ___ sunny, we will go to the park.", answer: "is", choices: ["is", "was", "were"] }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Passive Voice (Passiv ovoz)",
    icon: "🔄",
    tag: "Murakkab",
    tagClass: "red",
    desc: "Passiv ovozda gap tuzish — har bir zamon uchun.",
    level: "Yuqori",
    content: [
      {
        type: "text",
        html: `<p><b>Passive Voice</b> — ishning bajarilishiga e'tibor qaratilganda ishlatiladi. Formula: <b>Obyekt + am/is/are/was/were + V3 (+ by + ego)</b>.</p>`
      },
      {
        type: "example",
        en: "The cake <u>is made</u> by my mother.",
        uz: "Tort onam tomonidan tayyorlangan.",
        note: "Present Simple Passive"
      },
      {
        type: "example",
        en: "English <u>is spoken</u> in many countries.",
        uz: "Ingliz tili ko'plab mamlakatlarda gapiriladi.",
        note: "By qismi tushib qolishi mumkin"
      },
      {
        type: "example",
        en: "The book <u>was written</u> in 1990.",
        uz: "Kitob 1990-yilda yozilgan.",
        note: "Past Simple Passive"
      },
      {
        type: "example",
        en: "The bridge <u>is being built</u>.",
        uz: "Ko'prik qurilmoqda.",
        note: "Present Continuous Passive"
      },
      {
        type: "tip",
        text: "Passiveni ishlatish sabablari: ego noma'lum, e'tibor ishga qaratilganda, rasmiy tilda. Har bir zamon uchun passive shakli bor: <b>PV = be/is/am/are + V3</b>."
      },
      {
        type: "exercise",
        title: "Passiv shaklni to'ldiring",
        options: [
          { text: "The window ___ (break) by the boy.", answer: "was broken", choices: ["was broken", "broken", "is breaking"] },
          { text: "A new school ___ (build) next year.", answer: "will be built", choices: ["will be built", "is built", "was built"] },
          { text: "The letter ___ (write) right now.", answer: "is being written", choices: ["is written", "is being written", "was written"] },
          { text: "Millions of trees ___ (plant) last year.", answer: "were planted", choices: ["were planted", "are planted", "are being planted"] }
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Reported Speech (Aytilgan gap)",
    icon: "🗣️",
    tag: "Murakkab",
    tagClass: "red",
    desc: "Boshqa kishining gapini qayta aytish.",
    level: "Yuqori",
    content: [
      {
        type: "text",
        html: `<p><b>Reported Speech</b> — boshqa kishining so'zlarini qayta aytish. Quotition ishlatilmasa, zamon va zamongaoid so'zlar o'zgaradi.</p>`
      },
      {
        type: "example",
        en: "Direct: He said, <u>"I am tired."</u>",
        uz: "To'g'ridan: U dedi: "Men charchadim."",
        note: "Direct speech"
      },
      {
        type: "example",
        en: "Reported: He said (that) he <u>was</u> tired.",
        uz: "Hisob: U dediki, u charchagan.",
        note: "am → was, I → he"
      },
      {
        type: "example",
        en: "Direct: She said, <u>"I will come tomorrow."</u>",
        uz: "To'g'ridan: U dedi: "Men ertaga kelaman."",
        note: "Quotition bilan"
      },
      {
        type: "example",
        en: "Reported: She said (that) she <u>would come</u> the next day.",
        uz: "Hisob: U dediki, u ertasi keladi.",
        note: "will → would, tomorrow → the next day"
      },
      {
        type: "tip",
        text: "Zamon o'zgarishlari: <b>am/is → was, are → were, will → would, can → could, do/does → did, have → had</b>. Shart gaplarda o'zgarmaydi!"
      },
      {
        type: "exercise",
        title: "Reported Speech ga o'zgartiring",
        options: [
          { text: "She said: \"I ___ tired.\" → She said she was tired.", answer: "am", choices: ["am", "was", "will be"] },
          { text: "He said: \"I ___ see you tomorrow.\" → He said he would see me the next day.", answer: "will", choices: ["will", "would", "can"] },
          { text: "They said: \"We ___ finished.\" → They said they had finished.", answer: "have", choices: ["have", "had", "did"] },
          { text: "He said: \"I ___ play tennis.\" → He said he could play tennis.", answer: "can", choices: ["can", "could", "may"] }
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Phrasal Verbs (Frazali fe'llar)",
    icon: "🧩",
    tag: "Murakkab",
    tagClass: "red",
    desc: "Frazali fe'llar — fe'l + predlog = yangi ma'no.",
    level: "Yuqori",
    content: [
      {
        type: "text",
        html: `<p><b>Phrasal verb</b> — fe'l va predlog/aralashmadan tashkil topgan ibora. Ma'no fe'ldan ajralib chiqadi.</p>`
      },
      {
        type: "example",
        en: "Please <u>look up</u> this word in the dictionary.",
        uz: "Iltimos, so'z lug'atda <u>qidirib</u> ko'ring.",
        note: "<b>look up</b> = qidirish"
      },
      {
        type: "example",
        en: "She <u>gave up</u> smoking last year.",
        uz: "U o'tgan yili chekishni <u>tashladi</u>.",
        note: "<b>give up</b> = voz kechish"
      },
      {
        type: "example",
        en: "I need to <u>turn off</u> the lights.",
        uz: "Menga chiroqlarni <u>o'chirish</u> kerak.",
        note: "<b>turn off</b> = o'chirish"
      },
      {
        type: "example",
        en: "We <u>ran into</u> an old friend at the park.",
        uz: "Biz parkda eski do'stimizga <u>duch keldik</u>.",
        note: "<b>run into</b> = tasodifan uchrash"
      },
      {
        type: "tip",
        text: "Frazali fe'llar: <b>take off</b> (ko'tarilish/olish), <b>put off</b> (kechiktirish), <b>get on</b> (minish/yaxshi munosabat), <b>set up</b> (tashkil etish), <b>find out</b> (topish/bilish). Idiomatic — literal tarjima qilmang!"
      },
      {
        type: "exercise",
        title: "Frazali fe'l ma'nosini tanlang",
        options: [
          { text: "\"Don't give up!\" nimani anglatadi?", answer: "Voz kechma!", choices: ["Voz kechma!", "Tashla!", "Boshla!"] },
          { text: "\"She looked up the word.\"", answer: "So'zni qidirdi", choices: ["So'zni qidirdi", "So'zga qaradi", "So'zni yozdi"] },
          { text: "\"Please turn off the TV.\"", answer: "TV ni o'chir", choices: ["TV ni o'chir", "TV ni yoq", "TV ni ko'chir"] },
          { text: "\"I ran into my teacher.\"", answer: "O'qituvchimga duch keldim", choices: ["O'qituvchimga duch keldim", "O'qituvchimdan yugurdim", "O'qituvchimni ko'rdim"] }
        ]
      }
    ]
  },
  {
    id: 13,
    title: "Relative Clauses (Nisbat gaplar)",
    icon: "🔗",
    tag: "Murakkab",
    tagClass: "red",
    desc: "Who, which, that, whose bilan gaplarni bog'lash.",
    level: "Yuqori",
    content: [
      {
        type: "text",
        html: `<p><b>Relative clause</b> — otga qo'shimcha ma'lumot beruvchi gap. Asosiy vositalar: <b>who, which, that, whose, where, when</b>.</p>`
      },
      {
        type: "example",
        en: "The man <u>who</u> lives next door is a doctor.",
        uz: "Yonimizda yashovchi odam shifokor.",
        note: "<b>who</b> — shaxslar uchun"
      },
      {
        type: "example",
        en: "The book <u>which</u> I bought is interesting.",
        uz: "Men sotib olgan kitob qiziq.",
        note: "<b>which</b> — narsalar uchun (qo'shimcha gap)"
      },
      {
        type: "example",
        en: "This is the best restaurant <u>that</u> I've ever been to.",
        uz: "Men borgan eng yaxshi restoran.",
        note: "<b>that</b> — shaxs va narsa (o'chirib bo'lmaydigan)"
      },
      {
        type: "example",
        en: "The girl <u>whose</u> mother is a teacher won the prize.",
        uz: "Onasi o'qituvchi qiz mukofotni yutdi.",
        note: "<b>whose</b> — egalik"
      },
      {
        type: "tip",
        text: "<b>who</b>=shaxs, <b>which</b>=narsa, <b>that</b>=hamma, <b>where</b>=joy, <b>when</b>=vaqt, <b>whose</b>=egalik. O'chirib bo'ladigan relative clause: The book (which) I read → o'chirish mumkin."
      },
      {
        type: "exercise",
        title: "To'g'ri relative pronoun ni tanlang",
        options: [
          { text: "The woman ___ lives upstairs is my aunt.", answer: "who", choices: ["which", "who", "that"] },
          { text: "This is the movie ___ I told you about.", answer: "that", choices: ["who", "whose", "that"] },
          { text: "The city ___ I was born is Tashkent.", answer: "where", choices: ["when", "where", "which"] },
          { text: "The cat ___ tail is long ran away.", answer: "whose", choices: ["which", "whose", "that"] }
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Wish / If only (Xohlash gaplari)",
    icon: "🌟",
    tag: "Murakkab",
    tagClass: "red",
    desc: "O'zimiz xohlagan narsa haqida gapirish.",
    level: "Yuqori",
    content: [
      {
        type: "text",
        html: `<p><b>Wish</b> va <b>If only</b> — hozir, o'tmish yoki kelajak haqida afsus/xohish bildirish.</p>`
      },
      {
        type: "example",
        en: "I <u>wish I had</u> more free time. (hozir)",
        uz: "Ko'proq bo'sh vaqtim bo'lsa edi. (hozir xohish)",
        note: "If + Past → xohish (hozir)"
      },
      {
        type: "example",
        en: "I <u>wish I had gone</u> to the party. (o'tmish)",
        uz: "Kecha ziyofatga borganimda edi. (o'tmishga afsus)",
        note: "If + Past Perfect → o'tmishga afsus"
      },
      {
        type: "example",
        en: "<u>If only</u> I <u>could speak</u> French!",
        uz: "Fransuzcha gapira olsam edi!",
        note: "<b>If only</b> — kuchliroq xohish"
      },
      {
        type: "tip",
        text: "Wish qoidalari: <b>Wish + Past Simple</b> (hozir xohish) = I wish I were rich. <b>Wish + Past Perfect</b> (o'tmishga afsus) = I wish I had studied. <b>Wish + would</b> (o'zgarmaslikni xohlash) = I wish you would stop."
      },
      {
        type: "exercise",
        title: "Wish qoidasini tanlang",
        options: [
          { text: "I wish I ___ taller.", answer: "were", choices: ["am", "were", "will be"] },
          { text: "She wishes she ___ harder last year.", answer: "had studied", choices: ["studied", "had studied", "studies"] },
          { text: "I wish it ___ raining.", answer: "would stop", choices: ["stops", "stopped", "would stop"] },
          { text: "If only I ___ the answer!", answer: "knew", choices: ["know", "knew", "had known"] }
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Connectors (Bog'lovchi so'zlar)",
    icon: "🧱",
    tag: "Murakkab",
    tagClass: "red",
    desc: "However, therefore, moreover — matnni bog'lovchi so'zlar.",
    level: "Yuqori",
    content: [
      {
        type: "text",
        html: `<p><b>Connectors</b> — gaplarni bog'lovchi so'zlar. Rasmiy yozishda va nutqda juda muhim.</p>`
      },
      {
        type: "example",
        en: "He was tired; <u>however</u>, he kept working.",
        uz: "U charchagan edi; <b>biroq</b>, ishlashda davom etdi.",
        note: "<b>however</b> = biroq, lekin (qarama-qarshilik)"
      },
      {
        type: "example",
        en: "It was raining; <u>therefore</u>, we stayed home.",
        uz: "Yomg'ir yog'ayotgan edi; <b>shuning uchun</b>, uyda qoldik.",
        note: "<b>therefore</b> = shuning uchun"
      },
      {
        type: "example",
        en: "She is smart; <u>moreover</u>, she is very kind.",
        uz: "U aqlli; <b>bundan tashqari</b>, juda mehribon.",
        note: "<b>moreover</b> = bundan tashqari"
      },
      {
        type: "example",
        en: "He didn't study; <u>consequently</u>, he failed the exam.",
        uz: "U o'qimadi; <b>natijada</b>, imtihondan o'tmadi.",
        note: "<b>consequently</b> = natijada"
      },
      {
        type: "tip",
        text: "Rasmiy bog'lovchilar: <b>however</b>=biroq, <b>therefore</b>=shuning uchun, <b>moreover</b>=bundan tashqari, <b>furthermore</b>=qo'shimcha, <b>nevertheless</b>=qarama-qarshi, <b>instead</b>=buning o'rniga."
      },
      {
        type: "exercise",
        title: "To'g'ri bog'lovchini tanlang",
        options: [
          { text: "The store was closed; ___, we couldn't buy anything.", answer: "therefore", choices: ["therefore", "however", "moreover"] },
          { text: "She was very busy; ___, she helped me.", answer: "nevertheless", choices: ["therefore", "moreover", "nevertheless"] },
          { text: "The hotel was expensive; ___, the service was great.", answer: "moreover", choices: ["however", "moreover", "therefore"] },
          { text: "I didn't bring an umbrella; ___, I got wet.", answer: "consequently", choices: ["moreover", "however", "consequently"] }
        ]
      }
    ]
  },
  {
    id: 16,
    title: "Mixed Tenses (Aralash zamonlar)",
    icon: "🎯",
    tag: "Murakkab",
    tagClass: "red",
    desc: "Bir gapda bir nechta zamon ishlatish.",
    level: "Yuqori",
    content: [
      {
        type: "text",
        html: `<p>Ko'pincha gap ichida turli zamonlar qo'llaniladi. Zamon tanlovini kontekstdan aniqlash kerak.</p>`
      },
      {
        type: "example",
        en: "She <u>has been living</u> in London since 2015.",
        uz: "U 2015-yildan beri Londonda yashab kelmoqda.",
        note: "Present Perfect Continuous — davomiy ish"
      },
      {
        type: "example",
        en: "I <u>was reading</u> when the phone <u>rang</u>.",
        uz: "Men kitob o'qiyotganda telefon jiringladi.",
        note: "Past Continuous + Past Simple — uzilish"
      },
      {
        type: "example",
        en: "By the time I arrived, they <u>had already left</u>.",
        uz: "Men yetib kelganimda, ular allaqachon ketishgan edi.",
        note: "Past Perfect — o'tmishdan oldin"
      },
      {
        type: "example",
        en: "I <u>will have finished</u> by 5 o'clock.",
        uz: "Men soat 5 ga qadar tugatgan bo'laman.",
        note: "Future Perfect — kelajakda tugallanish"
      },
      {
        type: "tip",
        text: "Muhim aralashma: <b>Present Perfect + since/for</b>, <b>Past Continuous + while/when</b>, <b>Past Perfect + by the time</b>, <b>Future Perfect + by/until</b>. Vaqt belgilovchi so'zlar muhim!"
      },
      {
        type: "exercise",
        title: "To'g'ri zamonni tanlang",
        options: [
          { text: "I ___ in London for 5 years (and I still live there).", answer: "have lived", choices: ["lived", "have lived", "am living"] },
          { text: "When I ___ (arrive), she ___ (cook) dinner.", answer: "arrived ... was cooking", choices: ["arrived ... cooked", "arrived ... was cooking", "was arriving ... cooked"] },
          { text: "By next month, I ___ (save) enough money.", answer: "will have saved", choices: ["will save", "will have saved", "have saved"] },
          { text: "She ___ (work) here since 2018.", answer: "has been working", choices: ["works", "has been working", "worked"] }
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
