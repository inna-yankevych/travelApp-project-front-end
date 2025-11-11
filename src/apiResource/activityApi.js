import apiClient from "../apiAxios.js";

export async function getActivities() {
  const response = await apiClientpiClient.get("/activities");
  return response.data;
};

export async function getActivityById(id) {
  const response = await apiClient.get(`/activities/${id}`);
  return response.data;
};

export async function createActivity(activityData) {
  const response = await apiClient.post("/activities", activityData);
  return response.data;
};

export async function updateActivityById(id, activityData) {
  const response = await apiClient.patch(`/activities/${id}`, activityData);
  return response.data;
};

export async function deleteActivityById(id) {
  const response = await apiClient.delete(`/activities/${id}`);
  return response.data;
};