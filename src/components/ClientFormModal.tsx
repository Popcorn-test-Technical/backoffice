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
  Divider,
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
    <Dialog
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "#111827", // any color you want
          borderRadius: 3, // optional styling
          border: "1px solid #374151",
        },
      }}
      onClose={onClose}
      fullWidth
    >
      <DialogTitle
        sx={{ color: "white", fontWeight: "bold" }}
        className="font-robotoMono"
      >
        {mode === "edit" ? "Update Client" : "Add New Client"}
      </DialogTitle>
      <Divider color="gray" />
      <form onSubmit={formik.handleSubmit}>
        <DialogContent className="space-y-7 pt-4 gap-4 flex flex-col">
          <TextField
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            placeholder="Enter your name"
            sx={{
              mt: 2,
              input: {
                color: "#f1f5f9", // input text
                backgroundColor: "#334155", // input background
              },
              label: {
                color: "#cbd5e1", // label color
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#64748b", // border
                },
                "&:hover fieldset": {
                  borderColor: "#94a3b8",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#38bdf8",
                },
              },
              "& input::placeholder": {
                color: "#94a3b8",
                opacity: 1,
              },
            }}
            InputLabelProps={{ shrink: true }}
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
            sx={{
              mt: 2,
              input: {
                color: "#f1f5f9", // input text
                backgroundColor: "#334155", // input background
              },
              label: {
                color: "#cbd5e1", // label color
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#64748b", // border
                },
                "&:hover fieldset": {
                  borderColor: "#94a3b8",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#38bdf8",
                },
              },
              "& input::placeholder": {
                color: "#94a3b8",
                opacity: 1,
              },
            }}
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
            sx={{
              mt: 2,
              input: {
                color: "#f1f5f9", // input text
                backgroundColor: "#334155", // input background
              },
              label: {
                color: "#cbd5e1", // label color
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#64748b", // border
                },
                "&:hover fieldset": {
                  borderColor: "#94a3b8",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#38bdf8",
                },
              },
              "& input::placeholder": {
                color: "#94a3b8",
                opacity: 1,
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClose}
            sx={{
              color: "white",
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              color: "white",
              borderColor: "#374151",
              background: "black",
              "&:hover": {
                borderColor: "#4b5563",
                backgroundColor: "#374151",
              },
            }}
          >
            {mode === "edit" ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
