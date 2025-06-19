// components/DeleteClientModal.tsx

"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
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
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Client</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete <strong>{clientName}</strong>? This
          action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="error" variant="contained">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
