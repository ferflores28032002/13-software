import Swal from "sweetalert2";

import { useMutation, UseMutationResult } from "@tanstack/react-query";

import {
  UpdatePayload,
  UpdateResponse,
  updateUser,
} from "@/services/users/updateUserService";

type UseUpdateUser = () => UseMutationResult<
  UpdateResponse,
  Error,
  UpdatePayload
>;

export const useUpdateUser: UseUpdateUser = () => {
  return useMutation<UpdateResponse, Error, UpdatePayload>({
    mutationFn: updateUser,
    onSuccess: (data: UpdateResponse) => {
      Swal.fire({
        title: "¡Éxito!",
        text: "Usuario actualizado correctamente",
        icon: "success",
        confirmButtonColor: "#2F855A",
        confirmButtonText: "OK",
      });
    },
    onError: (error: Error) => {
      console.error("Update failed:", error.message);
      Swal.fire({
        title: "Error",
        text: "Hubo un error al actualizar el usuario",
        icon: "error",
        confirmButtonText: "OK",
      });
    },
  });
};
