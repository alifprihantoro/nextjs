import Editor from "rich-markdown-editor";

export default function EditNew() {
  return (
    <Editor
  defaultValue="Hello world!"
/>
  )
}


// import dynamic from "next/dynamic";
// import "highlight.js/styles/github.css";
// import "highlight.js";
// import "react-quill/dist/quill.snow.css";
//
// const QuillNoSSRWrapper = dynamic(import("react-quill"), {
//   ssr: false,
//   loading: () => <p>Loading ...</p>,
// });
//
// const modules = {
//   toolbar: [
//     [{ header: ["1", "2", "3"] }],
//     [{ font: [] }],
//     [{ size: [] }],
//     ["bold", "italic", "underline", "strike", "blockquote"],
//     [
//       { list: "ordered" },
//       { list: "bullet" },
//       { indent: "-1" },
//       { indent: "+1" },
//     ],
//     ["link", "image", "video"],
//     ["clean"],
//     ["code"],
//     ["script"],
//     ["code-block"],
//   ],
//   clipboard: {
//     // toggle to add extra line breaks when pasting HTML:
//     matchVisual: true,
//   },
// };
// /*
//  * Quill editor formats
//  * See https://quilljs.com/docs/formats/
//  */
// const formats = [
//   "header",
//   "font",
//   "size",
//   "bold",
//   "code",
//   "code-block",
//   "script",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "list",
//   "bullet",
//   "indent",
//   "link",
//   "image",
//   "video",
// ];
//
// export default function EditNew() {
//   return (
//     <>
//       <QuillNoSSRWrapper
//         modules={modules}
//         formats={formats}
//         theme="snow"
//         onChange={(e) => console.log(e)}
//       />
//     </>
//   );
// }
