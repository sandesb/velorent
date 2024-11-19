import React from "react";
import { Table } from "@radix-ui/themes";
import ActionPopover from "./ActionPopover";

const GridList = ({ vehicles }) => {
  return (
    <Table.Root variant="surface" className="w-full">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Vehicle</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {vehicles.map((vehicle) => (
          <Table.Row key={vehicle.id}>
            <Table.RowHeaderCell>{vehicle.title}</Table.RowHeaderCell>
            <Table.Cell>{vehicle.price}</Table.Cell>
            <Table.Cell>
              <ActionPopover
                buttons={[
                  {
                    label: "Edit",
                    onClick: () => console.log(`Edit ${vehicle.title}`),
                  },
                  {
                    label: "Delete",
                    variant: "delete",
                    onClick: () => console.log(`Delete ${vehicle.title}`),
                  },
                ]}
              />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default GridList;
