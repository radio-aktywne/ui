import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Text } from "@mantine/core";

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
} satisfies Meta<typeof MasterDetailLayoutMasterPanel<"div">>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Singular: Story = {
  render: (input) => (
    <PageLayout>
      <MasterDetailLayout>
        <MasterDetailLayoutMasterPanel {...input} />
      </MasterDetailLayout>
    </PageLayout>
  ),
} satisfies Story;

export const Dual: Story = {
  render: (input) => (
    <PageLayout>
      <MasterDetailLayout>
        <MasterDetailLayoutMasterPanel {...input} />
        <MasterDetailLayoutDetailPanel>
          <Text>Detail</Text>
        </MasterDetailLayoutDetailPanel>
      </MasterDetailLayout>
    </PageLayout>
  ),
} satisfies Story;
