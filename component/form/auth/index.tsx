import FormAuthImportant from "./important";
import FormAuthEmail from "./email";
import FormAuthPassword from "./password";
import FormAuthCurrentPassword from "./currentPassword";

export default function FormAuth({state}:any) {
  const { isAuth,onClick,setisAuth,btnAuth } = state
  return (
    <div className="form-auth block">
      <span>{isAuth === "signup" ? "sudah punya" : "belum punya"} akun?</span>
      <button onClick={() => setisAuth(btnAuth())}>{btnAuth()}</button>
      <form className="block">
        {/* nama------- */}
        {isAuth === "signup" && (<FormAuthImportant placeholder="nama" state={state} type="text" />)}
        {/* email------- */}
        <FormAuthEmail placeholder="email" state={state} />
        {/* pasword------- */}
        <FormAuthPassword placeholder="password" state={state} />
        {/* currentPasword------- */}
        {isAuth === "signup" && (<FormAuthCurrentPassword placeholder="password" state={state} />)}
        {/* submit------- */}
        <button onClick={onClick} type="submit">
          {isAuth}
        </button>
      </form>
      hello hai
    </div>
  );
}
