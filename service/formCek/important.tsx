export default function FormCekImportant(
  val: string,
  { setErr, setData, err, data}: any,
  name:string ) {
  if (val === "") {
    err[name] = "mohon untuk diisi";
  } else {
    err[name] = "";
  }
  setErr({ ...err, err });
  data[name] = val
  setData({...data,data})
}
