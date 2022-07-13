import { useState } from "react";
import { useForm } from "react-hook-form";
import UpdateUsrFirebase from "../../firebase/update";
import { FormErrorLogin } from "./error";

type Inputs = {
  displayName: string;
  photoURL: string;
};
export default function CangeDataUserForm({ context }: any) {
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
    const { displayName, photoURL } = e;
    // console.log(email);
    // exec signup
    try {
      await UpdateUsrFirebase({ displayName, photoURL }).then(()=>{
        context.setData({
          ...context.data,
          displayName,
          photoURL
        })
      context.setisLoading(false);
      })
    } catch (err) {
      setErrLogin("email sudah dipakai");
      context.setisLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {ErrLogin !== "" && <span>{ErrLogin}</span>}
      <input
        placeholder="name"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...register("displayName", { required: true })}
      />
      {/* component if error */}
      <FormErrorLogin error={errors.displayName} />
      <input
        placeholder="url"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...register("photoURL", { required: true })}
      />
      {/* component if error */}
      <FormErrorLogin error={errors.photoURL} />
      <input
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      />
    </form>
  );
}
