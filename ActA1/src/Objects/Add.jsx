import React, { useState } from 'react';

const Add = ({ add }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    const onsubmit = (e) => {
        e.preventDefault();
        if (!name || !price) {
            alert("Please add an item and a price");
            return;
        }
        if(isNaN(price)){
            alert("Price must be a number");
            return;
        }
        add({ name: name, price: price });
        setName("");
        setPrice(0);
    };

    return (
        <form onSubmit={onsubmit}>
            <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                name=""
                id=""
            />  
            <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="text"
                name=""
                id=""
            />
            <button type="submit" value="add">Add</button>
        </form>
    )
};

export default Add;