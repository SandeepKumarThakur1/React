import React, { useEffect, useState } from "react";
// import axios from "axios";
import axios from "../Utils/Axios";

function Contact() {
  const [userData, setUserData] = useState([]);

  const userList = () => {
    // const userApi = "https://fakestoreapi.com/users";

    axios
      // .get(userApi)
      .get("/users")
      .then((userData) => {
        console.log(userData);
        setUserData(userData.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(userData);

  useEffect(() => {
    userList();
  }, []);

  return (
    <div className="sectionDiv">
      <h1 className="text-3xl font-bold">Show User Data</h1>
      {/* <button onClick={() => userList()}>Click</button> */}
      <hr className="my-4" />
      {userData.length > 0 ? (
        userData.map((userDataList, index) => {
          return (
            <div key={index} className="card">
              <h1>
                {userDataList.name.firstname} {userDataList.name.lastname}
              </h1>
              <h1>{userDataList.email}</h1>
              <h1>{userDataList.phone}</h1>
            </div>
          );
        })
      ) : (
        <h1>Loading User Data...</h1>
      )}
    </div>
  );
}

export default Contact;
