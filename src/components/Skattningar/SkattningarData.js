export const GAD7 = {
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
    { name: "du inte harnågra ångestproblem.", score: 4 },
    { name: "du har milda ångestproblem.", score: 5 },
    { name: "du har medel ångestproblem.", score: 10 },
    { name: "du har allvarliga ångestproblem.", score: 15 },
  ],
};

export const LSASSR = {
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
    { name: "du inte har social fobi.", score: 29 },
    { name: "du troligen har social fobi.", score: 30 },
    { name: "du troligen har generaliserad social fobi.", score: 60 },
  ],
};

export const MADRAS = {
  name: "MADRAS-S",
  startInfoText:
    "Avsikten med detta formulär är att ge en detaljerad bild av ditt nuvarande sinnestillstånd. Vi vill alltså att du ska försöka gradera hur du mått under de senaste tre dygnen. Formuläret innehåller en rad olika påståenden om hur man kan må i olika avseenden. Påståendena uttrycker olika grader av obehag, från frånvaro av obehag till maximalt uttalat obehag. Ringa in den siffra (0–6) som du tycker bäst stämmer in med hur du mått de senaste tre dagarna. Tänk inte alltför länge, utan försök arbeta snabbt.",
  instruktioner:
    "Välj det alternativ som bäst stämmer in med hur du mått de senaste tre dagarna. Tänk inte alltför länge, utan försök arbeta snabbt.",
  credits:
    "© Svanborg, P. & Åsberg, M. (1994). A new self-rating scale for depression and anxiety states based om the comprehensive psyckopathological rating scale. ACTA Psychiatrica Scandinavia, 89(1), 21–28",
  startZero: true,
  maxScore: 54,
  questionArr: [
    {
      question:
        "Sinnesstämning: Här ber vi dig beskriva din sinnesstämning, om du känner dig ledsen, tungsint eller dyster till mods. Tänk efter hur du har känt dig de senaste tre dagarna, om du har skiftat i humöret eller om det varit i stort sett detsamma hela tiden, och försök särskilt komma ihåg om du har känt dig lättare till sinnes om det hänt något positivt.",
      svarsalternativ: [
        "0.   Jag kan känna mig glad eller ledsen, alltefter omständigheterna.",
        "1.",
        "2.  Jag känner mig nedstämd för det mesta, men ibland kan det kännas lättare.",
        "3.",
        "4.  Jag känner mig genomgående nedstämd och dyster. Jag kan inte glädja mig åt sådant som vanligen skulle göra mig glad.",
        "5.",
        "6. Jag är totalt nedstämd och så olycklig att jag inte kan tänka mig värre.",
      ],
    },
    {
      question:
        "Oroskänslor: Här ber vi dig markera i vilken utsträckning du haft känslor av inre spänning, olust och ångest eller odefinierad rädsla under de senaste tre dagarna. Tänk särskilt på hur intensiva känslorna varit, och om de kommit och gått eller funnits nästan hela tiden.",
      svarsalternativ: [
        "0. Jag känner mig mestadels lugn.",
        "1.",
        "2. Ibland har jag obehagliga känslor av inre oro.",
        "3.",
        "4. Jag har ofta en känsla av inre oro, som ibland kan bli mycket stark, och som jag måste anstränga mig för att bemästra.",
        "5.",
        "6. Jag har fruktansvärda, långvariga eller outhärdliga ångestkänslor.",
      ],
    },

    {
      question:
        "Sömn: Här ber vi dig beskriva hur du sover. Tänk efter hur länge du sovit och hur god sömnen varit under de senaste tre nätterna. Bedömningen ska avse hur du faktiskt sovit, oavsett om du tagit sömnmedel eller ej. Om du sover mer än vanligt, sätt din markering vid 0.",
      svarsalternativ: [
        "0. Jag sover lugnt och bra och tillräckligt länge för mina behov. Jag har inga särskilda svårigheter att somna.",
        "1.",
        "2. Jag har vissa sömnsvårigheter. Ibland har jag svårt att somna eller sover ytligare eller oroligare än vanligt.",
        "3.",
        "4. Jag sover minst två timmar mindre per natt än normalt. Jag vaknar ofta under natten, även om jag inte blir störd.",
        "5.",
        "6. Jag sover mycket dåligt, inte mer än 2–3 timmar per natt.",
      ],
    },

    {
      question:
        "Matlust: Här ber vi dig ta ställning till hur din aptit är, och tänka efter om den på något sätt skilt sig från vad som är normalt för dig. Om du skulle ha bättre aptit än normalt, markera då det på 0.",
      svarsalternativ: [
        "0. Min aptit är som den brukar vara.",
        "1.",
        "2. Min aptit är sämre än vanligt.",
        "3.",
        "4. Min aptit har nästan helt försvunnit. Maten smakar inte och jag måste tvinga mig att äta.",
        "5.",
        "6. Jag vill inte ha någon mat. Om jag ska få någonting i mig, måste jag övertalas att äta.",
      ],
    },

    {
      question:
        "Koncentrationsförmåga: Här ber vi dig ta ställning till din förmåga att hålla tankarna samlade och koncentrera dig på olika aktiviteter. Tänk igenom hur du fungerar vid olika sysslor som kräver olika grad av koncentrationsförmåga, t.ex. läsning av komplicerad text, lätt tidningstext och tv-tittande.",
      svarsalternativ: [
        "0. Jag har inga koncentrationssvårigheter.",
        "1.",
        "2. Jag har tillfälligt svårt att hålla tankarna samlade på sådant som normalt skulle fånga min uppmärksamhet (t.ex. läsning eller tv-tittande).",
        "3.",
        "4. Jag har påtagligt svårt att koncentrera mig på sådant som normalt inte kräver någon ansträngning från min sida (t.ex. läsning eller samtal med andra människor).",
        "5.",
        "6. Jag kan överhuvudtaget inte koncentrera mig på någonting.",
      ],
    },

    {
      question:
        "Initiativförmåga: Här ber vi dig försöka värdera din handlingskraft. Frågan gäller om du har lätt eller svårt för att komma igång med sådant som du tycker du bör göra, och i vilken utsträckning du måste övervinna ett inre motstånd när du ska ta itu med något.",
      svarsalternativ: [
        "0. Jag har inga svårigheter med att ta itu med nya uppgifter.",
        "1.",
        "2. När jag ska ta itu med något, tar det emot på ett sätt som inte är normalt för mig.",
        "3.",
        "4. Det krävs en stor ansträngning för mig att ens komma igång med enkla uppgifter som jag vanligtvis utför mer eller mindre rutinmässigt.",
        "5.",
        "6. Jag kan inte förmå mig att ta itu med de enklaste vardagsbestyr.",
      ],
    },
    {
      question:
        "Känslomässigt engageman: Här ber vi dig ta ställning till hur du upplever ditt intresse för omvärlden och för andra människor, och för sådana aktiviteter som brukar bereda dig nöje och glädje.",
      svarsalternativ: [
        "0. Jag är intresserad av omvärlden och engagerar mig i den, och det bereder mig både nöje och glädje.",
        "1.",
        "2. Jag känner mindre starkt för sådant som brukar engagera mig. Jag har svårare än vanligt att bli glad eller svårare att bli arg när det är befogat.",
        "3.",
        "4. Jag kan inte känna något intresse för omvärlden, inte ens för vänner och bekanta.",
        "5.",
        "6. Jag har slutat uppleva några känslor. Jag känner mig smärtsamt likgiltig även för mina närmaste.",
      ],
    },

    {
      question:
        "Pessimism: Frågan gäller hur du ser på din egen framtid och hur du uppfattar ditt eget värde. Tänk efter i vilken utsträckning du gör dig självförebråelser, om du plågas av skuldkänslor, och om du oroat dig oftare än vanligt för t.ex. din ekonomi eller din hälsa.",
      svarsalternativ: [
        "0. Jag ser på framtiden med tillförsikt. Jag är på det hela taget ganska nöjd med mig själv.",
        "1.",
        "2. Ibland klandrar jag mig själv och tycker att jag är mindre värd än andra.",
        "3.",
        "4. Jag grubblar ofta över mina misslyckanden och känner mig mindervärdig eller dålig, även om andra tycker annorlunda.",
        "5.",
        "6. Jag ser allting i svart och kan inte se någon ljusning. Det känns som om jag var en alltigenom dålig människa, och som om jag aldrig skulle kunna få någon förlåtelse för det hemska jag gjort.",
      ],
    },

    {
      question:
        "Livslust: Frågan gäller din livslust, och om du känt livsleda. Har du tankar på självmord, och i så fall, i vilken utsträckning upplever du detta som en verklig utväg?",
      svarsalternativ: [
        "0. Jag har normal aptit på livet.",
        "1.",
        "2.Livet känns inte särskilt meningsfullt, men jag önskar ändå inte att jag vore död.",
        "3.",
        "4. Jag tycker ofta det vore bättre att vara död, och trots att jag egentligen inte önskar det, kan självmord ibland kännas som en möjlig utväg.",
        "5.",
        "6. Jag är egentligen övertygad om att min enda utväg är att dö, och jag tänker mycket på hur jag bäst ska gå tillväga för att ta mitt eget liv.",
      ],
    },
  ],
  scoring: [
    { name: "du är väsentligen obesvärad.", score: 12 },
    { name: "du kan ha en mild depression.", score: 19 },
    { name: "du kan ha en måttlig depression.", score: 34 },
    { name: "du kan ha en svår depression.", score: 35 },
  ],
};

