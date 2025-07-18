import { DividerProps } from "@mantine/core";

import { Dayjs } from "./dayjs";

export type TimeIndicatorInput = {
  /** Any date within the week currently being displayed */
  current: Dayjs;

  /** Time to indicate */
  time: Dayjs;
} & Omit<DividerProps, "orientation">;
