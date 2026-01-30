import { createContext, useState } from "react";
import { loginUser, registerUser } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  // LOGIN
  const login = async (email, password) => {
    const { user } = await loginUser(email, password);
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  // REGISTER
  const register = async (data) => {
    await registerUser(data);
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
