import {
  signInWithEmailAndPassword,
  updatePassword,
  User,
} from "firebase/auth";
import { FirebaseAuth } from "../..";

export default async function FirebaseUpdatePassword(
  email: string,
  currentPassword: string,
  password: string
) {
  await signInWithEmailAndPassword(FirebaseAuth, email, currentPassword).then(
    () => {
      const user = FirebaseAuth.currentUser as User;
      updatePassword(user, password);
    }
  );
}
