import { Title } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  args: {
    children: "Sample text",
  },
  component: Title,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: true,
      },
    },
  },
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof Title>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
