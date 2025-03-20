import { Text } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

import { Typeset } from "./Typeset";

const meta = {
  args: {
    children: "The quick brown fox jumps over the lazy dog",
  },
  component: Text,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: true,
      },
    },
  },
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof Text>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Sizes = {
  render: (props) => (
    <Typeset
      component={Text<"p">}
      property="size"
      rest={props}
      values={[
        { label: "xs", value: "xs" },
        { label: "sm", value: "sm" },
        { label: "md", value: "md" },
        { label: "lg", value: "lg" },
        { label: "xl", value: "xl" },
      ]}
    />
  ),
} satisfies Story;

export const Weights = {
  render: (props) => (
    <Typeset
      component={Text<"p">}
      property="fw"
      rest={props}
      values={[
        { label: "lighter", value: "lighter" },
        { label: "normal", value: "normal" },
        { label: "bold", value: "bold" },
        { label: "bolder", value: "bolder" },
      ]}
    />
  ),
} satisfies Story;
