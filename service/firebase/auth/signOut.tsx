import { signOut } from "firebase/auth";
import { FirebaseAuth } from "..";

const FirebaseSignOut = async ({ context }: any) => {
  context.setisLoading(true);
  try {
    await signOut(FirebaseAuth);
    context.setIsLogin(false);
    context.setisLoading(false);
  } catch (err) {
    alert('gagal login')
  }
};
export default FirebaseSignOut;
