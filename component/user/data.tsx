import {loginContext} from "../../context/login";
import FirebaseSignOut from "../../service/firebase/auth/signOut";
import Button from "../button";
import IMG from "../img";
import NavLink from "../nav/link";

export default function UserData({context}:{context:loginContext}) {
  return (
      <>
        {/* <UpdateUsrFirebase displayName="" photoURL=""/> */}
        <div className="">
          <IMG url={context.data.url}/>
        <div>Nama : {context.data.name}</div>
        <div>Email : {context.data.email}</div>
        </div>
        <Button click={()=>FirebaseSignOut({context})}>logout</Button>
        {/* <ChangeDataUser context={context}/>
          * <CangeEmailForm context={context}/>
          * <SendEmailVerification context={context}/>
          * <ChangePass context={context}/>
          * <DeleteAccountBtn context={context}/> */}
      <NavLink />
      </>
  )
}
