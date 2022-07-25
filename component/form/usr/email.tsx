import FormCekEmail from "../../../service/formCek/email";

export default function FormAuthEmail({placeholder,state,type}:any) {
  return (
    <>
      <input
        placeholder={placeholder}
        onChange={(e) => FormCekEmail(e.target.value, state)}
        type={type}
      />
      <span>{state.err.email}</span>
    </>
  );
}
