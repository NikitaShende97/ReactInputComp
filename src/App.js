import { useState } from "react";

export default function App() {
  let list = [1, 1, 1, 1, 1, 1];

  const [cardCss, setCss] = useState("bg-primary text-white m-1 p-2");

  const primaryTheme = () => setCss("bg-primary text-white m-1 p-2");

  const infoTheme = () => setCss("bg-info text-white m-1 p-2");

  const DangerTheme = () => setCss("bg-danger text-white m-1 p-2");

  return (
    <div>
      <input
        type="button"
        value="Primary Theme"
        onClick={primaryTheme}
        className="btn btn-primary"
      ></input>

      <input
        type="button"
        value="Info Theme"
        onClick={infoTheme}
        className="btn btn-info"
      ></input>

      <input
        type="button"
        value="Danger Theme"
        onClick={DangerTheme}
        className="btn btn-danger"
      ></input>
      {list.map(() => (
        <div className={cardCss}>
          lorem CDAC_Programs\WPTWeb\ReactJs\project4>git remote ad d origin
          https://github.com/NikitaShende97/ReactInputComp.gitCDAC_Programs\W
          PTWeb\ReactJs\project4>git remote add origin
          https://github.com/NikitaShende97/ReactInputComp.git
        </div>
      ))}
    </div>
  );
}
