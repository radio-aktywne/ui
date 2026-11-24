"use client";

import {
  ActionIcon as MantineActionIcon,
  Box as MantineBox,
  Text as MantineText,
  useMantineTheme,
} from "@mantine/core";
import { MdPerson } from "react-icons/md";

import type { UserMenuInput } from "./types";

import { FloatingMenu } from "../floating-menu";
import { List } from "../list";
import { ListItem } from "../list-item";

/** User menu */
export function UserMenu({
  color = "primary",
  items,
  shadow = "sm",
  size = "lg",
  user,
  ...input
}: UserMenuInput) {
  const theme = useMantineTheme();

  const rawColor = (() => {
    switch (color) {
      case "blue":
        return "var(--mantine-color-ra-blue-filled)";
      case "green":
        return "var(--mantine-color-ra-green-filled)";
      case "primary":
        return "var(--mantine-primary-color-filled)";
      case "red":
        return "var(--mantine-color-ra-red-filled)";
      case "yellow":
        return "var(--mantine-color-ra-yellow-filled)";
    }
  })();

  return (
    <FloatingMenu position="top-right" {...input}>
      <FloatingMenu.Target>
        <MantineActionIcon
          bg="var(--mantine-color-midground)"
          color={rawColor}
          size={size}
          style={{
            "--mantine-color-shadow": rawColor,
            boxShadow: shadow in theme.shadows ? theme.shadows[shadow] : shadow,
            ...Object.fromEntries(
              Object.entries(theme.shadows).map(([key, value]) => [
                `--mantine-shadow-${key}`,
                value,
              ]),
            ),
          }}
          variant="transparent"
        >
          <MdPerson size="75%" />
        </MantineActionIcon>
      </FloatingMenu.Target>
      <FloatingMenu.Dropdown bg="var(--mantine-color-midground)">
        <List>
          <ListItem p="0.5rem">
            <MantineText fw="bold" size="sm">
              {user.name}
            </MantineText>
          </ListItem>
          {items.map((item, index) => {
            const Icon = item.icon;

            const rawItemColor = (() => {
              switch (item.color) {
                case "blue":
                  return "var(--mantine-color-ra-blue-text)";
                case "green":
                  return "var(--mantine-color-ra-green-text)";
                case "primary":
                  return "var(--mantine-primary-color-text)";
                case "red":
                  return "var(--mantine-color-ra-red-text)";
                case undefined:
                  return "var(--mantine-color-text)";
                case "yellow":
                  return "var(--mantine-color-ra-yellow-text)";
              }
            })();

            return (
              <MantineBox component="a" href={item.url} key={index} td="none">
                <ListItem p="0.5rem">
                  <MantineText c={rawItemColor} size="sm">
                    {item.label}
                  </MantineText>
                  <MantineActionIcon
                    color={rawItemColor}
                    size="sm"
                    variant="transparent"
                  >
                    <Icon size="75%" />
                  </MantineActionIcon>
                </ListItem>
              </MantineBox>
            );
          })}
        </List>
      </FloatingMenu.Dropdown>
    </FloatingMenu>
  );
}
