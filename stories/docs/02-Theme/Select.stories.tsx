import { Select } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

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
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
