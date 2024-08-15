import api from "../axiosInstance";
import { User } from "./registerUserService";

export interface UpdatePayload {
  id: number;
  name: string;
  username: string;
  email: string;
  password?: string;
  roleId: number;
  is_active?: boolean; 
}

export interface UpdateResponse {
  user: User;
}

export const updateUser = async (userData: UpdatePayload): Promise<UpdateResponse> => {
  const response = await api.patch<UpdateResponse>("/auth/update", userData); 
  return response.data;
};
