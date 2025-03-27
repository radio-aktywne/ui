import { GridColProps as MantineGridColProps } from "@mantine/core";

import { PaperInput } from "../paper";

export type MasterDetailLayoutDetailPanelInput = {
  /** Column span */
  span?: MantineGridColProps["span"];
} & PaperInput;
