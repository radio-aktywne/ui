import {
  createPolymorphicComponent,
  Paper as MantinePaper,
  useMantineTheme,
} from "@mantine/core";
import { clsx } from "clsx";

import type { BasePaperInput, PaperInput } from "./types";

import classes from "./styles.module.css";

/** Basic midground component for displaying content */
export const Paper = createPolymorphicComponent<"div", BasePaperInput>(
  function Paper({
    center = true,
    className,
    shadowColor = "primary",
    shadowSize = "md",
    style,
    ...input
  }: PaperInput) {
    const theme = useMantineTheme();

    return (
      <MantinePaper
        className={clsx(center && classes.center, className)}
        shadow={shadowSize}
        style={{
          "--mantine-color-shadow": (() => {
            switch (shadowColor) {
              case "blue":
                return "var(--mantine-color-ra-blue-filled)";
              case "green":
                return "var(--mantine-color-ra-green-filled)";
              case "primary":
                return "var(--mantine-primary-color-filled)";
              case "red":
                return "var(--mantine-color-ra-red-filled)";
              case "yellow":
                return "var(--mantine-color-ra-yellow-filled)";
            }
          })(),
          ...Object.fromEntries(
            Object.entries(theme.shadows).map(([key, value]) => [
              `--mantine-shadow-${key}`,
              value,
            ]),
          ),
          ...style,
        }}
        {...input}
      />
    );
  },
);
