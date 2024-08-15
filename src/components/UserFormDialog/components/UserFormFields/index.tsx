import React from "react";

import { useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import { useFetchRoles } from "@/hooks/roles/useFetchRoles";
import { Role } from "@/services/roles/rolesServices";

export type UserFormInputs = {
  name: string;
  username: string;
  email: string;
  password?: string;
  roleId: number;
};

interface UserFormFieldsProps {
  isEditing: boolean;
  initialValues?: Partial<UserFormInputs>;
}

export const UserFormFields: React.FC<UserFormFieldsProps> = ({
  isEditing,
  initialValues,
}) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<UserFormInputs>();

  const { data, isLoading, isError } = useFetchRoles();

  return (
    <>
      <div className="mb-6">
        <Input
          title="Nombre"
          placeholder="Ingresa el nombre"
          {...register("name", { required: "el nombre es obligatorio" })}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-6">
        <Input
          title="Nombre de Usuario"
          placeholder="Ingresa el nombre de usuario"
          {...register("username", {
            required: "el nombre de usuario es obligatorio",
          })}
        />
        {errors.username && (
          <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
        )}
      </div>
      <div className="mb-6">
        <Input
          title="Correo Electrónico"
          placeholder="Ingresa el correo electrónico"
          type="email"
          {...register("email", {
            required: "el correo electrónico es obligatorio",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "ingresa una dirección de correo electrónico válida",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>
      {!isEditing && (
        <div className="mb-6">
          <Input
            title="Contraseña"
            placeholder="Ingresa la contraseña"
            type="password"
            {...register("password", {
              required: "la contraseña es obligatoria",
              minLength: {
                value: 8,
                message: "la contraseña debe tener al menos 8 caracteres",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
      )}
      <div className="mb-6">
        {isLoading && <p>Cargando roles...</p>}
        {isError && <p>Error al cargar los roles.</p>}
        {!isLoading && !isError && (
          <Select
            onValueChange={(value) => setValue("roleId", Number(value))}
            defaultValue={initialValues?.roleId?.toString()}
          >
            <SelectTrigger>Seleccionar Rol</SelectTrigger>
            <SelectContent>
              {data?.roles.map((role: Role) => (
                <SelectItem key={role.id} value={role.id.toString()}>
                  {role.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
    </>
  );
};
