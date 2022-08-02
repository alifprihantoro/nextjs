import { typesgetCursor } from "./types";

/**
 * get info cursor in text area
 *
 * return :
 * @callback { select, part1, part3, start, end, value, area }
 */
export default function getCursor(): typesgetCursor {
  let area = document.getElementById("area") as HTMLTextAreaElement;
  const start = area?.selectionStart as number;
  const end = area?.selectionEnd as number;
  const value = area.value as string;
  const part1 = value.substring(0, start) as string;
  const select = value.substring(start, end) as string;
  const part3 = value.substring(end) as string;
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
