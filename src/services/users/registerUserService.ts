import api from "../axiosInstance";

export interface RegisterPayload {
  name: string;
  username: string;
  email: string;
  password: string;
  roleId: number;
}

export interface RegisterResponse {
  token: string;
  user: User;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  is_active: boolean;
  roleId: number;
}

export const registerUser = async (userData: RegisterPayload): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>("/auth/register", userData);
  return response.data;
};
