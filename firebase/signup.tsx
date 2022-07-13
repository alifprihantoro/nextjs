import {createUserWithEmailAndPassword} from "firebase/auth";
import { FirebaseAuth } from './'

const SignUp = async(email:string, password:string)=>{
  await createUserWithEmailAndPassword(FirebaseAuth, email, password)
}
export default SignUp
