import { updatePassword, User } from "firebase/auth";
import { FirebaseAuth } from "../..";
import FirebaseSignIn from "../../auth/signin";

export default async function FirebaseUpdatePassword(
  email: string,
  currentPassword: string,
  password: string
) {
  await FirebaseSignIn(email, currentPassword).then(() => {
    const user = FirebaseAuth.currentUser as User;
    updatePassword(user, password);
  });
}
