import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "../../src";

const meta = {
  args: {
    children: "Click me",
    onClick: fn(),
  },
  argTypes: {
    children: {
      control: "text",
    },
    color: {
      control: "color",
    },
    disabled: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    radius: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    variant: {
      control: "select",
      options: [
        "default",
        "filled",
        "light",
        "outline",
        "subtle",
        "transparent",
        "white",
      ],
    },
  },
  component: Button,
  parameters: {
    controls: {
      include: [
        "children",
        "color",
        "disabled",
        "fullWidth",
        "loading",
        "radius",
        "size",
        "variant",
      ],
    },
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
