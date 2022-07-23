import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "..";
import UpdateUsrFirebase from "../crud/update/user";

/**
 * Service Firebase Sign UP
 *
 * need :
 * @extends setErrLogin,
 * @extends err,
 * @extends data,
 * @extends context
 */
const FirebaseSignUp = async ({ isAuth, err, data, context }: any) => {
  // cek if data not empty and error is empty and auth is signup
  if (
    isAuth === "signup" &&
    err.email === "" &&
    err.username === "" &&
    err.password === "" &&
    err.currentPasword === "" &&
    err.nama === "" &&
    data.password !== "" &&
    data.email !== "" &&
    data.currentPasword !== "" &&
    data.nama !== "" &&
    data.username !== ""
  ) {
    context.setisLoading(true);
    try {
      await createUserWithEmailAndPassword(
        FirebaseAuth,
        data.email,
        data.password
      ).then(() => {
        // update Name and username
        UpdateUsrFirebase({ data, context });
        context.setData({...context.data,signup:true,username:data.username})
        context.setisLoading(false);
      });
    } catch (err) {
      alert("email sudah digunakan");
      context.setisLoading(false);
    }
  } else {
    alert("apa ini");
    context.setisLoading(false);
  }
};
export default FirebaseSignUp;
