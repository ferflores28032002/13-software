import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import Swal from "sweetalert2";

import { Button } from "@/components";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { User } from "@/services/users/usersService";
import { useDeleteUser } from "@/hooks/users/useFetchDeleteUser";
import { useUpdateUser } from "@/hooks/users/useUpdateUser";
import UserFormDialog from "@/components/UserFormDialog";
import { UserFormInputs } from "@/components/UserFormDialog/components/UserFormFields";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { useQueryClient } from "@tanstack/react-query";
import useAuthValidation from "@/hooks/auth/useAuthValidation";

const UserActionsCell = ({ row }:any) => {
  const { hasPermissionAdmin } = useAuthValidation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const queryClient = useQueryClient();
  const updateUserMutation = useUpdateUser();
  const deleteUserMutation = useDeleteUser();

  const handleEditSubmit = (formData: UserFormInputs) => {
    const payload = {
      ...formData,
      password: formData.password || "",
      id: row.original.id,
    };

    updateUserMutation.mutate(payload, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
        setIsDialogOpen(false);
      },
    });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "El usuario será deshabilitado y no podrá acceder al sistema.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, deshabilitar",
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#3085d6",
      confirmButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUserMutation.mutate(row.original.id, {
          onSuccess: () => {
            Swal.fire({
              confirmButtonColor: "#3085d6",
              title: "Deshabilitado",
              text: "El usuario ha sido deshabilitado.",
              icon: "success",
              confirmButtonText: "OK",
            });
          },
          onError: (error) => {
            Swal.fire({
              title: "Error",
              text: error.message,
              icon: "error",
              confirmButtonText: "OK",
            });
          },
        });
      }
    });
  };

  return (
    <>
      {hasPermissionAdmin && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
              Editar
            </DropdownMenuItem>
            {row.original.is_active && (
              <DropdownMenuItem onClick={handleDelete}>
                Deshabilitar
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      <UserFormDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSubmit={handleEditSubmit}
        initialValues={{
          name: row.original.name,
          username: row.original.username,
          email: row.original.email,
          roleId: row.original.role.id,
        }}
        isEditing={true}
      />
    </>
  );
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "username",
    header: "Username",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("username")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "is_active",
    header: "Status",
    cell: ({ row }) => {
      const isActive = row.getValue("is_active");
      return (
        <Badge variant={isActive ? "success" : "destructive"}>
          {isActive ? "Active" : "Inactive"}
        </Badge>
      );
    },
  },
  {
    accessorKey: "role.name",
    header: "Role",
    cell: ({ row }) => (
      <div className="capitalize">{row.original.role.name}</div>
    ),
  },
  {
    accessorKey: "role.description",
    header: "Role Description",
    cell: ({ row }) => (
      <div className="capitalize">{row.original.role.description}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: UserActionsCell,
  },
];
