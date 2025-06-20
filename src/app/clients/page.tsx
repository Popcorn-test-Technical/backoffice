"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Container,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  useAddClientMutation,
  useDeleteClientMutation,
  useGetAllClientsQuery,
  useUpdateClientMutation,
} from "@/store/clients/clientsApi";
import { Client } from "@/types";
import DeleteClientModal from "@/components/ModalConfirmation";
import ClientFormModal from "@/components/ClientFormModal";

export default function ClientsPage() {
  const [openModal, setOpenModal] = useState(false);
  const [clientToDelete, setClientToDelete] = useState<Client | null>(null);

  const [formMode, setFormMode] = useState<"add" | "edit">("add");
  const [formClient, setFormClient] = useState<Client | null>(null);
  const [openForm, setOpenForm] = useState(false);

  const { data: clients } = useGetAllClientsQuery();
  const [deleteClient, result] = useDeleteClientMutation();
  const [updateClient, updateResult] = useUpdateClientMutation();
  const [addClient, addResult] = useAddClientMutation();

  const handleAddClient = () => {
    setFormMode("add");
    setFormClient(null);
    setOpenForm(true);
  };

  const handleEditClient = (client: Client) => {
    setFormMode("edit");
    setFormClient(client);
    setOpenForm(true);
  };

  const handleDeleteClick = (client: Client) => {
    setClientToDelete(client);
    setOpenModal(true);
  };

  const confirmDelete = async () => {
    if (clientToDelete) {
      deleteClient(clientToDelete.id);
      setOpenModal(false);
    }
  };

  const handleFormSubmit = (data: {
    id?: string;
    name: string;
    points: number;
    visits: number;
  }) => {
    if (formMode === "add") {
      addClient(data);
    } else {
      if (formClient?.id)
        updateClient({
          id: formClient.id,
          data,
        });
    }
    setFormClient(null);
    setOpenForm(false);
  };

  return (
    <>
      <Container maxWidth="lg" className="mt-10">
        <div className="w-full justify-end flex mb-5">
          <Button variant="contained" color="primary" onClick={handleAddClient}>
            Add New Client
          </Button>
        </div>

        <TableContainer component={Paper}>
          <Table>
            <TableHead className="bg-gray-100">
              <TableRow>
                <TableCell>
                  <strong>ID</strong>
                </TableCell>
                <TableCell>
                  <strong>Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Points</strong>
                </TableCell>
                <TableCell>
                  <strong>Total Visits</strong>
                </TableCell>
                <TableCell>
                  <strong>Actions</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clients &&
                clients.map((client: Client) => (
                  <TableRow key={client.id}>
                    <TableCell>{client.id}</TableCell>
                    <TableCell>{client.name}</TableCell>
                    <TableCell>{client.points}</TableCell>
                    <TableCell>{client.total_vists}</TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleEditClient(client)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleDeleteClick(client)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              {(!clients || clients.length === 0) && (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No clients found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <DeleteClientModal
        open={openModal}
        clientName={clientToDelete?.name}
        onClose={() => setOpenModal(false)}
        onConfirm={confirmDelete}
      />
      <ClientFormModal
        mode={formMode}
        open={openForm}
        onClose={() => setOpenForm(false)}
        onSubmit={handleFormSubmit}
        initialData={formClient}
      />
    </>
  );
}
