import { createPolymorphicComponent, Box as MantineBox } from "@mantine/core";
import clsx from "clsx";

import type {
  BaseTableGridRowsHeaderInput,
  TableGridRowsHeaderInput,
} from "./types";

import classes from "./styles.module.css";

/** Header for rows in a table grid */
export const TableGridRowsHeader = createPolymorphicComponent<
  "div",
  BaseTableGridRowsHeaderInput
>(function TableGridRowsHeader({
  className,
  ...input
}: TableGridRowsHeaderInput) {
  return <MantineBox className={clsx(classes.header, className)} {...input} />;
});
