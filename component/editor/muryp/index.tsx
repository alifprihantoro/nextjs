import btnToolbar from "./toolbar-couple";
import btnToolbarSingle from "./toolbar-single";
import { toolbar_couple, toolbar_single, toolbar_single2 } from "./config";
import BtnToolbar from "./btn";
import OptionToolbar from "./option-toolbar";
import linkMarkdownBtn from "./link";
// import cekToolbar from "./cekToolbar";

export default function TesEditorText() {
// onClick={cekToolbar} onKeyDown={cekToolbar}
  return (
    <div>
      <textarea id="area" className="w-full h-32" ></textarea>
      <OptionToolbar toolbar={toolbar_single} btnToolbar={btnToolbarSingle}/>
      <BtnToolbar toolbar={toolbar_couple} btnToolbar={btnToolbar}/>
      <BtnToolbar toolbar={toolbar_single2} btnToolbar={btnToolbarSingle}/>
      <button onClick={()=>linkMarkdownBtn(false)}>link</button>'   '
      <button onClick={()=>linkMarkdownBtn(true)}>image</button>
    </div>
  );
}
