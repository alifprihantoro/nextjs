import React, { useContext } from "react";
import ChangePasswordByEmail from "../../component/form/changePassByEmail";
import { loginContext, LoginContext } from "../../context/login";
import LoginForm from "../../component/form/login";
import SignUpForm from "../../component/form/signUP";
import router from "next/router";

export default function AuthPage() {
  const context = useContext(LoginContext) as loginContext;
  return (
    <div id="auth-pages">
      <h2>login</h2>
      <LoginForm />
      <h2>signup</h2>
      <SignUpForm context={context} />
      <ChangePasswordByEmail />
    </div>
  );
}
