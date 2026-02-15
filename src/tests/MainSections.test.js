import { render , screen } from "@testing-library/react";
import { expect, test } from "vitest";

import App from "../App.jsx";

test('renders all main sections in App', () => {
  render (<App />);

  // Main Heading
  const mainHeading = screen.getByText("Travel App Features");
  expect(mainHeading).toBeInTheDocument();

  const loginSection = screen.getByText(/Login/i);
  const registerSection = screen.getByText(/Register/i);
  const countrySelectorSection = screen.getByText(/Select a Country/i);
  const visaRequirementsSection = screen.getByText(/Visa Requirements/i, {exact: false})
  const wishlistSection = screen.getByText(/Wishlist/i);

  expect(loginSection).toBeInTheDocument();
  expect(registerSection).toBeInTheDocument();
  expect(countrySelectorSection).toBeInTheDocument();
  expect(visaRequirementsSection).toBeInTheDocument();
  expect(wishlistSection).toBeInTheDocument();
});
