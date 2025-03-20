import { Loader } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Loader,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: true,
      },
    },
  },
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof Loader>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
