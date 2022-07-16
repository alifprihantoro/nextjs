import Link from "next/link"

interface props{
  children:JSX.Element | JSX.Element[] | string,
  to:string
}

/**
 * btn style
 *
 * need :
 * @function href : tujuan.
 * @param {Childern} Childern : content.
 */
export default function LINK({children,to}:props) {
  return (
   <Link href={to}><a className="bg-blue-900 rounded p-3 leading-9 text-white">{children}</a></Link> 
  )
}

