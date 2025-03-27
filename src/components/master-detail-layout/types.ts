import { GridProps as MantineGridProps } from "@mantine/core";

export type MasterDetailLayoutInput = {
  /** Number of columns in grid determining panels size */
  columns?: MantineGridProps["columns"];

  /** Determines whether panels should expand to fill all available space */
  grow?: MantineGridProps["grow"];

  /** Gutter between panels, key of `theme.spacing` or any valid CSS value */
  gutter?: MantineGridProps["gutter"];

  /** Sets `justify-content` */
  justify?: MantineGridProps["justify"];
} & Omit<MantineGridProps, "columns" | "grow" | "gutter" | "justify">;
