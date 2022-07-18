import { useContext } from "react";
import Button from "../../component/button";
import Loading from "../../component/loading";
import ChangeAccountForm from "../../component/user/info/changeEmail";
import ChangeAccountPassword from "../../component/user/info/changePass";
import DeleteAccountForm from "../../component/user/info/deleteAccount";
import { loginContext, LoginContext } from "../../context/login";
import SendEmailResetPassword from "../../service/firebase/sendEmail/ResetPassword";

export default function UsrInfo() {
  const context = useContext(LoginContext) as loginContext;
  if (context.isLoading) {
    return <Loading />;
  }
  return (
    <>
      <ChangeAccountPassword />
      <span>
        Lupa pasword ?
        <Button click={() => SendEmailResetPassword(context.data.email)}>
          send me reset pasword!
        </Button>
      </span>
      <ChangeAccountForm />
      <DeleteAccountForm />
    </>
  );
}
