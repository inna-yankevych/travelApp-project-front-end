import { useParams } from "react-router-dom";
import { useCity } from "../hooks/useCities";
import { CityInfoCard } from "../components/CityInfoCard";

export function CityDetailPage() {
    const { id } = useParams();
    const { city } = useCity(id);

    if (!city) return <p>Loading...</p>;

    return (
        <div className="city-detail-page">
            <CityInfoCard city={city} />
        </div>
    );
}