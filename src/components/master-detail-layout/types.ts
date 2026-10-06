import type {
  GridProps as MantineGridProps,
  PolymorphicComponentProps,
} from "@mantine/core";
import type { ElementType } from "react";

export type BaseMasterDetailLayoutInput = Omit<
  MantineGridProps,
  "columns" | "gap" | "grow" | "justify"
> & {
  /** Number of columns in grid determining panels size */
  columns?: MantineGridProps["columns"];

  /** Gap between panels, key of `theme.spacing` or any valid CSS value */
  gap?: MantineGridProps["gap"];

  /** Determines whether panels should expand to fill all available space */
  grow?: MantineGridProps["grow"];

  /** Sets `justify-content` */
  justify?: MantineGridProps["justify"];
};

export type MasterDetailLayoutInput<C extends ElementType = "div"> =
  PolymorphicComponentProps<C, BaseMasterDetailLayoutInput>;
