import { Text } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";

import {
  MasterDetailLayout,
  MasterDetailLayoutDetailPanel,
  MasterDetailLayoutMasterPanel,
  PageLayout,
} from "../../src";

const meta = {
  args: {
    children: <Text>Detail</Text>,
  },
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
        <MasterDetailLayoutMasterPanel>
          <Text>Master</Text>
        </MasterDetailLayoutMasterPanel>
        <MasterDetailLayoutDetailPanel {...args} />
      </MasterDetailLayout>
    </PageLayout>
  ),
} satisfies Meta<typeof MasterDetailLayoutDetailPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
