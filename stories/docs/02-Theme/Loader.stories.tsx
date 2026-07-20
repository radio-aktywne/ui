import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Loader } from "@mantine/core";

import { Variants } from "../../utils/Variants";

const meta = {
  component: Loader,
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
      component={Loader}
      property="type"
      rest={input}
      values={(["oval", "dots"] as const).map((variant) => ({
        label: variant,
        value: variant,
      }))}
    />
  ),
  tags: ["!autodocs", "!dev", "!test"],
} satisfies Meta<typeof Loader>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
