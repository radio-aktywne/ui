import { Text } from "@mantine/core";
import clsx from "clsx";
import { Fragment } from "react";

import { TableGrid } from "../table-grid";
import { CalendarItem } from "./components/calendar-item";
import { TimeIndicator } from "./components/time-indicator";
import { hours } from "./constants";
import dayjs from "./dayjs";
import classes from "./styles.module.css";
import { CalendarInput } from "./types";

/** Calendar displaying a week */
export function Calendar({
  children,
  className,
  current,
  grow = true,
  now,
  ...props
}: CalendarInput) {
  const localNow = dayjs(now).local();
  const localCurrent = dayjs(current ?? now).local();

  const weekStart = localCurrent.startOf("week");
  const days = [...Array(7).keys()].map((i) => weekStart.add(i, "day"));

  return (
    <TableGrid
      cellHeight="minmax(0, 1fr)"
      cellWidth="minmax(0, 1fr)"
      className={clsx(classes.grid, className)}
      columns={days.length}
      grow={grow}
      rows={hours.length}
      {...props}
    >
      <TableGrid.Corner className={classes.corner} />
      {days.map((day, i) => (
        <TableGrid.ColumnsHeader className={classes.columnsHeader} key={i}>
          <Text size="xs">{day.format("dddd")}</Text>
          <Text fw="bold" size="xs">
            {day.format("DD.MM")}
          </Text>
        </TableGrid.ColumnsHeader>
      ))}
      {hours.map((hour, i) => (
        <Fragment key={i}>
          <TableGrid.RowsHeader className={classes.rowsHeader}>
            <Text fw="bold" size="xs">
              {dayjs().hour(hour).format("HH")}
            </Text>
          </TableGrid.RowsHeader>
          {days.map((_, j) => (
            <TableGrid.Cell
              className={clsx(
                classes.cell,
                (i + j) % 2 === 0 ? classes.cellEven : classes.cellOdd,
              )}
              key={`${i}-${j}`}
            />
          ))}
        </Fragment>
      ))}
      <TimeIndicator current={localCurrent} time={localNow} />
      {children}
    </TableGrid>
  );
}

Calendar.Item = CalendarItem;
