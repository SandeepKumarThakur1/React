import React from "react";

function App() {
  const data = [
    {
      imageObject:
        "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Object Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ducimus inventore cum quis earum tenetur nihil praesentium.",
      IsStock: true,
    },
    {
      imageObject:
        "https://images.unsplash.com/photo-1415604934674-561df9abf539?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Object Name 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ducimus inventore cum quis earum tenetur nihil praesentium.",
      IsStock: false,
    },
    {
      imageObject:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Object Name 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ducimus inventore cum quis earum tenetur nihil praesentium.",
      IsStock: true,
    },
  ];
  return (
    <>
      <div className="h-screen w-100 bg-slate-200 flex justify-center items-center gap-10">
        {data.map((elem, index) => (
          <div
            key={index}
            className="w-64 rounded bg-white h-fit rounded overflow-hidden"
          >
            <img
              src={elem.imageObject}
              alt=""
              className="w-full h-40 object-cover"
            />
            <h1 className="font-bold text-xl my-2 px-3">{elem.title}</h1>
            <p className="px-3 pb-4 text-md">{elem.description}</p>
            <button
              className={`mx-3 mb-3 px-3 py-1 rounded-md text-white ${
                elem.IsStock ? "bg-blue-700" : "bg-red-700"
              }`}
            >
              {elem.IsStock ? "In Stock" : "Out of Stock"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
