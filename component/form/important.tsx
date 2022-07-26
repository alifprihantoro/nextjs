import FormCekImportant from "../../service/formCek/important";

export default function FormAuthImportant({
  placeholder,
  state,
  type,
  defaultVal,
}: any) {
  const nama = placeholder.replace(/[\s]|[@]/gm, "");
  return (
    <>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3
        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        defaultValue={defaultVal}
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
