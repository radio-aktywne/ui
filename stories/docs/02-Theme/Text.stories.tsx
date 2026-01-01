import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Text } from "@mantine/core";

const meta = {
  args: {
    children: "Sample text",
  },
  component: Text,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: true,
      },
    },
  },
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof Text<"p">>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
