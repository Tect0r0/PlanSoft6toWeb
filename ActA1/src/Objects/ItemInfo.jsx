import React from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

function ItemInfo({ items }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const item = items.find((item) => item.id === id);
  const [searchParams] = useSearchParams();
  return (
    <div>
      <h1>Item Info: {item.id}</h1>
      <h2>{item.name}</h2>
      <p>{item.price}</p>
      <p>Search param: {searchParams.get("q")}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default ItemInfo;
