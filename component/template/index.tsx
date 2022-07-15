import {useContext} from "react";
import {loginContext, LoginContext} from "../../context/login";

export default function Template({children}:any) {
  const context = useContext(LoginContext) as loginContext;
  return (
    <div>
      {context.isLogin ? 'login' : 'tidak login'}
      {children}
      footer
    </div>
  )
}
