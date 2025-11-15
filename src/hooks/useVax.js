import { useState, useEffect } from "react";
import {
  getVaxReqs,
  getVaxReqById,
  createVaxReq,
  updateVaxReqById,
  deleteVaxReqById,
} from "../apiEndpoints/vaxApi.js"

export function useVaxReqs () {
  const [vaxreqs, setVaxReqs] = useState([]);

  useEffect(() => {
    getVaxReqs().then((data) => setVaxReqs(data.vaxreqs));
  }, []);

  return { vaxreqs };
};

export function useVaxReq (id) {
  const [vaxreq, setVaxReq] = useState(null);

  useEffect(() => {
    if (!id) return;
    getVaxReqById(id).then(setVaxReq);
  }, [id]);

  return { vaxreq };
};

export function useCreateVaxReq() {
  return async (data) => await createVaxReq(data);
};

export function useUpdateVaxReq() {
  return async (id, data) => await updateVaxReqById(id, data);
};

export function useDeleteVaxReq() {
  return async (id) => await deleteVaxReqById(id);
};
