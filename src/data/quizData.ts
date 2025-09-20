export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    points: {
      science: number;
      commerce: number;
      arts: number;
      vocational: number;
    };
  }[];
}

export interface StreamResult {
  stream: string;
  score: number;
  percentage: number;
  description: string;
  careers: string[];
  courses: string[];
  color: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What do you enjoy most during your free time?",
    options: [
      {
        text: "Solving puzzles and math problems",
        points: { science: 5, commerce: 2, arts: 1, vocational: 2 }
      },
      {
        text: "Reading books and writing stories",
        points: { science: 1, commerce: 2, arts: 5, vocational: 1 }
      },
      {
        text: "Managing pocket money and planning expenses",
        points: { science: 1, commerce: 5, arts: 2, vocational: 2 }
      },
      {
        text: "Building or fixing things with hands",
        points: { science: 3, commerce: 1, arts: 1, vocational: 5 }
      }
    ]
  },
  {
    id: 2,
    question: "Which subject interests you the most?",
    options: [
      {
        text: "Physics and Chemistry",
        points: { science: 5, commerce: 1, arts: 1, vocational: 2 }
      },
      {
        text: "History and Political Science",
        points: { science: 1, commerce: 2, arts: 5, vocational: 1 }
      },
      {
        text: "Mathematics and Economics",
        points: { science: 3, commerce: 5, arts: 1, vocational: 1 }
      },
      {
        text: "Computer Science and Technology",
        points: { science: 4, commerce: 2, arts: 1, vocational: 5 }
      }
    ]
  },
  {
    id: 3,
    question: "What type of career appeals to you most?",
    options: [
      {
        text: "Doctor, Engineer, Research Scientist",
        points: { science: 5, commerce: 1, arts: 1, vocational: 2 }
      },
      {
        text: "Teacher, Journalist, Civil Services",
        points: { science: 2, commerce: 2, arts: 5, vocational: 1 }
      },
      {
        text: "Banker, Chartered Accountant, Business Owner",
        points: { science: 1, commerce: 5, arts: 2, vocational: 2 }
      },
      {
        text: "Software Developer, Technician, Designer",
        points: { science: 3, commerce: 2, arts: 2, vocational: 5 }
      }
    ]
  },
  {
    id: 4,
    question: "How do you prefer to solve problems?",
    options: [
      {
        text: "Using scientific methods and experiments",
        points: { science: 5, commerce: 1, arts: 2, vocational: 2 }
      },
      {
        text: "Through research and analysis",
        points: { science: 2, commerce: 3, arts: 5, vocational: 1 }
      },
      {
        text: "Using calculations and logical reasoning",
        points: { science: 3, commerce: 5, arts: 1, vocational: 2 }
      },
      {
        text: "Through practical hands-on approach",
        points: { science: 2, commerce: 1, arts: 1, vocational: 5 }
      }
    ]
  },
  {
    id: 5,
    question: "What motivates you most in your studies?",
    options: [
      {
        text: "Understanding how things work in nature",
        points: { science: 5, commerce: 1, arts: 2, vocational: 2 }
      },
      {
        text: "Learning about people and society",
        points: { science: 1, commerce: 2, arts: 5, vocational: 1 }
      },
      {
        text: "Understanding money and business",
        points: { science: 1, commerce: 5, arts: 2, vocational: 2 }
      },
      {
        text: "Creating and building useful things",
        points: { science: 2, commerce: 2, arts: 2, vocational: 5 }
      }
    ]
  },
  {
    id: 6,
    question: "Which activity would you choose for a school project?",
    options: [
      {
        text: "Science experiment or model making",
        points: { science: 5, commerce: 1, arts: 1, vocational: 3 }
      },
      {
        text: "Essay writing or debate preparation",
        points: { science: 1, commerce: 2, arts: 5, vocational: 1 }
      },
      {
        text: "Market survey and business plan",
        points: { science: 1, commerce: 5, arts: 2, vocational: 2 }
      },
      {
        text: "App development or technical project",
        points: { science: 3, commerce: 2, arts: 1, vocational: 5 }
      }
    ]
  },
  {
    id: 7,
    question: "What type of work environment do you prefer?",
    options: [
      {
        text: "Laboratory or research facility",
        points: { science: 5, commerce: 1, arts: 2, vocational: 2 }
      },
      {
        text: "Library, office, or educational institution",
        points: { science: 2, commerce: 3, arts: 5, vocational: 1 }
      },
      {
        text: "Corporate office or financial institution",
        points: { science: 1, commerce: 5, arts: 2, vocational: 2 }
      },
      {
        text: "Workshop, tech company, or field work",
        points: { science: 2, commerce: 1, arts: 1, vocational: 5 }
      }
    ]
  },
  {
    id: 8,
    question: "What is your approach to learning new concepts?",
    options: [
      {
        text: "Through experiments and practical observation",
        points: { science: 5, commerce: 1, arts: 2, vocational: 3 }
      },
      {
        text: "Reading, discussing, and critical thinking",
        points: { science: 2, commerce: 2, arts: 5, vocational: 1 }
      },
      {
        text: "Analyzing data and finding patterns",
        points: { science: 3, commerce: 5, arts: 1, vocational: 2 }
      },
      {
        text: "Learning by doing and building",
        points: { science: 2, commerce: 1, arts: 1, vocational: 5 }
      }
    ]
  }
];

