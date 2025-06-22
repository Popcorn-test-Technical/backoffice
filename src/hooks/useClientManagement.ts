"use client";

import { useState } from "react";
import {
  useAddClientMutation,
  useDeleteClientMutation,
  useGetAllClientsQuery,
  useUpdateClientMutation,
} from "@/store/clients/clientsApi";
import { Client } from "@/types";

export function useClientManagement() {
  const [openModal, setOpenModal] = useState(false);
  const [clientToDelete, setClientToDelete] = useState<Client | null>(null);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [formMode, setFormMode] = useState<"add" | "edit">("add");
  const [formClient, setFormClient] = useState<Client | null>(null);
  const [openForm, setOpenForm] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { data: clients = [] } = useGetAllClientsQuery();
  const [deleteClient] = useDeleteClientMutation();
  const [updateClient] = useUpdateClientMutation();
  const [addClient] = useAddClientMutation();

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
    } else if (selectedRows.length > 0) {
      handleDeleteMultiRow();
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
      if (formClient?.id) {
        updateClient({
          id: formClient.id,
          data,
        });
      }
    }
    setFormClient(null);
    setOpenForm(false);
  };

  const handleSelectRow = (clientId: string) => {
    setSelectedRows((prev) =>
      prev.includes(clientId)
        ? prev.filter((id) => id !== clientId)
        : [...prev, clientId]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === clients.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(clients.map((client) => client.id));
    }
  };

  const handleDeleteMultiRow = () => {
    for (let client_id of selectedRows) {
      deleteClient(client_id);
    }
  };

  // Filter clients based on search
  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      client.id.toLowerCase().includes(searchValue.toLowerCase())
  );

  return {
    // State
    openModal,
    clientToDelete,
    selectedRows,
    formMode,
    formClient,
    openForm,
    searchValue,
    clients: filteredClients,

    // Actions
    handleAddClient,
    handleEditClient,
    handleDeleteClick,
    confirmDelete,
    handleFormSubmit,
    handleSelectRow,
    handleSelectAll,
    setOpenModal,
    setOpenForm,
    setSearchValue,
    handleDeleteMultiRow,
  };
}
