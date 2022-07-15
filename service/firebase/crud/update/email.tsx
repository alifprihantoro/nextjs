import { updateEmail, User } from "firebase/auth";
import { FirebaseAuth } from "../..";
import FirebaseSignIn from "../../auth/signin";

export default async function UpdateEmail(
  currentEmail: string,
  password: string,
  newEmail: string
) {
  await FirebaseSignIn(currentEmail, password).then(() => {
    updateEmail(FirebaseAuth.currentUser as User, newEmail);
  });
}
