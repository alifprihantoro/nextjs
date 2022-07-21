import {useContext} from "react";
import {loginContext, LoginContext} from "../../context/login";
import SendVerifikasi from "../../service/firebase/sendEmail/Verifikasi";
import Button from "../button";

export default function SendVerifikasiBtn() {
  const context = useContext(LoginContext) as loginContext;
  const klick = ()=> {
    SendVerifikasi()
  }
  if (context.isLogin && !context.data.isVerified) {
  return (
    <Button click={klick}>Send me Email!</Button>
  )
  }else{
    return <></>
  }
}
