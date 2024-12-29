import React, { useState } from "react";

function App() {
  const [val, setVal] = useState({ name: "Sandeep", Gender: "Male" });

  return (
    <>
      <h2>Name : {val.name}</h2>
      <h2>Gender : {val.Gender}</h2>
      <h2>Age : {val.age}</h2>
      <button
        style={{
          padding: "1rem 2rem",
          fontSize: "1.3rem",
          color: "#333",
          cursor: "pointer",
        }}
        onClick={() => {
          setVal({ ...val, age: 22 });
          console.log(val);
        }}
      >
        Click to know sandeep age
      </button>
    </>
  );
}

export default App;