export const PHQ9 = {
  // det namn som skattningen ska sparas under
  name: "PHQ-9",
  // den text som visas innnan man påbörjar skattningen
  startInfoText:
    "Genomför denna skattning för att undersöka din depressionsnivå",
  // vilka som har gjort testet och ska ha creed för det, sysns inna övningen börjar och i resultatet
  credits:
    " Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke och kollegor, med ett utvecklingsanslag från Pfizer Inc.",
  // Max poäng
  maxScore: 27,
  // instruktioner är alltid synliga längst upp
  instruktioner:
    "Under de senaste 2 veckorna, hur ofta har du besvärats av följande problem?",
  // börjar skalan på 0 eller 1? 1=false 0=true
  startZero: true,
  // länk till graf för resultat

  questionArr: [
    {
      question: "Lite intresse eller glädje av att göra saker",
      svarsalternativ: [
        "Inte alls",
        "Flera dagar",
        "Mer än hälften av dagarna",
        "Nästan varje dag",
      ],
    },
    {
      question:
        "Känt dig nedstämd, deprimerad eller upplevt känsla av hopplöshet",
      svarsalternativ: [
        "Inte alls",
        "Flera dagar",
        "Mer än hälften av dagarna",
        "Nästan varje dag",
      ],
    },
    {
      question:
        "Svårigheter att somna eller få en sammanhängande sömn, eller sovit för mycket",
      svarsalternativ: [
        "Inte alls",
        "Flera dagar",
        "Mer än hälften av dagarna",
        "Nästan varje dag",
      ],
    },

    {
      question: "Känt dig trött eller haft för lite energi",
      svarsalternativ: [
        "Inte alls",
        "Flera dagar",
        "Mer än hälften av dagarna",
        "Nästan varje dag",
      ],
    },

    {
      question: "Dålig aptit eller ätit för mycket",
      svarsalternativ: [
        "Inte alls",
        "Flera dagar",
        "Mer än hälften av dagarna",
        "Nästan varje dag",
      ],
    },
    {
      question:
        "Tycker illa om dig själv – eller att du känt dig misslyckad eller att du svikit dig själv eller din familj ",
      svarsalternativ: [
        "Inte alls",
        "Flera dagar",
        "Mer än hälften av dagarna",
        "Nästan varje dag",
      ],
    },
    {
      question:
        "Svårigheter att koncentrera dig på saker, till exempel att läsa tidningen eller att titta på TV",
      svarsalternativ: [
        "Inte alls",
        "Flera dagar",
        "Mer än hälften av dagarna",
        "Nästan varje dag",
      ],
    },
    {
      question:
        "Att du rört dig eller talat så långsamt att andra människor märkt det? Eller motsatsen – att du varit så nervös eller rastlös att du rört dig mer än vanligt",
      svarsalternativ: [
        "Inte alls",
        "Flera dagar",
        "Mer än hälften av dagarna",
        "Nästan varje dag",
      ],
    },
    {
      question:
        "Tankar att det skulle vara bättre om du var död eller att du skulle skada dig på något sätt ",
      svarsalternativ: [
        "Inte alls",
        "Flera dagar",
        "Mer än hälften av dagarna",
        "Nästan varje dag",
      ],
    },
    {
      question:
        "Om du svarat att du haft något av dessa problem, hur svårt har dessa problem gjort det för dig att utföra ditt arbete, ta hand om saker hemma, eller att komma överens med andra människor? ",
      svarsalternativ: [
        "Inte alls svårt",
        "Lite svårt",
        "Mycket svårt",
        "Extremt svårt",
      ],
      noScore: true,
    },
  ],
  subscale: false,
  scoring: [
    { name: "du inte är deprimerad.", score: 9 },
    { name: "du har vissa tecken på depression.", score: 14 },
    { name: "du har en deprimerad.", score: 27 },
  ],
};
