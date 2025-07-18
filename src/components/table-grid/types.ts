import { BoxProps, ElementProps } from "@mantine/core";

export type TableGridInput = {
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
} & BoxProps &
  ElementProps<"div", keyof BoxProps>;
