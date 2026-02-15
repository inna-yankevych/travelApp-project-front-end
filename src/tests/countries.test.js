import { expect, test } from "vitest";
import { getCountries } from "../apiEndpoints/countryApi.js"

test("getAllCountries returns an array of countries", async () => {
  const countries = await getCountries();

  expect(Array.isArray(countries)).toBe(true);

  if (countries.length > 0) {
    expect(countries[0]).toHaveProperty("id");
    expect(countries[0]).toHaveProperty("name");
  }
});