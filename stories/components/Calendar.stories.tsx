import type { Meta, StoryObj } from "storybook-react-rsbuild";

import { Text } from "@mantine/core";
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
  render: (input) => {
    const now = dayjs();

    return (
      <Calendar {...input} current={now} now={now}>
        <Calendar.Item current={now} end={now.add(1, "hour")} start={now}>
          <Text>Event</Text>
        </Calendar.Item>
      </Calendar>
    );
  },
} satisfies Meta<typeof Calendar<"div">>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default = {} satisfies Story;
