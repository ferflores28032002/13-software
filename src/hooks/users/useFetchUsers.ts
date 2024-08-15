import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { fetchUsers, UsersResponse } from "@/services/users/usersService";

export const useFetchUsers = (): UseQueryResult<UsersResponse, Error> => {
  return useQuery<UsersResponse, Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 60000, // Tiempo en ms para que los datos se consideren frescos
    refetchOnWindowFocus: false, // No refetch al volver a enfocar la ventana
  });
};
