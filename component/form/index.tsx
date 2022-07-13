import Logout from "./logout";
import SignUpForm from "./signUP";
import React, { useContext } from "react";
import { loginContext, LoginContext } from "../../context/login";
import LoginForm from "./login";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function FormLogin() {
  const context = useContext(LoginContext) as loginContext;

  // console.log(context.isLogin)
  // context.setIsLogin(true)
  // console.log(context.isLogin)

  // cek isLogin -------------

  if (!context.isLogin) {
    return (
      <>
        <h2>login</h2>
        <LoginForm context={context}/>
        <h2>signup</h2>
        <SignUpForm context={context}/>
      </>
    );
  } else {
    return (
      <>
        <Logout context={context} />
        <div>Nama : {context.data.name}</div>
        <div>Email : {context.data.email}</div>
      </>
    );
  }
}
