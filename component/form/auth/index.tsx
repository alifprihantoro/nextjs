import { useContext, useEffect, useState } from "react";
import FormAuthImportant from "./important";
import FormAuthEmail from "./email";
import FormAuthPassword from "./password";
import FormAuthCurrentPassword from "./currentPassword";
import Link from "next/link";
import FirebaseSignIn from "../../../service/firebase/auth/signin";
import { loginContext, LoginContext } from "../../../context/login";

export default function FormAuth() {
  const context = useContext(LoginContext) as loginContext;
  const defaultData = {
    email: "",
    password: "",
    nama: "",
    currentPassword: "",
  };
  const [err, setErr] = useState(defaultData);
  const [data, setData] = useState(defaultData);
  const [isAuth, setisAuth] = useState("signup");
  const [errLogin, setErrLogin] = useState("");
  const onClick = async (e: any) => {
    e.preventDefault();
    context.setisLoading(true);
    const isErr = Object.values(err).join("");
    const isData = Object.values(data).join("");
    if (isAuth === "signin" && isErr === "" && isData !== "") {
      await FirebaseSignIn(data.email, data.password, setErrLogin);
      setErrLogin("");
      context.setisLoading(false);
    }
    setErrLogin("Mohon diperiksa kembali");
    context.setisLoading(false);
  };
  const btnAuth = () => {
    return isAuth === "signup" ? "signin" : "signup";
  };
  const state = { err, setErr, data, setData };
  return (
    <div className="form-auth block">
      <Link href="/">
        <a>Back to Home</a>
      </Link>
      <br />
      {errLogin}
      <span>{isAuth === "signup" ? "sudah punya" : "belum punya"} akun?</span>
      <button onClick={() => setisAuth(btnAuth())}>{btnAuth()}</button>
      <form className="block">
        {/* nama------- */}
        {isAuth === "signup" && (
          <FormAuthImportant placeholder="nama" state={state} type="text" />
        )}
        {/* email------- */}
        <FormAuthEmail placeholder="email" state={state} />
        {/* pasword------- */}
        <FormAuthPassword placeholder="password" state={state} />
        {/* currentPasword------- */}
        {isAuth === "signup" && (
          <FormAuthCurrentPassword placeholder="password" state={state} />
        )}
        {/* submit------- */}
        <button onClick={onClick} type="submit">
          {isAuth}
        </button>
      </form>
      hello hai
    </div>
  );
}
