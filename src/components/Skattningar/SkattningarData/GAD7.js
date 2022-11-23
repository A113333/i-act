const GAD7 = {
  name: "GAD7",

  instruktioner:
    "Under de senaste 14 dagarna, hur ofta har du besvärats av följande problem",
  maxScore: 21,
  questionArr: [
    {
      question: "Känt dig nervös, ängslig eller väldigt stressad",
      svarsalternativ: [
        "Inte alls",
        "Flera dagar",
        "Mer än hälften av dagarna",
        "Nästan varje dag",
      ],
    },
    {
      question: "Inte kunnat sluta oroa dig eller kontrollera din oro",
      svarsalternativ: [
        "Inte alls",
        "Flera dagar",
        "Mer än hälften av dagarna",
        "Nästan varje dag",
      ],
    },
    {
      question: "Oroat dig för mycket för olika saker",
      svarsalternativ: [
        "Inte alls",
        "Flera dagar",
        "Mer än hälften av dagarna",
        "Nästan varje dag",
      ],
    },

    {
      question: "Haft svårt att slappna av",
      svarsalternativ: [
        "Inte alls",
        "Flera dagar",
        "Mer än hälften av dagarna",
        "Nästan varje dag",
      ],
    },

    {
      question: "Varit så rastlös att du har haft svårt att sitta still",
      svarsalternativ: [
        "Inte alls",
        "Flera dagar",
        "Mer än hälften av dagarna",
        "Nästan varje dag",
      ],
    },

    {
      question: "Blivit lätt irriterad eller retlig",
      svarsalternativ: [
        "Inte alls",
        "Flera dagar",
        "Mer än hälften av dagarna",
        "Nästan varje dag",
      ],
    },

    {
      question: "Känt dig rädd för att något hemskt skulle hända",
      svarsalternativ: [
        "Inte alls",
        "Flera dagar",
        "Mer än hälften av dagarna",
        "Nästan varje dag",
      ],
    },
  ],
  startZero: true,
  infoText:
    "Under de senaste 14 dagarna, hur ofta har du besvärats av följande problem",
  scoring: [
    { name: "milda ångestproblem.", score: 5 },
    { name: "medel ångestproblem.", score: 10 },
    { name: "allvarliga ångestproblem.", score: 15 },
  ],
};

export default GAD7;
