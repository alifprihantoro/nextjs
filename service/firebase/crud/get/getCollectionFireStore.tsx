import { doc, getDoc } from "firebase/firestore";
import { FirebaseFireStore } from "../..";

/**
 * get from firestore detail user
 *
 * need :
 * @argument collection: for where collection use;
 * @argument uid: for where uid to get;
 */
export default async function getCollectionFireStore(collection: string) {
  try {
    const docRef = doc(FirebaseFireStore, collection);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return "no such document";
    }
  } catch (error) {
    return error;
  }
}
