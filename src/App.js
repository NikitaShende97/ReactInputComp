import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  const [msg, setMsg] = useState("");

  const changeMessage = (e) => setMsg(e.target.value);
  return (
    <div>
      <div>
        <input type="text" onChange={changeMessage}></input>
      </div>
      <div>{msg}</div>
      <div>{msg}</div>
      <div>{msg}</div>
      <div>{msg}</div>
    </div>
  );
}
