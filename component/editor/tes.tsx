interface getCursor {
  part2: string;
  part1: string;
  part3: string;
  start: number;
  end: number;
  value: string;
  area: HTMLTextAreaElement;
}
export default function TesEditorText() {
  function getCursor(): getCursor {
    let area = document.getElementById("area") as HTMLTextAreaElement;
    const start = area?.selectionStart;
    const end = area?.selectionEnd;
    const value = area.value;
    const part1 = value.substring(0, start);
    const part2 = value.substring(start, end);
    const part3 = value.substring(end);
    return {
      part2,
      part1,
      part3,
      start,
      end,
      value,
      area,
    };
  }
  function btnToolbar(pasang: string, nama: string) {
    let { part2, part1, part3, start, end, value, area } = getCursor();

    if (part2 !== "") {
      area.value = part1 + pasang + part2 + pasang + part3;
      area?.setSelectionRange(
        start + pasang.length,
        start + part2.length + pasang.length
      );
    } else {
      area.value = part1 + pasang + nama + pasang + part3;
      area?.setSelectionRange(
        start + pasang.length,
        start + pasang.length + nama.length
      );
    }
    area?.focus();
  }
  function btnToolbarSingle(pasang: string, nama: string) {
    let { part2, part1, part3, start, end, value, area } = getCursor();
    // get start val to mouse
    let val = value.substring(0, start);
    const val_arr = val.split(/\n/g);
    // if arr more than one
    const isInline = val_arr.length > 1 ? val_arr[val_arr.length - 1] : val;
    val_arr.length > 1 && val_arr.pop();
    val = val_arr.join("\n");
    // cek is prev word
    if (val.length > 1) {
      area.value = val + "\n" + pasang + isInline + part3;
    } else {
      area.value = val + pasang + isInline + " " + nama + part3;
      const start_select =
        val.length + pasang.length + val_arr[val_arr.length - 1].length + 1;

      area?.setSelectionRange(start_select, start_select + nama.length);
    }
    area?.focus();
  }
  const toolbar_couple = [
    { pasang: "**", nama: "bold" },
    { pasang: "*", nama: "italic" },
    { pasang: "_", nama: "undescore" },
  ];
  const toolbar_single = [
    { pasang: "#", nama: "heading 1" },
    { pasang: "##", nama: "heading 2" },
    { pasang: "###", nama: "heading 3" },
    { pasang: "####", nama: "heading 4" },
  ];

  return (
    <div>
      <textarea id="area"></textarea>
      {toolbar_couple.map((e, i) => {
        return (
          <input
            key={i}
            type="button"
            onClick={() => btnToolbar(e.pasang, e.nama)}
            value={e.nama}
          />
        );
      })}
      {toolbar_single.map((e, i) => {
        return (
          <input
            key={i}
            type="button"
            onClick={() => btnToolbarSingle(e.pasang, e.nama)}
            value={e.nama}
          />
        );
      })}
    </div>
  );
}
