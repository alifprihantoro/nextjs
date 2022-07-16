import { useContext, useState } from "react";
import FormAuth from "../../component/form/auth";
import { loginContext, LoginContext } from "../../context/login";
import FirebaseSignIn from "../../service/firebase/auth/signin";
import FirebaseSignUp from "../../service/firebase/auth/signup";

export default function Auth() {
  const [isAuth, setisAuth] = useState("signup");
  const context = useContext(LoginContext) as loginContext;
  const defaultData = {
    email: "",
    password: "",
    nama: "",
    currentPasword: "",
  };
  const [err, setErr] = useState(defaultData);
  const [data, setData] = useState(defaultData);
  const [errLogin, setErrLogin] = useState("");
  const onClick = async (e: any) => {
    e.preventDefault();
    context.setisLoading(true);
    // signin firebase
    await FirebaseSignIn(data.email, data.password, setErrLogin, {
      isAuth,
      err,
      data,
      context
    });
    // signup firebase
    await FirebaseSignUp({
      setErrLogin,
      isAuth,
      err,
      data,
      context
    });
  };
  const btnAuth = () => {
    return isAuth === "signup" ? "signin" : "signup";
  };
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
        <FormAuth state={state}/>
    </>
  );
}
