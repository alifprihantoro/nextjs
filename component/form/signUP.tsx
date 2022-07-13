import React, { useState } from "react";
import { useForm} from "react-hook-form";
import SignUp from "../../firebase/signup";
import { FormErrorLogin } from "./error";

type Inputs = {
  email: string;
  password: string;
};
export default function SignUpForm({setIsLogin}:any) {
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
    setErrLogin("");
    // get form
    const { email, password } = e;
    // console.log(email);

    // exec signup
    try {
      await SignUp(email, password);
      setIsLogin(true);
    } catch (err) {
      setErrLogin("email/password salah");
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
      {/* component if error */}
      <FormErrorLogin error={errors.email} />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        {...register("password", { required: true, minLength: 8 })}
      />
      {/* component if error */}
      <FormErrorLogin error={errors.password} />
      <input
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      />
    </form>
  );
}
