import {
  deleteUser,
  User,
  signInWithEmailAndPassword,
} from "firebase/auth";
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
      });
    });
  } catch (error) {
    alert('gagal logout!')
  }
}
