import React from "react";
import { useForm } from "react-hook-form";

function UseFormProject() {
  const { register, handleSubmit } = useForm();
  const dataInfo = (data) => console.log(data);
  return (
    <>
      <form action="" onSubmit={handleSubmit(dataInfo)}>
        <h1 className="font-bold text-xl mb-3">useForm</h1>
        <input
          {...register("name")}
          type="text"
          placeholder="Name"
          className="p-2 rounded-md text-red-900 me-5"
        />
        <input
          {...register("email")}
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
    </>
  );
}

export default UseFormProject;
