import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });

  // ✅ LOGIN (LOCAL + GOOGLE)
  const login = (userData, userToken) => {
    if (!userData || !userToken) return;

    localStorage.setItem("token", userToken);
    localStorage.setItem("user", JSON.stringify(userData));

    setUser(userData);
    setToken(userToken);
  };

  // ✅ LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
    setToken(null);
  };

  // ✅ UPDATE USER - Profile update ke baad context sync karo
  const updateUser = (updatedData) => {
    if (!user) return;

    const newUserData = {
      ...user,
      ...updatedData
    };

    setUser(newUserData);
    localStorage.setItem("user", JSON.stringify(newUserData));
  };

  // ✅ AUTO LOGOUT IF TOKEN REMOVED
  useEffect(() => {
    if (!token) {
      localStorage.removeItem("user");
      setUser(null);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        updateUser, // ✅ Export updateUser
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
