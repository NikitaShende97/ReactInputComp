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

  const changeMsg = (e) => {
    setMsg(e.target.value);
  };
  const tweet = () => {
    const newList = [msg, ...list];
    setList(newList);
    setMsg("");
  };
  const deleteTop = () => {
    list.splice(0, 1);
    setList([...list]);
  };
  return (
    <div>
      <input type="text" onChange={changeMsg}></input>
      <input type="button" value="Tweet" onClick={tweet}></input>
      <input type="button" value="delete Top" onClick={deleteTop}></input>
      <div>
        {list.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}
