import React from "react";
import Item from "../Objects/Item";

const List = ({ items, ondelete }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <div>No items to display.</div>;
  }
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Delete?</td>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <Item item={item} key={item.id} ondelete={ondelete} />
        ))}
      </tbody>
    </table>
  );
};

export default List;
