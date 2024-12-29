import React, { useState } from "react";

function UseState2() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
  const [dataDe, setData] = useState([
    { name: "Sandeep", age: 22 },
    { name: "Nisha", age: 20 },
    { name: "Survila Devi", age: 50 },
  ]);
  return (
    <>
      {/* {val.map((elem, index) => (
        <h1 key={index}>{elem}</h1>
      ))}
      <button
        onClick={() =>
          setVal(() => val.filter((item, index) => index != val.length - 1))
        }
      >
        Click
      </button> */}

      {/* {val.map((elem, index) => (
        <h1 key={index}>{elem}</h1>
      ))}
      <button
        onClick={() => setVal(() => val.filter((item, index) => index != 2))}
      >
        Click To Remove 3 in Array
      </button> */}

      {/* {val.map((elem, index) => (
        <h1 key={index}>{elem}</h1>
      ))}
      <button
        onClick={() => setVal(() => val.filter((items) => items % 2 !== 0))}
      >
        Click To Remove Those Number Divided By 2
      </button> */}

      {/* {val.map((elem, index) => (
        <h1 key={index}>{elem}</h1>
      ))}
      <button onClick={() => setVal(...val, 7)}>Add Element in Array</button> */}

      {dataDe.map((elem, index) => (
        <h1 key={index}>
          {elem.name} - {elem.age}
        </h1>
      ))}
      <button
        onClick={() =>
          setData(() =>
            dataDe.map((items) =>
              items.name == "Nisha" ? { name: "Nisha", age: 21 } : items
            )
          )
        }
      >
        Click To Update Nisha Age
      </button>
    </>
  );
}

export default UseState2;
