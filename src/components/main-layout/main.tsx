import { Container as MantineContainer } from "@mantine/core";

import { Center } from "../center";
import { Paper } from "../paper";
import { MainLayoutInput } from "./types";

/** Layout with main panel */
export function MainLayout({
  children,
  fluid,
  h = "100%",
  size = "sm",
  ...input
}: MainLayoutInput) {
  return (
    <MantineContainer fluid={fluid} h="100%" size={size}>
      <Paper h={h} {...input}>
        <Center>{children}</Center>
      </Paper>
    </MantineContainer>
  );
}
