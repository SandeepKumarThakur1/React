import React from "react";

function Navbar({ data }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl">Music App</div>
        <div>
          <button className="bg-[#0d1321] px-4 rounded-[0.6rem] py-2 text-white text-md font-medium flex gap-2 items-center shadow-lg">
            <div>Favourites</div>
            <div className="w-10 h-5 rounded-[0.25rem] flex justify-center items-center text-[#fff] text-[0.9rem] bg-[#ffffff30]">
              {/* {data.length}✨ */}
              {data.filter((items) => items.addBtn).length}✨
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
