const tests = [
  {
    subject: "Maths",
    noque: 20,
    duration: "30Minutes",
    starttime: "12/09/2020 09:42 AM",
    endtime: "12/12/2020 09:42 AM",
    totalmarks: 20,
    show: false,
    questions: [
      {
        q: "1+2=?",
        options: [1, 2, 3, 4],
        correct: 3,
        selected: ""
      },
      {
        q: "2+2=?",
        options: [1, 2, 3, 4],
        correct: 4,
        selected: ""
      }
    ]
  },
  {
    subject: "Science",
    noque: 20,
    duration: "30Minutes",
    starttime: "12/09/2020 09:42 AM",
    endtime: "12/12/2020 09:42 AM",
    totalmarks: 20,
    show: false,
    questions: [
      {
        q: "What is liquid?",
        options: ["state", "material", "none", "a and b"],
        correct: 2,
        selected: ""
      },
      {
        q: "what is solid?",
        options: ["state", "material", "none", "a and b"],
        correct: 2,
        selected: ""
      }
    ]
  }
];
export default tests;
