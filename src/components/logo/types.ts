import {
  ImageProps as MantineImageProps,
  PolymorphicComponentProps,
} from "@mantine/core";

export type BaseLogoInput = Omit<MantineImageProps, "src">;

export type LogoInput<C extends React.ElementType = "img"> =
  PolymorphicComponentProps<C, BaseLogoInput>;
