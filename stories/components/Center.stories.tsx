import { Title } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

import { Center } from "../../src";

const meta = {
  args: {
    children: (
      <>
        {[...Array(5).keys()].map((i) => (
          <Title key={i}>Content</Title>
        ))}
      </>
    ),
    style: { gap: "2em" },
  },
  component: Center,
  parameters: {
    controls: {
      include: [],
    },
  },
} satisfies Meta<typeof Center>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
