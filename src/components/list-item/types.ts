import type {
  GroupProps as MantineGroupProps,
  PolymorphicComponentProps,
} from "@mantine/core";
import type { ElementType } from "react";

export type BaseListItemInput = Omit<MantineGroupProps, "gap" | "p"> & {
  /** Key of `theme.spacing` or any valid CSS value for `gap`, numbers are converted to rem */
  gap?: MantineGroupProps["gap"];

  /** Padding, theme key: theme.spacing */
  p?: MantineGroupProps["p"];

  /** Controls `flex-wrap` CSS property */
  wrap?: MantineGroupProps["wrap"];
};

export type ListItemInput<C extends ElementType = "div"> =
  PolymorphicComponentProps<C, BaseListItemInput>;
