import {onAuthStateChanged} from "firebase/auth";
import {FirebaseAuth} from "..";
import GetDataFromFirebase from "../../../not-use/form/showData";

export default function CekIsLogin({setisLoading,setIsLogin,setData}:any) {
  // mengambil data user short
  onAuthStateChanged(FirebaseAuth, (user: any) => {
    // jika user login
    if (user) {
      setIsLogin(true);
      // console.log(user);
      // update data short
      GetDataFromFirebase({ setData, user });
      setisLoading(false);
      return;
    }
    // context.setIsLogin(false);
    setisLoading(false);
    return;
  });
}
