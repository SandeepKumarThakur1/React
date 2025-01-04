import React from "react";
import Card from "./Card";

function Cards({ users, handleRemove }) {
  return (
    <>
      <div className="h-[60%] bg-[#00000065] w-[75%] p-8 rounded-md overflow-auto flex items-center justify-center flex-wrap gap-5">
        {users.map((items, index) => {
          return (
            <Card
              key={index}
              users={items}
              handleRemove={handleRemove}
              id={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default Cards;
