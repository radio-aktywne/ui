import type {
  CenterProps as MantineCenterProps,
  ContainerProps as MantineContainerProps,
  MantineSize,
} from "@mantine/core";
import type { Ref } from "react";

export type PageLayoutInput = {
  /** Height, theme key: theme.spacing */
  h?: MantineContainerProps["h"];

  /** Position of notifications on the screen */
  notificationsPosition?:
    | "bottom-left"
    | "bottom-right"
    | "top-left"
    | "top-right";

  /** Size of notifications */
  notificationsSize?: MantineSize | number | (string & {});

  /** Padding, theme key: theme.spacing */
  p?: MantineCenterProps["p"];

  /** Reference for the underlying element */
  ref?: Ref<HTMLDivElement>;

  /** Sets `max-width` of the layout, value is not responsive – it is the same for all screen sizes. Numbers are converted to rem. Ignored when `fluid` prop is set. */
  size?: MantineContainerProps["size"];

  /** Width, theme key: theme.spacing */
  w?: MantineContainerProps["w"];
} & Omit<
  MantineContainerProps,
  | "h"
  | "p"
  | "pb"
  | "pe"
  | "pl"
  | "pr"
  | "ps"
  | "pt"
  | "px"
  | "py"
  | "size"
  | "w"
>;
