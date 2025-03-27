import { StackProps as MantineStackProps } from "@mantine/core";

export type ListInput = {
  /** Key of `theme.spacing` or any valid CSS value to set `gap` property, numbers are converted to rem */
  gap?: MantineStackProps["gap"];

  /** Whether list should grow to fill all available space */
  grow?: boolean;
} & Omit<MantineStackProps, "gap">;
