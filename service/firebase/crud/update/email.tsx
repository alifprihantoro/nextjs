import { signInWithEmailAndPassword, updateEmail, User } from "firebase/auth";
import { FirebaseAuth } from "../..";

export default async function UpdateEmail(
  currentEmail: string,
  password: string,
  newEmail: string
) {
  // login
  await signInWithEmailAndPassword(FirebaseAuth, currentEmail, password).then(
    async () => {
      // change
      await updateEmail(FirebaseAuth.currentUser as User, newEmail);
    }
  );
}
