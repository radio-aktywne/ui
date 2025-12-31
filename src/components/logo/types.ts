import type {
  ImageProps as MantineImageProps,
  PolymorphicComponentProps,
} from "@mantine/core";
import type { ElementType } from "react";

export type BaseLogoInput = MantineImageProps;

export type LogoInput<C extends ElementType = "img"> =
  PolymorphicComponentProps<C, BaseLogoInput>;
