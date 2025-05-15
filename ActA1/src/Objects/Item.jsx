import React from 'react'
import Boton from './Boton'

const Item = ({item, ondelete}) => {
    return (
        <div>
            <ul>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li><Boton name={'X'} click={() => ondelete(item.id)} /></li>
            </ul>
        </div>
    )
}

export default Item;