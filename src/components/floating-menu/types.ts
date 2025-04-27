import { MenuProps as MantineMenuProps, MantineSpacing } from "@mantine/core";

export type FloatingMenuInput = {
  /** Padding from the edges of the screen */
  padding?: MantineSpacing;

  /** Position of the menu */
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
} & Omit<MantineMenuProps, "position">;
