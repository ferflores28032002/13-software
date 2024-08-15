import api from "../axiosInstance";

export interface ChangePasswordPayload {
  token: string;
  password: string;
}

export const changePassword = async (credentials: ChangePasswordPayload ) => {
  const response = await api.post<string>("/auth/change-password", credentials);
  return response.data;
};
