"use client";

import { createPolymorphicComponent, Box as MantineBox } from "@mantine/core";
import clsx from "clsx";

import type { BaseTableGridCornerInput, TableGridCornerInput } from "./types";

import classes from "./styles.module.css";

/** Corner in a table grid */
export const TableGridCorner = createPolymorphicComponent<
  "div",
  BaseTableGridCornerInput
>(function TableGridCorner({ className, ...input }: TableGridCornerInput) {
  return <MantineBox className={clsx(classes.corner, className)} {...input} />;
});
