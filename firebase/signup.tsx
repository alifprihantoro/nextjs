import {createUserWithEmailAndPassword} from "firebase/auth";
import { FirebaseAuth } from './'

const SignUp = async(email:string, password:string)=>{
  // await createUserWithEmailAndPassword(FirebaseAuth, email, password)
  const create=await createUserWithEmailAndPassword(FirebaseAuth, email, password)
  console.log('ini signup')
  console.log(create)
}
export default SignUp
