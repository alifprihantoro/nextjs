import React, { useEffect, useRef } from "react";

interface ckeditor { CKEditor:any, ClassicEditor:any }

export default function Editor({ onChange, editorLoaded, name, value }:any) {
  const editorRef = useRef() as any;
  const { CKEditor, ClassicEditor }:ckeditor = editorRef.current ||{ } ;

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
    };
  }, []);

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          data={value}
          onChange={(event:any, editor:any) => {
            const data = editor.getData();
            console.log({ event, editor, data })
            onChange(data);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
}
