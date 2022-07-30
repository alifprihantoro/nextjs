import { StacksEditor } from "@stackoverflow/stacks-editor";
import {useEffect} from "react";
import "@stackoverflow/stacks-editor/dist/styles.css";
import "@stackoverflow/stacks/dist/css/stacks.css";
import "@stackoverflow/stacks";

export default function EditorStac() {
  // console.log(StacksEditor)
  useEffect(()=>{
    new StacksEditor(
      document.querySelector("#editor-container") as HTMLElement,
      "*Your* **markdown** here",
    );
    },[])
    return <div id="editor-container"></div>;
}
