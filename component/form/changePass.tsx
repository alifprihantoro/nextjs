import { useState } from "react";
import { useForm } from "react-hook-form";
import ChangePassword from "../../firebase/changePassword";
import { FormErrorLogin } from "./error";

type Inputs = {
  password: string;
  currentPassword: string;
};
export default function CangeEmailForm({ context }: any) {
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
  const onSubmit = (e: any) => {
    setErrLogin("");
    // get form
    const { password, currentPassword } = e;
    // console.log(password);
    // exec signup
    try {
      const email = context.data.email;
      ChangePassword(email, currentPassword, password);
      console.log("selesai");
    } catch (err) {
      console.log(err);
      setErrLogin("email sudah dipakai");
    }
  };
  return (
    <>
      <h2>change password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {ErrLogin !== "" && <span>{ErrLogin}</span>}
        <input
          placeholder="currentPassword"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          {...register("currentPassword", { required: true, minLength: 8 })}
        />
        {/* component if error */}
        <FormErrorLogin error={errors.currentPassword} />
        <input
          placeholder="password"
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
    </>
  );
}
