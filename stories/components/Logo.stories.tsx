import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Logo } from "../../src";

const meta = {
  component: Logo,
  parameters: {
    controls: {
      include: [],
    },
  },
} satisfies Meta<typeof Logo<"img">>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
