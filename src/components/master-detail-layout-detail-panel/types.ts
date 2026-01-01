import type { GridColProps as MantineGridColProps } from "@mantine/core";
import type { ElementType } from "react";

import type { CenterInput } from "../center";
import type { PaperInput } from "../paper";

export type MasterDetailLayoutDetailPanelInput<C extends ElementType = "div"> =
  Omit<PaperInput<C>, "children"> &
    Pick<CenterInput, "children"> & {
      /** Column span */
      span?: MantineGridColProps["span"];
    };
