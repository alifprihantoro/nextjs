import router from "next/router";
import { useContext, useState } from "react";
import { loginContext, LoginContext } from "../../../context/login";
import Button from "../../button";
import FormAuthCurrentPassword from "../../form/auth/currentPassword";
import FormAuthEmail from "../../form/auth/email";
import FormAuthPassword from "../../form/auth/password";
import UpdateEmail from '../../../service/firebase/crud/update/email'

const defaultData = {
  email: "",
  password: "",
  nama: "",
  currentPasword: "",
  delete: "",
};
export default function ChangeAccountForm() {
  const context = useContext(LoginContext) as loginContext;
  const [err, setErr] = useState(defaultData);
  const [data, setData] = useState(defaultData);
  // jika belum login
  if (!context.isLogin) {
    router.push("/");
    return <></>;
  }
  const click = async (e: any) => {
    context.setisLoading(true);
    // cek err and data
    if (err.password === "" && data.currentPasword !== "") {
      try {
        // delete account
        await UpdateEmail(context.data.email,data.password,data.email);
      } catch (error) {
        // An error ocurred
        console.log(error);
        setErr({ ...err, delete: "delete gagal" });
      }
    context.setisLoading(false);
    }
    e.preventDefault();
  };
  // define usestate
  const state = {
    err,
    setErr,
    data,
    setData,
  };
  return (
    <>
      <h2>change Email</h2>
      <form className="block">
        {/* email------- */}
        <FormAuthEmail placeholder="email" state={state} />
        {/* pasword------- */}
        <FormAuthPassword placeholder="password" state={state} />
        {/* currentPasword------- */}
        <FormAuthCurrentPassword placeholder="password" state={state} />
        {/* submit------- */}
        <Button click={(e) => click(e)}>Change Email</Button>
      </form>
    </>
  );
}
