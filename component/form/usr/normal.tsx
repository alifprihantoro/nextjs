export default function FormAuthImportant({ placeholder, state, type }: any) {
  const { data, setData } = state;
  const nama = placeholder.replace(/[^a-z]/gi, "");
  return (
    <>
      <input
        placeholder={placeholder}
        onChange={(e) => {
          const val = e.target.value;
          setData({ ...data, [nama]: val });
        }}
        type={type}
      />
      <span>{state.err[nama]}</span>
    </>
  );
}
