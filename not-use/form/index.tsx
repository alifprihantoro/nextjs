import Link from "next/link";
import router from "next/router";
import { useContext } from "react";
import { loginContext, LoginContext } from "../../context/login";
import Logout from "./logout";

export default function FormLogin() {
  const context = useContext(LoginContext) as loginContext;
  const PATH = router.pathname
  if (context.isLogin) {
    if (PATH==='/user') {
    return <Link href='/'><a>Go to home</a></Link>
    }
    return (
      <>
     <Link href='/user'><a>user</a></Link>
        <Logout context={context} />
     </>
    )
  }else{
    if (PATH==='/auth') {
    return <Link href='/'><a>Go to home</a></Link>
    }
    return <Link href='/auth'><a>Login/SignUp</a></Link>
  }
}
