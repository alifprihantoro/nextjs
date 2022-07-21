import {onAuthStateChanged} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { FirebaseAuth, FirebaseFireStore } from "../..";
export default async function UpdateUserNameFireStore(
  context: any,
  username: string
) {
  try {
    // onAuthStateChanged(FirebaseAuth, async (user: any) => {
    const citiesRef = collection(FirebaseFireStore, "username");
    await setDoc(doc(citiesRef, username), {
      uid: context.data.uid,
    });
    // });
  } catch (error) {
    console.log(error);
  }
}
