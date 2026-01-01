import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Loader } from "@mantine/core";

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

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
