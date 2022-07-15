import FormCekImportant from "../../../service/formCek/important";

export default function FormAuthImportant({placeholder,state,type}:any) {
  return (
    <>
        <input
          placeholder={placeholder}
          onChange={(e) => FormCekImportant(e.target.value, state, placeholder)}
          type={type}
        />
        <span>{state.err.nama}</span>
    </>
  )
}

