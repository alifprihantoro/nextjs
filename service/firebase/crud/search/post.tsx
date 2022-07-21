import { collection, query, where, getDocs } from "firebase/firestore";
import { FirebaseFireStore } from "../..";

/**
 * get from firestore detail user
 *
 * need :
 */
export default async function getCollectionFireStore(collecsi: string) {
  try {
    const q = query(
      collection(FirebaseFireStore, "post"),
      where("capital", "==", true)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    return error;
  }
}
