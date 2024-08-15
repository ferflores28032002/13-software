import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { fetchRoles, RolesResponse } from "@/services/roles/rolesServices";

export const useFetchRoles = (): UseQueryResult<RolesResponse, Error> => {
  return useQuery<RolesResponse, Error>({
    queryKey: ["roles"],
    queryFn: fetchRoles,
    staleTime: 60000, // Tiempo en ms para que los datos se consideren frescos
    refetchOnWindowFocus: false, // No refetch al volver a enfocar la ventana
  });
};
