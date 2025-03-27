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
    children: <Text>Master</Text>,
  },
  argTypes: {
    shadowColor: {
      control: "radio",
    },
  },
  component: MasterDetailLayoutMasterPanel,
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
        <MasterDetailLayoutMasterPanel {...args} />
        <MasterDetailLayoutDetailPanel>
          <Text>Detail</Text>
        </MasterDetailLayoutDetailPanel>
      </MasterDetailLayout>
    </PageLayout>
  ),
} satisfies Meta<typeof MasterDetailLayoutMasterPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
