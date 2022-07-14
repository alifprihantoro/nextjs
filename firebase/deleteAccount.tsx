import { getAuth, deleteUser, User } from "firebase/auth";
import SignIn from "./login";
import SignOut from "./logout";
export default async function DeleteAccount({
  context,
  setErrLogin,
  password,
}: any) {
  context.setisLoading(true);
  setErrLogin("");
  await SignIn(context.data.email, password).then(() => {
    const auth = getAuth();
    const user = auth.currentUser as User;

    deleteUser(user)
      .then(async () => {
        // User deleted.
        console.log("sucses delete");
        await SignOut();
        await context.setIsLogin(false)
      })
      .catch((err) => {
        // An error ocurred
        console.log(err);
        setErrLogin("delete gagal");
      });
  });
}
