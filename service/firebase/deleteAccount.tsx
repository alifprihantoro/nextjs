import {
  getAuth,
  deleteUser,
  User,
  signInWithEmailAndPassword,
} from "firebase/auth";
import router from "next/router";
import { FirebaseAuth } from ".";
import FirebaseSignOut from "./auth/signOut";

export default async function DeleteAccountFirebase({
  context,
  setErr,
  password,
  err,
}: any) {
  setErr({ ...err, delete: "" });
  try {
    await signInWithEmailAndPassword(
      FirebaseAuth,
      context.data.email,
      password
    ).then(() => {
      const user = FirebaseAuth.currentUser as User;
      deleteUser(user).then(async () => {
        // User deleted.
        await FirebaseSignOut({ context });
        await context.setIsLogin(false);
        router.push("/");
      });
    });
  } catch (error) {
    console.log(error);
  }
}
