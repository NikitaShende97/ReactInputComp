import { useState } from "react";

export default function App() {
  return (
    <div>
      <Mycomponenet />
    </div>
  );
}

function Mycomponenet() {
  const [AjaxList, setAjaxList] = useState([]);
  const MakeAjaxCall = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const result = await response.json();
    setAjaxList(result);
  };
  return (
    <div>
      <div>
        <input type="button" value="Ajax Call" onClick={MakeAjaxCall}></input>
        <div>
          {AjaxList.map((item, index) => (
            <div className="bg-warning mb-1" key={index}>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
