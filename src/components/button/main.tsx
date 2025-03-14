import { Button as MantineButton } from "@mantine/core";
import { clsx } from "clsx";

import classes from "./styles.module.css";
import { ButtonInput } from "./types";

export function Button({ className, ...props }: ButtonInput) {
  return (
    <MantineButton className={clsx(classes.button, className)} {...props} />
  );
}
