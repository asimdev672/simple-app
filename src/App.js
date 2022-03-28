import { useState } from "react";
import "./App.css";
import Value from "./Value";

function App() {
  const [item, setItem] = useState({
    title: "",
    age: "",
  });

  const inputEvent = (event) => {
    const { value, name } = event.target;
    setItem((oldVal) => {
      return { ...oldVal, [name]: value };
    });
  };

  const [addItem, setAddItem] = useState([]);

  const add = () => {
    console.log("clicked");
    setAddItem((prev) => {
      return [...prev, item];
    });
    setItem({
      title: "",
    age: "",
    })
  };
  const deletClick = (id) => {
    setAddItem((oldVal) => {
      return oldVal.filter((currValue, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main-container">
        <div className="center-div">
          <h1 className="heading">SIMPLE CRUD APP</h1>
          <table>
            <tr>
              <th className="first">Name</th>
              <th>Age</th>
              <th className="last">Action</th>
            </tr>
          </table>
          {addItem.map((val, index) => {
            return (
              <Value
                title={val.title}
                age={val.age}
                key={index}
                id={index}
                deletItem={deletClick}
              />
            );
          })}
          <input
            type="text"
            placeholder="Enter your Name"
            className="name-style"
            name="title"
            value={item.title}
            onChange={inputEvent}
          />
          <input
            type="number"
            placeholder="Enter your Age"
            className="age-style"
            name="age"
            value={item.age}
            onChange={inputEvent}
          />
          <button className="btn add-btn" onClick={add}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
