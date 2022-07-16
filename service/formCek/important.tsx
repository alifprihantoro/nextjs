export default function FormCekImportant(
  val: string,
  { setErr, setData, err, data }: any,
  name: string
) {
  // let obj = {} as any
  // if (val === "") {
  //   obj[name] = "mohon untuk diisi";
  // } else {
  //   obj[name] = "";
  // }
  const errName = val === "" ? "mohon untuk diisi" : "";
  setErr({ ...err, [name]: errName });
  // let obj2 = {} as any
  // obj2[name] = val
  setData({ ...data, [name]: val });
}
