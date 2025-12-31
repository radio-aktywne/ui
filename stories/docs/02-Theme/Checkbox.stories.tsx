import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Checkbox } from "@mantine/core";

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

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
