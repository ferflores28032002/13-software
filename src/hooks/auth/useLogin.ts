import { useMutation, UseMutationResult } from "@tanstack/react-query";

import { useAuthStore } from "@/store";

import { useRouter } from "next/navigation";

import Swal from "sweetalert2";
import {
  LoginPayload,
  LoginResponse,
  loginUser,
} from "../../services/auth/authService";

type UseLogin = () => UseMutationResult<LoginResponse, Error, LoginPayload>;

export const useLogin: UseLogin = () => {
  const router = useRouter();
  // Usamos el store useAuthStore <Zustand> para obtener la función setUser
  const { setUser } = useAuthStore((state) => ({
    setUser: state.setUser,
  }));

  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: loginUser,
    onSuccess: (data: LoginResponse) => {
      localStorage.setItem("authToken", data.token);
      setUser(data.token, data.user);
      router.push("/");
    },
    onError: (error: Error) => {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Usuario o contraseña incorrectos",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3085d6",
      });
    },
  });
};
