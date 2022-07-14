import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default async function SendEmailResetPassword(email: string) {
  const auth = getAuth();
  await sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}
