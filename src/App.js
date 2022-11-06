import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";
import Todo from "./views/Todo";

const App = () => {
  let [name, setName] = useState("GauMap");
  const [address, setAddress] = useState();
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      title: "Watching conan",
    },
    {
      id: "todo2",
      title: "Doing homework",
    },
  ]);

  const handleClick = (event) => {
    if (!address) {
      alert("Empty input");
      return;
    }
    let newTodo = { id: "", title: address };
    setTodos([...todos, newTodo]);
    setAddress("");
  };
  const handleOnChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}!</h1>
        <Todo  
         todos={todos}
        />
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnChange(event)}
        ></input>
        <button type="button" onClick={(event) => handleClick(event)}>
          Click me
        </button>
      </header>
    </div>
  );
};

export default App;
