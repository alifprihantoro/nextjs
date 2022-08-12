import { useContext, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../service/firebase";
import { loginContext, LoginContext } from "../../context/login";
import getCursor from "../editor/muryp/get-cursor";
export default function UploadFileComp() {
  const upload = () => {
    const my_id = document.getElementById("pop-up-editor") as HTMLElement;
    my_id.classList.toggle("hidden");
  };
  const context = useContext(LoginContext) as loginContext;
  // State to store uploaded file
  const [file, setFile] = useState("") as any;

  // progress
  const [percent, setPercent] = useState(0);

  // Handle file upload event and update state
  function handleChange(event: any) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }

    const storageRef = ref(storage, `/${context.data.uid}/img/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => alert("connection error"),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          let { part1, part3, area } = getCursor();
          const replaceToMd = `[](${url})`;
          area.value = part1 + "!" + replaceToMd + part3;
          area.setSelectionRange(part1.length + 2, part1.length + 2);
          upload();
          area.focus();
        });
      }
    );
  };
  return (
    <div>
      <input type="file" onChange={handleChange} accept="/image/*" />
      <button
        onClick={() => {
          handleUpload();
        }}
        className="bg-blue-900/90 p-3 m-3 uppercase font-bold text-white rounded"
      >
        Upload to Firebase
      </button>
      <p>{percent} % done</p>
      <button
        className="bg-blue-900/90 p-3 m-3 uppercase font-bold text-white rounded"
        onClick={upload}
      >
        cancel
      </button>
    </div>
  );
}
