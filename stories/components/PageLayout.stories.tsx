import { Meta, StoryObj } from "@storybook/react";

import { PageLayout, Paper } from "../../src";

const meta = {
  args: {
    children: <Paper h="100%" w="100%" />,
  },
  argTypes: {
    p: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
  component: PageLayout,
  parameters: {
    controls: {
      include: ["p", "size"],
    },
    preview: {
      layout: false,
    },
  },
} satisfies Meta<typeof PageLayout>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
