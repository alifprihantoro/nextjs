import getCursor from "./get-cursor";

export default function btnToolbar(pasang: string, nama: string) {
  let { select, part1, part3, start, end, value, area } = getCursor();

  if (select !== "") {
    area.value = part1 + pasang + select + pasang + part3;
    area?.setSelectionRange(
      start + pasang.length,
      start + select.length + pasang.length
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
