import { updateProfile, User } from "firebase/auth";
import { FirebaseAuth } from "../..";
import CekIsLogin from "../../auth/cekIsLogin";

export default async function UpdateUsrFirebase({ data, context }: any) {
  const { nama } = data;
  await updateProfile(FirebaseAuth.currentUser as User, {
    displayName: nama,
  })
    .then(() => {
      // Profile updated!
      CekIsLogin(context);
    })
    .catch(() => {
      // An error occurred
      alert("gagal update data");
    });
}
