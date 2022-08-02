import {toolbar_single} from "../config";
import getCursor from "../get-cursor";
import isNoSelect from "./isNoSelect";
import Select from "./isSelect";
import { select, noSelect } from "./types";

/**
 * this type return data command (bold/heading)
 */
type result = select[] | noSelect[];
export default function cekToolbar(): void {
  let { start, end } = getCursor();
  /** cek is select/block*/
  const isSelect = start != end;
  /**
   * this data return void add/remove class on toolbar
   * need :
   * @function getCursor : get info cursor;
   */
  if (isSelect) {
    // delete or add class use btn
    Select(getCursor()).forEach((e) => {
      const getEl = document.getElementById(e.nama + "-btn");
      const option_el = document.getElementById('option-toolbar') as HTMLOptionElement;
      const isOption = e.nama in toolbar_single
      // btn
      e.cek && isOption ? getEl?.classList.add("use") : getEl?.classList.remove("use");
      // option
      e.cek && !isOption ? option_el.value = e.nama : option_el.value = '';
    });
  } else {
    isNoSelect(getCursor()).forEach((e) => {
      const getEl = document.getElementById(e.nama + "-btn");
      const option_el = document.getElementById('option-toolbar') as HTMLOptionElement;
      const isOption = e.nama in toolbar_single
      // btn
      e.cek && isOption ? getEl?.classList.add("use") : getEl?.classList.remove("use");
      // option
      e.cek && !isOption ? option_el.value = e.nama : option_el.value = '';
    });
  }
}
