import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { FirebaseAuth, FirebaseFireStore } from "../..";

/**
 * update firestore user
 *
 * need :
 * @param uid;
 * @param username;
 */
export default async function UpdateUserNameFireStore(
  uid:string,
  username: string,
) {
  try {
    const db_username = collection(FirebaseFireStore, "username");
    await setDoc(doc(db_username, username), {
      uid,
    });
    const db_usr = collection(FirebaseFireStore, "usr/");
    await setDoc(doc(db_usr, uid), {
      username,
    });
    // });
  } catch (error) {
    console.log(error);
  }
}
