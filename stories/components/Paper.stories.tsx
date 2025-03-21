import { Container } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

import { Paper } from "../../src";

const meta = {
  args: {
    h: "100%",
    w: "100%",
  },
  argTypes: {
    shadowColor: {
      control: "radio",
    },
    shadowSize: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
  component: Paper,
  parameters: {
    controls: {
      include: ["shadowColor", "shadowSize"],
    },
    preview: {
      layout: false,
    },
  },
  render: (args) => (
    <Container h="100%" p="xl" w="100%">
      <Paper {...args} />
    </Container>
  ),
} satisfies Meta<typeof Paper>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
