import { useState, useEffect } from "react";
import {
  getCountries,
  getCountryById,
  createCountry,
  updateCountryById,
  deleteCountryById
} from "../apiEndpoints/countryApi.js"

export function useCountries () {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then((data) => setCountries(data.countries));
  }, []);

  return { countries };
};

export function useCountry (id) {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (!id) return;
    getCountryById(id).then(setCountry);
  }, [id]);

  return { country };
};

export function useCreateCountry() {
  return async (data) => await createCountry(data);
};

export function useUpdateCountry() {
  return async (id, data) => await updateCountryById(id, data);
};

export function useDeleteCountry() {
  return async (id) => await deleteCountryById(id);
};
