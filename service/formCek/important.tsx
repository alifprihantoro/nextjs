export default function FormCekImportant(
  val: string,
  { setErr, setData, err, data}: any,
  name:string ) {
  let obj = {} as any
  if (val === "") {
    obj[name] = "mohon untuk diisi";
  } else {
    obj[name] = "";
  }
  setErr({...err,...obj});
  let obj2 = {} as any
  obj2[name] = val
  setData({...data,...obj2})
}
