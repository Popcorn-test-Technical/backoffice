"use client";

import { initialClientValues, validationSchema } from "@/formik/clientForm";
import { Client } from "@/types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";

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
  const formik = useFormik({
    initialValues: initialClientValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      onSubmit({
        ...(mode === "edit" && initialData?.id ? { id: initialData.id } : {}),
        name: values.name,
        points: values.points,
        visits: values.visits,
      });
    },
  });

  useEffect(() => {
    if (mode === "edit" && initialData) {
      formik.setValues({
        name: initialData.name,
        points: initialData.points,
        visits: initialData.total_vists,
      });
    } else {
      formik.resetForm();
    }
  }, [mode, initialData, open]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>
        {mode === "edit" ? "Update Client" : "Add Client"}
      </DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent className="space-y-7 pt-4 gap-4 flex flex-col">
          <TextField
            name="name"
            label="Name"
            fullWidth
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            name="points"
            label="Points"
            type="number"
            fullWidth
            variant="outlined"
            value={formik.values.points}
            onChange={formik.handleChange}
            error={formik.touched.points && Boolean(formik.errors.points)}
            helperText={formik.touched.points && formik.errors.points}
          />
          <TextField
            name="visits"
            label="Total Visits"
            type="number"
            fullWidth
            variant="outlined"
            value={formik.values.visits}
            onChange={formik.handleChange}
            error={formik.touched.visits && Boolean(formik.errors.visits)}
            helperText={formik.touched.visits && formik.errors.visits}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            {mode === "edit" ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
