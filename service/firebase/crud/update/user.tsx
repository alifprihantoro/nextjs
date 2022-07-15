import { updateProfile, User } from "firebase/auth";
import { FirebaseAuth } from "..";

export default async function UpdateUsrFirebase({
  displayName,
  photoURL,
}: any) {
  await updateProfile(FirebaseAuth.currentUser as User, {
    displayName,
    photoURL,
  })
    .then(() => {
      // Profile updated!
      // console.log("berhasil!!!!!!!!!!!!!!!");
    })
    .catch((error) => {
      // An error occurred
      console.log(error);
    });
  return (
    <>
      <h2>update</h2>
      <button>updateProfile</button>
    </>
  );
}