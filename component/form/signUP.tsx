import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SignUp from "../../firebase/signup";
import UpdateUsrFirebase from "../../firebase/update";
import { FormErrorLogin } from "./error";

type Inputs = {
  email: string;
  password: string;
  name: string;
  url: string;
};
export default function SignUpForm({ context }: any) {
  // set error form
  const [ErrLogin, setErrLogin] = useState("");
  // function form/handling err/onsubmit
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();
  // if submit klick
  const onSubmit = async (e: any) => {
    context.setisLoading(true);
    setErrLogin("");
    // get form
    const { email, password, name, url } = e;
    // console.log(email);
    // exec signup
    try {
      await SignUp(email, password)
      .then(() => {
          const displayName = name;
          // console.log('pengambilan signup--------')
          // console.log(displayName);
          const photoURL = url;
          // console.log(photoURL);
          UpdateUsrFirebase({ displayName, photoURL });
        context.setisLoading(false);
      });
    } catch (err) {
      setErrLogin("email sudah dipakai");
      context.setisLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {ErrLogin !== "" && <span>{ErrLogin}</span>}
      <input
        placeholder="email"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="email"
        {...register("email", { required: true })}
      />
      {/* component if error */}
      <FormErrorLogin error={errors.email} />
      <input
        placeholder="password"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        {...register("password", { required: true, minLength: 8 })}
      />
      {/* component if error */}
      <FormErrorLogin error={errors.password} />
      <input
        placeholder="name"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...register("name", { required: true })}
      />
      {/* component if error */}
      <FormErrorLogin error={errors.name} />
      <input
        placeholder="url"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...register("url", { required: true })}
      />
      {/* component if error */}
      <FormErrorLogin error={errors.url} />
      <input
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      />
    </form>
  );
}
