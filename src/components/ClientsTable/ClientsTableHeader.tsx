"use client";

import { TableHead, TableRow, TableCell, Checkbox } from "@mui/material";

interface ClientsTableHeaderProps {
  selectedCount: number;
  totalCount: number;
  onSelectAll: () => void;
}

export default function ClientsTableHeader({
  selectedCount,
  totalCount,
  onSelectAll,
}: ClientsTableHeaderProps) {
  return (
    <TableHead sx={{ borderBottom: "none", borderRadius: 20 }}>
      <TableRow sx={{ backgroundColor: "#111827", borderRadius: 20 }}>
        <TableCell
          padding="checkbox"
          sx={{
            border: "none",
          }}
        >
          <Checkbox
            checked={selectedCount === totalCount && totalCount > 0}
            indeterminate={selectedCount > 0 && selectedCount < totalCount}
            onChange={onSelectAll}
            sx={{
              color: "#9ca3af",
              "&.Mui-checked": { color: "#3b82f6" },
            }}
          />
        </TableCell>
        <TableCell
          sx={{
            color: "#9ca3af",
            fontWeight: 600,
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            border: "none",
            py: 2,
          }}
        >
          # Client ID
        </TableCell>
        <TableCell
          sx={{
            color: "#9ca3af",
            fontWeight: 600,
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            border: "none",
          }}
        >
          Customer
        </TableCell>
        <TableCell
          sx={{
            color: "#9ca3af",
            fontWeight: 600,
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            border: "none",
          }}
        >
          Points
        </TableCell>
        <TableCell
          sx={{
            color: "#9ca3af",
            fontWeight: 600,
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            border: "none",
          }}
        >
          Total Visits
        </TableCell>
        <TableCell
          sx={{
            color: "#9ca3af",
            fontWeight: 600,
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            border: "none",
          }}
        >
          Actions
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
