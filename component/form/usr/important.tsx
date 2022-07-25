import FormCekImportant from "../../../service/formCek/important";

export default function FormAuthImportant({ placeholder, state, type }: any) {
  const nama = placeholder.replace(/[\s]|[@]/gm, "");
  return (
    <>
      <input
        placeholder={placeholder}
        onChange={(e) => {
          const val = e.target.value;
          FormCekImportant(val, state, nama);
        }}
        type={type}
      />
      <span>{state.err[nama]}</span>
    </>
  );
}
