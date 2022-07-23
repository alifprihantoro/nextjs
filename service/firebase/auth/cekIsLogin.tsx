import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "..";
import GetDataFromFirebase from "../crud/get/dataUser";
import UpdateUserNameFireStore from "../crud/update/username";

export default function CekIsLogin({ setisLoading, setIsLogin, setData,data }: any) {
  // mengambil data user short
  try {
    onAuthStateChanged(FirebaseAuth, (user) => {
      // jika user login
      if (user) {
        console.log(data.signup)
        console.log(data.username)
        data.signup && UpdateUserNameFireStore(user.uid, data.username);
        setIsLogin(true);
        // update data short
        GetDataFromFirebase({ setData, user });
        setisLoading(false);
        return;
      } else {
        // context.setIsLogin(false);
        setisLoading(false);
        return;
      }
    });
  } catch (error) {}
}
