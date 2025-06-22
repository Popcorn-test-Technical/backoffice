"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Divider,
} from "@mui/material";

interface DeleteClientModalProps {
  open: boolean;
  clientName?: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteClientModal({
  open,
  clientName,
  onClose,
  onConfirm,
}: DeleteClientModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: "#111827", // any color you want
          borderRadius: 3, // optional styling
        },
      }}
    >
      <DialogTitle color="white">Delete Client</DialogTitle>
      <Divider color="#374151" />
      <DialogContent>
        <DialogContentText color="white">
          Are you sure you want to delete <strong>{clientName}</strong>? This
          action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={{
            color: "white",
          }}
          color="primary"
        >
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          color="error"
          sx={{
            color: "white",
            borderColor: "#374151",
            background: "black",
            "&:hover": {
              borderColor: "#4b5563",
              backgroundColor: "#374151",
            },
          }}
          variant="contained"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
