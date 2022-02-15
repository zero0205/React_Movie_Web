import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("Created!");
    return () => console.log("Destroyed");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => setCounter((prev) => prev + 1);
  const onClick2 = () => setShowing((prev) => !prev);
  const onChange = (event) => setKeyword(event.target.value)

  useEffect(() => {
    console.log("I run only once");
  }, [])
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword])
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter])
  return (
    <div>
      {showing ? <Hello /> : null}
      <input
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
