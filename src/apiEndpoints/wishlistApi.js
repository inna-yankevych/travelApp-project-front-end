import apiClient from "../apiAxios.js";

export async function getAllWishLists() {
  const response = await apiClient.get("/wishlist");
  return response.data;
};

export async function getOneWishListById(id) {
  const response = await apiClient.get(`/wishlist/${id}`);
  return response.data;
};

export async function createWishList(id, wishListData) {
  const response = await apiClient.post("/wishlist", wishListData);
  return response.data;
};

export async function updateWishListById(id, wishListData) {
  const response = await apiClient.patch(`/wishlist/${id}`, wishListData);
  return response.data;
};

export async function deleteWishlistById(id) {
  const response = await apiClient.delete(`/wishlist/${id}`);
  return response.data;
};
