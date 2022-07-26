export default function FormAuthNormal({
  placeholder,
  state,
  type,
  defaultVal,
}: any) {
  const { data, setData } = state;
  const nama = placeholder.replace(/[^a-z]/gi, "");
  return (
    <>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={placeholder}
        placeholder={placeholder}
        defaultValue={defaultVal}
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
