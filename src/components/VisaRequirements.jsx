import { useEffect, useState } from "react";
import { getVaxReqs } from "../apiEndpoints/vaxApi";

export default function VisaRequirements({ country }) {
  const [requirements, setRequirements] = useState(null);

  useEffect(() => {
    if (!country) return;

    async function loadVax() {
      const data = await getVaxReqs(country);
      setRequirements(data);
    }

    loadVax();
  }, [country]);

  if (!country) return <p>Select a country to view visa & vaccination requirements.</p>;

  return (
    <div>
      <h3>Visa & Vaccination Requirements</h3>
      {requirements ? (
        <ul>
          {requirements.reqs.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
