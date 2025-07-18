import { Box } from "@mantine/core";
import clsx from "clsx";

import classes from "./styles.module.css";
import { TableGridCornerInput } from "./types";

/** Corner in a table grid */
export function TableGridCorner({ className, ...props }: TableGridCornerInput) {
  return <Box className={clsx(classes.corner, className)} {...props} />;
}
