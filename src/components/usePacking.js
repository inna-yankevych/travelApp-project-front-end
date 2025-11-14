import { useState, useEffect } from "react";
import {
  getAllEssentials,
  getOneEssentialById,
  createEssential,
  updateOneEssentialById,
  deleteOneEssentialById
} from "../apiEndpoints/cityApi.js"

export function useEssentials () {
  const [essentials, setEssentials] = useState([]);

  useEffect(() => {
    getAllEssentials().then(setEssentials);
  }, []);

  return { essentials };
};

export function useEssential (id) {
  const [essential, setEssential] = useState([null]);

  useEffect(() => {
    if (!id) return;
    getOneEssentialById(id).then(setEssential);
  }, [id]);

  return { essential };
};

export function useCreateEssential() {
  return async (data) => await createEssential(data);
};

export function useUpdateEssential() {
  return async (id, data) => await updateOneEssentialById(id, data);
};

export function useDeleteEssential() {
  return async (id) => await deleteOneEssentialById(id);
};
