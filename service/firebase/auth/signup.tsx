import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "..";
import UpdateUsrFirebase from "../crud/update/user";

/**
 * Service Firebase Sign UP
 *
 * need :
 * @extends setErrLogin,
 * @extends isAuth,
 * @extends err,
 * @extends data,
 * @extends context
 */
const FirebaseSignUp = async ({
  setErrLogin,
  isAuth,
  err,
  data,
  context
}: any) => {
  // cek if data not empty and error is empty and auth is signup
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
    context.setisLoading(true);
    try {
      await createUserWithEmailAndPassword(
        FirebaseAuth,
        data.email,
        data.password
      ).then(() => {
        // updateName
        UpdateUsrFirebase({ data });
    context.setisLoading(false);
      });
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
