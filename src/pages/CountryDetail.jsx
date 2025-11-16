import { useParams, Link } from "react-router-dom";
import { useCountry } from "../hooks/useCountries";
import { CountryInfoCard } from "../components/CountryInfoCard";
import VaxRequirements from "../components/VaxRequirements";

export function CountryDetailPage() {
    const { id } = useParams();
    const { country } = useCountry(id);

    if (!country) return <p>Loading...</p>;

    return (
        <div className="country-detail-page">
            <h2>{country.name}</h2>
            <CountryInfoCard country={country} />
            <VaxRequirements vaxReqId={country.vaxReq?._id} />

            {country.cities?.length > 0 && (
                <>
                    <h3>Cities to Explore</h3>
                    <div className="cards-grid">
                        {country.cities.map((city) => (
                            <Link key={city._id} to={`/cities/${city._id}`}>
                                {city.name}
                            </Link>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}