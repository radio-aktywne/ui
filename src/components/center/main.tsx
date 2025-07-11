import { Center as MantineCenter } from "@mantine/core";
import clsx from "clsx";

import classes from "./styles.module.css";
import { CenterInput } from "./types";

/** Center component that applies a safe centering style */
export function Center({ className, ...props }: CenterInput) {
  return (
    <MantineCenter className={clsx(classes.center, className)} {...props} />
  );
}
