import Swal from "sweetalert2";

import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

import { EmailPayload, sendEmail } from "@/services/auth/emailService";

export const useEmail = () => {
  const router = useRouter();

  return useMutation<string, Error, EmailPayload>({
    mutationFn: sendEmail,
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Correo enviado",
        text: "El correo se ha enviado exitosamente. Puede tardar unos minutos en llegar.",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3085d6",
      }).then(() => {
        router.push("/login");
      });
    },
    onError: () => {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Algo salió mal, intenta de nuevo",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3085d6",
      });
    },
  });
};
