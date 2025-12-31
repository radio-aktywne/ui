import type {
  DividerProps as MantineDividerProps,
  PolymorphicComponentProps,
} from "@mantine/core";
import type { Dayjs } from "dayjs";
import type { ElementType } from "react";

export type BaseTimeIndicatorInput = Omit<
  MantineDividerProps,
  "orientation"
> & {
  /** Any date within the week currently being displayed */
  current: Dayjs;

  /** Time to indicate */
  time: Dayjs;
};

export type TimeIndicatorInput<C extends ElementType = "div"> =
  PolymorphicComponentProps<C, BaseTimeIndicatorInput>;
