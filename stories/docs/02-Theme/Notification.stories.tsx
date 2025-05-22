import { Box, Center, Container, Notification } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

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
  render: (args) => (
    <Box h="100%" px="xl" py="xl" w="100%">
      <Container h="100%" w="100%">
        <Center>
          <Notification {...args} />
        </Center>
      </Container>
    </Box>
  ),
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof Notification>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
