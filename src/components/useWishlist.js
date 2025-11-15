import { useState, useEffect } from "react";
import {
  getAllWishlists,
  getOneWishlistById,
  createWishlist,
  updateWishlistById,
  deleteWishlistById
} from "../apiEndpoints/wishlistApi.js"

export function useWishlists () {
  const [wishlists, setWishlists] = useState([]);

  useEffect(() => {
    getAllWishlists().then(setWishlists);
  }, []);

  return { wishlists };
};

export function useWishlist (id) {
  const [wishlist, setWishlist] = useState(null);

  useEffect(() => {
    if (!id) return;
    getOneWishlistById(id).then(setWishlist);
  }, [id]);

  return { wishlist };
};

export function useCreateWishlist() {
  return async (data) => await createWishlist(data);
};

export function useUpdateWishlist() {
  return async (id, data) => await updateWishlistById(id, data);
};

export function useDeleteWishlist() {
  return async (id) => await deleteWishlistById(id);
};
