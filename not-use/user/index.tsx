import {useContext} from "react";
import DeleteAccountBtn from "../../component/deleteAccount";
import ChangeDataUser from "../../component/form/changeDataUser";
import CangeEmailForm from "../../component/form/changeEmail";
import ChangePass from "../../component/form/changePass";
import SendEmailVerification from "../../component/form/sendEmailVerification";
import {loginContext, LoginContext} from "../../context/login";
import Logout from "../../component/form/logout";

export default function UserPages() {
  const context = useContext(LoginContext) as loginContext;
  return (
      <>
        <Logout context={context} />
        {/* <UpdateUsrFirebase displayName="" photoURL=""/> */}
        <div>Nama : {context.data.name}</div>
        <div>Email : {context.data.email}</div>
        <div>profile : {context.data.url}</div>
        <ChangeDataUser context={context}/>
        <CangeEmailForm context={context}/>
        <SendEmailVerification context={context}/>
        <ChangePass context={context}/>
        <DeleteAccountBtn context={context}/>
      </>
  )
}
