import { useState, useEffect } from "react";
import {
  getAllWishlists,
  createWishlist,
  deleteWishlistById
} from "../apiEndpoints/wishlistApi.js"

export function useWishlists () {
  const [wishlists, setWishlists] = useState([]);

  const loadWishlists = async() => {
    try {
      const items = await getAllWishlists();
      setWishlists(Array.isArray(items) ? items : []);
    } catch (error) {
      console.error("Failed to load wishlists", error);
    }
  };

  useEffect(() => {
    loadWishlists();
  }, []);

  const addToWishlist = async(data) => {
    try {
      await createWishlist(data);
      await loadWishlists();
    } catch (error) {
      console.error("Failed to add to wishlist", error);
    }
  };

  const removeFromWishlist = async (id) => {
    try {
      await deleteWishlistById(id);
      await loadWishlists();
    } catch (error) {
      console.error("Failed to remove from wishlist", error);
    }
  };

  return { wishlists, addToWishlist, removeFromWishlist };
}