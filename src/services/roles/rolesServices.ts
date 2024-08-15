import api from "../axiosInstance";

export interface Role {
  id: number;
  name: string;
  description: string;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface RolesResponse {
  roles: Role[];
}

export const fetchRoles = async (): Promise<RolesResponse> => {
  const response = await api.get<RolesResponse>("/role");
  return response.data;
};
