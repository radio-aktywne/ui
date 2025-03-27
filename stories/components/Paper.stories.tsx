import { Box, Container, Text } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

import { Paper } from "../../src";

const meta = {
  args: {
    children: <Text>Content</Text>,
    h: "100%",
    w: "100%",
  },
  argTypes: {
    center: {
      control: "boolean",
    },
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
      include: ["center", "shadowColor", "shadowSize"],
    },
    preview: {
      layout: false,
    },
  },
  render: (args) => (
    <Box h="100%" px="xl" py="xl" w="100%">
      <Container h="100%" w="100%">
        <Paper {...args} />
      </Container>
    </Box>
  ),
} satisfies Meta<typeof Paper>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
