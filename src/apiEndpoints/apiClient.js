import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'https://travelapp-project-back-end.onrender.com';

// Create an axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000,
  headers: {'Content-Type': 'application/json'}
});

export default apiClient;