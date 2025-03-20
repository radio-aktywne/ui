import { NumberInput } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

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
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
