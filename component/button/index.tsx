
interface Button{
  children:JSX.Element | JSX.Element[] | string,
  click:React.MouseEventHandler<HTMLButtonElement>
}

/**
 * btn style
 *
 * need :
 * @function click : if klicked btn.
 * @param {Childern} Childern : content.
 */
export default function Button({children,click}:Button) {
  return (
    <button className="bg-blue-900 rounded p-3 " onClick={click}>{children}</button>
  )
}

