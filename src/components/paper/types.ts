import {
  ElementProps,
  PaperProps as MantinePaperProps,
  MantineShadowsValues,
} from "@mantine/core";

export type PaperInput = {
  /** Whether to center content */
  center?: boolean;

  /** Color of the shadow */
  shadowColor?: "blue" | "green" | "primary" | "red" | "yellow";

  /** Size of the shadow */
  shadowSize?: keyof MantineShadowsValues;
} & ElementProps<"div", keyof MantinePaperProps> &
  Omit<MantinePaperProps, "shadow">;
