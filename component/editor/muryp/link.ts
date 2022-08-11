import getCursor from "./get-cursor";

export default function linkMarkdownBtn(isImage: boolean) {
  let { part1, part3, start, end, value, area } = getCursor();
  const textQ = isImage ? "alt" : "text";
  let link = prompt("Please enter your link", "https://") || "";
  let text = link !='' && prompt("Please enter your " + textQ, textQ + "...") || "";
  if (link == "") {
  } else {
    const replaceToMd = text == "" && !isImage ? link : `[${text}](${link})`;
    const image = isImage ? "!" : "";
    area.value = part1 + image + replaceToMd + part3;
  }
  area.focus();
}
