import { useState } from "react";
import FormCekPassword from "../../../service/formCek/password";

export default function FormAuthPassword({ placeholder, state }: any) {
  const [isPassCheck, setIsPassCheck] = useState("password");
  return (
    <>
      <input
        placeholder={placeholder}
        onChange={(e) => FormCekPassword(e.target.value, state)}
        type={isPassCheck}
      />
      <input
        id="passChecked1"
        onChange={() => {
          const result = isPassCheck === "password" ? "text" : "password";
          setIsPassCheck(result);
        }}
        type="checkbox"
      />
      <label htmlFor="passChecked1">
        {isPassCheck === "password" ? "show password" : "hide password"}
      </label>
      <span>{state.err.password}</span>
    </>
  );
}