export const streamResults: Omit<StreamResult, 'score' | 'percentage'>[] = [
  {
    stream: "Science",
    description: "Perfect for curious minds who love to explore how the world works",
    careers: ["Doctor", "Engineer", "Research Scientist", "Pharmacist", "Biotechnologist"],
    courses: ["B.Sc", "B.Tech", "MBBS", "B.Pharmacy", "B.Sc Nursing"],
    color: "primary"
  },
  {
    stream: "Commerce",
    description: "Ideal for those interested in business, finance, and economic systems",
    careers: ["Chartered Accountant", "Banker", "Business Analyst", "Financial Advisor", "Company Secretary"],
    courses: ["B.Com", "BBA", "B.Com (Hons)", "Bachelor of Accounting", "Economics (Hons)"],
    color: "warning"
  },
  {
    stream: "Arts/Humanities",
    description: "Great for creative thinkers who want to understand society and human behavior",
    careers: ["Civil Servant", "Teacher", "Journalist", "Lawyer", "Social Worker"],
    courses: ["B.A", "B.A (Hons)", "Bachelor of Social Work", "Bachelor of Journalism", "B.Ed"],
    color: "success"
  },
  {
    stream: "Vocational/Technical",
    description: "Perfect for practical learners who like to build and create solutions",
    careers: ["Software Developer", "Graphic Designer", "Digital Marketer", "Technician", "Entrepreneur"],
    courses: ["BCA", "Diploma in IT", "Bachelor of Design", "Polytechnic", "Skill Development Courses"],
    color: "accent"
  }
];

export const calculateResults = (answers: number[][]): StreamResult[] => {
  const scores = {
    science: 0,
    commerce: 0,
    arts: 0,
    vocational: 0
  };

  // Calculate scores based on quiz answers
  answers.forEach((questionAnswers, questionIndex) => {
    questionAnswers.forEach(optionIndex => {
      const question = quizQuestions[questionIndex];
      const option = question.options[optionIndex];
      scores.science += option.points.science;
      scores.commerce += option.points.commerce;
      scores.arts += option.points.arts;
      scores.vocational += option.points.vocational;
    });
  });

  // Calculate total possible score
  const maxScore = quizQuestions.length * 5; // Maximum 5 points per question

  // Create results with percentages
  const results = streamResults.map(stream => ({
    ...stream,
    score: scores[stream.stream.toLowerCase().replace('/humanities', '').replace('/technical', '') as keyof typeof scores],
    percentage: Math.round((scores[stream.stream.toLowerCase().replace('/humanities', '').replace('/technical', '') as keyof typeof scores] / maxScore) * 100)
  }));

  // Sort by score (highest first)
  return results.sort((a, b) => b.score - a.score);
};