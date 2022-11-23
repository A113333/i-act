const LSASSR = {
  // det namn som skattningen ska sparas under
  name: "LSAS-SR",
  // den text som visas innnan man påbörjar skattningen
  startInfoText:
    "Fyll i följande formulär med det mest passande svarsalternativet som listas nedan. Basera svaret på hur du har känt dig den senaste veckan (tänk dig in i hur du skulle reagera om du inte har varit med om situationen under veckan). Om du har fyllt i formuläret tidigare, försök vara konsekvent i hur du bedömer varje situation. Var vänlig och svara på alla frågor. ",
  // vilka som har gjort testet och ska ha creed för det, sysns inna övningen börjar och i resultatet
  credits: " lalala",
  // Max poäng
  maxScore: 144,
  // instruktioner är alltid synliga längst upp
  instruktioner:
    "Basera svaren på hur du har känt dig den senaste veckan (tänk dig in i hur du skulle reagera om du inte har varit med om situationen under veckan).",
  // börjar skalan på 0 eller 1? 1=false 0=true
  startZero: true,
  // länk till graf för resultat
  linkToResults: "/lalal",
  questionArr: [
    {
      question: "Tala i telefon på allmän plats",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question: "Tala i telefon på allmän plats",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question: "Delta i små grupper - ha en diskussion med andra",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question: "Delta i små grupper - ha en diskussion med andra",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question:
        "Äta på offentliga platser – darrar du eller känner dig obehaglig",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question:
        "Äta på offentliga platser – darrar du eller känner dig obehaglig",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question: "Dricka tillsammans med andra på offentliga platser",
      svarsalternativ: [
        "Undvikander aldrig",
        "Undvikander ibland ",
        "Undvikander ofta",
        "Undvikander vanligtvis",
      ],
    },
    {
      question: "Dricka tillsammans med andra på offentliga platser",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question: "Tala med människor i maktposition – t.ex. en chef, lärare",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question: "Tala med människor i maktposition – t.ex. en chef, lärare",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question: "Uppträda eller tala inför publik – gäller en större publik",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question: "Uppträda eller tala inför publik – gäller en större publik",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question: "Gå på fest – en vanlig fest där du känner några men inte alla",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question: "Gå på fest – en vanlig fest där du känner några men inte alla",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question: "Arbeta när någon ser på – alla sorts arbeten",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question: "Arbeta när någon ser på – alla sorts arbeten",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question: "Skriva när någon ser på – t.ex. signera en check på en bank",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question: "Skriva när någon ser på – t.ex. signera en check på en bank",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question: "Ringa till någon du inte känner särskilt väl",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question: "Ringa till någon du inte känner särskilt väl",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question: "Tala med personer du inte känner särskilt väl",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question: "Tala med personer du inte känner särskilt väl",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question: "Träffa främmande människor",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question: "Träffa främmande människor",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question:
        "Urinera på en offentlig toalett – där andra personer kan vara närvarande",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question:
        "Urinera på en offentlig toalett – där andra personer kan vara närvarande",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question:
        "Komma in i ett rum där andra redan sitter – en mindre grupp där ingen behöver byta plats",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question:
        "Komma in i ett rum där andra redan sitter – en mindre grupp där ingen behöver byta plats",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question:
        "Vara i centrum för uppmärksamheten - t.ex. berätta något inför andra",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question:
        "Vara i centrum för uppmärksamheten - t.ex. berätta något inför andra",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question:
        "Ta ordet vid ett möte – sittande från din plats vid ett mindre möte eller stående vid ett större möte",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question:
        "Ta ordet vid ett möte – sittande från din plats vid ett mindre möte eller stående vid ett större möte",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question: "Göra ett skriftligt prov",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question: "Göra ett skriftligt prov",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question:
        "Uttrycka en avvikande mening eller ogillande till personer du inte känner särskilt väl",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question:
        "Uttrycka en avvikande mening eller ogillande till personer du inte känner särskilt väl",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question: "Se personer du inte känner väl i ögonen – vanlig ögonkontakt",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question: "Se personer du inte känner väl i ögonen – vanlig ögonkontakt",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question:
        "Avge en rapport till en grupp – en muntlig rapport till en mindre grupp",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question:
        "Avge en rapport till en grupp – en muntlig rapport till en mindre grupp",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question: "Göra försök till sexuell kontakt",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question: "Göra försök till sexuell kontakt",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question: "Lämna tillbaka varor till en affär",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question: "Lämna tillbaka varor till en affär",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question: "Ordna en fest",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question: "Ordna en fest",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
    {
      question:
        "Motstå en påstridig försäljare – undvikande betyder att lyssna på försäljaren alltför länge",
      svarsalternativ: [
        "Ingen rädsla eller ångest.",
        "Mild rädsla eller ångest.",
        "Måttlig rädsla eller ångest.",
        "Stark rädsla eller ångest.",
      ],
    },
    {
      question:
        "Motstå en påstridig försäljare – undvikande betyder att lyssna på försäljaren alltför länge",
      svarsalternativ: [
        "Undviker aldrig (0%)",
        "Undviker ibland (1–33% av tiden)",
        "Undviker ofta (33–67% av tiden)",
        "Undviker vanligtvis (67–100% av tiden)",
      ],
    },
  ],
  subscale: [
    {
      name: "Social interaction",
      items: [5, 7, 10, 11, 12, 15, 18, 19, 22, 23, 24],
    },
    {
      name: "Social performance",
      items: [1, 2, 3, 4, 6, 8, 9, 13, 14, 16, 17, 20, 21],
    },
  ],
  scoring: [
    { name: "troligen har social fobi", score: 30 },
    { name: "troligen har generaliserad social fobi", score: 60 },
  ],
};

export default LSASSR;
