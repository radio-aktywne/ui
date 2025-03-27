import { GroupProps as MantineGroupProps } from "@mantine/core";

export type ListItemInput = {
  /** Key of `theme.spacing` or any valid CSS value for `gap`, numbers are converted to rem */
  gap?: MantineGroupProps["gap"];

  /** Padding, theme key: theme.spacing */
  p?: MantineGroupProps["p"];

  /** Controls `flex-wrap` CSS property */
  wrap?: MantineGroupProps["wrap"];
} & Omit<MantineGroupProps, "gap" | "p">;
