import { Meta, StoryObj } from "@storybook/react";

import { Logo } from "../../src";

const meta = {
  component: Logo,
  parameters: {
    controls: {
      include: [],
    },
  },
} satisfies Meta<typeof Logo>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
