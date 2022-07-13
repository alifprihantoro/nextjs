import { getAuth, sendEmailVerification, User } from "firebase/auth";

export default function SendVerifikasi() {
  const auth = getAuth();
  sendEmailVerification(auth.currentUser as User).then(() => {
    // Email verification sent!
    // ...
  });
}
