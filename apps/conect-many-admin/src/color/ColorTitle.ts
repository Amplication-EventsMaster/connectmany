import { Color as TColor } from "../api/color/Color";

export const COLOR_TITLE_FIELD = "id";

export const ColorTitle = (record: TColor): string => {
  return record.id?.toString() || String(record.id);
};
