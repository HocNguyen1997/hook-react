import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
import Todo from "./views/Todo";
import Covid from "./views/Covid";
import { CountDown, NewCountDown } from "./views/CountDown";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const App = () => {
  let [name] = useState("GauMap");
  const [address, setAddress] = useState();
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      title: "Watching conan",
      type: "gaumap",
    },
    {
      id: "todo2",
      title: "Doing homework",
      type: "gaumap1",
    },
    {
      id: "todo3",
      title: "Playing game",
      type: "gaumap",
    },
    {
      id: "todo4",
      title: "Reading books",
      type: "gaumap",
    },
  ]);

  useEffect(() => {
    console.log("run use effect");
  }, []);

  const handleClick = (event) => {
    if (!address) {
      alert("Empty input");
      return;
    }
    let newTodo = {
      id: Math.floor(Math.random() * 100000) + 1,
      title: address,
      type: "Quyen",
    };
    setTodos([...todos, newTodo]);
    setAddress("");
  };
  const handleOnChange = (event) => {
    setAddress(event.target.value);
  };

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Routes>
          <Route path="/" element={<Covid />}></Route>
          <Route path="/timer" element={<NewCountDown />}></Route>
          <Route
            path="/todo"
            element={
              <div>
                <Todo
                  todos={todos.filter((item) => item.type === "gaumap")}
                  title={`Gau map todos`}
                  deleteDataTodo={deleteDataTodo}
                />
                <input
                  type="text"
                  value={address}
                  onChange={(event) => handleOnChange(event)}
                ></input>

                <button type="button" onClick={(event) => handleClick(event)}>
                  Click me
                </button>
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
