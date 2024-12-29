import React, { useState } from "react";
import { FaArrowRight, FaArrowsTurnRight } from "react-icons/fa6";

function App() {
  const [val, setVal] = useState(false);

  const handleToggle = () => {
    setVal(!val);
  };
  return (
    <div className="d-flex h-screen w-full flex justify-center items-center">
      <div className="relative w-80 h-48 bg-slate-400 rounded-md flex overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1731157414716-623d47bd8397?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className={`${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } shrink-0 w-full h-full object-cover transition delay-150 duration-300 ease-in-out `}
        />
        <img
          src="https://images.unsplash.com/photo-1733173523386-3006dec1a835?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className={`${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } shrink-0 w-full h-full object-cover transition delay-150 duration-300 ease-in-out `}
        />
        <span
          onClick={handleToggle}
          className="absolute w-[50px] h-[50px] bottom-[10%] left-1/2 -translate-x-[50%] -translate-y-[50%] bg-gray-50 flex justify-center items-center rounded-full cursor-pointer bg-[#dadada7a]"
        >
          <FaArrowsTurnRight size="1.1em" color="white" />
        </span>
      </div>
    </div>
  );
}

export default App;
