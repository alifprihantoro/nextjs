import { getAuth, updateProfile, User } from "firebase/auth";

export default function UpdateUsrFirebase({displayName, photoURL }: any) {
  const auth = getAuth();
  updateProfile(auth.currentUser as User, {
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
    )
}