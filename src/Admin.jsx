import React, { useState } from "react";
import tests from "./Data";
export default function Admin() {
  const [testlist, settestlist] = useState(tests);
  const [test, settest] = useState({
    subject: "",
    noque: "",
    starttime: "",
    endtime: "",
    totalmarks: ""
  });
  const [quelist, setquelist] = useState([]);
  const [optionlist, setoptlist] = useState([]);
  const [question, setquestion] = useState("");
  const [options, setoptions] = useState([]);
  const [optiona, setoptiona] = useState("");
  const [optionb, setoptionb] = useState("");
  const [optionc, setoptionc] = useState("");
  const [optiond, setoptiond] = useState("");
  const addtest = () => {
    let testscopy = [...testlist, test];
    settestlist(testscopy);
    console.log(testscopy);
    settest({
      subject: "",
      noque: "",
      starttime: "",
      endtime: "",
      totalmarks: ""
    });
  };
  const handledelete = (id) => {
    console.log(id);
    let list = testlist.filter((el) => el.id !== id);
    settestlist(list);
  };
  const handlechange = (property, event) => {
    const testCopy = {
      ...test
    };
    testCopy[property] = event.target.value;
    settest(testCopy);
  };
  const handlequestion = (ev) => {
    let copyquestion = { ...question };
    copyquestion = ev.target.value;
    setquestion(copyquestion);
    // console.log(copyquestion);
  };
  const addquestion = () => {
    if (!question) {
      return;
    }
    const copyque = [...quelist, question];
    setquelist(copyque);
    console.log(copyque);
    setquestion("");
  };
  const handleoption = (index, event) => {
    if (index === 0) {
      setoptiona(event.target.value);
    } else if (index === 1) {
      setoptionb(event.target.value);
    } else if (index === 2) {
      setoptionc(event.target.value);
    } else {
      setoptiond(event.target.value);
    }
  };
  const addoptions = () => {
    let option = [optiona, optionb, optionc, optiond];

    const addItem = [...options, option];
    setoptions(addItem);
    console.log(addItem);
    setoptlist(addItem);
    setoptiona("");
    setoptionb("");
    setoptionc("");
    setoptiond("");
    // console.log(addItem);
  };
  return (
    <div className="admin">
      <h1>Welcome</h1>
      <div>
        Subject :
        <input
          placeholder="Enter subject of test"
          value={test.subject}
          onChange={(event) => handlechange("subject", event)}
          type="text"
        />
      </div>
      <div>
        {" "}
        StartTime:
        <input
          placeholder="Starttime of test mm/dd/yyyy time hrhr:minmin"
          value={test.starttime}
          onChange={(event) => handlechange("starttime", event)}
          type="text"
        />{" "}
      </div>
      <div>
        {" "}
        EndTime:
        <input
          placeholder="Endtime of test mm/dd/yyyy time hrhr:minmin"
          value={test.endtime}
          onChange={(event) => handlechange("endtime", event)}
          type="text"
        />
      </div>
      <div>
        {" "}
        Total No. of Questions:
        <input
          placeholder="Enter numer of questions"
          value={test.noque}
          onChange={(event) => handlechange("noque", event)}
          type="number"
        />
      </div>
      <div>
        Question:
        <input
          placeholder="Enter question"
          value={question}
          onChange={(event) => handlequestion(event)}
          type="text"
        />
      </div>
      <div>
        A:
        <input
          placeholder="Enter option"
          value={optiona}
          onChange={(event) => handleoption(0, event)}
          type="text"
        />{" "}
      </div>
      <div>
        B:
        <input
          placeholder="Enter option"
          value={optionb}
          onChange={(event) => handleoption(1, event)}
          type="text"
        />{" "}
      </div>
      <div>
        C:{" "}
        <input
          placeholder="Enter option"
          value={optionc}
          onChange={(event) => handleoption(2, event)}
          type="text"
        />
      </div>
      <div>
        D:
        <input
          placeholder="Enter option"
          value={optiond}
          onChange={(event) => handleoption(3, event)}
          type="text"
        />
      </div>
      <div>
        <button className="addopt" onClick={addoptions}>
          Add Options
        </button>
        <button className="addquestion" onClick={addquestion}>
          Add Question
        </button>
      </div>
      <button onClick={addtest}>TEST COMPLETE</button>
      <div className="currtest">
        <div>{test.subject}</div>
        <div>Start Time: {test.starttime}</div>
        <div>End Time: {test.endtime}</div>
        <div>Total No. of Questions: {test.noque}</div>
        <div className="que">
          <ol>
            {quelist.map((el, index) => (
              <div className="opt">
                <li key={index}> {el}</li>

                {optionlist[index].map((el, id) => (
                  <>
                    {id + 1}
                    <button key={id}>{el}</button>
                    <br />
                  </>
                ))}
              </div>
            ))}
          </ol>
        </div>
      </div>
      <div>
        <ol className="ol">
          {testlist.map((el) => (
            <div className="testlist">
              <li key={el.id} type="none">
                {el.subject}
              </li>

              <p>No. of questions: {el.noque}</p>
              <p>Total marks: {el.totalmarks}</p>
              <p>Start time:{el.starttime}</p>
              <p>End time:{el.endtime}</p>
              <button onClick={() => handledelete(el.id)}>Delete</button>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
}
