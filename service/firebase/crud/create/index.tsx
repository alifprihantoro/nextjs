import { addDoc, collection, getDoc, doc, setDoc } from "firebase/firestore";
import { FirebaseFireStore } from "../../";

export default async function FirebaseCreate() {
  try {
    // Add a new document in collection "cities"
    const cityRef = doc(FirebaseFireStore, "post", "tes-post");
    await setDoc(cityRef, { title:'ini judul 2' }, { merge: true });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
