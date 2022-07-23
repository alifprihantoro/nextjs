/**
 * cek if not empty
 *
 * need :
 * @param val : value cek
 * @param state : get err and data state
 * @param name : name form for err and data
 */
export default function FormCekImportant(
  val: string,
  { setErr, setData, err, data }: any,
  name: string
) {
  const errName = val === "" ? "mohon untuk diisi" : "";
  setErr({ ...err, [name]: errName });
  // let obj2 = {} as any
  // obj2[name] = val
  setData({ ...data, [name]: val });
}
