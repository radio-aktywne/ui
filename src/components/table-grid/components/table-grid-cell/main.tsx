import { Box } from "@mantine/core";
import clsx from "clsx";

import classes from "./styles.module.css";
import { TableGridCellInput } from "./types";

/** Cell in a table grid */
export function TableGridCell({ className, ...props }: TableGridCellInput) {
  return <Box className={clsx(classes.cell, className)} {...props} />;
}
