import type { Meta, StoryObj } from "storybook-react-rsbuild";

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
  render: (input) => (
    <PageLayout>
      <UserMenu {...input} />
    </PageLayout>
  ),
} satisfies Meta<typeof UserMenu>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
