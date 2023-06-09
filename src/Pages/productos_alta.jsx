import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { create } from "../Services/productos_service";


function ProductosAlta(){
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange"});
    const onSubmit = async (data) => {
        try{
            const document = await create(data)
            console.log(document)
        } catch(e){
            console.log(e);
        }   
    };

    return(
        <div>
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

export default ProductosAlta;