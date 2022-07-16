import {useContext} from "react";
import {loginContext, LoginContext} from "../../context/login";
import Navigation from "../nav";

export default function Template({children}:any) {
  const context = useContext(LoginContext) as loginContext;
  const myClass = context.isLogin ? 'login' : 'tidak-login'
  return (
    <div>
      <Navigation context={context}/>
      {children}
      footer
    </div>
  )
}
