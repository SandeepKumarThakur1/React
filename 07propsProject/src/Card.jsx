import React from "react";

function Card({ values, handleClick, index }) {
  const { cardImg, title, description, cardBtn } = values;
  return (
    <>
      <div className="w-60 h-80 bg-slate-100 rounded-md overflow-hidden ">
        <div className="w-60 h-40 bg-slate-600">
          <img src={cardImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="px-3 py-2">
          <h2 className="text-lg text-gray-800 font-bold mb-2">{title}</h2>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <button
            onClick={() => handleClick(index)}
            className={`${
              cardBtn ? "bg-red-800" : "bg-green-800"
            } text-white px-4 py-2 rounded-md text-sm font-semibold`}
          >
            {cardBtn ? "Cancel" : "Add Product"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
