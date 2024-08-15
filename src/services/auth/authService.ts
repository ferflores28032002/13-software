import api from "../axiosInstance";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  is_active: boolean;
  roleId: number;
}

export const loginUser = async (credentials: LoginPayload) => {
  const response = await api.post<LoginResponse>("/auth/login", credentials);
  return response.data;
};
