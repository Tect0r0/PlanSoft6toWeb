import { useState, useEffect } from "react";
import "../../src/App.css";
import Boton from "../Objects/Boton";
import Add from "../Objects/Add";
import List from "../Objects/List";

function AppBody() {
    const [timer, setTimer] = useState(0); // Timer en segundos
    const [muertes, setMuertes] = useState(0); // Cantidad de muertes

    const [items, setItems] = useState([
        { id: 1, name: "Item 1", price: 100 },
        { id: 2, name: "Item 2", price: 200 },
        { id: 3, name: "Item 3", price: 300 },
    ]);
    
    useEffect(() => {
    let interval;
    if (timer > 0) {
        interval = setInterval(() => {
        setTimer((prevTimer) => {
            if (prevTimer === 1) {
                clearInterval(interval);
                alert("Has muerto :(");
                setMuertes(muertes + 1);
                return 0;
            }
            return prevTimer - 1;
        });
        }, 1000); // 1000 milisegundos
    }

    return () => clearInterval(interval);
    }, [timer]);

    const incrementTimer = () => {
    if (timer === 0) {
        setTimer(3); 
    } else {
        setTimer(timer + 1);
    }
    };

    function ManageButton(){
        if (timer === 0){
            return (
              <Boton
                name={"Revivir!"}
                click={incrementTimer}
                className={"custom_button_1"}
                id={"revivir"}
              />
            );
        } else {
            return (
              <Boton
                name={"Aumentar vida!"}
                click={incrementTimer}
                className={"custom_button_1"}
                id={"aumentar"}
              />
            );
        }
    };

    function ManageDeath() {
        if (muertes === 0) {
            return <p>{":)"}</p>;
        } else if (muertes === 1) {
            return <p>Has muerto {muertes} vez!</p>;
        } else {
            return <p>Has muerto {muertes} veces...</p>;
        }
    };

    const add = (item) => {
        item.id = items.length + 1;
        setItems([...items, item]);
        console.log(items);
    };

    const del = (id) => {
        setItems(items.filter((item) =>
            item.id !== id));
    }

    return (
        <div className="App-body">
            <p>Cada segundo baja tu vida. Intenta no morir {">:)"}</p>
            <p>Vida: {timer}</p>
            <ManageButton />
            <ManageDeath />
            <Add add={add} />
            <List items={items} ondelete={del} />
        </div>
    );
}

export default AppBody;