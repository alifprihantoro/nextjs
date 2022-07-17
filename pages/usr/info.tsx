import router from "next/router";
import {useContext} from "react";
import ChangeAccountForm from "../../component/user/info/changeEmail";
import DeleteAccountForm from "../../component/user/info/deleteAccount";
import {loginContext, LoginContext} from "../../context/login";

export default function UsrInfo() {
  const context = useContext(LoginContext) as loginContext;
  console.log(context.isLogin)
  // if (!context.isLogin) {
  // router.push("/");
  // return <></>
  // }
  return (
    <>
    <DeleteAccountForm/>
    <ChangeAccountForm/>
    </>
  )
}
