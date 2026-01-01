import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { TextInput } from "@mantine/core";

const meta = {
  args: {
    label: "Type something",
  },
  component: TextInput,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: true,
      },
    },
  },
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof TextInput>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
