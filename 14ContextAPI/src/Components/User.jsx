import React, { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../Utils/Context";

function User() {
  const { user, setUser } = useContext(UserContext);
  // console.log(x);
  // console.log(user);
  return (
    <div className="p-5">
      <h1 className="mb-3 text-2xl">User List</h1>
      <div className="flex flex-col">
        {user.map((u) => (
          <Link to={`/user/${u.id}`} key={u.id}>
            <h4 className="bg-red-100 text-black px-3 py-1 mb-2 rounded-md">
              {u.name}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default User;
