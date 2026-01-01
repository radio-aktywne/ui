import type { ElementType } from "react";

import { GridCol as MantineGridCol } from "@mantine/core";

import type { MasterDetailLayoutDetailPanelInput } from "./types";

import { Center } from "../center";
import { Paper } from "../paper";

/** Detail panel for master-detail layout */
export function MasterDetailLayoutDetailPanel<C extends ElementType = "div">({
  children,
  h = "100%",
  shadowColor = "blue",
  span = 8,
  ...input
}: MasterDetailLayoutDetailPanelInput<C>) {
  return (
    <MantineGridCol span={span}>
      {/*  eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <Paper<any> h={h} shadowColor={shadowColor} {...input}>
        <Center>{children}</Center>
      </Paper>
    </MantineGridCol>
  );
}
