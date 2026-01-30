const BASE_URL = import.meta.env.VITE_API_URL;

/* ===================== PRODUCTS ===================== */

export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
};

export const searchProducts = async (query) => {
  const res = await fetch(`${BASE_URL}/products?q=${query}`);
  return res.json();
};

/* ===================== ORDERS ===================== */

export const createOrder = async (order) => {
  const res = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  return res.json();
};

/* ===================== AUTH ===================== */

// REGISTER
export const registerUser = async (user) => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...user,
      role: "user" // default role
    }),
  });
  return res.json();
};

// LOGIN
export const loginUser = async (email, password) => {
  const res = await fetch(
    `${BASE_URL}/users?email=${email}&password=${password}`
  );
  const data = await res.json();

  if (!data.length) {
    throw new Error("Invalid email or password");
  }

  return {
    user: data[0],
    token: "fake-jwt-token"
  };
};

// ADMIN – GET ALL USERS
export const getAllUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`);
  return res.json();
};
