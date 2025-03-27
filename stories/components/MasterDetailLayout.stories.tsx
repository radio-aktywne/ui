import { Meta, StoryObj } from "@storybook/react";

import {
  MasterDetailLayout,
  MasterDetailLayoutDetailPanel,
  MasterDetailLayoutMasterPanel,
  PageLayout,
} from "../../src";

const meta = {
  argTypes: {
    grow: {
      control: "boolean",
    },
    gutter: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
  component: MasterDetailLayout,
  parameters: {
    controls: {
      include: ["grow", "gutter"],
    },
    preview: {
      layout: false,
    },
  },
  render: (args) => (
    <PageLayout>
      <MasterDetailLayout {...args} />
    </PageLayout>
  ),
} satisfies Meta<typeof MasterDetailLayout>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Singular = {
  args: {
    children: <MasterDetailLayoutMasterPanel />,
  },
} satisfies Story;

export const Dual = {
  args: {
    children: (
      <>
        <MasterDetailLayoutMasterPanel />
        <MasterDetailLayoutDetailPanel />
      </>
    ),
  },
} satisfies Story;
