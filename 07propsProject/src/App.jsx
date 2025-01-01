import React, { useState } from "react";
import Card from "./Card";

function App() {
  const CardDate = [
    {
      title: "TV Area",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt",
      cardImg:
        "https://images.unsplash.com/photo-1467991521834-fb8e202c7074?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds",
      cardBtn: false,
    },
    {
      title: "Living Room",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit",
      cardImg:
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cardBtn: false,
    },
    {
      title: "Bedroom",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      cardImg:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cardBtn: false,
    },
    {
      title: "Kitchen",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
      cardImg:
        "https://images.unsplash.com/photo-1556910096-6f5e72db6803?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cardBtn: false,
    },
    {
      title: "Study Room",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
      cardImg:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cardBtn: false,
    },
  ];

  const [data, setData] = useState(CardDate);
  const handleClick = (cardIndex) => {
    setData((prev) => {
      return prev.map((elem, index) => {
        if (index === cardIndex) return { ...elem, cardBtn: !elem.cardBtn };
        return elem;
      });
    });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-slate-300 gap-7 flex-wrap p-5">
      {data.map((items, index) => (
        <Card
          key={index}
          index={index}
          values={items}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default App;
