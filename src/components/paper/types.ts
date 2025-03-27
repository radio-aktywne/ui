import {
  ElementProps,
  PaperProps as MantinePaperProps,
  MantineShadowsValues,
} from "@mantine/core";

export type PaperShadowColors = "blue" | "green" | "primary" | "red" | "yellow";

export type PaperInput = {
  /** Whether to center content */
  center?: boolean;

  /** Color of the shadow */
  shadowColor?: PaperShadowColors;

  /** Size of the shadow */
  shadowSize?: keyof MantineShadowsValues;
} & ElementProps<"div", keyof MantinePaperProps> &
  Omit<MantinePaperProps, "shadow">;
