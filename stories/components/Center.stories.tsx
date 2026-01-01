import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Title } from "@mantine/core";

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
} satisfies Meta<typeof Center<"div">>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
