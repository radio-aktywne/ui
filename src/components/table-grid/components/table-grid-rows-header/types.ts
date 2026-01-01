import type {
  BoxComponentProps as MantineBoxComponentProps,
  PolymorphicComponentProps,
} from "@mantine/core";
import type { ElementType } from "react";

export type BaseTableGridRowsHeaderInput = MantineBoxComponentProps;

export type TableGridRowsHeaderInput<C extends ElementType = "div"> =
  PolymorphicComponentProps<C, BaseTableGridRowsHeaderInput>;
