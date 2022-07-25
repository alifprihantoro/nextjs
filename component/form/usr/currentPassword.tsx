import { useState } from "react";
import FormCekCurrentPassword from "../../../service/formCek/currentPasword";

export default function FormAuthCurrentPassword({ placeholder, state, nama}: any) {
  const [isPassCheck, setIsPassCheck] = useState("password");
  return (
    <>
      <input
        placeholder={placeholder}
        onChange={(e) =>{
          const val =  e.target.value
          const cek = FormCekCurrentPassword(state.data[nama],val) 
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
        onChange={() => {
          const result = isPassCheck === "password" ? "text" : "password";
          setIsPassCheck(result);
        }}
        type="checkbox"
      />
      <span>{state.err.currentPasword}</span>
    </>
  );
}
