import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Code } from "@mantine/core";

const meta = {
  args: {
    children: "Sample text",
  },
  component: Code,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: true,
      },
    },
  },
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof Code>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
