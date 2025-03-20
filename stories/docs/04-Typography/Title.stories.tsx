import { Title } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

import { Typeset } from "./Typeset";

const meta = {
  args: {
    children: "The quick brown fox jumps over the lazy dog",
  },
  component: Title,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: true,
      },
    },
  },
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof Title>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Orders = {
  render: (props) => (
    <Typeset
      component={Title}
      property="order"
      rest={props}
      values={[
        { label: "6", value: 6 },
        { label: "5", value: 5 },
        { label: "4", value: 4 },
        { label: "3", value: 3 },
        { label: "2", value: 2 },
        { label: "1", value: 1 },
      ]}
    />
  ),
} satisfies Story;
