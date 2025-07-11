import { ContainerProps as MantineContainerProps } from "@mantine/core";

import { CenterInput } from "../center";
import { PaperInput } from "../paper";

export type MainLayoutInput = {
  /** Determines whether the container should take 100% of its parent width. If set, `size` prop is ignored. */
  fluid?: MantineContainerProps["fluid"];

  /** Sets `max-width` of the layout, value is not responsive – it is the same for all screen sizes. Numbers are converted to rem. Ignored when `fluid` prop is set. */
  size?: MantineContainerProps["size"];
} & Omit<PaperInput, "children"> &
  Pick<CenterInput, "children">;
