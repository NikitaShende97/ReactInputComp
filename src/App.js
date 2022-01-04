import { useState } from "react";

export default function App() {
  return (
    <div>
      <Mycomponenet />
    </div>
  );
}
function Mycomponenet() {
  const [list, setList] = useState(["Hello"]);
  const [Msg, setMsg] = useState("");

  const tweet = (e) => {
    const newList = [Msg, ...list];
    setList(newList);
    setMsg("");
  };
  const changeMsg = (e) => {
    const newMsg = e.target.value;
    setMsg(newMsg);
  };
  const deleteTop = () => {
    list.splice(0, 1);
    setList([...list]);
  };
  const deleteIndex = (index1) => {
    list.splice(index1, 1);
    setList([...list]);
  };
  return (
    <div>
      <input type="text" onChange={changeMsg}></input>
      <input type="button" onClick={tweet} value="Tweet"></input>
      <input type="button" onClick={deleteTop} value="DeleteTop"></input>
      <div>
        {list.map((item, index1) => (
          <div>
            {item}

            <input
              type="button"
              onClick={() => deleteIndex(index1)}
              value="Delete"
            ></input>
          </div>
        ))}
      </div>
    </div>
  );
}
