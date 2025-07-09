import {
  createPolymorphicComponent,
  Image as MantineImage,
} from "@mantine/core";
import { forwardRef } from "react";

import logo from "../../assets/logo.svg";
import { BaseLogoInput } from "./types";

/** Component for displaying the logo */
export const Logo = createPolymorphicComponent<"img", BaseLogoInput>(
  forwardRef<HTMLImageElement, BaseLogoInput>(function Logo(
    { fit = "contain", flex = "initial", mah = "100%", maw = "100%", ...props },
    ref,
  ) {
    return (
      <MantineImage
        {...props}
        fit={fit}
        flex={flex}
        mah={mah}
        maw={maw}
        ref={ref}
        src={logo}
      />
    );
  }),
);
