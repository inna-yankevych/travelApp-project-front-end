import apiClient from "../apiAxios.js";

export async function getVaxReqs() {
  const response = await apiClient.get("/vax");
  return response.data;
};

export async function getVaxReqById(id) {
  const response = await apiClient.get(`/vax/${id}`);
  return response.data;
};

export async function createVaxReq(vaxReqData) {
  const response = await apiClient.post("/vax", vaxReqData);
  return response.data;
};

export async function updateVaxReqById(id, vaxReqData) {
  const response = await apiClient.patch(`/vax/${id}`, vaxReqData);
  return response.data;
};

export async function deleteVaxReqById(id) {
  const response = await apiClient.delete(`/vax/${id}`);
  return response.data;
};