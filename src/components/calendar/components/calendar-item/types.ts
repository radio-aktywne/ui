import type {
  BoxComponentProps as MantineBoxComponentProps,
  PolymorphicComponentProps,
} from "@mantine/core";
import type { Dayjs } from "dayjs";
import type { ElementType, PropsWithoutRef } from "react";

export type BaseCalendarItemInput = MantineBoxComponentProps & {
  /** Color of the calendar item */
  color?: string;

  /** Any date within the week currently being displayed */
  current: Dayjs;

  /** End time of the calendar item */
  end: Dayjs;

  /** Start time of the calendar item */
  start: Dayjs;
};

export type CalendarItemInput<C extends ElementType = "div"> = PropsWithoutRef<
  PolymorphicComponentProps<C, BaseCalendarItemInput>
>;
