import React from "react";
import { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

const useItems = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const result = await fetch(`${API_URL}/itemsFB/`);
    const data = await result.json();
    console.log(data);
    setItems(data);
  };

  const addItem = async (item) => {
    const result = await fetch(`${API_URL}/itemsFB/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    await getItems(); // Fetch updated items
    alert(`Item added successfully!`);
  };

  const delItem = async (id) => {
    await fetch(`${API_URL}/itemsFB/${id}`, {
      method: "DELETE",
    });
    await getItems(); // Fetch updated items
    alert(`Item with ID ${id} deleted successfully`);
  };

  return { items, addItem, delItem, getItems };
};

export default useItems;
