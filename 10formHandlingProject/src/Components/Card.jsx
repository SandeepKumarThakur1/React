import React from "react";

function Card({ users, handleRemove, id }) {
  const { name, email, image } = users;
  return (
    <div className="bg-slate-200 h-72 w-60 text-black rounded-md flex flex-col items-center p-4">
      <div className="w-14 h-14 bg-slate-200 rounded-full overflow-hidden">
        <img src={image} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-semibold">{name}</h3>
      <h6 className="text-yellow-700 text-sm">{email}</h6>
      <p className="text-[14px] leading-5 text-center text-ellipsis pt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perferendis
        assumenda accusantium .
      </p>
      <button
        onClick={() => handleRemove(id)}
        className="bg-red-900 text-white text-sm px-5 py-2 rounded-md mt-3"
      >
        Remove It
      </button>
    </div>
  );
}

export default Card;
