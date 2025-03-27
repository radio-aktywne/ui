import { Grid as MantineGrid } from "@mantine/core";

import { Paper } from "../paper";
import { MasterDetailLayoutDetailPanelInput } from "./types";

/** Detail panel for master-detail layout */
export function MasterDetailLayoutDetailPanel({
  shadowColor = "blue",
  span = 8,
  ...input
}: MasterDetailLayoutDetailPanelInput) {
  return (
    <MantineGrid.Col span={span}>
      <Paper h="100%" shadowColor={shadowColor} {...input} />
    </MantineGrid.Col>
  );
}
