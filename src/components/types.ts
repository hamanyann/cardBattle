interface CardData {
    id: number;
    name: string;
    formal: string;
    img: string;
    category: string;
    description: string;
    source: string;
    status: string;
  }

  export type { CardData };

  interface QuizData {
    id: number;
    category:string;
    name: string;
    question: string;
    answer: string;
  }

  export type { QuizData }