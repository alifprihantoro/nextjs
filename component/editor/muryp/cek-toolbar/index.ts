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
  if (isSelect) {
    const mydata = Select(getCursor());
    // delete or add class use btn
    mydata.forEach((e) => {
      const getEl = document.getElementById(e.nama + "-btn");
      const option_el = document.getElementById(
        "option-toolbar"
      ) as HTMLOptionElement;
      const isOption = e.nama in toolbar_single_arr;
      // btn
      e.cek ? getEl?.classList.add("use") : getEl?.classList.remove("use");
      // option
      e.cek && !isOption && (option_el.value = e.command);
    });
  } else {
    const mydata = isNoSelect(getCursor());
    mydata.forEach((e) => {
      const getEl = document.getElementById(e.nama + "-btn");
      const option_el = document.getElementById(
        "option-toolbar"
      ) as HTMLOptionElement;
      const isOption = toolbar_single_arr.includes(e.nama);
      // btn
      e.cek ? getEl?.classList.add("use") : getEl?.classList.remove("use");
      // option
      e.cek && isOption && (option_el.value = e.command);
    });
    console.log(toolbar_single_arr)

    // const cek_normal = mydata.map((e) => {
    //   const cek = toolbar_single_arr.includes(e.nama);
    //   return cek ? true : null;
    //   // jika true change value
    // });
  }
}
