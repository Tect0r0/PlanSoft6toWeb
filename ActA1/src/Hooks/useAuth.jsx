import React from "react";
import { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(() => {
    // Check localStorage for the initial login state
    return localStorage.getItem("isLogin") === "true" || false;
  });
  const tryLogin = async (user) => {
    try {
      const result = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!result.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await result.json();
      console.log(data);

      if (data.isLogin) {
        setIsLogin(true);
        localStorage.setItem("isLogin", "true");
        return true;
      } else {
        setIsLogin(false);
        localStorage.setItem("isLogin", "false");
        return false;
      }
    } catch (error) {
      console.error("Failed to fetch:", error);
      return false;
    }
  };

  const logout = () => {
    localStorage.setItem("isLogin", "false");
    setIsLogin(false);
  };

  return { isLogin, tryLogin, logout };
};

export default useAuth;
