"use client";

import { Table, TableBody, TableContainer, Paper } from "@mui/material";
import ClientsTableHeader from "./ClientsTableHeader";
import ClientsTableRow from "./ClientsTableRow";
import EmptyTableRow from "./EmptyTableRow";
import { Client } from "@/types";

interface ClientsTableProps {
  clients: Client[];
  selectedRows: string[];
  onSelectRow: (clientId: string) => void;
  onSelectAll: () => void;
  onEditClient: (client: Client) => void;
  onDeleteClient: (client: Client) => void;
}

export default function ClientsTable({
  clients,
  selectedRows,
  onSelectRow,
  onSelectAll,
  onEditClient,
  onDeleteClient,
}: ClientsTableProps) {
  return (
    <Paper
      sx={{
        backgroundColor: "#1f2937",
        borderRadius: 2,
        overflow: "hidden",
        borderBottom: "none",
      }}
    >
      <TableContainer>
        <Table>
          <ClientsTableHeader
            selectedCount={selectedRows.length}
            totalCount={clients.length}
            onSelectAll={onSelectAll}
          />
          <TableBody>
            {clients.length > 0 ? (
              clients.map((client) => (
                <ClientsTableRow
                  key={client.id}
                  client={client}
                  isSelected={selectedRows.includes(client.id)}
                  onSelect={onSelectRow}
                  onEdit={onEditClient}
                  onDelete={onDeleteClient}
                />
              ))
            ) : (
              <EmptyTableRow />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
