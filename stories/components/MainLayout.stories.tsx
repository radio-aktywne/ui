import { Text } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

import { MainLayout, PageLayout } from "../../src";

const meta = {
  args: {
    children: <Text>Content</Text>,
  },
  argTypes: {
    fluid: {
      control: "boolean",
    },
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
  component: MainLayout,
  parameters: {
    controls: {
      include: ["fluid", "size"],
    },
    preview: {
      layout: false,
    },
  },
  render: (args) => (
    <PageLayout>
      <MainLayout {...args} />
    </PageLayout>
  ),
} satisfies Meta<typeof MainLayout>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
