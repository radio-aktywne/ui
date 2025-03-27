import { Meta, StoryObj } from "@storybook/react";

import {
  MasterDetailLayout,
  MasterDetailLayoutDetailPanel,
  MasterDetailLayoutMasterPanel,
  PageLayout,
} from "../../src";

const meta = {
  argTypes: {
    shadowColor: {
      control: "radio",
    },
  },
  component: MasterDetailLayoutDetailPanel,
  parameters: {
    controls: {
      include: ["shadowColor"],
    },
    preview: {
      layout: false,
    },
  },
  render: (args) => (
    <PageLayout>
      <MasterDetailLayout>
        <MasterDetailLayoutMasterPanel />
        <MasterDetailLayoutDetailPanel {...args} />
      </MasterDetailLayout>
    </PageLayout>
  ),
} satisfies Meta<typeof MasterDetailLayoutDetailPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
