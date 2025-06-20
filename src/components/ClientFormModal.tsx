// components/ClientFormModal.tsx

"use client";

import { Client } from "@/types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";

interface ClientFormModalProps {
  open: boolean;
  mode: "add" | "edit";
  initialData?: Client | null;
  onClose: () => void;
  onSubmit: (data: {
    id?: string;
    name: string;
    points: number;
    visits: number;
  }) => void;
}

export default function ClientFormModal({
  open,
  mode,
  initialData,
  onClose,
  onSubmit,
}: ClientFormModalProps) {
  const [name, setName] = useState("");
  const [points, setPoints] = useState(0);
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setName(initialData.name);
      setPoints(initialData.points);
      setVisits(initialData.total_vists);
    } else {
      setName("");
      setPoints(0);
      setVisits(0);
    }
  }, [mode, initialData, open]);

  const handleSubmit = () => {
    onSubmit({
      ...(mode === "edit" && initialData?.id ? { id: initialData.id } : {}),
      name,
      points,
      visits,
    });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>
        {mode === "edit" ? "Update Client" : "Add Client"}
      </DialogTitle>
      <DialogContent className="space-y-7 pt-4 gap-4 flex flex-col">
        <TextField
          label="Name"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Points"
          fullWidth
          variant="outlined"
          type="number"
          value={points}
          onChange={(e) => setPoints(Number(e.target.value))}
        />
        <TextField
          label="Total Visits"
          fullWidth
          variant="outlined"
          type="number"
          value={visits}
          onChange={(e) => setVisits(Number(e.target.value))}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          {mode === "edit" ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
