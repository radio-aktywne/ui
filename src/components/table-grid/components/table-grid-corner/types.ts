import type {
  BoxComponentProps as MantineBoxComponentProps,
  PolymorphicComponentProps,
} from "@mantine/core";
import type { ElementType } from "react";

export type BaseTableGridCornerInput = MantineBoxComponentProps;

export type TableGridCornerInput<C extends ElementType = "div"> =
  PolymorphicComponentProps<C, BaseTableGridCornerInput>;
