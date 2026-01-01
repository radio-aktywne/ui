import type {
  CenterProps as MantineCenterProps,
  PolymorphicComponentProps,
} from "@mantine/core";
import type { ElementType } from "react";

export type BaseCenterInput = MantineCenterProps;

export type CenterInput<C extends ElementType = "div"> =
  PolymorphicComponentProps<C, BaseCenterInput>;
