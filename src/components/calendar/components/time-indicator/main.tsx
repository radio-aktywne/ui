import { Divider } from "@mantine/core";
import clsx from "clsx";

import dayjs from "./dayjs";
import classes from "./styles.module.css";
import { TimeIndicatorInput } from "./types";

/** Indicator of the current time in the calendar */
export function TimeIndicator({
  className,
  color = "ra-red",
  current,
  style,
  time,
  ...props
}: TimeIndicatorInput) {
  const localCurrent = dayjs(current).local();
  const localTime = dayjs(time).local();

  const weekStart = localCurrent.startOf("week");
  const weekEnd = weekStart.add(1, "week");

  if (!localTime.isBetween(weekStart, weekEnd, null, "[)")) return null;

  return (
    <Divider
      className={clsx(classes.indicator, className)}
      color={color}
      style={{
        ...style,
        "--hour": localTime.hour(),
        "--minute": localTime.minute(),
      }}
      {...props}
    />
  );
}
