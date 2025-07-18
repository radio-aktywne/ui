import { Box } from "@mantine/core";
import clsx from "clsx";

import classes from "./styles.module.css";
import { TableGridRowsHeaderInput } from "./types";

/** Header for rows in a table grid */
export function TableGridRowsHeader({
  className,
  ...props
}: TableGridRowsHeaderInput) {
  return <Box className={clsx(classes.header, className)} {...props} />;
}
