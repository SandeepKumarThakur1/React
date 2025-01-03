import React, { useState } from "react";
import Cards from "./Components/Cards";
import FormArea from "./Components/FormArea";

function App() {
  const [users, setUsers] = useState([1]);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Cards users={users} />
      <FormArea />
    </div>
  );
}

export default App;
