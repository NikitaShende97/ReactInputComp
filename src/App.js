import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <div>
      <Mycomponent />
    </div>
  );
}

function Mycomponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [list, setList] = useState([]);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const registerUser = async () => {
    const data = { Username: username, Password: password };

    const url = "http://localhost:8000/add-users";
    await axios.post(url, data);

    const newList = [data, ...list];
    setList(newList);
    setUsername("");
    setPassword("");
  };

  const getUsers = async () => {
    const url = "http://localhost:8000/users";
    const result = await axios.get(url);
    const list = result.data;
    const newList = [...list];
    setList(newList);
  };
  const userInfo = async () => {
    const url = "http://localhost:8000/users";
    const res = await fetch(url);
    const listU = await res.json();
    const newList = [...listU];
    console.log(newList);
    setList(newList);
  };

  useEffect(() => userInfo(), []);
  return (
    <div>
      <h1>User Registration</h1>
      <input type="text" value={username} onChange={handleUsername}></input>
      <input type="text" value={password} onChange={handlePassword}></input>
      <input type="button" value="Register" onClick={registerUser}></input>
      <input type="button" value="Get" onClick={userInfo}></input>
      <div>
        {list.map((item, index) => (
          <div key={index}>
            {item.Username},{item.Password}
          </div>
        ))}
      </div>
    </div>
  );
}
