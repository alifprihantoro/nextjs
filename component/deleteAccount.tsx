import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DeleteAccount from "../firebase/deleteAccount";
import { FormErrorLogin } from "./form/error";

type Inputs = {
  email: string;
  password: string;
};

export default function DeleteAccountBtn({ context }: any) {
  const [ErrLogin, setErrLogin] = useState("");
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = async (e: any) => {
    let { password } = e;
    DeleteAccount({ context, password, setErrLogin });
  };
  return (
    <>
      <h2>delete account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {ErrLogin !== "" && <span>{ErrLogin}</span>}
        <input
          placeholder="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          {...register("password", { required: true, minLength: 8 })}
        />
        <FormErrorLogin error={errors.password} />
        <input
          className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          defaultValue="delete"
        />
      </form>
    </>
  );
}
