import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormErrorLogin } from "./error";
import { getAuth, updatePassword, User } from "firebase/auth";

type Inputs = {
  password: string;
};
export default function CangeEmailForm() {
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
    const { password } = e;
    console.log(password);
    // exec signup
    try {
      const auth = getAuth();
      const user = auth.currentUser as User;
      updatePassword(user, password);
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
