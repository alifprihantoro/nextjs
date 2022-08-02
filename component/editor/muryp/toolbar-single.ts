import getCursor from "./get-cursor";

export default function btnToolbarSingle(pasang: string, nama: string) {
  let { select, part3, start, end, value, area } = getCursor();

  // get start val to cursor
  let val = value.substring(0, start);

  // split enter
  const val_arr = val.split(/\n/g);

  // if arr more than one
  const isLineMore1 = val_arr.length > 1;

  // cek line lenght/val_arr
  const isInline = isLineMore1 ? val_arr[val_arr.length - 1] : val;

  // delete last arr if line more than one
  isLineMore1 && val_arr.pop();

  // join arr to string
  val = isLineMore1 ? val_arr.join("\n") : "";

  // cek is in first line
  const isFirstLine = isLineMore1 ? "\n" : "";

  // cek has new line and not have text on line or value 0
  const isEnterNoText =
    /\n/.test(value.substring(start - 1, end)) || value.length < 1 ? nama : "";

  // cek select is one line
  const select_array = select.split("\n");
  // const select_replace = select_array.length > 1 ? select_array.join('\n'+pasang+' ') : isEnterNoText
  const replace_arr_select = select_array.map((e) => {
    if (e !== "") {
      return pasang + " " + e;
    }
  });
  const result_arr_select = replace_arr_select.join("\n");
  const select_replace =
    select_array.length > 1 ? result_arr_select : pasang + " " + isEnterNoText;

  // update value
  area.value = val + isFirstLine + select_replace + isInline + part3;

  // get start select
  const start_select = val.length + isFirstLine.length + pasang.length + 1;

  // get end select
  const end_select = start_select + select_replace.length + isInline.length;

  // select range
  select_array.length < 2 && area?.setSelectionRange(start_select, end_select);

  // selec focus
  area?.focus();
}
