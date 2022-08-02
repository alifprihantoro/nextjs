interface prop {
  toolbar: { pasang: string; nama: string }[];
  btnToolbar: (pasang: string, nama: string) => void;
}

export default function OptionToolbar({ toolbar, btnToolbar }: prop) {
  return (
    <>
      <select
        id="option-toolbar"
        onChange={(e) => {
          const nama = e.target[e.target.selectedIndex] as HTMLOptionElement;
          btnToolbar(e.target.value, nama.text);
        }}
      >
        {toolbar.map((e, i) => {
          return (
            <option 
              key={i} value={e.pasang}>
              {e.nama}
            </option>
          );
        })}
      </select>
    </>
  );
}
