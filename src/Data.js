const tests = [
  {
    id: 1,
    subject: "Maths",
    noque: 20,
    duration: "30Minutes",
    starttime: "12/09/2020 09:42 AM",
    endtime: "12/12/2020 09:42 AM",
    totalmarks: 20,
    questions: [
      {
        q1: "1+2=?",
        options: [1, 2, 3, 4],
        correct: 3
      },
      {
        q1: "2+2=?",
        options: [1, 2, 3, 4],
        correct: 4
      }
    ]
  },
  {
    id: 2,
    subject: "Science",
    noque: 20,
    duration: "30Minutes",
    starttime: "12/09/2020 09:42 AM",
    endtime: "12/12/2020 09:42 AM",
    totalmarks: 20,
    questions: [
      {
        q1: "What is liquid?",
        options: ["state", "material", "none", "a and b"],
        correct: 2
      },
      {
        q1: "what is solid?",
        options: ["state", "material", "none", "a and b"],
        correct: 2
      }
    ]
  }
];
export default tests;
