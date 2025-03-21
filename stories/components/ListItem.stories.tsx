import { ActionIcon, Text } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";
import { MdDelete, MdEdit } from "react-icons/md";

import { List, ListItem } from "../../src";

const meta = {
  args: {
    children: (
      <>
        <Text fw="bold">Item</Text>
        <ActionIcon>
          <MdDelete size="75%" />
        </ActionIcon>
        <ActionIcon>
          <MdEdit size="75%" />
        </ActionIcon>
      </>
    ),
  },
  component: ListItem,
  parameters: {
    controls: {
      include: [],
    },
  },
  render: (input) => (
    <List>
      <ListItem {...input} />
    </List>
  ),
} satisfies Meta<typeof ListItem>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
