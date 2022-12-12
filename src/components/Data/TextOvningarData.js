const Ovningar = {
  SORKK: {
    anwserObject: {
      // det key-value pair som är först är det som kommer visas i "resultat" summary
      situation: "",
      date: new Date().toLocaleDateString(),
      organism: "",
      response: "",
      k1: "",
      k2: "",
      id: crypto.randomUUID(),
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
        type: "feelings",
      },
      {
        name: "response",
        title: "Respons",
        question: "Hur reagerar du i situationen?",
        desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.",
      },
      {
        name: "k1",
        title: "Kortsiktig konsekvens",
        question: "Vad blir det omedelbara resultatet av ditt agerande?",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        name: "k2",
        title: "Långsiktig konsekvens",
        question: "Hur påverkar din reaktion dig på lång sikt?",
        desc: "Hur påverkar ditt agerande dig på långsikt?",
      },
    ],
  },

  STORK: {
    anwserObject: {
      // det key-value pair som är först är det som kommer visas i "resultat" summary
      situation: "",
      organism: "",
      response: "",
      date: new Date().toLocaleDateString(),
      id: crypto.randomUUID(),
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
