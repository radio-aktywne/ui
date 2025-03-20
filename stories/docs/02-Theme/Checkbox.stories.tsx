import { Checkbox } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  args: {
    label: "Check me",
  },
  component: Checkbox,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: true,
      },
    },
  },
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof Checkbox>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
