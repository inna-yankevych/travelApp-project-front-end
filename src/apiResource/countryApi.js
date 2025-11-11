import apiClient from "../apiAxios.js";

export async function getCountries() {
  const response = await apiClient.get("/countries");
  return response.data;
};

export async function getCountryById(id) {
  const response = await apiClient.get(`/countries/${id}`);
  return response.data;
};

export async function createCountry(countryData) {
  const response = await apiClient.post("/countries", countryData);
  return response.data;
};

export async function updateCountryById(id, countryData) {
  const response = await apiClient.patch(`/countries/${id}`, countryData);
  return response.data;
};

export async function deleteCountryById(id) {
  const response = await apiClient.delete(`/countries/${id}`);
  return response.data;
};