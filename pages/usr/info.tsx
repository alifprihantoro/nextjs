import { useContext } from "react";
import Button from "../../component/button";
import Loading from "../../component/loading";
import ChangeAccountForm from "../../component/user/info/changeEmail";
import ChangeAccountPassword from "../../component/user/info/changePass";
import DeleteAccountForm from "../../component/user/info/deleteAccount";
import UserDetailPrivate from "../../component/user/info/detailPrivate";
import { loginContext, LoginContext } from "../../context/login";
import UpdateUserNameFireStore from "../../service/firebase/crud/update/username";
import SendEmailResetPassword from "../../service/firebase/sendEmail/ResetPassword";

export default function UsrInfo() {
  const context = useContext(LoginContext) as loginContext;
  if (context.isLoading) {
    return <Loading />;
  }
  const klick = () => {
    UpdateUserNameFireStore(context, "lakilaki3");
  };
  return (
    <>
      <button onClick={klick}>tes</button>
      <UserDetailPrivate context={context} />
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
