import { signOut } from "firebase/auth";
import { FirebaseAuth } from "..";

const FirebaseSignOut = async () => {
  await signOut(FirebaseAuth);
};
export default FirebaseSignOut;
