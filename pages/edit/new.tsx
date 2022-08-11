import { doc, setDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import Button from "../../component/button";
import EditorInfoPost from "../../component/editor/info";
import TesEditorText from "../../component/editor/muryp";
import { loginContext, LoginContext } from "../../context/login";
import { FirebaseFireStore } from "../../service/firebase";

export default function EditNew() {
  const context = useContext(LoginContext) as loginContext;
  const [value, setValue] = useState("");
  const default_data = {
    judul: "",
    link: "",
    tag: "",
    description: "",
    user: "",
    Public: false,
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
  const strToArr = (name: string) => {
    return name.replace(/\s/gm, "").split(",");
  };
  // if save
  const click = async (e: any) => {
    e.preventDefault();
    try {
      const { judul, link, description, tag, user, Public } = data;
      const writer = strToArr(context.data.uid + "," + user);
      const kategory = strToArr(tag);
      const cityRef = doc(FirebaseFireStore, "post", link);
      await setDoc(
        cityRef,
        { judul, description, kategory, writer, content, Public },
        { merge: true }
      );
      alert("berhasil!");
    } catch (error) {
      console.log(error);
      alert("gagal update data!");
    }
  };
  const md = require("markdown-it")({
    html: false, // Enable HTML tags in source
    xhtmlOut: false, // Use '/' to close single tags (<br />).
    breaks: false, // Convert '\n' in paragraphs into <br>
    langPrefix: "language-", // CSS language prefix for fenced blocks. Can be
    linkify: true, // Autoconvert URL-like text to links
    typographer: false,
  });
  return (
    <>
      <Button click={(e) => click(e)}>save</Button>
      <EditorInfoPost state={state}/>
      <TesEditorText setValue={setValue} />
      <div dangerouslySetInnerHTML={{ __html: md.render(value) }} />
    </>
  );
}
