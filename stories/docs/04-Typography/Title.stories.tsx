import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Title } from "@mantine/core";

import { Variants } from "../../utils/Variants";

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

type Story = StoryObj<typeof meta>;

export default meta;

export const Orders = {
  render: (input) => (
    <Variants
      align="baseline"
      component={Title}
      property="order"
      rest={{
        ...input,
        style: {
          overflow: "hidden",
          textAlign: "start",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        },
      }}
      values={([6, 5, 4, 3, 2, 1] as const).map((order) => ({
        label: order.toString(),
        value: order,
      }))}
    />
  ),
} satisfies Story;
