import React from "react";
import { useForm } from "react-hook-form";

function FormArea({ handleSubmitFromData }) {
  const { register, handleSubmit, reset } = useForm();

  const resetFormData = (data) => {
    handleSubmitFromData(data);
    reset();
  };

  return (
    <>
      <div className="py-4">
        <form
          action=""
          className="flex gap-5"
          onSubmit={handleSubmit(resetFormData)}
        >
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="p-2 text-sm outline-none text-violet-950 rounded-[0.3rem]"
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="p-2 text-sm outline-none text-violet-950 rounded-[0.3rem]"
          />
          <input
            {...register("image")}
            type="text"
            placeholder="Image URL"
            className="p-2 text-sm outline-none text-violet-950 rounded-[0.3rem]"
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
