import React from "react";

function App() {
  return (
    // To Handle Form Handling
    // Then Use useRef(), controlled Components, react hook form

    // useRef() -> Is Tareeke main hum har input ko select kar lete hai and unki value tab nikaalte hai jab form submit hota hai.

    // useRef kisi bhi HTML input ko select kar skte ho.
    <form>
      <input type="text" placeholder="Text" style={{ color: "#000" }} />
      <br />
      <button className="px-2 py-1 bg-green-700 mt-2">Submit</button>
    </form>
  );
}

export default App;
