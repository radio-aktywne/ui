import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Text } from "@mantine/core";

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
  render: (input) => (
    <PageLayout>
      <MainLayout {...input} />
    </PageLayout>
  ),
} satisfies Meta<typeof MainLayout<"div">>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
