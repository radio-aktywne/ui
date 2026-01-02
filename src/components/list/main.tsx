"use client";

import {
  createPolymorphicComponent,
  Stack as MantineStack,
} from "@mantine/core";
import { clsx } from "clsx";

import type { BaseListInput, ListInput } from "./types";

import classes from "./styles.module.css";

/** Container to display list of items vertically */
export const List = createPolymorphicComponent<"div", BaseListInput>(
  function List({ className, gap = 0, grow = true, ...input }: ListInput) {
    return (
      <MantineStack
        className={clsx(classes.list, grow && classes.grow, className)}
        gap={gap}
        {...input}
      />
    );
  },
);
