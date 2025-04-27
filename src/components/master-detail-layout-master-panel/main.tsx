import {
  Container as MantineContainer,
  GridCol as MantineGridCol,
} from "@mantine/core";

import { Paper } from "../paper";
import { MasterDetailLayoutMasterPanelInput } from "./types";

/** Master panel for master-detail layout */
export function MasterDetailLayoutMasterPanel({
  fluid,
  h = "100%",
  shadowColor = "green",
  size = "sm",
  span = 4,
  ...input
}: MasterDetailLayoutMasterPanelInput) {
  return (
    <MantineGridCol span={span}>
      <MantineContainer fluid={fluid} h="100%" size={size}>
        <Paper h={h} shadowColor={shadowColor} {...input} />
      </MantineContainer>
    </MantineGridCol>
  );
}
