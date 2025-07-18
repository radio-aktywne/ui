import { BoxProps, ElementProps } from "@mantine/core";

export type TableGridColumnsHeaderInput = BoxProps &
  ElementProps<"div", keyof BoxProps>;
