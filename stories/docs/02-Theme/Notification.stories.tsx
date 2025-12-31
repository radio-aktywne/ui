import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Box, Center, Container, Notification } from "@mantine/core";

const meta = {
  args: {
    children: "Sample message",
    title: "Sample title",
  },
  component: Notification,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: true,
      },
    },
    preview: {
      layout: false,
    },
  },
  render: (input) => (
    <Box h="100%" px="xl" py="xl" w="100%">
      <Container h="100%" w="100%">
        <Center>
          <Notification {...input} />
        </Center>
      </Container>
    </Box>
  ),
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof Notification>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
