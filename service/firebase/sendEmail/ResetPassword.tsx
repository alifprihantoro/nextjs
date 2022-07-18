import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default async function SendEmailResetPassword(email: string) {
  const auth = getAuth();
  try {
    await sendPasswordResetEmail(auth, email).then(() => {
      // Password reset email sent!
      alert("email berhasil dikirim, jika tidak ada, maka cek di spam");
    });
  } catch (err) {
    alert("email gagal dikirim!\nmohon periksa kembali!");
  }
}
