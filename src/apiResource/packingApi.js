import apiClient from "../apiAxios.js";

export async function getAllEssentials() {
  const response = await apiClient.get("/essentials");
  return response.data;
};

export async function getOneEssentialById(id) {
  const response = await apiClient.get(`/essentials/${id}`);
  return response.data;
};

export async function createEssential(essentialData) {
  const response = await apiClient.post("/essentials", essentialData);
  return response.data;
};

export async function updateOneEssentialById(id, essentialData) {
  const response = await apiClient.patch(`/essentials/${id}`, essentialData);
  return response.data;
};

export async function deleteOneEssentialById(id) {
  const response = await apiClient.delete(`/essentials/${id}`);
  return response.data;
};