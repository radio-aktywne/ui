import {
  createPolymorphicComponent,
  Divider as MantineDivider,
} from "@mantine/core";
import clsx from "clsx";

import type { BaseTimeIndicatorInput, TimeIndicatorInput } from "./types";

import { dayjs } from "../../../../vars/dayjs";
import classes from "./styles.module.css";

/** Indicator of the current time in the calendar */
export const TimeIndicator = createPolymorphicComponent<
  "div",
  BaseTimeIndicatorInput
>(function TimeIndicator({
  className,
  color = "ra-red",
  current,
  style,
  time,
  ...input
}: TimeIndicatorInput) {
  const localCurrent = dayjs(current).local();
  const localTime = dayjs(time).local();

  const weekStart = localCurrent.startOf("week");
  const weekEnd = weekStart.add(1, "week");

  if (!localTime.isBetween(weekStart, weekEnd, null, "[)")) return null;

  return (
    <MantineDivider
      className={clsx(classes.indicator, className)}
      color={color}
      style={{
        ...style,
        "--hour": localTime.hour(),
        "--minute": localTime.minute(),
      }}
      {...input}
    />
  );
});
