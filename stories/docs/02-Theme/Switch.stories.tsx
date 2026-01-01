import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Switch } from "@mantine/core";

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

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
