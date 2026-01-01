import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { NumberInput } from "@mantine/core";

const meta = {
  args: {
    defaultValue: 0,
    label: "Pick a number",
  },
  component: NumberInput,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: true,
      },
    },
  },
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof NumberInput>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
