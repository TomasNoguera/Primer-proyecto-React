import { useEffect, useState } from "react";
import { getAllProductos } from "../Services/productos_service";
import Producto from "./producto";
import Row from 'react-bootstrap/Row';
import './styles/navbar.css'

function Productos({isLogin}){
    const[loading,setLoading] = useState(true)
    const[productos,SetProductos] = useState([])

    useEffect(()=>{
        const request = async ()=>{
            try{
                const querySnapshot = await getAllProductos()
                console.log(querySnapshot.docs);
                SetProductos(querySnapshot.docs);
                setLoading(false);
            }catch(e){
                console.log(e)
            }
        };

        request();

    }, []
    )


    if(loading){
        return(
            <div>Cargando...</div>
        )
    }else{
        return(
            <div> 
                <h1 className="texto_producto">Lista de Productos</h1>
                <Row>
                    {productos.map((producto)=> (
                        <Producto
                        key={producto.key}
                        id={producto.id}
                        nombre={producto.data().title} // Para que se almacenen los productos en firebase se coloca .data
                        precio={producto.data().price}
                        thumbnail={producto.data().thumbnail}
                        categoria=""
                        isLogin={isLogin}
                        />
                    ))}
                </Row>
            </div>
        );
    }
}

export default Productos;