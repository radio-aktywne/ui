import { DEFAULT_THEME, Text } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

import { theme } from "../../../src";
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
      values={Object.keys({
        ...DEFAULT_THEME.fontSizes,
        ...theme.fontSizes,
      }).map((size) => ({ label: size, value: size }))}
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
        { label: "100", value: 100 },
        { label: "200", value: 200 },
        { label: "300", value: 300 },
        { label: "400", value: 400 },
        { label: "500", value: 500 },
        { label: "600", value: 600 },
        { label: "700", value: 700 },
        { label: "800", value: 800 },
        { label: "900", value: 900 },
      ]}
    />
  ),
} satisfies Story;
