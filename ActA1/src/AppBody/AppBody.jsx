import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Add from "../Pages/Add";
import List from "../Pages/List";
import Header from "../Objects/Header";
import Dungeon from "../Pages/Dungeon";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ItemInfo from "../Objects/ItemInfo";
import useItems from "../Hooks/useItems";
import useAuth from "../Hooks/useAuth";

import "../../src/App.css";
import LifeCycle from "../Pages/LifeCycle";

function AppBody() {
  const [show, setShow] = useState(false);
  const { items, addItem, delItem, getItems } = useItems();
  const { isLogin, tryLogin, logout } = useAuth();

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getItems();
  }, []);

  const trySignUp = async (user) => {
    try {
      console.log("SignupStep1");
      const result = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      console.log("SignupStep2");

      const data = await result.json();
      console.log(data.message);

      if (!result.ok) {
        throw new Error(data.message);
      }
      return true;
    } catch (error) {
      alert("Signup failed: " + error.message);
      console.error("Failed to fetch:", error);
      return false;
    }
  };

  return (
    <div className="app-body">
      <BrowserRouter>
        <Header isLogin={isLogin} logout={logout} />
        <Routes>
          <Route // Default route
            path="/"
            element={
              isLogin ? <Navigate to="/dungeon" /> : <Navigate to="/login" /> // Redireccionar si no esta iniciada sesion
            }
          />
          <Route
            path="/login"
            element={
              isLogin ? (
                <Navigate to="/dungeon" />
              ) : (
                <Login tryLogin={tryLogin} />
              )
            }
          />
          <Route path="/signup" element={<SignUp trySignUp={trySignUp} />} />
          <Route
            path="/dungeon"
            element={isLogin ? <Dungeon /> : <Navigate to="/login" />}
          />
          <Route
            path="/add"
            element={isLogin ? <Add add={addItem} /> : <Navigate to="/login" />}
          />
          <Route
            path="/list"
            element={
              isLogin ? (
                <List items={items} ondelete={delItem} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/item/:id" element={<ItemInfo items={items} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <button onClick={() => setShow(!show)}>
        {show ? "Esconder" : "Mostrar"}
      </button>
      {show && <LifeCycle />}
    </div>
  );
}

export default AppBody;
