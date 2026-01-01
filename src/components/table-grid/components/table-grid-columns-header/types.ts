import type {
  BoxComponentProps as MantineBoxComponentProps,
  PolymorphicComponentProps,
} from "@mantine/core";
import type { ElementType } from "react";

export type BaseTableGridColumnsHeaderInput = MantineBoxComponentProps;

export type TableGridColumnsHeaderInput<C extends ElementType = "div"> =
  PolymorphicComponentProps<C, BaseTableGridColumnsHeaderInput>;
