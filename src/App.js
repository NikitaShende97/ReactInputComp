import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  const [list, setList] = useState(["Hello"]);

  const tweet = () => {
    let newList = [...list, "Hello Nikita"];
    setList(newList);
  };
  return (
    <div>
      <input type="button" value="Tweet" onClick={tweet}></input>
      <div id="parent">
        {list.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}
