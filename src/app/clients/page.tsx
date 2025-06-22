"use client";

import { Box, Container } from "@mui/material";
import ClientsTable from "@/components/ClientsTable/ClientsTable";
import ClientsSearchAndActions from "@/components/ClientsSearchAndActions/ClientsSearchAndActions";
import DeleteClientModal from "@/components/ModalConfirmation";
import ClientFormModal from "@/components/ClientFormModal";
import { useClientManagement } from "@/hooks/useClientManagement";

export default function ClientsPage() {
  const {
    openModal,
    clientToDelete,
    selectedRows,
    formMode,
    formClient,
    openForm,
    searchValue,
    clients,
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
  } = useClientManagement();

  return (
    <Box
      sx={{
        backgroundColor: "black",
        minHeight: "100vh",
        color: "white",
        p: 3,
      }}
    >
      <Container maxWidth="xl">
        <ClientsSearchAndActions
          onAddClient={handleAddClient}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          onDeleteClients={() => setOpenModal(true)}
          isSelectedRow={selectedRows.length > 0}
        />

        <ClientsTable
          clients={clients}
          selectedRows={selectedRows}
          onSelectRow={handleSelectRow}
          onSelectAll={handleSelectAll}
          onEditClient={handleEditClient}
          onDeleteClient={handleDeleteClick}
        />
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
    </Box>
  );
}
