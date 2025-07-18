import { Box } from "@mantine/core";
import clsx from "clsx";

import classes from "./styles.module.css";
import { TableGridColumnsHeaderInput } from "./types";

/** Header for columns in a table grid */
export function TableGridColumnsHeader({
  className,
  ...props
}: TableGridColumnsHeaderInput) {
  return <Box className={clsx(classes.header, className)} {...props} />;
}
