import React, { useState } from "react";
import tests from "./Data";
export default function User() {
  // const [show, setshow] = useState(false);
  const [question, setquestion] = useState("");
  const [optiona, setopta] = useState("");
  const [optionb, setoptb] = useState("");
  const [optionc, setoptc] = useState("");
  const [optiond, setoptd] = useState("");
  const handleshowtest = (subject) => {
    console.log(subject);
    let index = tests.findIndex((el) => el.subject === subject);
    console.log(tests[index].questions[0].q);
    tests[index].show = true;
    var i = 0;
    const id = setInterval(() => {
      if (i >= tests[index].questions.length) {
        clearInterval(id);
        alert("Exam completed");
        return;
      }
      setquestion(tests[index].questions[i].q);
      setopta(tests[index].questions[i].options[0]);
      setoptb(tests[index].questions[i].options[1]);
      setoptc(tests[index].questions[i].options[2]);
      setoptd(tests[index].questions[i].options[3]);
      i++;
    }, 3000);
  };
  return (
    <div className="user">
      {tests.map((el, index) => (
        <div className="usertest">
          <div>Subject: {el.subject}</div>
          <div>Start Time:{el.starttime}</div>
          <div>End Time:{el.endtime}</div>
          <div>Totalmarks: {el.totalmarks}</div>
          <button onClick={() => handleshowtest(el.subject)}>Start</button>
          <div style={{ display: el.show ? "block" : "none" }}>
            <div>
              <div>Question: {question} </div>
              <div>
                Options:
                <p>A. {optiona}</p>
                <p>B. {optionb}</p>
                <p>C. {optionc}</p>
                <p>D. {optiond}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
