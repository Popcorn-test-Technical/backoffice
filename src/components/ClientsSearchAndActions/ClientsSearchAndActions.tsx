"use client";

import { Box, Button, TextField, InputAdornment } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Client } from "@/types";

interface ClientsSearchAndActionsProps {
  onAddClient: () => void;
  onDeleteClients: () => void;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  isSelectedRow: boolean;
}

export default function ClientsSearchAndActions({
  onAddClient,
  searchValue = "",
  onSearchChange,
  onDeleteClients,
  isSelectedRow,
}: ClientsSearchAndActionsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        mb: 3,
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        {isSelectedRow && (
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={onDeleteClients}
          >
            Delete Clients
          </Button>
        )}
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            color: "white",
            borderColor: "#374151",
            background: "#111827",
            "&:hover": {
              borderColor: "#4b5563",
              backgroundColor: "#374151",
            },
          }}
          onClick={onAddClient}
        >
          Add Client
        </Button>
      </Box>
    </Box>
  );
}
