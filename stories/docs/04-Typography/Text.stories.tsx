import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { DEFAULT_THEME, Text } from "@mantine/core";

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
} satisfies Meta<typeof Text<"p">>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Sizes = {
  render: (input) => (
    <Typeset
      component={Text<"p">}
      property="size"
      rest={input}
      values={Object.keys({
        ...DEFAULT_THEME.fontSizes,
        ...theme.fontSizes,
      }).map((size) => ({ label: size, value: size }))}
    />
  ),
} satisfies Story;

export const Weights = {
  render: (input) => (
    <Typeset
      component={Text<"p">}
      property="fw"
      rest={input}
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
