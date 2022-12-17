const NAMEOFEXPORT = {
  // det namn som skattningen ska sparas under
  name: "GAD7",
  // den text som visas innnan man påbörjar skattningen
  startInfoText:
    "Avsikten med detta formulär är att ge en detaljerad bild av ditt nuvarande sinnestillstånd.",
  // vilka som har gjort testet och ska ha creed för det, sysns inna övningen börjar och i resultatet
  credits: " lalala",
  // Max poäng
  maxScore: 21,
  // instruktioner är alltid synliga längst upp
  instruktioner:
    "Under de senaste 14 dagarna, hur ofta har du besvärats av följande problem",
  // börjar skalan på 0 eller 1? 1=false 0=true
  startZero: true,

  questionArr: [
    {
      question: "Sinnesstämning: Här ber vi dig beskriva din sinnesstämning,",
      svarsalternativ: ["", "", ""],
    },
    {
      question: "",
      svarsalternativ: ["", "", ""],
    },
  ],
  subscale: false,
  scoring: [
    // ska fundera med inledningen: DEt verkar som att GLÖM INTE . och ett alternativ för "Frisk"
    { name: "milda ångestproblem.", score: 5 },
    { name: "medel ångestproblem.", score: 10 },
    { name: "allvarliga ångestproblem.", score: 15 },
  ],
};
