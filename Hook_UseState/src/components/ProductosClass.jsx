import {Component} from "react";

class ProductosClass extends Component{

    constructor(){
        super()

        this.state = {
            texto :"ingrese su Nombre"
        }
    }

    render(){
        return(
            <>
            <h2>Componente productos</h2>
            </>
        )
    }
}

export default ProductosClass