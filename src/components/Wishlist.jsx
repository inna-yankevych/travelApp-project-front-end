
import { useWishlists } from "../hooks/useWishlist";

export default function Wishlist() {
  const { wishlists, removeFromWishlist } = useWishlists();

  if (!wishlists.length) {
    return <p>Your wishlist is empty. Start adding cities!</p>
  }

  return (
    <div>
      <h2>Your Wishlist</h2>
      <ul>
        {wishlists.map((item) => (
          <li key={item._id}>
            {item.name}
            <button onClick={() => removeFromWishlist(item._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}