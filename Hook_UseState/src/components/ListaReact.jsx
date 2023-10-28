import { useState } from "react"

const ListaReact = () => {
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(1);

    const addItem = (newItem) =>{
        setItems([...items, newItem]);
        setCount(count + 1);
    }

return (
    <>
    <br/>
    <div>
        <h2>Lista de elementos</h2>
        <ul>
            {items.map((item, index)=>(
                <li key={index}>
                    {item}
                </li>
            ))}
        </ul>
        <button onClick={() => addItem('El punto '+ count +' ha sido añadido a la lista')}>
            Agregar elemento
        </button>
    </div>
    </>
        )
}

export default ListaReact
