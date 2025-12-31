import { createPolymorphicComponent, Box as MantineBox } from "@mantine/core";
import clsx from "clsx";

import type {
  BaseTableGridColumnsHeaderInput,
  TableGridColumnsHeaderInput,
} from "./types";

import classes from "./styles.module.css";

/** Header for columns in a table grid */
export const TableGridColumnsHeader = createPolymorphicComponent<
  "div",
  BaseTableGridColumnsHeaderInput
>(function TableGridColumnsHeader({
  className,
  ...input
}: TableGridColumnsHeaderInput) {
  return <MantineBox className={clsx(classes.header, className)} {...input} />;
});
