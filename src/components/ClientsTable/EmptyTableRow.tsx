"use client";

import { TableRow, TableCell, Typography } from "@mui/material";

export default function EmptyTableRow() {
  return (
    <TableRow>
      <TableCell
        colSpan={7}
        align="center"
        sx={{
          py: 8,
          color: "#9ca3af",
          borderBottom: "none",
        }}
      >
        <Typography variant="h6" sx={{ mb: 1 }}>
          No clients found
        </Typography>
        <Typography variant="body2">
          Start by adding your first client
        </Typography>
      </TableCell>
    </TableRow>
  );
}
