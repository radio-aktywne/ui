import type {
  PaperProps as MantinePaperProps,
  MantineShadowsValues,
  PolymorphicComponentProps,
} from "@mantine/core";
import type { ElementType } from "react";

export type BasePaperInput = Omit<MantinePaperProps, "shadow"> & {
  /** Whether to center content */
  center?: boolean;

  /** Color of the shadow */
  shadowColor?: "blue" | "green" | "primary" | "red" | "yellow";

  /** Size of the shadow */
  shadowSize?: keyof MantineShadowsValues;
};

export type PaperInput<C extends ElementType = "div"> =
  PolymorphicComponentProps<C, BasePaperInput>;
