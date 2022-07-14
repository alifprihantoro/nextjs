import { getAuth, updateEmail, User } from "firebase/auth";
import SignIn from "./login";
export default async function UpdateEmail(currentEmail:string,password:string,newEmail:string) {
  await SignIn(currentEmail,password).then(()=>{
  const auth = getAuth();
  updateEmail(auth.currentUser as User, newEmail)
  })
}
