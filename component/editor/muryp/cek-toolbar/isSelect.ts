import { toolbar_couple, type_el_single } from "../config";
import { typesgetCursor } from "../types";
import { select } from "./types";

/**
 * cek what command in select mode
 *
 * need :
 * @function getCursor: for info cursor;
 */
export default function isSelect(getCursor: typesgetCursor): select[] {
  let { select } = getCursor;
  const select_arr = select.split("\n");
  // cek is couple el
  const couple_el =
    select_arr.length < 2
      ? toolbar_couple.map((e) => {
          return {
            nama: e.nama,
            cek: false,
            command: e.pasang,
          };
        })
      : [{ nama: "", cek: false,command:'' }];
  // cek is single el
  const single_el = type_el_single.map((e) => {
    // regex
    const re = new RegExp("^" + e.pasang + " ", "gm");
    // cek is on command
    const cek = select_arr.map((el) => {
      return e.nama == "normal" ? !/^#/.test(el) : re.test(el);
    });
    // if one false be false
    const checker = (arr: boolean[]): boolean => arr.every(Boolean);
    return {
      nama: e.nama,
      cek: checker(cek),
      command: e.pasang,
    };
  });
  const result = single_el.concat(couple_el);
  return result;
}
