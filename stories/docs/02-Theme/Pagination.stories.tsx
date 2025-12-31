import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Pagination } from "@mantine/core";

const meta = {
  args: {
    total: 10,
  },
  component: Pagination,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: true,
      },
    },
  },
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof Pagination>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
