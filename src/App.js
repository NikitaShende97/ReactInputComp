import { useState } from "react";

export default function App() {
  let [counter, setCounter] = useState(0);
  let list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const increment = () => {
    counter = counter + 1;
    setCounter(counter);
  };
  return (
    <div>
      <h1>Counter Application</h1>
      <input type="button" value="Click" onClick={increment}></input>
      {list.map(() => (
        <div>like {counter}</div>
      ))}
    </div>
  );
}
