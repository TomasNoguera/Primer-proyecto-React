import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../Services/productos_service";
import Button from "react-bootstrap/Button";

function Detalle(){
    const {id} = useParams()
    const [loading,setLoading] = useState(true)
    const [producto,SetProducto] = useState({})
    console.log("~ file: detalle.jsx:4 ~ Detalle ~ params:", id)

    useEffect(()=>{
        const request = async ()=>{
            try{
                const response = await getById(id)
                console.log(response.data())
                SetProducto(response.data())
                setLoading(false)
            }catch(e){
                console.log(e)
            }
        }

        request()

        },
        [id]
    )

    const handleClick = ()=>{

    }
    if (loading){
        return(
            <div>
                Cargando...
            </div>
        );
    }

    return(
        <div>
            <h1>{producto.title}</h1>
            <p>${producto.price}</p>
            <p>{producto.thumbnail}</p>
            <Button onClick={handleClick}>Comprar</Button>
        </div>
    );
}

export default Detalle;