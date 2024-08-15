"use client";

import { useState } from "react";

import { useQueryClient } from "@tanstack/react-query";

import { useFetchUsers } from "@/hooks/users/useFetchUsers";
import { useRegisterUser } from "@/hooks/users/useRegisterUser";

import {
  Button,
  DataTable,
  FeatureMessage,
  Loading,
  MaxWidthWrapper,
} from "@/components/";

import { columns } from "../../components/shared/columns.users";
import { UserFormInputs } from "@/components/UserFormDialog/components/UserFormFields";
import UserFormDialog from "@/components/UserFormDialog";
import useAuthValidation, { UserRole } from "@/hooks/auth/useAuthValidation";

const AccountsPage = () => {
  const queryClient = useQueryClient();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { hasPermissionAdmin } = useAuthValidation();

  const { data, isLoading, isError } = useFetchUsers();
  const registerUser = useRegisterUser();

  const handleAddUserSubmit = (formData: UserFormInputs) => {
    const payload = {
      ...formData,
      password: formData.password || "", // El campo password es opcional en el formulario; si no se envía, se asigna un string vacío. Esto se hace porque el mismo formulario se utiliza para la edición, donde el password no siempre se modifica.
    };

    registerUser.mutate(payload, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] }); // Invalidar la query de usuarios
        setIsDialogOpen(false);
      },
    });
  };

  if (isLoading) return <Loading />;
  if (isError) return <div>An error has occurred...</div>;

  return (
    <div>
      <MaxWidthWrapper>
        <FeatureMessage
          subtitle="Listado de usuarios del sistema"
          description="Aquí puede crear, editar y eliminar usuarios."
          title="Gestión de usuarios "
        />

        {hasPermissionAdmin && (
          <div className="mb-4 flex justify-end">
            <Button onClick={() => setIsDialogOpen(true)}>Crear Usuario</Button>
          </div>
        )}

        <DataTable columns={columns} data={data?.users || []} />

        <UserFormDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onSubmit={handleAddUserSubmit}
        />
      </MaxWidthWrapper>
    </div>
  );
};

export default AccountsPage;
