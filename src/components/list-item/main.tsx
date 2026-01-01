import {
  createPolymorphicComponent,
  Group as MantineGroup,
} from "@mantine/core";
import { clsx } from "clsx";

import type { BaseListItemInput, ListItemInput } from "./types";

import classes from "./styles.module.css";

/** Container to display an item within a List component */
export const ListItem = createPolymorphicComponent<"div", BaseListItemInput>(
  function ListItem({
    className,
    gap = "xs",
    p = "sm",
    wrap = "nowrap",
    ...input
  }: ListItemInput) {
    return (
      <MantineGroup
        className={clsx(classes["list-item"], className)}
        gap={gap}
        p={p}
        wrap={wrap}
        {...input}
      />
    );
  },
);
