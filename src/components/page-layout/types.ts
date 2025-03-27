import {
  CenterProps as MantineCenterProps,
  ContainerProps as MantineContainerProps,
} from "@mantine/core";

export type PageLayoutInput = {
  /** Height, theme key: theme.spacing */
  h?: MantineContainerProps["h"];

  /** Padding, theme key: theme.spacing */
  p?: MantineCenterProps["p"];

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
