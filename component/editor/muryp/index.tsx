import btnToolbar from "./toolbar-couple";
import btnToolbarSingle from "./toolbar-single";
import { toolbar_couple, toolbar_single, toolbar_single2 } from "./config";
import BtnToolbar from "./btn";
import OptionToolbar from "./option-toolbar";
import linkMarkdownBtn from "./link";
import cekToolbar from "./cek-toolbar";
import { list_icon } from "./icon";
import style from "./popup.module.scss";
import UploadFileComp from "../../upload";
import getCursor from "./get-cursor";

export default function TesEditorText({ setValue }: any) {
  const class_name = "bg-blue-900/80 p-2 m-1 rounded text-white";
  const icon = list_icon
    .map((e) => `#${e.nama.replace(/\s/g, "-")}-btn {${e.svg}}`)
    .join("");
  const upload = () => {
    const my_id = document.getElementById("pop-up-editor") as HTMLElement;
    my_id.classList.toggle("hidden");
  };

  return (
    <div>
      <style>{`
        .use {
          background-color:#1e3a8a;
        }
.btn {
  color: transparent;
  width: 50px;
  height: 50px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 2rem;
}
        ${icon}
      `}</style>
      <OptionToolbar
        class_name={class_name}
        toolbar={toolbar_single}
        btnToolbar={btnToolbarSingle}
      />
      <BtnToolbar
        className={class_name}
        toolbar={toolbar_couple}
        btnToolbar={btnToolbar}
      />
      <BtnToolbar
        className={class_name}
        toolbar={toolbar_single2}
        btnToolbar={btnToolbarSingle}
      />
      <button
        className={class_name + " btn"}
        id="link-btn"
        onClick={() => linkMarkdownBtn(false)}
      >
        link
      </button>
      <button
        className={class_name + " btn"}
        id="img-btn"
        onClick={() => linkMarkdownBtn(true)}
      >
        image
      </button>
      <button
        className={class_name + " btn"}
        id="img-upload-btn"
        onClick={upload}
      >
        image
      </button>
      <div className="hidden" id="pop-up-editor">
        <UploadFileComp />
      </div>
      <textarea
        className="bg-blue-100 w-full max-w-[720px] rounded h-32 block "
        onClick={cekToolbar}
        onKeyDown={cekToolbar}
        onKeyUp={cekToolbar}
        onChange={(e) => setValue(e.target.value)}
        id="area"
      ></textarea>
    </div>
  );
}
