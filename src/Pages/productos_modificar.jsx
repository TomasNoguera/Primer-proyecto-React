import { set, useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { update, getById, deleteProducto } from "../Services/productos_service";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


function ProductosModificar(){
    const {id} = useParams();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({ mode: "onChange"});

    useEffect(
        ()=>{
            const result = async ()=>{
                try{
                    const response = await getById(id); // Modifica los valores de los productos
                    setValue("title",response.data().title)
                    setValue("price",response.data().price)
                    setValue("thumbnail",response.data().thumbnail)
                }catch(e){
                    console.log(e);
                }
            }
            result()
        },
        [id, setValue]
    )

    const onSubmit = async (data) => {
        try{
            const document = await update(id,data)
            console.log(document)
        } catch(e){
            console.log(e);
        }   
    };

    const handleClickEliminar = async()=>{
        try{
            const response = await deleteProducto(id);   
            console.log(response);
        }catch(e){
            console.log(e);
        }
    
    };

    return(
        <div>
            <h1>Modificar Producto</h1>
            <Button variant="danger" onClick={handleClickEliminar}>Eliminar</Button>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre del producto" {...register("title")}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Precio:</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese el precio" {...register("price")}  />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Imagen:</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese la imagen del producto" {...register("thumbnail")}  />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
            
        </div>
    );
}

export default ProductosModificar;