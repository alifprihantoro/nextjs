import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "..";
import GetDataFromFirebase from "../crud/get/dataUser";

export default function CekIsLogin({ setisLoading, setIsLogin, setData,data }: any) {
  // mengambil data user short
  try {
    onAuthStateChanged(FirebaseAuth, (user) => {
      // jika user login
      if (user) {
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
