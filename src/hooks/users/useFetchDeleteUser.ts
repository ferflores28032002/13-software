import { useMutation, useQueryClient } from "@tanstack/react-query";

import { FecthDeleteUser } from "@/services/users/deleteUserService";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => FecthDeleteUser(id),
    onSuccess: () => {
      // Invalida y refetch la lista de usuarios después de eliminar uno
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error: Error) => {
      console.error("Error al eliminar el usuario:", error);
    },
  });
};
