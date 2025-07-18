import { Box, parseThemeColor, useMantineTheme } from "@mantine/core";
import clsx from "clsx";

import dayjs from "./dayjs";
import classes from "./styles.module.css";
import { CalendarItemInput } from "./types";
import { splitIntoDailyParts } from "./utils";

/** Item in the calendar */
export function CalendarItem({
  className,
  color,
  current,
  end,
  start,
  style,
  ...props
}: CalendarItemInput) {
  const theme = useMantineTheme();

  const parsedColor = parseThemeColor({
    color: color ?? theme.primaryColor,
    theme: theme,
  });
  const resolvedColor = parsedColor.isThemeColor
    ? `var(${parsedColor.variable})`
    : parsedColor.value;

  const localCurrent = dayjs(current).local();
  const localEnd = dayjs(end).local();
  const localStart = dayjs(start).local();

  const weekStart = localCurrent.startOf("week");
  const weekEnd = weekStart.add(1, "week");

  const parts = splitIntoDailyParts(localStart, localEnd);
  const partsInWeek = parts.filter(
    (part) =>
      part.start.isBetween(weekStart, weekEnd, null, "[]") &&
      part.end.isBetween(weekStart, weekEnd, null, "[]"),
  );

  return partsInWeek.map((part, i) => (
    <Box
      className={clsx(classes.item, className)}
      key={i}
      style={{
        ...style,
        "--border-color": resolvedColor,
        "--day": part.start.weekday() + 1,
        "--end-hour":
          part.end.isSame(part.end.startOf("day")) &&
          !part.end.isSame(part.start.startOf("day"))
            ? 24
            : part.end.hour(),
        "--end-minute": part.end.minute(),
        "--start-hour": part.start.hour(),
        "--start-minute": part.start.minute(),
      }}
      {...props}
    />
  ));
}
