import api from "../axiosInstance";

interface Props {
  message: string;
}

export const FecthDeleteUser = async (id: number): Promise<Props> => {
  try {
    const response = await api.delete<Props>(`/auth/delete/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error al deshabilitar el usuario");
  }
};
