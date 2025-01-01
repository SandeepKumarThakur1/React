import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import { useState } from "react";

function App() {
  const songData = [
    {
      name: "Some Name",
      artist: "Artist Name.",
      img: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      addBtn: false,
    },
    {
      name: "Shining Stars",
      artist: "John Doe",
      img: "https://images.unsplash.com/photo-1630223926218-19a3aabdfa68?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      addBtn: false,
    },
    {
      name: "Moonlight",
      artist: "Jane Smith",
      img: "https://images.unsplash.com/photo-1671588623593-6f80c45ed94f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      addBtn: false,
    },
    {
      name: "Lost in Time",
      artist: "The Dreamers",
      img: "https://images.unsplash.com/photo-1714238014026-2495240a681a?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      addBtn: false,
    },
    {
      name: "Rhythm Life",
      artist: "DJ Beats",
      img: "https://images.unsplash.com/photo-1571512379797-4613cb587cc0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      addBtn: false,
    },
    {
      name: "Echoes Love",
      artist: "Soulful Harmony",
      img: "https://images.unsplash.com/photo-1516980907201-943c13a8d03c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      addBtn: false,
    },
    {
      name: "City Lights",
      artist: "Neon Dreams",
      img: "https://images.unsplash.com/photo-1534416295659-b53d868c8c0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      addBtn: false,
    },
  ];

  const [clicked, setClicked] = useState(songData);
  const handleClick = (customIndex) => {
    setClicked((prev) => {
      return prev.map((elem, index) => {
        if (index === customIndex) return { ...elem, addBtn: !elem.addBtn };
        return elem;
      });
    });
  };

  return (
    <>
      <div className="h-screen bg-[#ffffff] px-10 py-5">
        <Navbar data={clicked} />
        <div className="flex gap-5 items-center flex-wrap py-20">
          {clicked.map((items, index) => {
            return (
              <Card
                values={items}
                index={index}
                key={index}
                handleClick={handleClick}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
