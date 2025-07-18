import { BoxProps, ElementProps } from "@mantine/core";

export type TableGridCellInput = BoxProps & ElementProps<"div", keyof BoxProps>;
