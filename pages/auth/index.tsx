import router from "next/router";
import { useContext, useState } from "react";
import Button from "../../component/button";
import FormAuth from "../../component/form/auth";
import { loginContext, LoginContext } from "../../context/login";
import FirebaseSignIn from "../../service/firebase/auth/signin";
import FirebaseSignUp from "../../service/firebase/auth/signup";

export default function Auth() {
  const context = useContext(LoginContext) as loginContext;
  context.isLogin && router.push("/");
  const [isAuth, setisAuth] = useState("signin");
  const defaultData = {
    email: "",
    password: "",
    nama: "",
    currentPasword: "",
  };
  const [err, setErr] = useState(defaultData);
  const [data, setData] = useState(defaultData);
  const [errLogin, setErrLogin] = useState("");
  // where btn onclick
  const onClick = async (e: any) => {
    e.preventDefault();
    context.setisLoading(true);
    // signin firebase ----------
    await FirebaseSignIn(data.email, data.password, setErrLogin, {
      isAuth,
      err,
      data,
      context,
    });
    // signup firebase ----------
    await FirebaseSignUp({
      setErrLogin,
      isAuth,
      err,
      data,
      context,
    });
  };
  // toogle sign
  const btnAuth = () => {
    return isAuth === "signup" ? "signin" : "signup";
  };
  // bundle state
  const state = {
    err,
    setErr,
    data,
    setData,
    errLogin,
    onClick,
    btnAuth,
    isAuth,
    setisAuth,
  };
  return (
    <>
      {errLogin}
      <span>{isAuth === "signup" ? "sudah punya" : "belum punya"} akun?</span>
      <Button click={() => setisAuth(btnAuth())}>{btnAuth()}</Button>
      <FormAuth state={state} />
    </>
  );
}
