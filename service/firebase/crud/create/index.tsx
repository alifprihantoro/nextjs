import { addDoc, collection, getDoc, doc, setDoc } from "firebase/firestore";
import { FirebaseFireStore } from "../../";

export default async function FirebaseCreate() {
  try {
    // Add a new document in collection "cities"
    const cityRef = doc(FirebaseFireStore, "post", "tes-post");
    await setDoc(cityRef, { title:'ini judul 2' }, { merge: true });
    //   collection(FirebaseFireStore, "usr",'R0TyX1i8jldzKT8IyzdBT4CAkbd2'),
    //   {
    //     username: "nahkan2",
    //     state: "CA",
    //     country: "USA",
    //   }
    // );
    // const dd = doc(FirebaseFireStore, collection);
    // const docRef = await addDoc(collection(FirebaseFireStore, "usr"), {
    //   first: "Ada",
    //   last: "Lovelace",
    //   born: 1815,
    // });
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
