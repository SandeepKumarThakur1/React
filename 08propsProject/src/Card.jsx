import React from "react";

function Card({ values, handleClick, index }) {
  const { img, name, artist, addBtn } = values;
  return (
    <>
      <div className="w-64 h-36 bg-[#eae0d5] rounded-md p-4 relative shadow-sm mb-8">
        <div className="flex gap-3 items-start">
          <div className="w-20 h-20 bg-slate-600 rounded-md overflow-hidden shadow-md">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="pt-1">
            <h3 className="font-bold text-xl">{name}</h3>
            <p className="font-medium">{artist}</p>
          </div>
        </div>
        <div className="absolute bottom-[0] left-1/2 -translate-x-[50%] translate-y-[50%] w-48 text-center">
          <button
            onClick={() => handleClick(index)}
            className={`${
              addBtn === false ? "bg-[#2a2a2a]" : "bg-[#094d20]"
            } px-4 rounded-[2rem] py-2 text-white text-md font-medium`}
          >
            {addBtn === false ? "Add To Favourites ✨" : "Added ✅"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
