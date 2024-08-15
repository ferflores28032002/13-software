import api from "../axiosInstance";

export interface Role {
  id: number;
  name: string;
  description: string;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
  role: Role;
}

export interface UsersResponse {
  users: User[];
}

export const fetchUsers = async (): Promise<UsersResponse> => {
  const response = await api.get<UsersResponse>("/auth/");
  return response.data;
};
