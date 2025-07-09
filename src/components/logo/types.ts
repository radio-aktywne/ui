import {
  ImageProps as MantineImageProps,
  PolymorphicComponentProps,
} from "@mantine/core";

export type BaseLogoInput = MantineImageProps;

export type LogoInput<C extends React.ElementType = "img"> =
  PolymorphicComponentProps<C, BaseLogoInput>;
