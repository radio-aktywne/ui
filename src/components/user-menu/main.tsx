import { ActionIcon, Box, Text, useMantineTheme } from "@mantine/core";
import { MdLogout, MdPerson } from "react-icons/md";

import { FloatingMenu } from "../floating-menu";
import { List } from "../list";
import { ListItem } from "../list-item";
import { UserMenuInput } from "./types";

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
        <ActionIcon
          bg="var(--mantine-color-midground)"
          c={rawColor}
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
        >
          <MdPerson size="75%" />
        </ActionIcon>
      </FloatingMenu.Target>
      <FloatingMenu.Dropdown bg="var(--mantine-color-midground)">
        <List>
          <ListItem p="0.5rem">
            <Text fw="bold" size="sm">
              {user.name}
            </Text>
          </ListItem>
          <Box component="a" href={items.logout.url} td="none">
            <ListItem p="0.5rem">
              <Text c="ra-red" size="sm">
                {items.logout.label}
              </Text>
              <ActionIcon c="ra-red" size="sm" variant="transparent">
                <MdLogout size="75%" />
              </ActionIcon>
            </ListItem>
          </Box>
        </List>
      </FloatingMenu.Dropdown>
    </FloatingMenu>
  );
}
