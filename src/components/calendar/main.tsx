import type { ElementType } from "react";

import { Text as MantineText } from "@mantine/core";
import clsx from "clsx";
import { Fragment } from "react";

import type { CalendarInput } from "./types";

import { dayjs } from "../../vars/dayjs";
import { TableGrid } from "../table-grid";
import { CalendarItem } from "./components/calendar-item";
import { TimeIndicator } from "./components/time-indicator";
import { constants } from "./constants";
import classes from "./styles.module.css";

/** Calendar displaying a week */
export function Calendar<C extends ElementType = "div">({
  children,
  className,
  current,
  grow = true,
  now,
  ...input
}: CalendarInput<C>) {
  const localNow = dayjs(now).local();
  const localCurrent = dayjs(current ?? now).local();

  const weekStart = localCurrent.startOf("week");
  const days = [...Array(7).keys()].map((i) => weekStart.add(i, "day"));

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <TableGrid<any>
      cellHeight="minmax(0, 1fr)"
      cellWidth="minmax(0, 1fr)"
      className={clsx(classes.grid, className)}
      columns={days.length}
      grow={grow}
      rows={constants.hours.length}
      {...input}
    >
      <TableGrid.Corner className={classes.corner} />
      {days.map((day, i) => (
        <TableGrid.ColumnsHeader className={classes["columns-header"]} key={i}>
          <MantineText size="xs">{day.format("dddd")}</MantineText>
          <MantineText fw="bold" size="xs">
            {day.format("DD.MM")}
          </MantineText>
        </TableGrid.ColumnsHeader>
      ))}
      {constants.hours.map((hour, i) => (
        <Fragment key={i}>
          <TableGrid.RowsHeader className={classes["rows-header"]}>
            <MantineText fw="bold" size="xs">
              {dayjs().hour(hour).format("HH")}
            </MantineText>
          </TableGrid.RowsHeader>
          {days.map((_, j) => (
            <TableGrid.Cell
              className={clsx(
                classes.cell,
                (i + j) % 2 === 0 ? classes["cell-even"] : classes["cell-odd"],
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
