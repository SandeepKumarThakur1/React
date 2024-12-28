import React from "react";
import { useState } from "react";

function App() {
  const [scores, setScores] = useState(10);
  const [val, setVal] = useState(10);
  const [isLogined, setisLogined] = useState(false);
  const [obj, setObj] = useState({
    name: "John Doe",
    age: 30,
    isLogined: false,
  });

  return (
    <div className="p-4">
      <div className="py-5">
        <h1 className="text-4xl">{scores}</h1>
        <button
          onClick={() => {
            setScores(12);
          }}
          className="px-3 py-1 bg-lime-800 text-white rounded-md mt-3"
        >
          Update Scores
        </button>
      </div>

      <div className="py-5">
        <h1 className="text-4xl">{val}</h1>
        <button
          onClick={() => {
            setVal((prev) => prev + 1);
          }}
          className="px-3 py-1 bg-orange-800 text-white rounded-md mt-3"
        >
          Change Value
        </button>
      </div>

      <div className="py-5">
        <h1 className="text-4xl">{isLogined.toString()}</h1>
        <button
          onClick={() => {
            setisLogined(!isLogined);
          }}
          className={`px-3 py-1 ${
            isLogined ? "bg-blue-800" : "bg-red-800"
          } text-white rounded-md mt-3`}
        >
          {isLogined ? "Login" : "Not Login"}
        </button>
      </div>

      <div className="py-5">
        <h1 className="text-xl">Name : {obj.name}</h1>
        <h1 className="text-xl">Age : {obj.age}</h1>
        <h1 className="text-xl">Logined : {obj.isLogined.toString()}</h1>
        <button
          onClick={() => setObj({ ...obj, isLogined: !obj.isLogined })}
          className={`px-3 py-1 ${
            obj.isLogined ? "bg-blue-800" : "bg-red-800"
          } text-white rounded-md mt-3`}
        >
          {obj.isLogined ? "Login" : "Not Login"}
        </button>
      </div>
    </div>
  );
}

export default App;
