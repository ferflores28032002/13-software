import api from "../axiosInstance";

export interface EmailPayload {
  email: string;
}

export const sendEmail = async (email: EmailPayload) => {
  const response = await api.post<string>("/auth/send-email-password", email);
  return response.data;
};
