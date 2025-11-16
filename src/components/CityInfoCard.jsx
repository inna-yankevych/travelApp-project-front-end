import { useWishlists } from "../hooks/useWishlist";

export function CityInfoCard({ city }) {
    const { addToWishlist } = useWishlists();

    const handleAddWishlist = () => {
        addToWishlist({ name: city.name });
    };

    return (
        <div className="city-info-card">
            <h3>{city.name}</h3>
            <p><strong>Best Months to Visit:</strong> {city.bestMonths}</p>
            <p><strong>Weather:</strong> {city.bestWeather}</p>

            {city.activities?.length > 0 && (
                <div>
                    <h4>Activities</h4>
                    <ul>
                        {city.activities.map((activity) => (
                            <li key={activity._id}>{activity.name}: {activity.description}</li>
                        ))}
                    </ul>
                </div>
            )}

            {city.packingEssentials?.length > 0 && (
                <div>
                    <h4>Packing Essentialas</h4>
                    <ul>
                        {city.packingEssentials.map((item) => (
                            <li key={item._id}>{item.items.join(", ")}</li>
                        ))}
                    </ul>
                </div>
            )}

            <button onClick={handleAddWishlist}>Add to Wishlist</button>
        </div>
    );
}