import React from "react";
import ButtonMain from "./ButtonMain";
import Card from "./Card";

function App() {
  const data = [
    {
      name: "Riya",
      Profession: "Painter",
      img: "https://images.unsplash.com/photo-1735025679607-8ebbca553404?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Rani",
      Profession: "Coder",
      img: "https://images.unsplash.com/photo-1734365294963-743f3ed421c1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Radha",
      Profession: "Youtuber",
      img: "https://images.unsplash.com/photo-1732020678916-e18b83b65a03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="p-4 flex justify-center items-center h-screen bg-slate-500 gap-10 w-full">
      {/* <ButtonMain text="Know More" color="bg-blue-700" />
      <ButtonMain text="Download" color="bg-red-700" /> */}
      {data.map((items, index) => (
        // <Card
        //   key={index}
        //   name={items.name}
        //   Profession={items.Profession}
        //   img={items.img}
        // />
        <Card key={index} values={items} />
      ))}
    </div>
  );
}

export default App;
