import { GridColProps as MantineGridColProps } from "@mantine/core";

import { PaperInput } from "../paper";

export type MasterDetailLayoutMasterPanelInput = {
  /** Column span */
  span?: MantineGridColProps["span"];
} & PaperInput;
