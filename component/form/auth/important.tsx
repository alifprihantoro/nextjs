import FormCekImportant from "../../../service/formCek/important";

export default function FormAuthImportant({placeholder,state,type}:any) {
  const nama = placeholder.replace(/[\s]|[@]/gm,'')
  return (
    <>
        <input
          placeholder={placeholder}
          onChange={(e) => FormCekImportant(e.target.value, state, nama)}
          type={type}
        />
        <span>{state.err[nama]}</span>
    </>
  )
}

