import type {
  GridProps as MantineGridProps,
  PolymorphicComponentProps,
} from "@mantine/core";
import type { ElementType } from "react";

export type BaseMasterDetailLayoutInput = Omit<
  MantineGridProps,
  "columns" | "grow" | "gutter" | "justify"
> & {
  /** Number of columns in grid determining panels size */
  columns?: MantineGridProps["columns"];

  /** Determines whether panels should expand to fill all available space */
  grow?: MantineGridProps["grow"];

  /** Gutter between panels, key of `theme.spacing` or any valid CSS value */
  gutter?: MantineGridProps["gutter"];

  /** Sets `justify-content` */
  justify?: MantineGridProps["justify"];
};

export type MasterDetailLayoutInput<C extends ElementType = "div"> =
  PolymorphicComponentProps<C, BaseMasterDetailLayoutInput>;
