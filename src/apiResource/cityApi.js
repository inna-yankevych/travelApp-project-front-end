import apiClient from "../apiAxios.js";

export async function getAllCities() {
  const response = await apiClient.get("/cities");
  return response.data;
};

export async function getOneCityById(id) {
  const response = await apiClient.get(`/cities/${id}`);
  return response.data;
};

export async function createCity(cityData) {
  const response = await apiClient.post("/cities", cityData);
  return response.data;
};

export async function updateOneCityById(id, cityData) {
  const response = await apiClient.patch(`/cities/${id}`, cityData);
  return response.data;
};

export async function deleteOneCityById(id) {
  const response = await apiClient.delete(`/cities/${id}`);
  return response.data;
};