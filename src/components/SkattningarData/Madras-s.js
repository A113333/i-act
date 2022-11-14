const madras = {
  name: "MADRAS-S",
  startInfoText:
    "Avsikten med detta formulär är att ge en detaljerad bild av ditt nuvarande sinnestillstånd. Vi vill alltså att du ska försöka gradera hur du mått under de senaste tre dygnen. Formuläret innehåller en rad olika påståenden om hur man kan må i olika avseenden. Påståendena uttrycker olika grader av obehag, från frånvaro av obehag till maximalt uttalat obehag. Ringa in den siffra (0–6) som du tycker bäst stämmer in med hur du mått de senaste tre dagarna. Tänk inte alltför länge, utan försök arbeta snabbt.",
  instruktioner:
    "Välj det alternativ som bäst stämmer in med hur du mått de senaste tre dagarna. Tänk inte alltför länge, utan försök arbeta snabbt.",
  credits:
    "© Svanborg, P. & Åsberg, M. (1994). A new self-rating scale for depression and anxiety states based om the comprehensive psyckopathological rating scale. ACTA Psychiatrica Scandinavia, 89(1), 21–28",
  startZero: true,
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
    { name: "väsentligen obesvärad", score: 12 },
    { name: "mild depression", score: 19 },
    { name: "måttlig depression ", score: 34 },
    { name: "svår depression  ", score: 35 },
  ],
};

export default madras;
