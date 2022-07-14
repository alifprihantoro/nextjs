import {
  getAuth,
  updatePassword,
  User,
} from "firebase/auth";
import SignIn from "./login";


export default async function ChangePassword(email:string,currentPassword:string,password:string) {
  await SignIn(email,currentPassword).then(()=>{
  const auth = getAuth();
  const user = auth.currentUser as User;
  updatePassword(user, password)
  })
};
