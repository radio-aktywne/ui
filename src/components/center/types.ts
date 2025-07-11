import { ElementProps, CenterProps as MantineCenterProps } from "@mantine/core";

export type CenterInput = ElementProps<"div", keyof MantineCenterProps> &
  MantineCenterProps;
