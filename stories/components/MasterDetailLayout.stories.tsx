import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Text } from "@mantine/core";

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
  render: (input) => (
    <PageLayout>
      <MasterDetailLayout {...input} />
    </PageLayout>
  ),
} satisfies Meta<typeof MasterDetailLayout<"div">>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Singular = {
  args: {
    children: (
      <MasterDetailLayoutMasterPanel>
        <Text>Master</Text>
      </MasterDetailLayoutMasterPanel>
    ),
  },
} satisfies Story;

export const Dual = {
  args: {
    children: (
      <>
        <MasterDetailLayoutMasterPanel>
          <Text>Master</Text>
        </MasterDetailLayoutMasterPanel>
        <MasterDetailLayoutDetailPanel>
          <Text>Detail</Text>
        </MasterDetailLayoutDetailPanel>
      </>
    ),
  },
} satisfies Story;
