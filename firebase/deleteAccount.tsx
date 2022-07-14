import { getAuth, deleteUser, User } from "firebase/auth";
import SignIn from "./login";
export default async function deleteAccount(email:string,password:string) {
  await SignIn(email, password).then(() => {
    const auth = getAuth();
    const user = auth.currentUser as User;

    deleteUser(user)
      .then(() => {
        // User deleted.
      })
      .catch((err) => {
        // An error ocurred
        console.log(err);
      });
  });
}
