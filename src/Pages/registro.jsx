import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {create} from '../Services/usuarios_service'
import Alerta from "../Components/alerta_form";
import { useState } from "react";

function Registro(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [alerta,setAlerta] = useState({variant:'',text:''}) // Cambio de estado para el alerta para el formulario en caso de error
    const onSubmit = async (data) => { // El nombre de los parametros puede saer cualquiera, no es necesario que sea data
        try{
            const user = await create(data);
            console.log(user)
            setAlerta({variant:'success',text:'Gracias por registrarte.'})
        } catch(e){
            console.log(e.code);
            if(e.code==="auth/email-already-in-use"){
                setAlerta({variant:'danger',text:'El correo ya se encuenta registrado.'})
            }
        }   
    };

    return(
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" {...register("nombre",{required:true})}  />
                    {errors.nombre && (
                        <Form.Text className="text-muted"> 
                            <p>El campo es obligatorio.</p>
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicApellido">
                    <Form.Label>Apellido:</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su apellido" {...register("apellido",{required:true})}  />
                    {errors.apellido && (
                        <Form.Text className="text-muted"> 
                            <p>El campo es obligatorio.</p>
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCorreo">
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su correo" {...register("correo",{required:true})}  />
                    {errors.correo && (
                        <Form.Text className="text-muted"> 
                            <p>El campo es obligatorio.</p>
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicContrasena">
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese su contraseña" {...register("contrasena",{required:true, minLength:6, maxLength:20})}  />
                    {errors.contrasena && (
                        <Form.Text className="text-muted"> 
                            <p>El campo es obligatorio.</p>
                            <p>La contraseña debe tener como minimo 6 caracteres.</p>
                        </Form.Text>
                    )}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrarse
                </Button>
                <Alerta variant={alerta.variant} text={alerta.text}></Alerta>
            </Form>
            





            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" {...register("nombre",{required:true})}/>
                </div>
                <div>
                    {errors.nombre && (
                        <p>El campo es obligatorio.</p>
                    )}
                </div>
                
                <div>
                    <label>Apellido:</label>
                    <input type="text" {...register("apellido",{required:true})}/>
                </div>
                <div>
                    {errors.apellido && (
                        <p>El campo es obligatorio.</p>
                    )}
                </div>
                
                <div>
                    <label>Correo:</label>
                    <input type="email" {...register("correo",{required:true})}/>
                </div>
                <div>
                    {errors.correo && (
                        <p>El campo es obligatorio.</p>
                    )}
                </div>

                <div>
                    <label>Contraseña:</label>
                    <input type="password" {...register("contrasena",{required:true, minLength:3, maxLength:20})}/>
                </div>
                <div>
                    {errors.contrasena && (
                        <p>El campo es obligatorio.</p>
                    )}
                </div>

                <button type="submit">Registrarse</button>
            </form> */}
        </div>
    );
}

export default Registro;