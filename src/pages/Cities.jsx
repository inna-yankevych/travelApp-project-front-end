import { CityCard } from "../components/CityCard";
import { useCities } from "../hooks/useCities";

export function CitiesPage() {

    const { cities } = useCities();

    return (
        <div className="cities-page">
            <h2>Available Cities</h2>
            <div className="cards-grid">
                {cities.map((city) => (
                    <CityCard key={city._id} city={city} />
                ))}
            </div>
        </div>
    );
}