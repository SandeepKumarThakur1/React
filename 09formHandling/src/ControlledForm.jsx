import React, { useState } from "react";

function ControlledForm() {
  // Controlled Components
  // Aap Jabhi kuch loikhe useState ke through data real Time par update kar dein.
  // Jaise hi Kuch Type ho Set state kardo nayi value ke baraabar

  const [val, setVal] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(val);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1 className="mb-1 font-bold text-xl">Controlled Components ✨</h1>
        <p className="mb-3">
          - Aap Jabhi kuch loikhe useState ke through data real Time par update
          kar dein.
        </p>
        <input
          // onChange={(e) => console.log(e.target.value)}
          onChange={(e) => setVal({ ...val, name: e.target.value })}
          type="text"
          placeholder="Name"
          className="p-2 rounded-md text-red-900 me-5"
        />
        <input
          // onChange={(e) => console.log(e.target.value)}
          onChange={(e) => setVal({ ...val, email: e.target.value })}
          type="email"
          placeholder="Email Id"
          className="p-2 rounded-md text-red-900"
        />
        <br />
        <input
          type="submit"
          value="Submit"
          className="py-1.5 rounded-md px-5 bg-green-800 mt-2"
        />
      </form>
    </div>
  );
}

export default ControlledForm;
