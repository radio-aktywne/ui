import type {
  StackProps as MantineStackProps,
  PolymorphicComponentProps,
} from "@mantine/core";
import type { ElementType } from "react";

export type BaseListInput = Omit<MantineStackProps, "gap"> & {
  /** Key of `theme.spacing` or any valid CSS value to set `gap` property, numbers are converted to rem */
  gap?: MantineStackProps["gap"];

  /** Whether list should grow to fill all available space */
  grow?: boolean;
};

export type ListInput<C extends ElementType = "div"> =
  PolymorphicComponentProps<C, BaseListInput>;
