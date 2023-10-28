import { useState } from 'react'
import './App.css'
import ProductosClass from './components/ProductosClass'
import ClicksContador from './components/ClicksContador'
import ListaReact from './components/ListaReact'

function App() {
  
  const [change, setChange] = useState(false)
  const [product, setProduct] = useState("")

  const cambiador =() =>{
    setChange(!change)
  }

  return (
    <>
      <h1>Que son los Hooks?</h1>
      
      <ClicksContador/>

      <button
        onClick={cambiador}
      >
        {change ? "desactivado":"Activado"}
      </button>
      <br/>      
      <input
        type='text'
        placeholder='Ingresar el producto (Dando click en el boton)'
        value={product}
        onChange={e=>setProduct(e.target.value)}
      />
      <br/>
      
      
      <ProductosClass/>  
      <ListaReact/>    
    </>
  )
}

export default App
