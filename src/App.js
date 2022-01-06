import { useState } from "react";

export default function App() {
  return (
    <div>
      <Mycomponent />
    </div>
  );
}

function Mycomponent() {
  const [movie, setMovie] = useState("");
  const [year, setYear] = useState("");
  const [list, setList] = useState(["Movie"]);

  const handleMoviename = (e) => {
    setMovie(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const addDetails = () => {
    const userObj = {
      Movie: movie,
      Year: year,
    };
    const newList = [...list, userObj];
    setList(newList);
  };

  const deleteMovie = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };
  return (
    <div>
      <div>
        <input type="text" onChange={handleMoviename}></input>
        <input type="text" onChange={handleYear}></input>
        <input
          type="button"
          onClick={addDetails}
          value="Add"
          className="btn btn-outline-primary btn-sm"
        ></input>
      </div>
      <div>
        {list.map((item, index) => (
          <div key={index}>
            <div className="row bg-secondary mt-1 text-white">
              <div className="col-1">{item.Movie}</div>
              <div className="col-1">{item.Year}</div>
              <div className="col-3">
                <input
                  type="button"
                  value="delete"
                  onClick={() => deleteMovie(index)}
                  className="btn btn-primary"
                ></input>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
