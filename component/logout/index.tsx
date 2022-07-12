import {SignOut} from "../../firebase";

export default function Logout() {
  return (
<button className="bg-red-900 rounded-xl text-white p-3" onClick={SignOut}>
Logout
</button>
  )
}
