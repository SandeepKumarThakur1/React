import React from "react";

function FormArea() {
  return (
    <>
      <div className="py-4">
        <form action="" className="flex gap-5">
          <input
            type="text"
            placeholder="Name"
            className="p-2 text-sm outline-none text-violet-950 rounded-sm"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 text-sm outline-none text-violet-950 rounded-sm"
          />
          <input
            type="text"
            placeholder="Image URL"
            className="p-2 text-sm outline-none text-violet-950 rounded-sm"
          />
          <input
            type="submit"
            value="Submit"
            className="bg-blue-700 px-5 py-1 rounded-md cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}

export default FormArea;
