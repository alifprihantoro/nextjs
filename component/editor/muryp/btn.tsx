interface prop {
  toolbar: { pasang: string; nama: string }[];
  btnToolbar: any;
  className: string;
}

export default function BtnToolbar({ toolbar, btnToolbar, className }: prop) {
  return (
    <>
      {toolbar.map((e, i) => {
        return (
          <input
            className={className+' btn'}
            key={i}
            id={e.nama.replace(/\s/gm, "-") + "-btn"}
            type="button"
            onClick={(el) => {
              const getEl = el.target as HTMLInputElement;
              document.getElementById(getEl.id)?.classList.add('use');
              btnToolbar(e.pasang, e.nama);
            }}
            value={e.nama}
          />
        );
      })}
    </>
  );
}
