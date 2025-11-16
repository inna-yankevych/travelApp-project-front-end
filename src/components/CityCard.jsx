import { Link } from "react-router-dom";

const cityImages = {
    Lublin: "/images/Lublin.jpg",
    Vancouver: "/images/Vancouver.jpg",
    "Rio de Janeiro": "/images/RioDeJaneiro.jpg",
    Shanghai: "/images/Shanghai.jpg"
};

export function CityCard({ city }) {
    return (
        <div className="city-card">
            <Link to={`/cities/${city._id}`}>
                <img src={cityImages[city.name]} alt={city.name} />
                <h3>{city.name}</h3>
            </Link>
        </div>
    );
}