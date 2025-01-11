import React, { useContext } from "react";
import { UserContext } from "../Utils/Context";
import { useParams } from "react-router";

function UserDetails() {
  const { id } = useParams();
  const { user, setUser } = useContext(UserContext);
  console.log(user[id]);
  return (
    <div className="p-5">
      <h1 className="mb-4">UserDetails</h1>
      <h4>
        {user[id].name} - {user[id].city}
      </h4>
    </div>
  );
}

export default UserDetails;
