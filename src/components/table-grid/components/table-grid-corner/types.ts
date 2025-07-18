import { BoxProps, ElementProps } from "@mantine/core";

export type TableGridCornerInput = BoxProps &
  ElementProps<"div", keyof BoxProps>;
