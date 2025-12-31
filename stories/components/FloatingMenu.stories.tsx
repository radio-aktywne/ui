import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { ActionIcon, Text } from "@mantine/core";
import { MdMenu } from "react-icons/md";

import { FloatingMenu, PageLayout } from "../../src";

const meta = {
  args: {
    children: (
      <>
        <FloatingMenu.Target>
          <ActionIcon size="lg" variant="filled">
            <MdMenu size="75%" />
          </ActionIcon>
        </FloatingMenu.Target>
        <FloatingMenu.Dropdown>
          <Text>Menu</Text>
        </FloatingMenu.Dropdown>
      </>
    ),
  },
  argTypes: {
    padding: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    position: {
      control: "radio",
      options: ["bottom-left", "bottom-right", "top-left", "top-right"],
    },
  },
  component: FloatingMenu,
  parameters: {
    controls: {
      include: ["padding", "position"],
    },
    preview: {
      layout: false,
    },
  },
  render: (input) => (
    <PageLayout>
      <FloatingMenu {...input} />
    </PageLayout>
  ),
} satisfies Meta<typeof FloatingMenu>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
