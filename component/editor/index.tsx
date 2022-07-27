import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import {useState} from "react";

// clien render
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

// modules
const modules = {
  toolbar: [
    [{ header: ["1", "2", "3"] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
    ["code"],
    ["script"],
    ["code-block"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

export default function MyEditor({content,setContent}:any) {
  return (
    <>
      <QuillNoSSRWrapper
        className=""
        modules={modules}
        defaultValue={content}
        theme="snow"
        onChange={setContent}
      />
    </>
  );
}
