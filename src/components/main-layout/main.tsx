import { Container as MantineContainer } from "@mantine/core";

import { Paper } from "../paper";
import { MainLayoutInput } from "./types";

/** Layout with main panel */
export function MainLayout({
  fluid,
  h = "100%",
  size = "md",
  ...input
}: MainLayoutInput) {
  return (
    <MantineContainer fluid={fluid} h="100%" size={size}>
      <Paper h={h} {...input} />
    </MantineContainer>
  );
}
