import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Add from "../Pages/Add";
import List from "../Pages/List";
import Header from "../Objects/Header";
import Dungeon from "../Pages/Dungeon";
import Login from "../Pages/Login";

import "../../src/App.css";

function AppBody() {
    const [isLogin, setIsLogin] = useState(() => {
        // Check localStorage for the initial login state
        return localStorage.getItem("isLogin") === "true" || false;
    });

    const [items, setItems] = useState([
        { id: 1, name: "Item 1", price: 100 },
        { id: 2, name: "Item 2", price: 200 },
        { id: 3, name: "Item 3", price: 300 },
    ]);

    const add = (item) => {
        item.id = items.length + 1;
        setItems([...items, item]);
        console.log(items);
    };

    const del = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const tryLogin = (user) => {
        if (user.username === "asd" && user.password === "asd") {
            setIsLogin(true);
            localStorage.setItem("isLogin", "true");
            return true;
        } else { 
            setIsLogin(false);
            return false;
        }
    }

    const logout = () => {
        localStorage.setItem("isLogin", "false");
        setIsLogin(false);
    }

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
            <Route
              path="/dungeon"
              element={isLogin ? <Dungeon /> : <Navigate to="/login" />}
            />
            <Route
              path="/add"
              element={isLogin ? <Add add={add} /> : <Navigate to="/login" />}
            />
            <Route
              path="/list"
              element={
                isLogin ? (
                  <List items={items} ondelete={del} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default AppBody;