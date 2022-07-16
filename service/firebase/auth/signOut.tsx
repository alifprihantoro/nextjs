import { signOut } from "firebase/auth";
import { FirebaseAuth } from "..";

const FirebaseSignOut = async ({context}:any) => {
  await signOut(FirebaseAuth);
};
export default FirebaseSignOut;
