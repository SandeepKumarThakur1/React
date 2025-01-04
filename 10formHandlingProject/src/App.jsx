import React, { useState } from "react";
import Cards from "./Components/Cards";
import FormArea from "./Components/FormArea";

function App() {
  const [users, setUsers] = useState([]);

  const handleSubmitFromData = (data) => {
    setUsers([...users, data]);
  };

  const handleRemove = (id) => {
    setUsers(() =>
      users.filter((elem, index) => {
        return index != id;
      })
    );
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <Cards handleRemove={handleRemove} users={users} />
        <FormArea handleSubmitFromData={handleSubmitFromData} />
      </div>
    </>
  );
}

export default App;
