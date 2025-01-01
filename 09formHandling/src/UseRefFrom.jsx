import React, { useRef } from "react";
// To Handle Form Handling
// Then Use useRef(), controlled Components, react hook form
// useRef() -> Is Tareeke main hum har input ko select kar lete hai and unki value tab nikaalte hai jab form submit hota hai.
// useRef kisi bhi HTML input ko select kar skte ho.
// useRef pahel chalta hai baad me DOM reload hota hai.

function UseRefFrom() {
  const name = useRef(null);
  const age = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value, age.current.value);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <h1 className="mb-3 font-bold text-xl">useRef</h1>
      <input
        ref={name}
        type="text"
        placeholder="Name"
        className="text-gray-950 p-1 rounded-sm me-2"
      />
      <input
        ref={age}
        type="text"
        placeholder="Age"
        className="text-gray-950 p-1 rounded-sm"
      />
      <br />
      <input
        type="submit"
        value="Submit"
        className="py-1 rounded-sm px-3 bg-green-800 mt-2"
      />
    </form>
  );
}

export default UseRefFrom;
