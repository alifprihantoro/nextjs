import { useState } from "react";
import FormCekCurrentPassword from "../../../service/formCek/currentPasword";

export default function FormAuthCurrentPassword({ placeholder, state }: any) {
  const [isPassCheck, setIsPassCheck] = useState("password");
  return (
    <>
      <input
        placeholder={placeholder}
        onChange={(e) =>{
          const val =  e.target.value
          const cek = FormCekCurrentPassword(state.data.password,val) 
          const Tescek = cek?'':'Password Tidak Sama'
          // set err
          state.setErr({...state.err,currentPasword:Tescek})
          // set data
          state.setData({...state.data,currentPasword:val})
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
      <span>{state.err.currentPasword}</span>
    </>
  );
}
