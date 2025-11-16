import { useCountries } from "../hooks/useCountries";
import { CountryInfoCard } from "../components/CountryInfoCard";

export function CountriesPage() {
    const { countries } = useCountries();

    return (
        <div className="countries-page">
            <h2>All Countries</h2>
            <div className="cards-grid">
                {countries.map(c => <CountryInfoCard key={c._id} country={c} />)}
            </div>
        </div>
    );
}