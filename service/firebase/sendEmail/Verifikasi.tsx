import { getAuth, sendEmailVerification, User } from "firebase/auth";

export default async function SendVerifikasi() {
  const auth = getAuth();
  await sendEmailVerification(auth.currentUser as User).then(() => {
    // Email verification sent!
    console.log('hasil')
  });
}
