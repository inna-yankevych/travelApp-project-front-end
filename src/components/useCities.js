import { useState, useEffect } from "react";
import {
  getAllCities,
  getOneCityById,
  createCity,
  updateOneCityById,
  deleteOneCityById
} from "../apiEndpoints/cityApi.js"

export function useCities () {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getAllCities().then(setCities);
  }, []);

  return { cities };
};

export function useCity (id) {
  const [city, setCity] = useState([null]);

  useEffect(() => {
    if (!id) return;
    getOneCityById(id).then(setCity);
  }, [id]);

  return { city };
};

export function useCreateCity() {
  return async (data) => await createCity(data);
};

export function useUpdateCity() {
  return async (id, data) => await updateOneCityById(id, data);
};

export function useDeleteCity() {
  return async (id) => await deleteOneCityById(id);
};
