import { Stack as MantineStack } from "@mantine/core";
import { clsx } from "clsx";

import classes from "./styles.module.css";
import { ListInput } from "./types";

/** Container to display list of items vertically */
export function List({ className, gap = 0, grow = true, ...input }: ListInput) {
  return (
    <MantineStack
      className={clsx(classes.list, grow && classes.grow, className)}
      gap={gap}
      {...input}
    />
  );
}
