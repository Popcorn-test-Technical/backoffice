"use client";

import { TableRow, TableCell, Checkbox, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Client } from "@/types";

interface ClientsTableRowProps {
  client: Client;
  isSelected: boolean;
  onSelect: (clientId: string) => void;
  onEdit: (client: Client) => void;
  onDelete: (client: Client) => void;
}

export default function ClientsTableRow({
  client,
  isSelected,
  onSelect,
  onEdit,
  onDelete,
}: ClientsTableRowProps) {
  return (
    <TableRow
      className="max-h-4"
      sx={{
        "&:hover": {
          backgroundColor: "#374151",
        },
        border: "none",
        background: "black",
      }}
    >
      <TableCell
        padding="checkbox"
        className="max-h-2"
        sx={{
          borderBottom: "1px solid #374151",
        }}
      >
        <Checkbox
          checked={isSelected}
          onChange={() => onSelect(client.id)}
          sx={{
            color: "#9ca3af",
            "&.Mui-checked": { color: "#3b82f6" },
          }}
        />
      </TableCell>
      <TableCell
        sx={{
          color: "#e5e7eb",
          fontWeight: 500,
          borderBottom: "1px solid #374151",
        }}
      >
        {client.id}
      </TableCell>
      <TableCell
        sx={{
          color: "#e5e7eb",
          fontWeight: 500,
          borderBottom: "1px solid #374151",
        }}
      >
        {client.name}
      </TableCell>
      <TableCell
        sx={{
          color: "#e5e7eb",
          fontWeight: 500,
          borderBottom: "1px solid #374151",
        }}
      >
        {client.points.toLocaleString()}
      </TableCell>
      <TableCell
        sx={{
          color: "#e5e7eb",
          fontWeight: 500,
          borderBottom: "1px solid #374151",
        }}
      >
        {client.total_vists}
      </TableCell>
      <TableCell sx={{ borderBottom: "1px solid #374151" }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            onClick={() => onEdit(client)}
            sx={{
              color: "#9ca3af",
              "&:hover": {
                backgroundColor: "#374151",
                color: "#3b82f6",
              },
            }}
            size="small"
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={() => onDelete(client)}
            sx={{
              color: "#9ca3af",
              "&:hover": {
                backgroundColor: "#374151",
                color: "#ef4444",
              },
            }}
            size="small"
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      </TableCell>
    </TableRow>
  );
}
