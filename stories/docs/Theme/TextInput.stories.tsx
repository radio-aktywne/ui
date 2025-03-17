import { TextInput } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  args: {
    label: "Type something",
  },
  component: TextInput,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: true,
      },
    },
  },
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof TextInput>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
