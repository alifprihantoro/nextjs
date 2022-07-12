import {SignOut} from "../../firebase";

export default function Logout() {
  return (
<button onClick={SignOut}>
Logout
</button>
  )
}
