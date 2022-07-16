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
        <FormAuthPassword placeholder="password" state={state} />
        {/* currentPasword------- */}
        {isAuth === "signup" && (<FormAuthCurrentPassword placeholder="password" state={state} />)}
        {/* submit------- */}
        <button onClick={onClick} type="submit">
          {isAuth}
        </button>
      </form>
  );
}
