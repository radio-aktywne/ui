import type {
  BoxComponentProps as MantineBoxComponentProps,
  PolymorphicComponentProps,
} from "@mantine/core";
import type { ElementType } from "react";

export type BaseTableGridInput = MantineBoxComponentProps & {
  /** Height of cells */
  cellHeight?: number | string;

  /** Width of cells */
  cellWidth?: number | string;

  /** Number of columns */
  columns: number;

  /** Whether the grid should grow to fill available space */
  grow?: boolean;

  /** Number of rows */
  rows: number;
};

export type TableGridInput<C extends ElementType = "div"> =
  PolymorphicComponentProps<C, BaseTableGridInput>;
