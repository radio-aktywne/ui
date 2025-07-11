import { GridColProps as MantineGridColProps } from "@mantine/core";

import { CenterInput } from "../center";
import { PaperInput } from "../paper";

export type MasterDetailLayoutDetailPanelInput = {
  /** Column span */
  span?: MantineGridColProps["span"];
} & Omit<PaperInput, "children"> &
  Pick<CenterInput, "children">;
