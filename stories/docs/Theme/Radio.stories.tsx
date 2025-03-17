import { Radio, Stack } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

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
  render: (props) => (
    <Radio.Group name="radio">
      <Stack>
        {["One", "Two", "Three"].map((label, index) => (
          <Radio
            key={index}
            label={label}
            value={String(index + 1)}
            {...props}
          />
        ))}
      </Stack>
    </Radio.Group>
  ),
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof Radio>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
