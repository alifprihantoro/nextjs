import {signInWithEmailAndPassword} from "firebase/auth";
import {FirebaseAuth} from "..";

const FirebaseSignIn = async(email:string, password:string,setErrLogin:any,{isAuth,err,data,context}:any)=> {
  if (isAuth === "signin" && err.email === "" && err.password === '' && data.password !== '' && data.email !== "") {
    try {
    await signInWithEmailAndPassword(FirebaseAuth, email, password)
    } catch (err) {
      setErrLogin("email/password salah");
    }
  }
  else{
  setErrLogin("");
  context.setisLoading(false);
  setErrLogin("Mohon diperiksa kembali");
  context.setisLoading(false);
  }
}
export default FirebaseSignIn
