import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { ActionIcon, Text } from "@mantine/core";
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
} satisfies Meta<typeof ListItem<"div">>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
