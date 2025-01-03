import React from "react";
import Card from "./Card";

function Cards({ users }) {
  return (
    <>
      <div className="h-[60%] bg-[#00000065] w-[80%] p-8 rounded-md overflow-auto flex flex-wrap gap-5">
        {users.map((elem, index) => {
          return <Card key={index} />;
        })}
      </div>
    </>
  );
}

export default Cards;
