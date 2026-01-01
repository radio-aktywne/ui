import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Radio, Stack } from "@mantine/core";

const meta = {
  component: Radio,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: true,
      },
    },
  },
  render: ({ ref, ...input }) => (
    <Radio.Group name="radio">
      <Stack>
        {["One", "Two", "Three"].map((label, index) => (
          <Radio
            key={index}
            label={label}
            value={String(index + 1)}
            {...input}
          />
        ))}
      </Stack>
    </Radio.Group>
  ),
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof Radio>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
