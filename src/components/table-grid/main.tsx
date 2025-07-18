import { Box } from "@mantine/core";
import clsx from "clsx";

import { TableGridCell } from "./components/table-grid-cell";
import { TableGridColumnsHeader } from "./components/table-grid-columns-header";
import { TableGridCorner } from "./components/table-grid-corner";
import { TableGridRowsHeader } from "./components/table-grid-rows-header";
import classes from "./styles.module.css";
import { TableGridInput } from "./types";

/** Grid with headers */
export function TableGrid({
  cellHeight = "minmax(0, 1fr)",
  cellWidth = "minmax(0, 1fr)",
  className,
  columns,
  grow = false,
  rows,
  style,
  ...props
}: TableGridInput) {
  return (
    <Box
      className={clsx(classes.grid, grow && classes.grow, className)}
      style={{
        ...style,
        "--cell-height": cellHeight,
        "--cell-width": cellWidth,
        "--columns": columns,
        "--rows": rows,
      }}
      {...props}
    />
  );
}

TableGrid.Cell = TableGridCell;
TableGrid.ColumnsHeader = TableGridColumnsHeader;
TableGrid.Corner = TableGridCorner;
TableGrid.RowsHeader = TableGridRowsHeader;
