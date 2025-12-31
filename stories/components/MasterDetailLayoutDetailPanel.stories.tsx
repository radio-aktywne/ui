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
  render: (input) => (
    <PageLayout>
      <MasterDetailLayout>
        <MasterDetailLayoutMasterPanel>
          <Text>Master</Text>
        </MasterDetailLayoutMasterPanel>
        <MasterDetailLayoutDetailPanel {...input} />
      </MasterDetailLayout>
    </PageLayout>
  ),
} satisfies Meta<typeof MasterDetailLayoutDetailPanel<"div">>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
