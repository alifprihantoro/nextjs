export default function FormCekNotImportant(
  val: string,
  { setData,data }: any,
  nama:string
) {
  data[nama] = val
  setData({...data,data})
}
