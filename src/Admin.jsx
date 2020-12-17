import React, { useState } from "react";
import tests from "./Data";
export default function Admin() {
  const [testlist, settestlist] = useState(tests);
  const [test, settest] = useState({
    id: "",
    subject: "",
    noque: "",
    starttime: "",
    endtime: "",
    totalmarks: ""
  });
  const [quelist, setquelist] = useState([]);
  const [question, setquestion] = useState("");
  const [options, setoptions] = useState([]);
  const [option, setoption] = useState("");
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
    const copyque = [...quelist, question];
    setquelist(copyque);
    console.log(copyque);
    setquestion("");
  };
  const addoption = (event) => {
    setoption(event.target.value);
  };
  const addoptions = () => {
    const addItem = [...options, option];
    setoptions(addItem);
    setquestion.opt(addItem);
    setoption("");
    console.log(addItem);
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
        <button className="addquestion" onClick={addquestion}>
          Add
        </button>
      </div>
      <div>
        options:
        <input
          placeholder="Enter option"
          value={option}
          onChange={(event) => addoption(event)}
          type="text"
        />
        <button className="addopt" onClick={addoptions}>
          Add
        </button>
      </div>
      {/* <div>
        B:
        <input
          placeholder="Enter option"
          value={option[1]}
          onChange={(event) => addoption(1, event)}
          type="text"
        />
        <button className="addopt">Add</button>
      </div>{" "}
      */}
      <div>
        <ol>
          {quelist.map((el, index) => (
            <li key={index}> {el}</li>
          ))}
        </ol>
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
