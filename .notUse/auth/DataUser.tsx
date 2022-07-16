import { useState } from "react";
import { useForm } from "react-hook-form";
import UpdateUsrFirebase from "../../firebase/update";
import { FormErrorLogin } from "./error";

type Inputs = {
  displayName: string;
  photoURL: string;
  register: any;
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
      await UpdateUsrFirebase({ displayName, photoURL }).then(() => {
        context.setData({
          ...context.data,
          displayName,
          photoURL,
        });
      });
    } catch (err) {
      setErrLogin("Gagal memperbarui!");
      context.setisLoading(false);
    }
  };
  return (
    <>
      <h2>change data</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {ErrLogin !== "" && <span>{ErrLogin}</span>}
        <input
          defaultValue={context.data.name}
          placeholder="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register("displayName", { required: true })}
        />
        {/* component if error */}
        <FormErrorLogin error={errors.displayName} />
        <input
          defaultValue={context.data.url}
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
    </>
  );
}
