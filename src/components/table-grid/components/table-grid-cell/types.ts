import type {
  BoxComponentProps as MantineBoxComponentProps,
  PolymorphicComponentProps,
} from "@mantine/core";
import type { ElementType } from "react";

export type BaseTableGridCellInput = MantineBoxComponentProps;

export type TableGridCellInput<C extends ElementType = "div"> =
  PolymorphicComponentProps<C, BaseTableGridCellInput>;
