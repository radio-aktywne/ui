import type { ElementType } from "react";

import { Container as MantineContainer } from "@mantine/core";

import type { MainLayoutInput } from "./types";

import { Center } from "../center";
import { Paper } from "../paper";

/** Layout with main panel */
export function MainLayout<C extends ElementType = "div">({
  children,
  fluid,
  h = "100%",
  size = "sm",
  ...input
}: MainLayoutInput<C>) {
  return (
    <MantineContainer fluid={fluid} h="100%" size={size}>
      {/*  eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <Paper<any> h={h} {...input}>
        <Center>{children}</Center>
      </Paper>
    </MantineContainer>
  );
}
