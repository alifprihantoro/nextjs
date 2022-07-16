import {loginContext} from "../../context/login";
import FirebaseSignOut from "../../service/firebase/auth/signOut";
import Button from "../button";

export default function UserData({context}:{context:loginContext}) {
  return (
      <>
        <Button click={()=>FirebaseSignOut({context})}>logout</Button>
        {/* <UpdateUsrFirebase displayName="" photoURL=""/> */}
        <div>Nama : {context.data.name}</div>
        <div>Email : {context.data.email}</div>
        <div>profile : {context.data.url}</div>
        {/* <ChangeDataUser context={context}/>
          * <CangeEmailForm context={context}/>
          * <SendEmailVerification context={context}/>
          * <ChangePass context={context}/>
          * <DeleteAccountBtn context={context}/> */}
      </>
  )
}
