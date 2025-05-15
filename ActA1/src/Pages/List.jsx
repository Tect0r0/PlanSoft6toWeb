import React from "react";
import Item from "../Objects/Item";

const List = ({ items, ondelete }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <div>No items to display.</div>;
  }
  return (
    <div>
      <ul>
        {items
          .filter(item => item && item.id)
          .map((item) => (
            <Item key={item.id} item={item} ondelete={ondelete} />
          ))}
      </ul>
    </div>
  );
};

export default List;