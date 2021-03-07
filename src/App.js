import React, { useEffect, useState } from "react";
import "./App.scss";
import checkBtn from "./img/check.svg";
import deleteBtn from "./img/delete.svg";

function App() {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    setTaskArray((taskArray) => [...taskArray, task]);
    //localStorage.setItem("tasks", taskArray);
    console.log(task);
    console.log(taskArray);
    setTask("");
    e.preventDefault();
    //console.log(localStorage);
  };

  useEffect(() => {}, []);

  const deletePost = (task) => {
    const newTasks = [...taskArray];
    newTasks.splice(taskArray.indexOf(task), 1);
    setTaskArray(newTasks);
    //console.log(taskArray.indexOf(task));
  };

  return (
    <div className="App">
      <div className="main-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add the task"
            value={task}
            onChange={handleChange}
          />
          <button value="Submit" type="submit">
            submit
          </button>
        </form>
        <div>
          <ul>
            {taskArray.map((task, index) => (
              <li key={index}>
                <div>
                  <span>
                    <img src={checkBtn} alt="check-btn" />
                  </span>
                  <span onClick={() => deletePost(task)}>
                    <img src={deleteBtn} alt="delete-btn" />
                  </span>
                </div>
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
