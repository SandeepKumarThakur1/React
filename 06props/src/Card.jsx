import React from "react";

function Card({ values }) {
  // function Card({ name, Profession, img })
  const { name, Profession, img } = values;

  return (
    <>
      <div className="bg-slate-200 h-72 w-56 rounded-md overflow-hidden">
        <img className="h-40 w-full object-cover object-top" src={img} alt="" />
        <div className="p-3">
          <h4 className="text-indigo-950 text-lg font-semibold">{name}</h4>
          <p className="text-indigo-950 text-xm font-600 mb-4">{Profession}</p>
          <button
            onClick={() => alert("Adding as a friend")}
            className="px-2 py-1 bg-blue-700 rounded-md"
          >
            Add Friend
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
