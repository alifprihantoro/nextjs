import {
  getAuth,
  updatePassword,
  User,
} from "firebase/auth";


export default function ChangePassword(password:string) {
  const auth = getAuth();
  const user = auth.currentUser as User;
  updatePassword(user, password)
};
