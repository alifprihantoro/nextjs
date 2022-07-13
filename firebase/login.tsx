import {signInWithEmailAndPassword} from "firebase/auth";
import { FirebaseAuth } from './'

const SignIn = async(email:string, password:string)=> {
  const create = await signInWithEmailAndPassword(FirebaseAuth, email, password)
  console.log('ini signin :')
  console.log(create)
}
export default SignIn
