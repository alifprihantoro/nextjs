import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormErrorLogin } from "./error";
import UpdateEmail from "../../firebase/changeEmail";

type Inputs = {
  email: string;
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
  const onSubmit = async (e: any) => {
    context.setisLoading(true);
    setErrLogin("");
    // get form
    const { email } = e;
    // console.log(email);
    // exec signup
    try {
      await UpdateEmail(email).then(() => {
        // context.setData({ ...context.data, email });
        context.setisLoading(false);
      });
    } catch (err) {
      setErrLogin("email sudah dipakai");
      context.setisLoading(false);
    }
  };
  return (
    <>
      <h2>change data</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {ErrLogin !== "" && <span>{ErrLogin}</span>}
        <input
          placeholder="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register("email", { required: true })}
        />
        {/* component if error */}
        <FormErrorLogin error={errors.email} />
        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        />
      </form>
    </>
  );
}
