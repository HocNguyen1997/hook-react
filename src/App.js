import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
// import Todo from "./views/Todo";
import Covid from "./views/Covid";
import { CountDown, NewCountDown } from "./views/CountDown";

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

  // const handleClick = (event) => {
  //   if (!address) {
  //     alert("Empty input");
  //     return;
  //   }
  //   let newTodo = {
  //     id: Math.floor(Math.random() * 100000) + 1,
  //     title: address,
  //     type: "Quyen",
  //   };
  //   setTodos([...todos, newTodo]);
  //   setAddress("");
  // };
  // const handleOnChange = (event) => {
  //   setAddress(event.target.value);
  // };

  // const deleteDataTodo = (id) => {
  //   let currentTodos = todos;
  //   currentTodos = currentTodos.filter((item) => item.id !== id);
  //   setTodos(currentTodos);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and {name}!</h1>
        <CountDown />
        <span>------------------------------</span>
        <NewCountDown />
        {/* <Todo todos={todos} title="All todos" deleteDataTodo={deleteDataTodo} />
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
        <form>
          <button type="button" onClick={(event) => handleClick(event)}>
            Click me
          </button>
        </form> */}
        <Covid />
      </header>
    </div>
  );
};

export default App;
