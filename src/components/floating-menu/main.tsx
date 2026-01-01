import { Affix as MantineAffix, Menu as MantineMenu } from "@mantine/core";

import type { FloatingMenuInput } from "./types";

/** Floating menu in the corner of the screen */
export function FloatingMenu({
  padding = "xl",
  position = "top-right",
  ...input
}: FloatingMenuInput) {
  return (
    <MantineAffix
      position={(() => {
        switch (position) {
          case "bottom-left":
            return { bottom: padding, left: padding };
          case "bottom-right":
            return { bottom: padding, right: padding };
          case "top-left":
            return { left: padding, top: padding };
          case "top-right":
            return { right: padding, top: padding };
        }
      })()}
    >
      <MantineMenu
        position={(() => {
          switch (position) {
            case "bottom-left":
              return "top-start";
            case "bottom-right":
              return "top-end";
            case "top-left":
              return "bottom-start";
            case "top-right":
              return "bottom-end";
          }
        })()}
        {...input}
      />
    </MantineAffix>
  );
}

FloatingMenu.Divider = MantineMenu.Divider;
FloatingMenu.Dropdown = MantineMenu.Dropdown;
FloatingMenu.Item = MantineMenu.Item;
FloatingMenu.Label = MantineMenu.Label;
FloatingMenu.Target = MantineMenu.Target;
