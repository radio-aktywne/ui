import { Grid as MantineGrid } from "@mantine/core";

import { Paper } from "../paper";
import { MasterDetailLayoutMasterPanelInput } from "./types";

/** Master panel for master-detail layout */
export function MasterDetailLayoutMasterPanel({
  shadowColor = "green",
  span = 4,
  ...input
}: MasterDetailLayoutMasterPanelInput) {
  return (
    <MantineGrid.Col span={span}>
      <Paper h="100%" shadowColor={shadowColor} {...input} />
    </MantineGrid.Col>
  );
}
