import type { MantineShadow, MantineSize } from "@mantine/core";
import type { IconType } from "react-icons";

import type { FloatingMenuInput } from "../floating-menu";

type User = {
  /** Display name of the user */
  name: string;
};

type Item = {
  /** Color of the item */
  color?: "blue" | "green" | "primary" | "red" | "yellow";

  /** Icon to display */
  icon: IconType;

  /** Text to display */
  label: string;

  /** URL to redirect to */
  url: string;
};

export type UserMenuInput = Omit<
  FloatingMenuInput,
  "children" | "position" | "shadow"
> & {
  /** Color of the menu button */
  color?: "blue" | "green" | "primary" | "red" | "yellow";

  /** Items in the menu */
  items: Item[];

  /** Shadow of the menu button */
  shadow?: MantineShadow;

  /** Size of the menu button */
  size?: MantineSize;

  /** User data */
  user: User;
};
