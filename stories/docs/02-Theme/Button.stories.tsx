import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Button } from "@mantine/core";

const meta = {
  args: {
    children: "Click me",
  },
  component: Button,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: true,
      },
    },
  },
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof Button<"button">>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
