import {
  createPolymorphicComponent,
  Image as MantineImage,
} from "@mantine/core";

import type { BaseLogoInput, LogoInput } from "./types";

import logo from "../../assets/logo.svg";

/** Component for displaying the logo */
export const Logo = createPolymorphicComponent<"img", BaseLogoInput>(
  function Logo({
    fit = "contain",
    flex = "initial",
    mah = "100%",
    maw = "100%",
    src = logo,
    ...input
  }: LogoInput) {
    return (
      <MantineImage
        fit={fit}
        flex={flex}
        mah={mah}
        maw={maw}
        src={src as unknown}
        {...input}
      />
    );
  },
);
