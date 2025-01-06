import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    console.log(`Contact Page is Created Now`);
    return () => console.log(`Contact Page is Deleted Now`);
  });
  return (
    <div className="sectionDiv">
      <h1>Contact</h1>
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

export default Contact;
