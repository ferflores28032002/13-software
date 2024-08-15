import React, { useEffect } from "react";

import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { UserFormFields, UserFormInputs } from "./components/UserFormFields";

interface UserFormDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSubmit: SubmitHandler<UserFormInputs>;
  initialValues?: Partial<UserFormInputs>;
  isEditing?: boolean;
}

const UserFormDialog: React.FC<UserFormDialogProps> = (props) => {
  const {
    isOpen,
    onOpenChange,
    onSubmit,
    initialValues,
    isEditing = false,
  } = props;
  const methods = useForm<UserFormInputs>();

  useEffect(() => {
    if (initialValues) {
      methods.reset(initialValues);
    }
  }, [initialValues, methods]);

  const handleFormSubmit: SubmitHandler<UserFormInputs> = (data) => {
    onSubmit(data);
    methods.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Editar Usuario" : "Agregar Nuevo Usuario"}
          </DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleFormSubmit)}>
            <UserFormFields
              isEditing={isEditing}
              initialValues={initialValues}
            />
            <DialogFooter>
              <Button variant="destructive" onClick={() => onOpenChange(false)}>
                Cancelar
              </Button>
              <Button type="submit">
                {isEditing ? "Actualizar Usuario" : "Agregar Usuario"}
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default UserFormDialog;
