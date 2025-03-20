import { Switch } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  args: {
    label: "Switch me",
  },
  component: Switch,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: true,
      },
    },
  },
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof Switch>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
