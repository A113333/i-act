const Ovningar = {
  SORKK: {
    anwserObject: {
      // det key-value pair som är först är det som kommer visas i "resultat" summary
      situation: "",
      date: "",
      organism: "",
      response: "",
      k1: "",
      k2: "",
      id: "",
    },
    questions: [
      {
        name: "situation",
        title: "Situation",
        question: "Vad befann du dig?",
        desc: "Var befann du dig? Vad skulle du göra? Med vem? När?",
        exampel:
          "t ex. på jobbet, skulle vara med på ett möte med mitt team, måndag morgon.",
      },
      {
        name: "organism",
        title: "Tankar, känslor och kroppsupplevelser",
        question: "Vad känner och tänker du i situationen?",
        desc: "Vilka känslor hade du? Fanns det några andra starka kroppsensationer? Vad du tänkte just i stunden, fick du någon bild i huvudet? Vad var den starkaste tanken?",
        exampel:
          "Jag var nervös och orolig, kände hur hjärtat bultade, tänkte att om jag gör bort mig så kommer dom att skrattar åt mig.",
      },
      {
        name: "response",
        title: "Respons",
        question: "Hur reagerar du i situationen?",
        desc: "Vad gjorde du där och då? Hur hanterade du situationen?",
        exampel:
          "Jag valde att säga att jag inte hade något att tillägga till mötet, fast jag egentligen hade något viktigt jag ville säga.",
      },
      {
        name: "k1",
        title: "Kortsiktig konsekvens",
        question: "Vad blir det omedelbara resultatet av ditt agerande?",
        desc: "Hur påverkar ditt sätt att hantera situationen dig där och då? Hur förändras dina känslor, tankar och kroppsreaktioner av ditt sätt att reagera?",
        exampel:
          "Det kändes skönt att inte behöva prata, kände mig lättad men samtidigt lite besviken på mig själv.",
      },
      {
        name: "k2",
        title: "Långsiktig konsekvens",
        question: "Hur påverkar din reaktion dig på lång sikt?",
        desc: "Om du fortsätter hantera liknande siutationer på samma sätt, hur skulle det påverka ditt liv över längre tid?",
        exampel:
          "Jag får aldrig veta om dom faktiskt skulle skratta åt min åsikter, det blir ännu svårare att säga något nästa möte, jag sviker mig själv vilket gör mig nedstämd och besviken.",
      },
    ],
  },

  STORK: {
    anwserObject: {
      // det key-value pair som är först är det som kommer visas i "resultat" summary
      situation: "",
      organism: "",
      response: "",
      date: "",
      id: "",
    },
    questions: [
      {
        name: "situation",
        title: "Situation",
        question: "Vad befann du dig?",
      },
      {
        name: "organism",
        title: "Tankar, känslor och kroppsupplevelser",
        question: "Vad känner och tänker du i situationen?",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        name: "response",
        title: "Respons",
        question: "Hur reagerar du i situationen?",
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.",
      },
    ],
  },
};

export default Ovningar;
