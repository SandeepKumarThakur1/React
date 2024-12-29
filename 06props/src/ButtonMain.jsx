import React from "react";

function ButtonMain({ text, color }) {
  return (
    <>
      <button className={`px-3 py-1 ${color} rounded me-4`}>{text}</button>
    </>
  );
}

export default ButtonMain;
