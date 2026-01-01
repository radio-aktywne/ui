import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Select } from "@mantine/core";

const meta = {
  args: {
    data: ["One", "Two", "Three"],
    label: "Choose one option",
  },
  component: Select,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: true,
      },
    },
  },
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
