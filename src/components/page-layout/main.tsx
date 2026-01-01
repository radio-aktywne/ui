import {
  Center as MantineCenter,
  Container as MantineContainer,
} from "@mantine/core";
import { Notifications as MantineNotifications } from "@mantine/notifications";
import { clsx } from "clsx";

import type { PageLayoutInput } from "./types";

import classes from "./styles.module.css";

/** Main layout for pages */
export function PageLayout({
  className,
  h = "100%",
  notificationsPosition = "bottom-right",
  notificationsSize = "md",
  p = "xl",
  size = "lg",
  w = "100%",
  ...input
}: PageLayoutInput) {
  return (
    <>
      <MantineNotifications
        containerWidth={(() => {
          switch (notificationsSize) {
            case "lg":
              return "25rem";
            case "md":
              return "20rem";
            case "sm":
              return "15rem";
            case "xl":
              return "30rem";
            case "xs":
              return "10rem";
            default:
              return notificationsSize;
          }
        })()}
        position={notificationsPosition}
      />
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
    </>
  );
}
