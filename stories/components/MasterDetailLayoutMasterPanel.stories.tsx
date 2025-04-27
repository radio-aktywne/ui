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
    fluid: {
      control: "boolean",
    },
    shadowColor: {
      control: "radio",
    },
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
  component: MasterDetailLayoutMasterPanel,
  parameters: {
    controls: {
      include: ["fluid", "size", "shadowColor"],
    },
    preview: {
      layout: false,
    },
  },
} satisfies Meta<typeof MasterDetailLayoutMasterPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Singular: Story = {
  render: (args) => (
    <PageLayout>
      <MasterDetailLayout>
        <MasterDetailLayoutMasterPanel {...args} />
      </MasterDetailLayout>
    </PageLayout>
  ),
} satisfies Story;

export const Dual: Story = {
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
} satisfies Story;
