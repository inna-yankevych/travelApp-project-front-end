import { expect, test } from "vitest";
import { getAllCities } from "../apiEndpoints/cityApi.js";

test("getAllCities returns an array of cities", async () => {
  const cities = await getAllCities();

  expect(Array.isArray(cities)).toBe(true);

  if (cities.length > 0) {
    expect(cities[0]).toHaveProperty("id");
    expect(cities[0]).toHaveProperty("name");
  }
});
