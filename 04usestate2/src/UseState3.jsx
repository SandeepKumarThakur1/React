import React, { useState } from "react";

function UseState3() {
  const [val, setVal] = useState(false);
  return (
    <>
      <h1>{val === false ? "BAHHAR JAAO" : "MAT JAAO"}</h1>

      <button
        onClick={() => {
          //   setVal(true);
          //   setVal(!val);
          setVal(() => !val);
        }}
      >
        Click To Change
      </button>
    </>
  );
}

export default UseState3;
