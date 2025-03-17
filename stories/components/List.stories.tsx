import { ActionIcon, Text } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";
import { MdDelete, MdEdit } from "react-icons/md";

import { List, ListItem } from "../../src";

const meta = {
  args: {
    children: ["One", "Two", "Three"].map((text, index) => (
      <ListItem key={index}>
        <Text fw="bold">{text}</Text>
        <ActionIcon>
          <MdDelete size="75%" />
        </ActionIcon>
        <ActionIcon>
          <MdEdit size="75%" />
        </ActionIcon>
      </ListItem>
    )),
  },
  argTypes: {
    children: {
      control: false,
    },
    grow: {
      control: "boolean",
    },
  },
  component: List,
  parameters: {
    controls: {
      include: ["children", "grow"],
    },
  },
} satisfies Meta<typeof List>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
