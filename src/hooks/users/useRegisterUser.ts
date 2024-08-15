import { useMutation, UseMutationResult } from "@tanstack/react-query";

import {
  RegisterPayload,
  RegisterResponse,
  registerUser,
} from "@/services/users/registerUserService";
import Swal from "sweetalert2";

type UseRegisterUser = () => UseMutationResult<
  RegisterResponse,
  Error,
  RegisterPayload
>;

export const useRegisterUser: UseRegisterUser = () => {
  return useMutation<RegisterResponse, Error, RegisterPayload>({
    mutationFn: registerUser,
    onSuccess: (data: RegisterResponse) => {
      Swal.fire({
        title: "Exito!!!!",
        text: "Usuario registrado correctamente",
        icon: "success",
        confirmButtonText: "OK",
      });
    },
    onError: (error: Error) => {
      Swal.fire({
        title: "Error",
        text: "Correo ya registrado",
        icon: "error",
        confirmButtonText: "OK",
      });
    },
  });
};
