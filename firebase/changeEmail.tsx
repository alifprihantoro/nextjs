import { getAuth, updateEmail, User } from "firebase/auth";
export default async function UpdateEmail(Email:string) {
  const auth = getAuth();
  await updateEmail(auth.currentUser as User, Email)
    .then(() => {
      // Email updated!
    })
    .catch((err) => {
      // An error occurred
      console.log(err)
    });
}
