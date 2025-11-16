import { expect } from "vitest";
import { getAllCountries } from "./apiEndpoints/countriesApi";

test("getAllCountries returns an array of countries", async () => {
  const countries = await getAllCountries();

  expect(Array.isArray(countries)).toBe(true);

  if (countries.length > 0) {
    expect(countries[0]).toHaveProperty("id");
    expect(countries[0]).toHaveProperty("name");
  }
});