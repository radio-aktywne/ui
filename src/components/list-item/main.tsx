import { Group as MantineGroup } from "@mantine/core";
import { clsx } from "clsx";

import classes from "./styles.module.css";
import { ListItemInput } from "./types";

/** Container to display an item within a List component */
export function ListItem({
  className,
  gap = "xs",
  p = "sm",
  ...input
}: ListItemInput) {
  return (
    <MantineGroup
      className={clsx(classes["list-item"], className)}
      gap={gap}
      p={p}
      {...input}
    />
  );
}
