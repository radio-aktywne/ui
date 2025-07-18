import { TableGridInput } from "../table-grid";
import { Dayjs } from "./dayjs";

export type CalendarInput = {
  /** Any date within the week to display */
  current?: Dayjs;

  /** Current time */
  now?: Dayjs;
} & Omit<TableGridInput, "cellHeight" | "cellWidth" | "columns" | "rows">;
