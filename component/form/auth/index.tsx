import FormAuthImportant from "./important";
import FormAuthEmail from "./email";
import FormAuthPassword from "./password";
import FormAuthCurrentPassword from "./currentPassword";

/**
 * Form and Btn layout form
 */
export default function FormAuth({state}:any) {
  const { isAuth,onClick } = state
  return (
      <form className="block">
        {/* nama------- */}
        {isAuth === "signup" && (<FormAuthImportant placeholder="nama" state={state} type="text" />)}
        {/* email------- */}
        <FormAuthEmail placeholder="email" state={state} />
        {/* pasword------- */}
        <FormAuthPassword placeholder="password" state={state} nama='password'/>
        {/* currentPasword------- */}
        {isAuth === "signup" && (<FormAuthCurrentPassword placeholder="password again" state={state} nama='password'/>)}
        {/* submit------- */}
        <button onClick={onClick} type="submit">
          {isAuth}
        </button>
      </form>
  );
}
