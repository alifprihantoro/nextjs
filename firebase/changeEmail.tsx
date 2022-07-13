import { getAuth, updateEmail, User } from "firebase/auth";
export default function UpdateEmail(Email:string) {
  const auth = getAuth();
  updateEmail(auth.currentUser as User, Email)
    .then(() => {
      // Email updated!
    })
    .catch((err) => {
      // An error occurred
      console.log(err)
    });
}
