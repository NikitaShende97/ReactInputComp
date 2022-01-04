import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [UserList, setUserList] = useState([]);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const register = () => {
    const UserObj = {
      username: Username,
      password: password,
      email: email,
      mobile: mobile,
    };

    const newUserList = [UserObj, ...UserList];
    setUserList(newUserList);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter User name"
          value={Username}
          onChange={handleUsername}
        ></input>
        <input
          type="text"
          placeholder="Enter password"
          value={password}
          onChange={handlePassword}
        ></input>
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={handleEmail}
        ></input>
        <input
          type="text"
          placeholder="Enter mobile"
          value={mobile}
          onChange={handleMobile}
        ></input>
        <input type="button" value="Register" onClick={register}></input>
        <div>
          {UserList.map((item, index) => (
            <div>
              {item.username},{item.password},{item.email},{item.mobile}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
