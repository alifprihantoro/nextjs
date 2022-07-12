const getErrMsg = (type:any)=> {
  switch (type) {
    case 'minLength':
      return 'minLength'
    default:
      return 'harus diisi'
  }
}
export function FormErrorLogin({error}:any){
if (!error) {
  return <></>
}
 const { type } = error
 const msg = getErrMsg(type)
 return <span className="text-red-900 font-bold">{msg}</span>
}

