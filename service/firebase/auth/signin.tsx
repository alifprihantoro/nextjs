import {signInWithEmailAndPassword} from "firebase/auth";
import {FirebaseAuth} from "..";

const FirebaseSignIn = async(email:string, password:string,setErrLogin:any)=> {
  try {
  await signInWithEmailAndPassword(FirebaseAuth, email, password)
  console.log('hai')
  } catch (err) {
    setErrLogin("email/password salah");
  }
}
export default FirebaseSignIn
