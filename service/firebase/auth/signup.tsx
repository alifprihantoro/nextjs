import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "..";
import UpdateUsrFirebase from "../crud/update/user";

const FirebaseSignUp = async ({
  setErrLogin,
  isAuth,
  err,
  data,
  context
}: any) => {
  if (
    isAuth === "signup" &&
    err.email === "" &&
    err.password === "" &&
    err.currentPasword === "" &&
    err.nama === "" &&
    data.password !== "" &&
    data.email !== "" &&
    data.currentPasword !== "" &&
    data.nama !== ""
  ) {
    context.setIsLogin(true)
    try {
      await createUserWithEmailAndPassword(
        FirebaseAuth,
        data.email,
        data.password
      ).then(() => {
        // updateName
        UpdateUsrFirebase({ data });
        console.log("berhasil");
      });
    context.setisLoading(false);
    } catch (err) {
    setErrLogin("email/password salah");
    context.setisLoading(false);
    }
  } else {
    setErrLogin("");
    setErrLogin("Mohon diperiksa kembali");
    context.setisLoading(false);
  }
};
export default FirebaseSignUp;
