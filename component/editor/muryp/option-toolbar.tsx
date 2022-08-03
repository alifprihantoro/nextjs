interface prop {
  toolbar: { pasang: string; nama: string }[];
  btnToolbar: (pasang: string, nama: string) => void;
  class_name:string
}

export default function OptionToolbar({ toolbar, btnToolbar,class_name }: prop) {
  return (
    <>
      <select
        id="option-toolbar"
        className={class_name}
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
        <option hidden value="unknown">???</option>
      </select>
    </>
  );
}
