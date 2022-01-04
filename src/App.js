import { useState } from "react";

export default function App() {
  return (
    <div>
      <Mycomponent />
    </div>
  );
}

function Mycomponent() {
  const [list, setList] = useState([""]);
  const [msg, setMsg] = useState("");
  const addtweet = (e) => {
    const newList = [...list, msg];
    setList(newList);
    setMsg("");
  };

  const changeMsg = (e) => {
    setMsg(e.target.value);
  };
  return (
    <div>
      <input type="text" id="input" onChange={changeMsg}></input>
      <input type="button" value="tweet" onClick={addtweet}></input>
      <div>
        {list.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}
