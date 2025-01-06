import React, { useEffect, useState } from "react";

function About() {
  const [first, setFirst] = useState(`This is Normal Data`);
  const [second, setSecond] = useState(`This is Large Data`);
  useEffect(() => {
    console.log(`About Page is Created Now`);
    return () => console.log(`About Page is Deleted Now`);
  });
  return (
    <div className="sectionDiv">
      <h1>About</h1>
      <h4 className="text-orange-300">{first}</h4>
      <button
        className="px-4 py-2 bg-slate-100 text-black me-3 rounded-md mb-3"
        onClick={() => setFirst(`This Normal Data has been changed.`)}
      >
        Click To See Action On Console For Action First
      </button>
      <h4 className="text-orange-300">{second}</h4>
      <button
        className="px-4 py-2 bg-slate-100 text-black rounded-md mb-3"
        onClick={() => setSecond(`This Large Data has been changed.`)}
      >
        Click To See Action On Console For Second First
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
        sapiente libero soluta aliquam natus amet eum mollitia deleniti quia
        incidunt tenetur iure, inventore placeat consequatur reprehenderit
        nostrum quis? Quasi, laudantium? Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Sunt eius laboriosam dolores vero, quas magnam at
        reiciendis repellendus, omnis tempore quos rerum expedita? Ducimus,
        cupiditate! Eveniet suscipit sequi harum earum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
        sapiente libero soluta aliquam natus amet eum mollitia deleniti quia
        incidunt tenetur iure, inventore placeat consequatur reprehenderit
        nostrum quis? Quasi, laudantium?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
        sapiente libero soluta aliquam natus amet eum mollitia deleniti quia
        incidunt tenetur iure, inventore placeat consequatur reprehenderit
        nostrum quis? Quasi, laudantium?
      </p>
    </div>
  );
}

export default About;
