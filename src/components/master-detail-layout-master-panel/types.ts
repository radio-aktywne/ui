import type {
  ContainerProps as MantineContainerProps,
  GridColProps as MantineGridColProps,
} from "@mantine/core";
import type { ElementType } from "react";

import type { CenterInput } from "../center";
import type { PaperInput } from "../paper";

export type MasterDetailLayoutMasterPanelInput<C extends ElementType = "div"> =
  Omit<PaperInput<C>, "children"> &
    Pick<CenterInput, "children"> & {
      /** Determines whether the container should take 100% of its parent width. If set, `size` prop is ignored. */
      fluid?: MantineContainerProps["fluid"];

      /** Sets `max-width` of the layout, value is not responsive – it is the same for all screen sizes. Numbers are converted to rem. Ignored when `fluid` prop is set. */
      size?: MantineContainerProps["size"];

      /** Column span */
      span?: MantineGridColProps["span"];
    };
