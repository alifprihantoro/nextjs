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
  // useEffect(() => {
  //   onAuthStateChanged(getAuth(), (user: any) => {
  //     if (user) {
  //       setIsLogin(true);
  //       console.log(user.uid);
  //       console.log(user);
  //       return;
  //     }
  //     setIsLogin(false);
  //   });
  // }, []);

  if (!context.isLogin) {
    return (
      <>
        <LoginForm setIsLogin={context.setIsLogin}/>
        <SignUpForm setIsLogin={context.setIsLogin}/>
      </>
    );
  } else {
    return <Logout setIsLogin={context.setIsLogin}/>;
  }
}
