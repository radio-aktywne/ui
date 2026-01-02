"use client";

import type { ElementType } from "react";

import {
  Container as MantineContainer,
  GridCol as MantineGridCol,
} from "@mantine/core";

import type { MasterDetailLayoutMasterPanelInput } from "./types";

import { Center } from "../center";
import { Paper } from "../paper";

/** Master panel for master-detail layout */
export function MasterDetailLayoutMasterPanel<C extends ElementType = "div">({
  children,
  fluid,
  h = "100%",
  shadowColor = "green",
  size = "sm",
  span = 4,
  ...input
}: MasterDetailLayoutMasterPanelInput<C>) {
  return (
    <MantineGridCol span={span}>
      <MantineContainer fluid={fluid} h="100%" size={size}>
        {/*  eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <Paper<any> h={h} shadowColor={shadowColor} {...input}>
          <Center>{children}</Center>
        </Paper>
      </MantineContainer>
    </MantineGridCol>
  );
}
