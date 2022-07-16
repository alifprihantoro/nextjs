import { updateProfile, User } from "firebase/auth";
import { FirebaseAuth } from "../..";

export default async function UpdateUsrFirebase({ data }: any) {
  const { nama } = data;
  const photoURL = data.photoURL === "" ? "/user.png" : data.photoURL;
  await updateProfile(FirebaseAuth.currentUser as User, {
    displayName:nama,
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
}
