import { GridCol as MantineGridCol } from "@mantine/core";

import { Center } from "../center";
import { Paper } from "../paper";
import { MasterDetailLayoutDetailPanelInput } from "./types";

/** Detail panel for master-detail layout */
export function MasterDetailLayoutDetailPanel({
  children,
  h = "100%",
  shadowColor = "blue",
  span = 8,
  ...input
}: MasterDetailLayoutDetailPanelInput) {
  return (
    <MantineGridCol span={span}>
      <Paper h={h} shadowColor={shadowColor} {...input}>
        <Center>{children}</Center>
      </Paper>
    </MantineGridCol>
  );
}
