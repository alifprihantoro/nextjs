import { useState } from "react";
import FormCekEmail from "../../../service/formCek/email";
import FormCekPassword from "../../../service/formCek/password";
import FormCekImportant from "../../../service/formCek/important";

export default function FormAuth() {
  const defaultData = { email: "", password: "", nama: "", kosong: "" };
  const [err, setErr] = useState(defaultData);
  const [data, setData] = useState(defaultData);
  const test = (e: any) => {
    if (err.nama !== "" || err.email !== "" || err.password !== "") {
      console.log("salah");
    }
    e.preventDefault();
  };

  const state = { err, setErr, data, setData };
  return (
    <div className="tes">
      <form>
        <input
          onChange={(e) => FormCekImportant(e.target.value, state, "nama")}
          type="text"
        />
        <span>{err.nama}</span>
        <input
          onChange={(e) => FormCekEmail(e.target.value, state)}
          type="email"
        />
        <span>{err.email}</span>
        <input
          onChange={(e) => FormCekPassword(e.target.value, state)}
          type="password"
        />
        <span>{err.password}</span>
        <button onClick={test} type="submit">
          submit
        </button>
      </form>
      hello hai
    </div>
  );
}

// if not importan
// import FormCekNotImportant from "../../../service/formCek/notImportant";
// <input
//   onChange={(e) => FormCekNotImportant(e.target.value, state, 'testing')}
//   type="text"
// />
