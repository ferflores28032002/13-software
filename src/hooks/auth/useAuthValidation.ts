import { useEffect } from "react";

import { useAuthStore } from "@/store";
import { useRouter } from "next/navigation";

export enum UserRole {
  SuperAdmin = 1,
  Generic = 2,
}

interface UseAuthValidationResult {
  token: string | null;
  hasPermissionAdmin?: boolean;
  hasPermissionGeneric?: boolean;
}

const useAuthValidation = (): UseAuthValidationResult => {
  const router = useRouter();
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);

  const hasPermissionAdmin = user?.roleId === UserRole.SuperAdmin;

  const hasPermissionGeneric = user?.roleId === UserRole.Generic;

  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    }
  }, [token]);

  return { token, hasPermissionAdmin, hasPermissionGeneric };
};

export default useAuthValidation;
