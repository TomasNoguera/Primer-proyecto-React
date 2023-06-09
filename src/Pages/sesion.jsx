import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {login} from '../Services/usuarios_service'
import { useNavigate } from "react-router-dom";

function Sesion({setLogin}){
    const { register, handleSubmit, formState: { errors } } = useForm({mode:"onChange"});
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try{
            const user = await login(data.correo, data.contrasena);
            console.log(user)
            setLogin(true)
            navigate("/") // Cuando el usuario se loguea correctamente lo redirige a home
        } catch(e){
            console.log(e);
        }   
    };

    return(
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
                    Iniciar Sesion
                </Button>
            </Form>
        </div>
    );
}

export default Sesion;