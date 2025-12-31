import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Slider } from "@mantine/core";

const meta = {
  args: {
    defaultValue: 5,
    max: 10,
    min: 1,
    step: 1,
  },
  component: Slider,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: true,
      },
    },
  },
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof Slider>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
