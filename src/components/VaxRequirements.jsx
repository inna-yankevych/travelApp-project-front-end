import { useEffect, useState } from "react";
import { getVaxReqById } from "../apiEndpoints/vaxApi";

export default function VaxRequirements({ vaxReqId }) {
  const [vaxData, setVaxData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!vaxReqId) return;

    async function fetchData() {
      try {
        const data = await getVaxReqById(vaxReqId);
        setVaxData(data);
      } catch (err) {
        setError("Failed to load requirements");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [vaxReqId]);

  if (!vaxReqId) return null;
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="vaccination-requirements-card">
      <h3>Vaccination Requirements</h3>
      <p>{vaxData?.vaxReq || "No data available"}</p> 
    </div>
  );
}
