import { Meta, StoryObj } from "@storybook/react";

import { PageLayout, UserMenu } from "../../src";

const meta = {
  args: {
    items: {
      logout: {
        label: "Logout",
        url: "https://example.com/logout",
      },
    },
    user: {
      name: "John Doe",
    },
  },
  argTypes: {
    color: {
      control: "radio",
    },
    padding: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    shadow: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
  component: UserMenu,
  parameters: {
    controls: {
      include: ["color", "padding", "shadow", "size"],
    },
    preview: {
      layout: false,
    },
  },
  render: (args) => (
    <PageLayout>
      <UserMenu {...args} />
    </PageLayout>
  ),
} satisfies Meta<typeof UserMenu>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
