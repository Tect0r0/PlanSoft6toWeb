import React from "react";
import Boton from "./Boton";
import { Link } from "react-router-dom";

const Item = ({ item, ondelete }) => {
  return (
    <tr>
      <Link to={`/item/` + item.id + "?q=reactSS"}>
        <li>{item.name}</li>
      </Link>
      <li>{item.price}</li>
      <li>
        <Boton click={() => ondelete(item.id)} name={"X"} />
      </li>
    </tr>
  );
};

export default Item;
