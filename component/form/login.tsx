import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SignIn from "../../firebase/login";
import { FormErrorLogin } from "./error";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm({context}:any) {
  const [ErrLogin, setErrLogin] = useState("");
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = async (e: any) => {
    context.setisLoading(true)
    setErrLogin("");
    let { email, password } = e;
    try {
      await SignIn(email, password);
      context.setisLoading(false)
    } catch (err) {
      setErrLogin("email/password salah");
      context.setisLoading(false)
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {ErrLogin !== "" && <span>{ErrLogin}</span>}
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="email"
        {...register("email", { required: true })}
      />
      <FormErrorLogin error={errors.email} />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        {...register("password", { required: true, minLength: 8 })}
      />
      <FormErrorLogin error={errors.password} />
      <input
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      />
    </form>
  );
}
