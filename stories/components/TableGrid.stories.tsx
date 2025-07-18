import { Text } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react";

import { TableGrid } from "../../src";

const meta = {
  args: {
    columns: 3,
    rows: 3,
    style: {
      gap: "1em",
    },
  },
  argTypes: {
    cellHeight: {
      control: "text",
    },
    cellWidth: {
      control: "text",
    },
    columns: {
      control: {
        min: 1,
        type: "number",
      },
    },
    grow: {
      control: "boolean",
    },
    rows: {
      control: {
        min: 1,
        type: "number",
      },
    },
  },
  component: TableGrid,
  parameters: {
    controls: {
      include: ["cellHeight", "cellWidth", "columns", "grow", "rows"],
    },
  },
  render: (args) => {
    const { columns, rows } = args;

    return (
      <TableGrid {...args}>
        <TableGrid.Corner>
          <Text>Corner</Text>
        </TableGrid.Corner>
        {[...Array(columns).keys()].map((_, index) => (
          <TableGrid.ColumnsHeader key={index}>
            <Text>Column {index + 1}</Text>
          </TableGrid.ColumnsHeader>
        ))}
        {[...Array(rows).keys()].map((_, index) => (
          <Fragment key={index}>
            <TableGrid.RowsHeader>
              <Text>Row {index + 1}</Text>
            </TableGrid.RowsHeader>
            {[...Array(columns).keys()].map((_, cellIndex) => (
              <TableGrid.Cell key={cellIndex}>
                <Text>
                  Cell {index + 1}-{cellIndex + 1}
                </Text>
              </TableGrid.Cell>
            ))}
          </Fragment>
        ))}
      </TableGrid>
    );
  },
} satisfies Meta<typeof TableGrid>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
