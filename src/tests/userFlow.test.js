import { loginUser, registerUser } from "./apiEndpoints/userApi";

test("register user returns success message", async () => {
  const response = await registerUser({
    name: "Test",
    email: "test@test.com",
    password: "123456",
  });

  expect(response).toHaveProperty("message");
});

test("login returns a token", async () => {
  const data = await loginUser("test@test.com", "123456");
  expect(data).toHaveProperty("token");
});
