import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Add from "../Pages/Add";
import List from "../Pages/List";
import Header from "../Objects/Header";
import Dungeon from "../Pages/Dungeon";
import BrandingSignInPage from "../Pages/BrandingSignInPage";

import "../../src/App.css";

function AppBody() {
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

    return (
        <div className="app-body">
        <BrowserRouter>
            <Header />
            <Routes>
            <Route path="/" element={<BrandingSignInPage />} />
            <Route path="/dungeon" element={<Dungeon />} />
            <Route path="/add" element={<Add add={add} />} />
            <Route path="/list" element={<List items={items} ondelete={del} />} />
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default AppBody;