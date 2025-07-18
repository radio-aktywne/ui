import { Text } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";

import { Calendar } from "../../src";

const meta = {
  argTypes: {
    grow: {
      control: "boolean",
    },
  },
  component: Calendar,
  parameters: {
    controls: {
      include: ["grow"],
    },
  },
  render: (args) => {
    const now = dayjs();

    return (
      <Calendar {...args} current={now} now={now}>
        <Calendar.Item current={now} end={now.add(1, "hour")} start={now}>
          <Text>Event</Text>
        </Calendar.Item>
      </Calendar>
    );
  },
} satisfies Meta<typeof Calendar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
