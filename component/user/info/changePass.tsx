import { useContext, useState } from "react";
import { loginContext, LoginContext } from "../../../context/login";
import Button from "../../button";
import FormAuthCurrentPassword from "../../form/auth/currentPassword";
import FormAuthPassword from "../../form/auth/password";
import FirebaseUpdatePassword from "../../../service/firebase/crud/update/password";

const defaultData = {
  email: "",
  newpassword: "",
  nama: "",
  currentPasword: "",
  currentpasword: "",
};
export default function ChangeAccountPassword() {
  const context = useContext(LoginContext) as loginContext;
  const [err, setErr] = useState(defaultData);
  const [data, setData] = useState(defaultData);
  const click = async (e: any) => {
    context.setisLoading(true);
    // cek err and data
    if (err.newpassword === "" && err.currentpasword === "" && data.currentPasword !== "") {
      try {
        // change password
        await FirebaseUpdatePassword(
          context.data.email,
          data.currentpasword,
          data.newpassword
        )
      } catch (error) {
        // An error ocurred
        console.log(error);
        alert('delete gagal')
      }
      context.setisLoading(false);
    }
    console.log(context.data);
    console.log(data.email);
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
      <h2>change Password</h2>
      <form onSubmit={(e) => click(e)} className="block">
        {/* pasword------- */}
        <FormAuthPassword placeholder="current password" state={state} nama='currentpasword'/>
        {/* currentPasword------- */}
        <FormAuthCurrentPassword placeholder="current password again" state={state} nama='currentpasword'/>
        {/* pasword------- */}
        <FormAuthPassword placeholder="new password" state={state} nama='newpassword'/>
        {/* submit------- */}
        <Button click={(e) => click(e)}>Change Password</Button>
      </form>
    </>
  );
}
