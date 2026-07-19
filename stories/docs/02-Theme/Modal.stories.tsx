import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const meta = {
  args: {
    children: "Sample content",
    onClose: () => {
      return;
    },
    opened: false,
    title: "Sample title",
  },
  component: Modal,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: true,
      },
    },
  },
  render: ({ onClose, ...input }) => {
    const [opened, { close, open }] = useDisclosure(false);

    return (
      <>
        <Modal
          {...input}
          onClose={() => {
            onClose();
            close();
          }}
          opened={opened}
        />
        <Button onClick={open}>Open</Button>
      </>
    );
  },
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof Modal>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
