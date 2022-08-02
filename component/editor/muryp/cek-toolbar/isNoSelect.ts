import { toolbar_couple, type_el_single } from "../config";
import { typesgetCursor } from "../types";
import { select } from "./types";

export default function isNoSelect(getCursor: typesgetCursor):select[] {
  let { start, value } = getCursor;
  let val = value.substring(0, start);
  // cek is couple el
  const couple_el = toolbar_couple.map((e) => {
    const replace = e.pasang.replace(/\*/gm, "\\*");
    const re = new RegExp(replace, "gm");
    // cek has pasang
    const isHas = val.match(re)?.length as number;
    return {
      nama: e.nama,
      cek: isHas > 0 && isHas % 2 != 0,
    };
  });
  // cek is single el
  const single_el = type_el_single.map((e) => {
    // regex
    const re = new RegExp("^" + e.pasang + " ", "gm");
    // splite arr select
    const newVal = val.split("\n");
    // get value line now
    const get_val = value.split("\n")[newVal.length - 1];
    // cek is pasang
    let cek = re.test(get_val);
    cek = e.nama == "normal" ? !/^#/.test(get_val) : cek;
    return {
      nama: e.nama,
      cek,
    };
  });
  const result = single_el.concat(couple_el) as select[];
  return result;
}
