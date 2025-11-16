

export function CountryInfoCard({ country }) {
    return (
        <div className="country-info-card">
            <p><strong>Visa Requirements:</strong> {country.visaReq}</p>
            <p><strong>Currency:</strong> {country.currency}</p>
            <p><strong>Language:</strong> {country.language}</p>
        </div>
    );
}