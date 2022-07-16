import FirebaseSignOut from "../../service/firebase/auth/signOut";
import Button from "../button";

export default function UserData({context}:any) {
  return (
      <>
        <Button click={FirebaseSignOut}>logout</Button>
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
