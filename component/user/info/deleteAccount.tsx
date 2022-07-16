import router from "next/router";
import { useContext, useState } from "react";
import { loginContext, LoginContext } from "../../../context/login";
import DeleteAccountFirebase from "../../../service/firebase/deleteAccount";
import Button from "../../button";
import FormAuthCurrentPassword from "../../form/auth/currentPassword";
import FormAuthPassword from "../../form/auth/password";

const defaultData = {
    email: "",
    password: "",
    nama: "",
    currentPasword: "",
    delete: "",
  };
export default function DeleteAccountForm() {
  const context = useContext(LoginContext) as loginContext;
  const [err, setErr] = useState(defaultData);
  const [data, setData] = useState(defaultData);
  // jika belum login
  if (!context.isLogin) {
  router.push("/");
  return <></>
  }
  const click = async (e: any) => {
    context.setisLoading(true);
    // cek err and data
    if (err.password === "" && data.currentPasword !== "") {
      try {
      // delete account
        await DeleteAccountFirebase({context,setErr,password: data.password,});
      } catch (error) {
        // An error ocurred
        console.log(error);
        setErr({ ...err, delete: "delete gagal" });
      }
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
    <form className="block">
      {/* pasword------- */}
      <FormAuthPassword placeholder="password" state={state} />
      {/* currentPasword------- */}
      <FormAuthCurrentPassword placeholder="password" state={state} />
      {/* submit------- */}
      <Button click={(e) => click(e)}>DeleteAccount</Button>
    </form>
  );
}
