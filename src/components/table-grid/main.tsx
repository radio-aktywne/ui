"use client";

import { createPolymorphicComponent, Box as MantineBox } from "@mantine/core";
import clsx from "clsx";

import type { BaseTableGridInput, TableGridInput } from "./types";

import { TableGridCell } from "./components/table-grid-cell";
import { TableGridColumnsHeader } from "./components/table-grid-columns-header";
import { TableGridCorner } from "./components/table-grid-corner";
import { TableGridRowsHeader } from "./components/table-grid-rows-header";
import classes from "./styles.module.css";

/** Grid with headers */
export const TableGrid = Object.assign(
  createPolymorphicComponent<"div", BaseTableGridInput>(function TableGrid({
    cellHeight = "minmax(0, 1fr)",
    cellWidth = "minmax(0, 1fr)",
    className,
    columns,
    grow = false,
    rows,
    style,
    ...input
  }: TableGridInput) {
    return (
      <MantineBox
        className={clsx(classes.grid, grow && classes.grow, className)}
        style={{
          ...style,
          "--cell-height": cellHeight,
          "--cell-width": cellWidth,
          "--columns": columns,
          "--rows": rows,
        }}
        {...input}
      />
    );
  }),
  {
    Cell: TableGridCell,
    ColumnsHeader: TableGridColumnsHeader,
    Corner: TableGridCorner,
    RowsHeader: TableGridRowsHeader,
  },
);
