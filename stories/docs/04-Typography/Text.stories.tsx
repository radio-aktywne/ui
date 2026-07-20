import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { DEFAULT_THEME, Text } from "@mantine/core";

import { theme } from "../../../src";
import { Variants } from "../../utils/Variants";

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
    <Variants
      align="baseline"
      component={Text<"p">}
      property="size"
      rest={{
        ...input,
        style: {
          overflow: "hidden",
          textAlign: "start",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        },
      }}
      values={Object.keys({
        ...DEFAULT_THEME.fontSizes,
        ...theme.fontSizes,
      }).map((size) => ({ label: size, value: size }))}
    />
  ),
} satisfies Story;

export const Weights = {
  render: (input) => (
    <Variants
      align="baseline"
      component={Text<"p">}
      property="fw"
      rest={{
        ...input,
        style: {
          overflow: "hidden",
          textAlign: "start",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        },
      }}
      values={([100, 200, 300, 400, 500, 600, 700, 800, 900] as const).map(
        (weight) => ({ label: weight.toString(), value: weight }),
      )}
    />
  ),
} satisfies Story;
