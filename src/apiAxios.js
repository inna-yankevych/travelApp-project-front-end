import axios from "axios";

const API_BASE_URL = 'https://travelapp-project-back-end.onrender.com' || 'https://localhost:5173';

// Create an axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {'Content-Type': 'application/json'}
});

export default apiClient;