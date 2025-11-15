import { useState, useEffect } from "react";
import {
  getAllActivities,
  getActivityById,
  createActivity,
  updateActivityById,
  deleteActivityById
} from "../apiEndpoints/activityApi.js";

export function useActivities () {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getAllActivities().then((data) => setActivities(data.activities));
  }, []);

  return { activities };
};

export function useActivity (id) {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    if (!id) return;
    getActivityById(id).then(setActivity);
  }, [id]);

  return { activity };
};

export function useCreateActivity() {
  return async (data) => await createActivity(data);
};

export function useUpdateActivity() {
  return async (id, data) => await updateActivityById(id, data);
};

export function useDeleteActivity() {
  return async (id) => await deleteActivityById(id);
};
