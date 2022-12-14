const values = [
  {
    id: 1,
    name: "Accepterande",
    desc: "Vara öppen, tillåtande och tillfreds med mig själv, andra, livet och mina känslor.",
    pts: 0,
    cat: "Att vara en god medmänniska",
  },
  {
    id: 2,
    name: "Äventyrlig",
    desc: "Sträva efter och skapa nya, spännande erfarenheter.",
    pts: 0,
    cat: "Att leva ett spännande liv",
  },
  {
    id: 3,
    name: "Självsäker",
    desc: "Lugnt, rättvist och respektfullt stå upp för mina rättigheter och våga be om det jag vill ha.",
    pts: 0,
    cat: "Att vara trygg med vem jag är",
  },
  {
    id: 4,
    name: "Autentisk",
    desc: "Vara genuin, äkta och sann mot mig själv.",
    pts: 0,
    cat: "Att vara sann med vem jag är",
  },
  {
    id: 5,
    name: "Omtänksam",
    desc: "Aktivt och medvetet ta hand om mig själv, andra och miljön.",
    pts: 0,
    cat: "Att vara en god medmänniska",
  },
  {
    id: 6,
    name: "Medkännande och självmedkännande ",
    desc: "Vara vänlig mot mig själv och andra när livet är svårt.",
    pts: 0,
  },
  {
    id: 7,
    name: "Samarbetsvillig",
    desc: "Vara villig att assistera, hjälpa och arbeta med andra.",
    pts: 0,
  },
  {
    id: 8,
    name: "Modig",
    desc: "Våga stå kvar när jag möter fara, risk eller hot.",
    pts: 0,
  },
  {
    id: 9,
    name: "Kreativ",
    desc: "Vara fantasifull och uppfinningsrik.",
    pts: 0,
  },
  {
    id: 10,
    name: "Nyfiken",
    desc: "Ha en öppen, villig och intresserad inställning när det handlar om att utforska och upptäcka.",
    pts: 0,
  },
  {
    id: 11,
    name: "Uppmuntrande",
    desc: "Stödja, inspirera och belöna beteenden som jag ser som positiva.",
    pts: 0,
  },
  {
    id: 12,
    name: "Uttrycksfull",
    desc: "Förmedla mina tankar och känslor genom det jag säger och gör.",
    pts: 0,
  },
  {
    id: 13,
    name: "Fokuserad",
    desc: "Fokusera på och engagera mig i det jag gör.",
    pts: 0,
  },
  {
    id: 14,
    name: "Rättvis",
    desc: "Agera rätt och rättvist mot mig själv och andra.",
    pts: 0,
  },
  {
    id: 15,
    name: "Flexibel",
    desc: "Vara villig till och ha förmågan att anpassa mig till föränderliga omständigheter.",
    pts: 0,
  },
  {
    id: 16,
    name: "Vänlig",
    desc: "Vara varm, öppen, omsorgsfull och kärleksfull mot andra.",
    pts: 0,
  },
  {
    id: 17,
    name: "Förlåtande",
    desc: "Kunna släppa agg och bitterhet mot andra och mig själv.",
    pts: 0,
  },
  {
    id: 18,
    name: "Tacksam",
    desc: "Kunna uppskatta och se det jag redan har.",
    pts: 0,
  },
  {
    id: 19,
    name: "Hjälpsam",
    desc: "Ge till, hjälpa och assistera andra människor.",
    pts: 0,
  },
  {
    id: 20,
    name: "Ärlig",
    desc: "Vara ärlig, sanningsenlig och uppriktig mot mig själv och andra.",
    pts: 0,
  },
  {
    id: 21,
    name: "Självständig",
    desc: "Själv välja vad jag gör och hur jag lever mitt liv.",
    pts: 0,
  },
  {
    id: 22,
    name: "Arbetsam",
    desc: "Arbeta hårt och vara flitig.",
    pts: 0,
  },
  {
    id: 23,
    name: "Snäll",
    desc: "Visa hänsyn, vara hjälpsam och bry sig om mig själv och andra.",
    pts: 0,
  },
  {
    id: 24,
    name: "Kärleksfull",
    desc: "Vara kärleksfull och tillgiven, visa att jag verkligen bry mig om mig själv och andra.",
    pts: 0,
  },
  {
    id: 25,
    name: "Närvarande",
    desc: "Vara fullt närvarande och engagerad i vad jag än gör.",
    pts: 0,
  },
  {
    id: 26,
    name: "Öppen",
    desc: "Våga visa vem jag är, vad jag tänker och känner.",
    pts: 0,
  },
  {
    id: 27,
    name: "Välordnad",
    desc: "Vara ordentlig och organiserad.",
    pts: 0,
  },
  {
    id: 28,
    name: "Ihärdig",
    desc: "Vara villig att fortsätta även när problem eller svårigheter uppstår.",
    pts: 0,
  },
  {
    id: 29,
    name: "Lekfull",
    desc: "Ha roligt, leva med ett sinne för humor och kunna vara lättsam.",
    pts: 0,
  },
  {
    id: 30,
    name: "Skyddande",
    desc: "Se till att jag själv och andra är säkra och trygga.",
    pts: 0,
  },
  {
    id: 31,
    name: "Respektfull",
    desc: "Behandla mig själv och andra med omsorg och hänsyn.",
    pts: 0,
  },
  {
    id: 32,
    name: "Ansvarsfull",
    desc: "Vara trovärdig, pålitlig och ta ansvar för mina handlingar.",
    pts: 0,
  },
  {
    id: 33,
    name: "Skicklig",
    desc: "Göra saker på ett bra sätt, använda min kunskap, erfarenhet och träning optimalt.",
    pts: 0,
  },
  {
    id: 34,
    name: "Stödjande",
    desc: "Vara hjälpsam, uppmuntrande och tillgänglig för mig själv och andra.",
    pts: 0,
  },
  {
    id: 35,
    name: "Pålitlig",
    desc: "Vara lojal, ärlig, trogen, uppriktig och ansvarsfull.",
    pts: 0,
  },
  {
    id: 36,
    name: "Förtroendefull",
    desc: "Tro på ärlighet, uppriktighet och förmågan hos andra.",
    pts: 0,
  },
];

export default values;
