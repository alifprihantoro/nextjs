import router from "next/router";
import {useContext} from "react";
import Loading from "../../component/loading";
import ChangeAccountForm from "../../component/user/info/changeEmail";
import DeleteAccountForm from "../../component/user/info/deleteAccount";
import {loginContext, LoginContext} from "../../context/login";

export default function UsrInfo() {
  const context = useContext(LoginContext) as loginContext;
  if (context.isLoading) {
    return <Loading/>
  }
  return (
    <>
    <DeleteAccountForm/>
    <ChangeAccountForm/>
    </>
  )
}
