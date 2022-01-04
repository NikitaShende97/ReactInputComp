export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  let id = 101;
  let str = "Nikita";
  let list = ["nikita", "vinayak"];
  let obj = { id: 1, uname: "Nevase" };
  return (
    <div>
      <h1>Hello {str}</h1>
      <h3>your id is {id}</h3>
      <h5>
        {list[0].toUpperCase()},{list[1].toUpperCase()}
      </h5>
      <h6>
        {obj.id},{obj.uname}
      </h6>
    </div>
  );
}
