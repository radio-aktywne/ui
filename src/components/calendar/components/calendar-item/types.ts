import { BoxProps, ElementProps } from "@mantine/core";

import { Dayjs } from "./dayjs";

export type CalendarItemInput = {
  /** Color of the calendar item */
  color?: string;

  /** Any date within the week currently being displayed */
  current: Dayjs;

  /** End time of the calendar item */
  end: Dayjs;

  /** Start time of the calendar item */
  start: Dayjs;
} & BoxProps &
  Omit<ElementProps<"div", keyof BoxProps>, "color">;
