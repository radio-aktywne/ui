import { ElementProps, ButtonProps as MantineButtonProps } from "@mantine/core";

export type ButtonInput = ElementProps<"button", keyof MantineButtonProps> &
  MantineButtonProps;
