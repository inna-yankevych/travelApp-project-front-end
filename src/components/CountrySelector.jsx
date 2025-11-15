import { useEffect, useState } from "react";
import { getCountries } from "../apiEndpoints/countryApi";

export default function CountrySelector({ onSelect }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function loadCountries() {
      const list = await getCountries();
      setCountries(list);
    }
    loadCountries();
  }, []);

  return (
    <div>
      <h3>Select a Country</h3>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select...</option>
        {countries.map((c) => (
          <option key={c._id} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}
