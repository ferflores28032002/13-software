import axios from 'axios';

const api = axios.create({
  baseURL: 'https://trecesoft.onrender.com/api/v1',
});

// Añade un interceptor para incluir el token en las cabeceras
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
