import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import Button from "../../component/button";
import MyEditor from "../../component/editor";
import EditorInfoPost from "../../component/editor/info";
import { FirebaseFireStore } from "../../service/firebase";
import getCollectionFireStore from "../../service/firebase/crud/get/getCollectionFireStore";

export default function EditNew() {
  const default_data = {
    judul: "",
    link: "",
    tag: "",
    description: "",
    user: "",
  };
  const [content, setContent] = useState("");
  const [data, setData] = useState(default_data);
  const [err, setErr] = useState(default_data);
  const state = {
    data,
    setData,
    err,
    setErr,
  };
  const strToArr = (name:string)=> {
      name.split(",");
      return name.replace(/\s/gm, "");
  }
  // if save
  const click = async (e: any) => {
    e.preventDefault();
    try {
      let { judul, link, description, tag, user } = data;
      user = strToArr(user)
      tag = strToArr(tag)
      const cityRef = doc(FirebaseFireStore, "usr", link);
      await setDoc(
        cityRef,
        { judul, link, description, tag, user, content },
        { merge: true }
      );
      alert("berhasil!");
    } catch (error) {
      alert("gagal update data!");
    }
  };
  return (
    <>
      <Button click={(e) => click(e)}>save</Button>
      <EditorInfoPost state={state} />
      <MyEditor content={content} setContent={setContent} />
    </>
  );
}
