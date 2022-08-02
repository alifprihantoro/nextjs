interface prop {
  toolbar: { pasang: string; nama: string }[];
  btnToolbar: any;
}

export default function BtnToolbar({ toolbar, btnToolbar }: prop) {
  return (
    <>
      {toolbar.map((e, i) => {
        return (
          <input
            className="bg-blue-900 p-3 m-3 rounded text-white"
            key={i}
            type="button"
            onClick={() => btnToolbar(e.pasang, e.nama)}
            value={e.nama}
          />
        );
      })}
    </>
  );
}
