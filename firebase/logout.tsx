import {signOut} from "firebase/auth";
import { FirebaseAuth } from './'

const SignOut = async()=> {
  await signOut(FirebaseAuth)
}
export default SignOut
