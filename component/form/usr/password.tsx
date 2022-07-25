import { useState } from "react";
import FormCekPassword from "../../../service/formCek/password";

export default function FormAuthPassword({ placeholder, state, nama }: any) {
  const [isPassCheck, setIsPassCheck] = useState("password");
  return (
    <>
      <input
        placeholder={placeholder}
        onChange={(e) => FormCekPassword(e.target.value, state, nama)}
        type={isPassCheck}
      />
      <input
        onChange={() => {
          const result = isPassCheck === "password" ? "text" : "password";
          setIsPassCheck(result);
          // if ceheked use this svg
        }}
        type="checkbox"
      />
      <span>{state.err[nama]}</span>
    </>
  );
}
