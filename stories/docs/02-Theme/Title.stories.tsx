import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Title } from "@mantine/core";

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

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
