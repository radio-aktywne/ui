import {
  Center as MantineCenter,
  Container as MantineContainer,
} from "@mantine/core";
import { clsx } from "clsx";

import classes from "./styles.module.css";
import { PageLayoutInput } from "./types";

/** Main layout for pages */
export function PageLayout({
  className,
  h = "100%",
  p = "xl",
  size = "lg",
  w = "100%",
  ...input
}: PageLayoutInput) {
  return (
    <MantineCenter
      h="100%"
      p={(() => {
        switch (p) {
          case "lg":
            return "4rem";
          case "md":
            return "3rem";
          case "sm":
            return "2rem";
          case "xl":
            return "5rem";
          case "xs":
            return "1rem";
          default:
            return p;
        }
      })()}
      w="100%"
    >
      <MantineContainer
        className={clsx(classes["page-layout"], className)}
        h={h}
        size={size}
        w={w}
        {...input}
      />
    </MantineCenter>
  );
}
