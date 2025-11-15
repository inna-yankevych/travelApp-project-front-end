import { useEffect, useState } from "react";
import { getAllWishlists, createWishlist, deleteWishlistById } from "../apiEndpoints/wishlistApi";
import { useWishlist, useWishlists } from "./useWishlist";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [input, setInput] = useState("");

  async function loadWishlist() {
    const items = await getAllWishlists();
    console.log("Wishlist items from API:", items); 
    setWishlist(Array.isArray(items) ? items : []);
  }

  useEffect(() => {
    loadWishlist();
  }, []);

  async function handleAdd() {
    if (!input) return;
    await createWishlist({ name: input }); 
    setInput("");
    loadWishlist();
  }

  async function handleRemove(id) {
    await deleteWishlistById(id);
    loadWishlist();
  }

  return (
    <div>
      <h2>Your Wishlist</h2>

      <ul>
        {Array.isArray(wishlist) && wishlist.map((item) => (
          <li key={item._id}>
            {item.name}
            <button onClick={() => handleRemove(item._id)}>Remove</button>
          </li>
        ))}
      </ul>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add item..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
