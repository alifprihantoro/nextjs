import { useContext, useState } from "react";
import { loginContext, LoginContext } from "../../../context/login";
import Button from "../../button";
import FormAuthCurrentPassword from "../../form/usr/currentPassword";
import FormAuthEmail from "../../form/usr/email";
import FormAuthPassword from "../../form/usr/password";
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
  const click = async (e: any) => {
    context.setisLoading(true);
    // cek err and data
    if (err.password === "" && data.currentPasword !== "") {
      try {
        // delete account
        await UpdateEmail(context.data.email,data.password,data.email).then(()=>context.setData({...context.data,email:data.email}));
      } catch (error) {
        // An error ocurred
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
      <form onSubmit={(e)=>click(e)} className="block">
        {/* email------- */}
        <FormAuthEmail placeholder="email" state={state} />
        {/* pasword------- */}
        <FormAuthPassword placeholder="current password" state={state} nama='password'/>
        {/* currentPasword------- */}
        <FormAuthCurrentPassword placeholder="current password again" state={state} nama='password'/>
        {/* submit------- */}
        <Button click={(e) => click(e)}>Change Email</Button>
      </form>
    </>
  );
}
