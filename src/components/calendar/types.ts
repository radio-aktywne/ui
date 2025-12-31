import type { Dayjs } from "dayjs";
import type { ElementType } from "react";

import type { TableGridInput } from "../table-grid";

export type CalendarInput<C extends ElementType = "div"> = Omit<
  TableGridInput<C>,
  "cellHeight" | "cellWidth" | "columns" | "rows"
> & {
  /** Any date within the week to display */
  current?: Dayjs;

  /** Current time */
  now?: Dayjs;
};
