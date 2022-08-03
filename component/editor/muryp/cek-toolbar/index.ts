import { toolbar_single } from "../config";
import getCursor from "../get-cursor";
import isNoSelect from "./isNoSelect";
import Select from "./isSelect";
// import { select, noSelect } from "./types";

/**
 * this type return data command (bold/heading)
 */
// type result = select[] | noSelect[];
export default function cekToolbar(): void {
  let { start, end } = getCursor();
  /** cek is select/block*/
  const isSelect = start != end;
  /**
   * this data return void add/remove class on toolbar
   * need :
   * @function getCursor : get info cursor;
   */
  const toolbar_single_arr = toolbar_single.map((e) => e.nama);
  // get select toolbar header/normal
  const option_el = document.getElementById(
    "option-toolbar"
  ) as HTMLOptionElement;
  const replaceId = (nama: string) => `${nama.replace(/\s/g, "-")}-btn`;
  if (isSelect) {
    const mydata = Select(getCursor());
    // delete or add class use btn
    mydata.forEach((e) => {
      const getEl = document.getElementById(replaceId(e.nama));
      const isOption = toolbar_single_arr.includes(e.nama);
      // btn
      e.cek ? getEl?.classList.add("use") : getEl?.classList.remove("use");
      // option
      isOption && (option_el.value = "unknown");
    });
  } else {
    const mydata = isNoSelect(getCursor());
    mydata.forEach((e) => {
      const getEl = document.getElementById(replaceId(e.nama));
      const isOption = toolbar_single_arr.includes(e.nama);
      // btn
      e.cek ? getEl?.classList.add("use") : getEl?.classList.remove("use");
      // option
      e.cek && isOption && (option_el.value = e.command);
    });
  }
}
