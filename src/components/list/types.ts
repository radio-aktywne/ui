import { StackProps as MantineStackProps } from "@mantine/core";

export type ListInput = {
  /** Whether list should grow to fill all available space */
  grow?: boolean;
} & MantineStackProps;
