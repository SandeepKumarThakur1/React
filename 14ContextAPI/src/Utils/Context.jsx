import { createContext, useState } from "react";

export const UserContext = createContext();

const [user, setUser] = useState([
  { id: "0", name: "John" },
  { id: "1", name: "Julie" },
  { id: "2", name: "killing" },
]);

function Context(props) {
  // console.log(props);
  // return props.children;
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
}

export default Context;
