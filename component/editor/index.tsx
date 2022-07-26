// import RichEditor from "rich-markdown-editor";
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function MyEditor() {
   const [editorState, setEditorState] = useState('');
  return (
    <div>
      <h1>React Editors</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}>
        <Editor
          onEditorStateChange={(e)=> console.log(e)}
        />
      </div>
    </div>
  );
}

  /*   <RichEditor
    *     id="My-Editor"
    * defaultValue="Hello world!"
    *     readOnly={false}
    *     onChange={e=>tes(e)}
    *   /> */
