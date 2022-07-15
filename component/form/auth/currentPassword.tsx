import { useState } from "react";
import FormCekCurrentPassword from "../../../service/formCek/currentPasword";

export default function FormAuthCurrentPassword({ placeholder, state }: any) {
  const [isPassCheck, setIsPassCheck] = useState("password");
  const [err, setErr] = useState('')
  return (
    <>
      <input
        placeholder={placeholder}
        onChange={(e) =>{
          const cek = FormCekCurrentPassword(state.data.password, e.target.value)
          setErr(cek?'':'Password Tidak Sama')
        }
          
        }
        type={isPassCheck}
      />
      <input
        id="passChecked2"
        onChange={() => {
          const result = isPassCheck === "password" ? "text" : "password";
          setIsPassCheck(result);
        }}
        type="checkbox"
      />
      <label htmlFor="passChecked2">
        {isPassCheck === "password" ? "show password" : "hide password"}
      </label>
      <span>{err}</span>
    </>
  );
}
