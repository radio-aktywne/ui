import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Button } from "@mantine/core";

import { Variants } from "../../utils/Variants";

const meta = {
  args: {
    children: "Click me",
  },
  component: Button,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none",
        withToolbar: true,
      },
    },
  },
  render: (input) => (
    <Variants
      component={Button<"button">}
      property="variant"
      rest={input}
      values={(
        [
          "default",
          "filled",
          "light",
          "outline",
          "subtle",
          "transparent",
        ] as const
      ).map((variant) => ({ label: variant, value: variant }))}
    />
  ),
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof Button<"button">>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
