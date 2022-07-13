import {signInWithEmailAndPassword} from "firebase/auth";
import { FirebaseAuth } from './'

const SignIn = async(email:string, password:string)=> {
  await signInWithEmailAndPassword(FirebaseAuth, email, password)
}
export default SignIn
