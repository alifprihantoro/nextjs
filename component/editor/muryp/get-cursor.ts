import { typesgetCursor } from "./types";

export default function getCursor(): typesgetCursor {
  let area = document.getElementById("area") as HTMLTextAreaElement;
  const start = area?.selectionStart;
  const end = area?.selectionEnd;
  const value = area.value;
  const part1 = value.substring(0, start);
  const select = value.substring(start, end);
  const part3 = value.substring(end);
  return {
    select,
    part1,
    part3,
    start,
    end,
    value,
    area,
  };
}
