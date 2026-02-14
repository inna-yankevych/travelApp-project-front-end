import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://13.211.58.52:3000/';
const BEARER_TOKEN = import.meta.env.TOKEN

// Create an axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {'Content-Type': 'application/json'}
});

// Automatically attach JWT if present
apiClient.interceptors.request.use(config => {
  // const token = localStorage.getItem("token");
  // console.log("token", token)
  // if (token) {
    // config.headers.Authorization = `Bearer ${BEARER_TOKEN}`;
  // }
  return config;
})

export default apiClient;