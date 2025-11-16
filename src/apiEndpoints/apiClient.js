import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'https://travelapp-project-back-end.onrender.com';

// Create an axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000,
  headers: {'Content-Type': 'application/json'}
});

// Automatically attach JWT if present
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
})

export default apiClient;