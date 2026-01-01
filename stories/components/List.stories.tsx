import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { ActionIcon, Text } from "@mantine/core";
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
    grow: {
      control: "boolean",
    },
  },
  component: List,
  parameters: {
    controls: {
      include: ["grow"],
    },
  },
} satisfies Meta<typeof List<"div">>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
