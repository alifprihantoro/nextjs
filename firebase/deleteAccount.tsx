import { getAuth, deleteUser, User } from "firebase/auth";
export default function deleteAccount() {
  const auth = getAuth();
  const user = auth.currentUser as User;

  deleteUser(user)
    .then(() => {
      // User deleted.
    })
    .catch((err) => {
      // An error ocurred
      console.log(err)
    });
}
