import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Meta, StoryObj } from "@storybook/react";

import { PageLayout, Paper } from "../../src";

const meta = {
  args: {
    children: (
      <Paper h="100%" w="100%">
        <Button
          onClick={() =>
            notifications.show({
              message: "Notification message",
              title: "Notification title",
            })
          }
        >
          Show notification
        </Button>
      </Paper>
    ),
  },
  argTypes: {
    notificationsPosition: {
      control: "radio",
      options: ["top-left", "top-right", "bottom-left", "bottom-right"],
    },
    notificationsSize: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    p: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
  component: PageLayout,
  parameters: {
    controls: {
      include: ["notificationsPosition", "notificationsSize", "p", "size"],
    },
    preview: {
      layout: false,
    },
  },
} satisfies Meta<typeof PageLayout>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
