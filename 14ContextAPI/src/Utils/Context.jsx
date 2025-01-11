import { createContext, useState } from "react";
export const UserContext = createContext();
function Context(props) {
  // return props.children;
  const [user, setUser] = useState([
    { id: "0", name: "John", city: "Mumbai" },
    { id: "1", name: "Julie", city: "Chandigarh" },
    { id: "2", name: "Raju", city: "Goa" },
  ]);

  // console.log(props);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default Context;
