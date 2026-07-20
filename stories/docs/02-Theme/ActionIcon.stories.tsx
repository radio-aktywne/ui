import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { ActionIcon } from "@mantine/core";
import { MdFavorite } from "react-icons/md";

import { Variants } from "../../utils/Variants";

const meta = {
  args: {
    children: <MdFavorite />,
  },
  component: ActionIcon,
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
      component={ActionIcon<"button">}
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
} satisfies Meta<typeof ActionIcon<"button">>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
