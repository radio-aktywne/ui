"use client";

import { createPolymorphicComponent, Box as MantineBox } from "@mantine/core";
import clsx from "clsx";

import type { BaseTableGridCellInput, TableGridCellInput } from "./types";

import classes from "./styles.module.css";

/** Cell in a table grid */
export const TableGridCell = createPolymorphicComponent<
  "div",
  BaseTableGridCellInput
>(function TableGridCell({ className, ...input }: TableGridCellInput) {
  return <MantineBox className={clsx(classes.cell, className)} {...input} />;
});
