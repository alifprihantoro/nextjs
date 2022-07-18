import { getAuth, sendEmailVerification, User } from "firebase/auth";

export default async function SendVerifikasi() {
  const auth = getAuth();
  try {
  await sendEmailVerification(auth.currentUser as User).then(() => {
    // Email verification sent!
    alert('cek email!')
  });
  } catch (error) {
    alert('Email gagal dikirim...')
  }
}
