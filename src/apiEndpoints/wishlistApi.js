import apiClient from "./apiClient.js";

export async function getAllWishlists() {
  const response = await apiClient.get("/wishlist");
  return response.data;
};

export async function getOneWishlistById(id) {
  const response = await apiClient.get(`/wishlist/${id}`);
  return response.data;
};

export async function createWishlist(id, wishListData) {
  const response = await apiClient.post("/wishlist", wishListData);
  return response.data;
};

export async function updateWishlistById(id, wishListData) {
  const response = await apiClient.patch(`/wishlist/${id}`, wishListData);
  return response.data;
};

export async function deleteWishlistById(id) {
  const response = await apiClient.delete(`/wishlist/${id}`);
  return response.data;
};
