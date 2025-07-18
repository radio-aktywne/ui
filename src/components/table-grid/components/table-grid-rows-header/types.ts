import { BoxProps, ElementProps } from "@mantine/core";

export type TableGridRowsHeaderInput = BoxProps &
  ElementProps<"div", keyof BoxProps>;
