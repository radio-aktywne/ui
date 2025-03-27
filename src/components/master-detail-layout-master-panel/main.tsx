import { GridCol as MantineGridCol } from "@mantine/core";

import { Paper } from "../paper";
import { MasterDetailLayoutMasterPanelInput } from "./types";

/** Master panel for master-detail layout */
export function MasterDetailLayoutMasterPanel({
  h = "100%",
  shadowColor = "green",
  span = 4,
  ...input
}: MasterDetailLayoutMasterPanelInput) {
  return (
    <MantineGridCol span={span}>
      <Paper h={h} shadowColor={shadowColor} {...input} />
    </MantineGridCol>
  );
}
