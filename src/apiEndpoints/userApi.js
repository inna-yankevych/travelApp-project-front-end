import apiClient from "../apiAxios.js";

export async function registerUser(userData) {
  const response = await apiClient.post("/users/register", userData);
  return response.data;
};

export async function loginUser(details) {
  const response = await apiClient.post("/users/login", details);
  return response.data;
};

export async function getAllUsers() {
  const response = await apiClient.get("/users");
  return response.data;
};

export async function getOneUserById(id) {
  const response = await apiClient.get(`/users/${id}`);
  return response.data;
};

export async function createUser(userData) {
  const response = await apiClient.post("/users", userData);
  return response.data;
};

export async function updateOneUserById(id, userData) {
  const response = await apiClient.patch(`/users/${id}`, userData);
  return response.data;
};

export async function deleteOneUserById(id) {
  const response = await apiClient.delete(`/users/${id}`);
  return response.data;
};